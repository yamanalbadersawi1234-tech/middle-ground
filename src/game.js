// Middle Ground — game logic and API. Runs on Cloudflare Workers (D1) and on the local Node dev server (node:sqlite).
// `db` is a tiny adapter: { all(sql, ...params) -> rows[], run(sql, ...params) }.
import { PUZZLES } from "./puzzles.js";

export const ROUNDS = 5;
export const SECS = 30;
const GRACE_MS = 4000;                 // network slack on the timer
const EPOCH = Date.UTC(2026, 10, 9);   // sky #1 (UTC date)
const MAP_START = "2026-11-10";        // the day puzzles.js "Day 1" is played; then one day per day, looping at the end

// Tier order in puzzles.js: Satellite | Moon | Comet | Nebula | Supernova
export const TIERS = [
  { key: "satellite", name: "Satellite", pts: 10 },
  { key: "moon",      name: "Moon",      pts: 25 },
  { key: "comet",     name: "Comet",     pts: 50 },
  { key: "nebula",    name: "Nebula",    pts: 75 },
  { key: "supernova", name: "Supernova", pts: 100 },
];
const TIER_BY_KEY = Object.fromEntries(TIERS.map((t) => [t.key, t]));

export const dayKey = (t = Date.now()) => new Date(t).toISOString().slice(0, 10);
export const puzzleNo = (k) => Math.round((Date.parse(k + "T00:00:00Z") - EPOCH) / 864e5) + 1;

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
// Matching key: lowercase, no punctuation, no leading "the/a/an", no spaces, singular.
export function keyOf(s) {
  let t = String(s || "").toLowerCase().replace(/'s\b/g, "s").normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  t = t.replace(/^(the|a|an) /, "");
  return norm(t).replace(/ /g, "");
}
function within1(a, b) {
  if (a === b) return true;
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < la && j < lb) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (la > lb) i++; else if (lb > la) j++; else { i++; j++; }
  }
  return edits + (la - i) + (lb - j) <= 1;
}

// ---------- daily star maps ----------
const mapCache = new Map();
function dayIndex(day) {
  const n = Math.round((Date.parse(day + "T00:00:00Z") - Date.parse(MAP_START + "T00:00:00Z")) / 864e5);
  const len = PUZZLES.length;
  return ((n % len) + len) % len;
}
export function skyFor(day) {
  const idx = dayIndex(day);
  if (mapCache.has(idx)) return mapCache.get(idx);
  const rounds = PUZZLES[idx].slice(0, ROUNDS).map(([a, b, answers]) => {
    const ka = keyOf(a), kb = keyOf(b);
    const list = [], byKey = new Map();
    String(answers).split("|").slice(0, TIERS.length).forEach((group, ti) => {
      for (const label of group.split(",").map((x) => x.trim()).filter(Boolean)) {
        const k = keyOf(label);
        if (!k || byKey.has(k) || k.includes(ka) || k.includes(kb) || ka.includes(k) || kb.includes(k)) continue;
        const e = { key: k, label, tier: TIERS[ti].key };
        list.push(e); byKey.set(k, e);
      }
    });
    return { pair: [a, b], list, byKey };
  });
  const sky = { index: idx + 1, rounds };
  mapCache.set(idx, sky);
  return sky;
}
function matchAnswer(round, raw) {
  const k = keyOf(raw);
  if (!k) return null;
  if (round.byKey.has(k)) return round.byKey.get(k);
  if (k.length >= 5) {                                   // forgive one typo on longer words
    for (const e of round.list) if (e.key.length >= 5 && within1(e.key, k)) return e;
  }
  return null;
}

// ---------- bad-word filter ----------
// Answers and names containing these are refused, and any already saved are hidden and score 0.
// Add your own words in lowercase. ROOTS match anywhere inside a word; WORDS only match a whole word.
const BLOCK_ROOTS = ["fuck","shit","cunt","nigg","fagg","bitch","whore","slut","porn","pussy","nazi","hitler","penis","vagin","asshole","motherf","dildo","jizz","wank","sharmout","sharmoot","kosomak","kusomak","kosom","kussom","manyak","metnak","khawal"];
const BLOCK_WORDS = new Set(["dick","cock","cum","sex","sexy","rape","rapist","tit","tits","titty","boob","boobs","ass","anal","kys","retard","fag","nig","twat","horny","nude","bastard","piss","kos","kus","ayre","zeb","zebi","khara"]);
const LEET = { "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "8": "b" };
const deleet = (s) => s.replace(/[0134578]/g, (c) => LEET[c]);
const collapse = (s) => s.replace(/(.)\1+/g, "$1");
export function isBlocked(s) {
  const raw = String(s || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[@$]/g, (c) => (c === "@" ? "a" : "s"));
  const words = raw.replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).map(deleet);
  const joined = words.join("");
  const variants = [joined, collapse(joined)];
  if (BLOCK_ROOTS.some((r) => variants.some((v) => v.includes(r)))) return true;
  return words.some((w) => [w, collapse(w), norm(w)].some((v) => BLOCK_WORDS.has(v)));
}

// Why an answer is refused before it's stored ("" = fine).
function answerProblem(raw, pair) {
  const k = norm(raw);
  if (!k) return "empty";
  if (isBlocked(raw)) return "blocked";
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
async function loadDay(db, day) {
  const sky = skyFor(day);
  const rows = await db.all(`SELECT player, round, raw, norm, started, submitted FROM answers WHERE day = ? ORDER BY submitted`, day);
  const R = sky.rounds.map(() => ({ total: 0, counts: new Map() }));
  for (const r of rows) {
    if (r.submitted == null || r.round < 0 || r.round >= ROUNDS) continue;
    R[r.round].total++;
    const e = r.raw && !isBlocked(r.raw) ? matchAnswer(sky.rounds[r.round], r.raw) : null;
    r.match = e;
    if (e) R[r.round].counts.set(e.key, (R[r.round].counts.get(e.key) || 0) + 1);
  }
  return { rows, R, sky };
}

function scoreRow(row, R, sky) {
  if (!row || row.submitted == null) return null;
  const total = R[row.round].total;
  const base = { round: row.round, raw: row.raw, total };
  if (!row.raw) return { ...base, pts: 0, tier: null, status: "missed", n: 0 };
  if (isBlocked(row.raw)) return { ...base, raw: "", pts: 0, tier: null, status: "off_map", n: 0 };
  const e = row.match !== undefined ? row.match : matchAnswer(sky.rounds[row.round], row.raw);
  if (!e) return { ...base, pts: 0, tier: null, status: "off_map", n: 0 };
  return { ...base, pts: TIER_BY_KEY[e.tier].pts, tier: e.tier, status: "found", n: R[row.round].counts.get(e.key) || 0, matched: e.label, key: e.key };
}

// The full answer list for a round, with how many players found each one.
function starMap(R, sky, i, mineKey) {
  const total = Math.max(R[i].total, 1);
  return sky.rounds[i].list.map((e) => ({ label: e.label, tier: e.tier, pct: Math.round((R[i].counts.get(e.key) || 0) / total * 100), mine: e.key === mineKey }));
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
  const pairs = skyFor(day).rounds.map((r) => r.pair);
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
    const { R, rows, sky } = await loadDay(db, day);
    const done = mine.filter(r => r.submitted != null).length;
    const open = mine.find(r => r.submitted == null);
    const players = new Set(rows.filter(r => r.submitted != null).map(r => r.player)).size;
    return json({
      day, no: puzzleNo(day), rounds: ROUNDS, secs: SECS, now,
      nextAt: Date.parse(day + "T00:00:00Z") + 864e5,
      name: pl?.name && !isBlocked(pl.name) ? pl.name : "", defaultName: defaultName(p),
      players, completed: done,
      results: mine.filter(r => r.submitted != null).map(r => ({ ...scoreRow(r, R, sky), pair: pairs[r.round] })),
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
    const { R, sky } = await loadDay(db, day);
    const [mineRow] = await db.all(`SELECT round, raw, norm, submitted FROM answers WHERE day = ? AND player = ? AND round = ?`, day, p, round);
    const result = { ...scoreRow(mineRow, R, sky), pair: pairs[round] };
    return json({ result, map: starMap(R, sky, round, result.key), late });
  }

  if (path === "/api/results" && request.method === "GET") {
    await expireOld();
    const { R, rows, sky } = await loadDay(db, day);
    const mine = rows.filter(r => r.player === p && r.submitted != null).sort((a, b) => a.round - b.round);
    if (mine.length < ROUNDS) return bad("not_finished", 409);
    const byPlayer = new Map();
    for (const r of rows) {
      if (r.submitted == null) continue;
      const e = byPlayer.get(r.player) || { score: 0, n: 0 };
      e.score += scoreRow(r, R, sky).pts; e.n++; byPlayer.set(r.player, e);
    }
    const finished = [...byPlayer.entries()].filter(([, e]) => e.n >= ROUNDS).sort((a, b) => b[1].score - a[1].score);
    const myScore = byPlayer.get(p).score;
    const rank = 1 + finished.filter(([, e]) => e.score > myScore).length;
    const topIds = finished.slice(0, 10).map(([id]) => id);
    const nameRows = topIds.length ? await db.all(`SELECT id, name FROM players WHERE id IN (${topIds.map(() => "?").join(",")})`, ...topIds) : [];
    const names = new Map(nameRows.map(r => [r.id, r.name]));
    return json({
      day, no: puzzleNo(day), score: myScore, rank, finished: finished.length,
      rounds: mine.map(r => { const sr = scoreRow(r, R, sky); return { ...sr, pair: pairs[r.round], map: starMap(R, sky, r.round, sr.key) }; }),
      leaderboard: finished.slice(0, 10).map(([id, e], i) => ({ rank: 1 + finished.filter(([, x]) => x.score > e.score).length, name: (names.get(id) && !isBlocked(names.get(id))) ? names.get(id) : defaultName(id), score: e.score, me: id === p })),
      streak: await streakOf(db, p, day),
    });
  }

  if (path === "/api/name" && request.method === "POST") {
    const name = cleanName(body.name);
    if (name.length < 2) return bad("name_too_short");
    if (isBlocked(name)) return bad("name_blocked");
    await ensurePlayer(db, p, now);
    await db.run(`UPDATE players SET name = ? WHERE id = ?`, name, p);
    return json({ name });
  }

  return bad("not_found", 404);
}
