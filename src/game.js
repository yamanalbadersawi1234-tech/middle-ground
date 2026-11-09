// Middle Ground — game logic and API. Runs on Cloudflare Workers (D1) and on the local Node dev server (node:sqlite).
// `db` is a tiny adapter: { all(sql, ...params) -> rows[], run(sql, ...params) }.

export const ROUNDS = 5;
export const SECS = 30;
const GRACE_MS = 4000;                 // network slack on the timer
const EPOCH = Date.UTC(2026, 10, 9);   // puzzle #1 (UTC date)

const WORDS = ["Ocean","Desert","Moon","Coffee","Piano","Fire","Snow","Tiger","Clock","Bridge","Mirror","Garden","Storm","Honey","Castle","Rocket","Bread","Rain","Gold","Shadow","Train","Library","Candle","River","Mountain","Apple","Wolf","Diamond","Ice","Book","Island","Forest","Horse","Bee","Ship","Crown","Glass","Paper","Salt","Sugar","Sun","Star","Night","Window","Key","Door","Wheel","Egg","Feather","Cloud","Thunder","Lion","Snake","Spider","Owl","Dragon","Ghost","Knight","Pirate","Chef","Doctor","Teacher","King","Baby","Wedding","Birthday","Summer","Winter","Autumn","Market","Hospital","School","Airport","Museum","Circus","Camera","Phone","Robot","Guitar","Drum","Violin","Football","Chess","Dice","Map","Compass","Anchor","Lighthouse","Volcano","Cave","Jungle","Beach","Pyramid","Tent","Oasis","Camel","Elephant","Penguin","Shark","Whale","Octopus","Butterfly","Rose","Cactus","Tree","Mushroom","Pepper","Lemon","Chocolate","Cheese","Milk","Tea","Rice","Olive","Bottle","Balloon","Kite","Umbrella","Hat","Shoe","Ring","Mask","Painting","Statue","Tower","Wall","Road","Bicycle","Car","Plane","Satellite","Planet","Comet","Sand","Stone","Iron","Silver","Pearl","Smoke","Thread","Needle","Hammer","Rope","Net","Bell","Whistle","Popcorn","Cinema","Magnet","Battery","Lantern","Wizard","Treasure","Pillow","Blanket","Soap","Bubble","Ladder","Fence","Clown","Crystal","Spaceship","Telescope","Volleyball","Marathon","Puzzle","Orchestra","Skeleton","Vampire","Mermaid","Dinosaur","Tornado","Rainbow","Glacier","Canyon","Harbor","Subway","Elevator","Passport","Suitcase","Keyboard","Microphone","Headphones","Envelope","Stamp","Coin","Wallet","Banana","Pineapple","Coconut","Carrot","Onion","Pizza","Sandwich","Soup","Cake","Cookie","Ice cream"];

export const TIERS = [
  { key: "supernova", name: "Supernova", pts: 100 },
  { key: "nebula",    name: "Nebula",    pts: 75 },
  { key: "comet",     name: "Comet",     pts: 50 },
  { key: "moon",      name: "Moon",      pts: 25 },
  { key: "satellite", name: "Satellite", pts: 10 },
];

export const dayKey = (t = Date.now()) => new Date(t).toISOString().slice(0, 10);
export const puzzleNo = (k) => Math.round((Date.parse(k + "T00:00:00Z") - EPOCH) / 864e5) + 1;

function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

export function pairsFor(day, salt = "") {
  const r = rng(hash("middle-ground:" + salt + ":" + day));
  const pool = [...new Set(WORDS)];
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  return Array.from({ length: ROUNDS }, (_, i) => [pool[2 * i], pool[2 * i + 1]]);
}

export function norm(s) {
  s = String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
  if (s.length > 3) {
    if (s.endsWith("ies")) s = s.slice(0, -3) + "y";
    else if (/(s|x|ch|sh)es$/.test(s)) s = s.slice(0, -2);
    else if (s.endsWith("s") && !s.endsWith("ss") && !s.endsWith("us")) s = s.slice(0, -1);
  }
  return s;
}

export function tierFor(n, total) {
  if (n <= 1) return TIERS[0];
  const s = n / Math.max(total, 1);
  if (s <= 0.05) return TIERS[1];
  if (s <= 0.15) return TIERS[2];
  if (s <= 0.35) return TIERS[3];
  return TIERS[4];
}

// Why an answer is refused before it's stored ("" = fine).
function answerProblem(raw, pair) {
  const k = norm(raw);
  if (!k) return "empty";
  if (k.length < 2 || k.length > 30) return "length";
  if (/[a-z]/.test(k) && !/[aeiouy]/.test(k)) return "not_a_word";
  if (/(.)\1\1/.test(k)) return "not_a_word";
  const a = norm(pair[0]), b = norm(pair[1]);
  const parts = k.split(" ");
  if (k === a || k === b || parts.includes(a) || parts.includes(b)) return "same_word";
  return "";
}

// ---------- schema ----------
const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY, name TEXT NOT NULL DEFAULT '', created INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS answers (day TEXT NOT NULL, player TEXT NOT NULL, round INTEGER NOT NULL, raw TEXT NOT NULL DEFAULT '', norm TEXT NOT NULL DEFAULT '', started INTEGER NOT NULL, submitted INTEGER, PRIMARY KEY (day, player, round))`,
  `CREATE INDEX IF NOT EXISTS answers_day ON answers (day, round, norm)`,
  `CREATE TABLE IF NOT EXISTS votes (day TEXT NOT NULL, round INTEGER NOT NULL, norm TEXT NOT NULL, voter TEXT NOT NULL, val INTEGER NOT NULL, PRIMARY KEY (day, round, norm, voter))`,
];
let schemaReady = null;
function ensureSchema(db) {
  if (!schemaReady) schemaReady = (async () => { for (const s of SCHEMA) await db.run(s); })().catch(e => { schemaReady = null; throw e; });
  return schemaReady;
}

// ---------- day statistics ----------
function statusOf(c) {
  const net = c.up - c.down;
  if (c.down >= 3 && net <= -2) return "rejected";
  if (c.n >= 2) return "confirmed";
  if (c.down >= 2 && net <= -2) return "rejected";
  if (net >= 2) return "confirmed";
  return "pending";
}

async function loadDay(db, day) {
  const rows = await db.all(`SELECT player, round, raw, norm, started, submitted FROM answers WHERE day = ? ORDER BY submitted`, day);
  const votes = await db.all(`SELECT round, norm, SUM(CASE WHEN val > 0 THEN 1 ELSE 0 END) AS up, SUM(CASE WHEN val < 0 THEN 1 ELSE 0 END) AS down FROM votes WHERE day = ? GROUP BY round, norm`, day);
  const R = Array.from({ length: ROUNDS }, () => ({ total: 0, counts: new Map() }));
  for (const r of rows) {
    if (r.submitted == null || !r.norm || r.round < 0 || r.round >= ROUNDS) continue;
    const m = R[r.round].counts;
    const c = m.get(r.norm) || { n: 0, up: 0, down: 0, label: r.raw };
    c.n++; m.set(r.norm, c);
  }
  for (const v of votes) {
    const c = R[v.round]?.counts.get(v.norm);
    if (c) { c.up = Number(v.up) || 0; c.down = Number(v.down) || 0; }
  }
  for (const r of R) for (const c of r.counts.values()) { c.status = statusOf(c); if (c.status !== "rejected") r.total += c.n; }
  return { rows, R };
}

function scoreRow(row, R) {
  if (!row || row.submitted == null) return null;
  const base = { round: row.round, raw: row.raw };
  if (!row.norm) return { ...base, pts: 0, tier: null, status: "missed", n: 0, total: R[row.round].total };
  const c = R[row.round].counts.get(row.norm);
  if (!c || c.status === "rejected") return { ...base, pts: 0, tier: null, status: "rejected", n: c ? c.n : 0, total: R[row.round].total };
  const t = tierFor(c.n, R[row.round].total);
  return { ...base, pts: t.pts, tier: t.key, status: c.status, n: c.n, total: R[row.round].total };
}

function topFor(R, round, limit = 5) {
  const r = R[round];
  return [...r.counts.entries()]
    .filter(([, c]) => c.status !== "rejected")
    .sort((a, b) => b[1].n - a[1].n || a[1].label.localeCompare(b[1].label))
    .slice(0, limit)
    .map(([k, c]) => ({ key: k, label: c.label, n: c.n, pct: Math.round(c.n / Math.max(r.total, 1) * 100), status: c.status }));
}

// ---------- http helpers ----------
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
const bad = (error, status = 400) => json({ error }, status);
const validId = (p) => typeof p === "string" && /^[A-Za-z0-9-]{8,64}$/.test(p);
function cleanName(s) { return String(s || "").replace(/[^\p{L}\p{N} _.\-]/gu, "").replace(/\s+/g, " ").trim().slice(0, 18); }
const defaultName = (id) => "Stargazer-" + id.replace(/-/g, "").slice(0, 4).toUpperCase();

async function ensurePlayer(db, p, now) {
  await db.run(`INSERT OR IGNORE INTO players (id, name, created) VALUES (?, '', ?)`, p, now);
}

async function myRows(db, day, p) {
  const rows = await db.all(`SELECT round, raw, norm, started, submitted FROM answers WHERE day = ? AND player = ? ORDER BY round`, day, p);
  return rows;
}

async function streakOf(db, p, day) {
  const days = await db.all(`SELECT day FROM answers WHERE player = ? AND submitted IS NOT NULL GROUP BY day HAVING COUNT(*) >= ?  ORDER BY day DESC LIMIT 400`, p, ROUNDS);
  const set = new Set(days.map(d => d.day));
  let n = 0, t = Date.parse(day + "T00:00:00Z");
  if (!set.has(day)) t -= 864e5;          // today not finished yet: streak runs through yesterday
  while (set.has(dayKey(t))) { n++; t -= 864e5; }
  return n;
}

// ---------- API ----------
export async function handleApi(request, db, env = {}) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "");
  const now = Date.now();
  const day = dayKey(now);
  const pairs = pairsFor(day, env.PAIR_SALT || "");
  await ensureSchema(db);

  let body = {};
  if (request.method === "POST") {
    try { body = await request.json(); } catch { return bad("bad_json"); }
    if (!body || typeof body !== "object") return bad("bad_json");
  }
  const p = request.method === "POST" ? body.p : url.searchParams.get("p");
  if (!validId(p)) return bad("bad_player");

  // Close out any round whose timer ran out.
  const expireOld = async () => {
    await db.run(`UPDATE answers SET submitted = started + ?, raw = '', norm = '' WHERE day = ? AND player = ? AND submitted IS NULL AND started < ?`,
      SECS * 1000, day, p, now - SECS * 1000 - GRACE_MS);
  };

  if (path === "/api/state" && request.method === "GET") {
    await expireOld();
    const [pl] = await db.all(`SELECT name FROM players WHERE id = ?`, p);
    const mine = await myRows(db, day, p);
    const { R, rows } = await loadDay(db, day);
    const done = mine.filter(r => r.submitted != null).length;
    const open = mine.find(r => r.submitted == null);
    const players = new Set(rows.filter(r => r.submitted != null).map(r => r.player)).size;
    return json({
      day, no: puzzleNo(day), rounds: ROUNDS, secs: SECS, now,
      nextAt: Date.parse(day + "T00:00:00Z") + 864e5,
      name: pl?.name || "", defaultName: defaultName(p),
      players, completed: done,
      results: mine.filter(r => r.submitted != null).map(r => ({ ...scoreRow(r, R), pair: pairs[r.round] })),
      current: open ? { round: open.round, pair: pairs[open.round], deadline: open.started + SECS * 1000, now } : null,
      streak: await streakOf(db, p, day),
    });
  }

  if (path === "/api/start" && request.method === "POST") {
    await ensurePlayer(db, p, now);
    await expireOld();
    const mine = await myRows(db, day, p);
    const done = mine.filter(r => r.submitted != null).length;
    if (done >= ROUNDS) return bad("finished", 409);
    const open = mine.find(r => r.submitted == null);
    const round = open ? open.round : done;
    if (!open) await db.run(`INSERT OR IGNORE INTO answers (day, player, round, started) VALUES (?, ?, ?, ?)`, day, p, round, now);
    const started = open ? open.started : now;
    return json({ round, pair: pairs[round], deadline: started + SECS * 1000, now });
  }

  if (path === "/api/answer" && request.method === "POST") {
    const round = Number(body.round);
    if (!Number.isInteger(round) || round < 0 || round >= ROUNDS) return bad("bad_round");
    const [row] = await db.all(`SELECT started, submitted FROM answers WHERE day = ? AND player = ? AND round = ?`, day, p, round);
    if (!row) return bad("not_started", 409);
    if (row.submitted != null) return bad("already_answered", 409);
    const late = now > row.started + SECS * 1000 + GRACE_MS;
    let raw = late ? "" : String(body.answer || "").trim().replace(/\s+/g, " ").slice(0, 30);
    if (raw) {
      const problem = answerProblem(raw, pairs[round]);
      if (problem && !body.timeUp) return bad(problem, 422);
      if (problem) raw = "";
    }
    const k = raw ? norm(raw) : "";
    await db.run(`UPDATE answers SET raw = ?, norm = ?, submitted = ? WHERE day = ? AND player = ? AND round = ? AND submitted IS NULL`, raw, k, now, day, p, round);
    const { R } = await loadDay(db, day);
    const [mineRow] = await db.all(`SELECT round, raw, norm, submitted FROM answers WHERE day = ? AND player = ? AND round = ?`, day, p, round);
    return json({ result: { ...scoreRow(mineRow, R), pair: pairs[round] }, top: topFor(R, round), late });
  }

  if (path === "/api/results" && request.method === "GET") {
    await expireOld();
    const { R, rows } = await loadDay(db, day);
    const mine = rows.filter(r => r.player === p && r.submitted != null).sort((a, b) => a.round - b.round);
    if (mine.length < ROUNDS) return bad("not_finished", 409);
    const byPlayer = new Map();
    for (const r of rows) {
      if (r.submitted == null) continue;
      const e = byPlayer.get(r.player) || { score: 0, n: 0 };
      e.score += scoreRow(r, R).pts; e.n++; byPlayer.set(r.player, e);
    }
    const finished = [...byPlayer.entries()].filter(([, e]) => e.n >= ROUNDS).sort((a, b) => b[1].score - a[1].score);
    const myScore = byPlayer.get(p).score;
    const rank = 1 + finished.filter(([, e]) => e.score > myScore).length;
    const topIds = finished.slice(0, 10).map(([id]) => id);
    const nameRows = topIds.length ? await db.all(`SELECT id, name FROM players WHERE id IN (${topIds.map(() => "?").join(",")})`, ...topIds) : [];
    const names = new Map(nameRows.map(r => [r.id, r.name]));
    return json({
      day, no: puzzleNo(day), score: myScore, rank, finished: finished.length,
      rounds: mine.map(r => ({ ...scoreRow(r, R), pair: pairs[r.round], top: topFor(R, r.round) })),
      leaderboard: finished.slice(0, 10).map(([id, e], i) => ({ rank: 1 + finished.filter(([, x]) => x.score > e.score).length, name: names.get(id) || defaultName(id), score: e.score, me: id === p })),
      streak: await streakOf(db, p, day),
    });
  }

  if (path === "/api/judge" && request.method === "GET") {
    const { R, rows } = await loadDay(db, day);
    const answered = new Set(rows.filter(r => r.player === p && r.submitted != null).map(r => r.round));
    const own = new Set(rows.filter(r => r.player === p).map(r => r.round + ":" + r.norm));
    const voted = new Set((await db.all(`SELECT round, norm FROM votes WHERE day = ? AND voter = ?`, day, p)).map(v => v.round + ":" + v.norm));
    const items = [];
    for (const round of answered) {
      for (const [k, c] of R[round].counts) {
        if (c.status !== "pending" || own.has(round + ":" + k) || voted.has(round + ":" + k)) continue;
        items.push({ round, key: k, label: c.label, pair: pairs[round] });
      }
    }
    for (let i = items.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; }
    return json({ items: items.slice(0, 8) });
  }

  if (path === "/api/vote" && request.method === "POST") {
    const round = Number(body.round), k = norm(body.key), val = Number(body.val) > 0 ? 1 : -1;
    if (!Number.isInteger(round) || round < 0 || round >= ROUNDS || !k) return bad("bad_vote");
    const [mine] = await db.all(`SELECT norm FROM answers WHERE day = ? AND player = ? AND round = ? AND submitted IS NOT NULL`, day, p, round);
    if (!mine) return bad("answer_first", 409);
    if (mine.norm === k) return bad("own_answer", 409);
    const [exists] = await db.all(`SELECT 1 AS x FROM answers WHERE day = ? AND round = ? AND norm = ? LIMIT 1`, day, round, k);
    if (!exists) return bad("unknown_answer", 404);
    await db.run(`INSERT OR REPLACE INTO votes (day, round, norm, voter, val) VALUES (?, ?, ?, ?, ?)`, day, round, k, p, val);
    return json({ ok: true });
  }

  if (path === "/api/name" && request.method === "POST") {
    const name = cleanName(body.name);
    if (name.length < 2) return bad("name_too_short");
    await ensurePlayer(db, p, now);
    await db.run(`UPDATE players SET name = ? WHERE id = ?`, name, p);
    return json({ name });
  }

  return bad("not_found", 404);
}
