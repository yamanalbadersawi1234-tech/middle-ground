import { Sky, Sound } from "./fx.js";

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const ROUNDS = 5;

const TIERS = {
  supernova: { name: "Supernova", pts: 100, c: "var(--t-supernova)", hex: ["#FFF6D6", "#FFD36B", "#FF9A5A", "#FFFFFF"], emoji: "🌟", sub: "The hardest links" },
  nebula:    { name: "Nebula",    pts: 75,  c: "var(--t-nebula)",    hex: ["#E9D5FF", "#C690FF", "#8F5BFF"],            emoji: "🟣", sub: "Clever links" },
  comet:     { name: "Comet",     pts: 50,  c: "var(--t-comet)",     hex: ["#D6FAFF", "#5EE3FF", "#2FA8FF"],            emoji: "🔵", sub: "Sharp links" },
  moon:      { name: "Moon",      pts: 25,  c: "var(--t-moon)",      hex: ["#FFFFFF", "#C3CEEA"],                       emoji: "⚪", sub: "Good links" },
  satellite: { name: "Satellite", pts: 10,  c: "var(--t-satellite)", hex: ["#9AA7CC", "#7484AE"],                       emoji: "▫️", sub: "The obvious links" },
};
const HOLE = { name: "Black hole", pts: 0, c: "var(--t-hole)", hex: ["#FFB3BE", "#FF6B7F"], emoji: "⚫" };
const tierOf = (r) => (r && r.tier ? TIERS[r.tier] : HOLE);

const ERRORS = {
  same_word: "Use a different word than the two in the sky.",
  not_a_word: "That doesn't look like a real word.",
  length: "Use 2 to 30 letters.",
  empty: "Type a word first.",
  finished: "You've already played today's sky.",
  blocked: "Keep it friendly. Try a different word.",
  network: "Can't reach the server. Check your connection and try again.",
};

// ---------- player id ----------
let PID = null;
try { PID = localStorage.getItem("mg.player"); } catch {}
if (!PID || !/^[A-Za-z0-9-]{8,64}$/.test(PID)) {
  PID = (crypto.randomUUID ? crypto.randomUUID() : Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join(""));
  try { localStorage.setItem("mg.player", PID); } catch {}
}

async function api(path, body) {
  let r;
  try {
    r = body
      ? await fetch(path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ p: PID, ...body }) })
      : await fetch(`${path}${path.includes("?") ? "&" : "?"}p=${encodeURIComponent(PID)}`);
  } catch { throw Object.assign(new Error("network"), { code: "network" }); }
  const j = await r.json().catch(() => ({ error: "server_error" }));
  if (!r.ok) throw Object.assign(new Error(j.error || "error"), { code: j.error || "server_error", status: r.status });
  return j;
}

let toastT = 0;
function toast(msg) { const t = $("toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 3600); }


// ---------- pixel art ----------
const PAL = { r: "#FF5D73", w: "#E8EEFF", c: "#5EE3FF", b: "#1A2B5A", g: "#8E9AC4", o: "#FF9A3C", y: "#FFE07A", p: "#C690FF", d: "#7A4FD8", m: "#FF8FB1" };
function pixelSVG(rows, flame) {
  const all = flame ? rows.concat(flame) : rows;
  const W = Math.max(...all.map((r) => r.length)), H = all.length;
  const rects = (rs, y0) => rs.map((row, y) => [...row].map((ch, x) => PAL[ch] ? `<rect x="${x}" y="${y + y0}" width="1.02" height="1.02" fill="${PAL[ch]}"/>` : "").join("")).join("");
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${rects(rows, 0)}${flame ? `<g class="flame" style="transform-box:fill-box;transform-origin:top">${rects(flame, rows.length)}</g>` : ""}</svg>`;
}
const ROCKET = ["....rr....","...rrrr...","...wwww...","..wwwwww..","..wwbbww..","..wbccbw..","..wbccbw..","..wwbbww..","..wwwwww..","..wwwwww..","..wggggw..",".rwwwwwwr.","rrwwwwwwrr","rr.gggg.rr"];
const FLAME = ["...yooy...","...oyyo...","....oo....","....o....."];
const ASTRO = ["...wwwwww...","..wwwwwwww..",".wwccccccww.",".wcbbbbbbcw.",".wcbbcbbbcw.",".wwccccccww.","..wwwwwwww..",".gwwwmmwwwg.","gwwwwwwwwwwg","g.wwwwwwww.g","...ww..ww...","...gg..gg..."];
const SAT = ["cccc.......cccc","cbcb...w...cbcb","cccc.gwwwg.cccc","cbcbggwwwggcbcb","cccc.gwwwg.cccc","cbcb...g...cbcb","cccc.......cccc"];
const PLANET = ["......pppp......","....pppppppp....","...ppddppppdp...","yyyyyyyyyyyyyyyy","...pppppddppp...","....pppppppp....","......pppp......"];
$("pad-rocket").innerHTML = pixelSVG(ROCKET, FLAME);
$("gauge-rocket").innerHTML = pixelSVG(ROCKET, FLAME);
$("sp-astro").innerHTML = pixelSVG(ASTRO);
$("sp-sat").innerHTML = pixelSVG(SAT);
$("sp-planet").innerHTML = pixelSVG(PLANET);
(() => {
  let h = "";
  for (let km = 0; km <= 5000; km += 250) {
    const at = (km / 5000) * 100;
    h += `<span class="${km % 1000 === 0 ? "major" : ""}" style="bottom:${at}%"></span>`;
    if (km % 1000 === 0) h += `<b style="bottom:${at}%;transform:translateY(50%)">${km === 0 ? "0" : km / 1000 + "k"} km</b>`;
  }
  $("gauge-scale").innerHTML = h;
})();

// ---------- HUD ----------
let runScore = 0;
function setHud(roundIdx, bump) {
  $("hud-pips").innerHTML = Array.from({ length: ROUNDS }, (_, i) => `<span class="${i < roundIdx ? "done" : i === roundIdx ? "now" : ""}"></span>`).join("");
  $("hud-pair").textContent = roundIdx < ROUNDS ? `Pair ${roundIdx + 1} of ${ROUNDS}` : "Sky complete";
  const sc = $("hud-score"), alt = $("hud-alt");
  sc.textContent = runScore; alt.textContent = `${(runScore * 10).toLocaleString()} km`;
  if (bump) for (const el of [sc, alt]) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
  const prog = Math.min(1, runScore / 500);
  $("gauge").style.setProperty("--p", prog);
  document.documentElement.style.setProperty("--atmo", String(Math.max(0.15, 1 - prog * 1.4)));
}

// ---------- screens ----------
let screen = "home";
function show(name) {
  screen = name;
  for (const s of ["home", "round", "reveal", "results"]) $("s-" + s).hidden = s !== name;
  const inGame = name === "round" || name === "reveal";
  $("hud").hidden = !inGame; $("gauge").hidden = !inGame;
  if (name === "home" || name === "results") document.documentElement.style.setProperty("--atmo", name === "home" ? "1" : "0.2");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const pipsHTML = (cur) => Array.from({ length: ROUNDS }, (_, i) => `<span class="${i < cur ? "done" : i === cur ? "now" : ""}"></span>`).join("");

// ---------- state ----------
let S = null;          // last /api/state
let offset = 0;        // server time - local time

function countUp(el, to, ms = 900, onStep) {
  const from = Number(el.textContent) || 0, t0 = performance.now();
  return new Promise((res) => {
    const step = (t) => {
      const k = Math.min(1, (t - t0) / ms), v = Math.round(from + (to - from) * (1 - (1 - k) ** 3));
      if (String(v) !== el.textContent) { el.textContent = v; onStep && onStep(v); }
      if (k < 1) requestAnimationFrame(step); else res();
    };
    requestAnimationFrame(step);
  });
}

function renderLegend() {
  $("legend").innerHTML = Object.values(TIERS).map((t) =>
    `<div class="lg"><span class="dot" style="--c:${t.c}"></span><span><span class="lg-name" style="color:${t.c}">${t.name}</span><br><span class="lg-sub">${t.sub}</span></span><span class="lg-pts">${t.pts}</span></div>`).join("") +
    `<div class="lg"><span class="dot" style="--c:${HOLE.c}"></span><span><span class="lg-name" style="color:${HOLE.c}">Black hole</span><br><span class="lg-sub">Not on the map</span></span><span class="lg-pts">0</span></div>`;
}

async function loadHome() {
  renderLegend();
  try {
    S = await api("/api/state");
  } catch (e) {
    $("play-label").textContent = "Try again";
    $("play").disabled = false;
    $("play").onclick = () => location.reload();
    toast(ERRORS[e.code] || "Something went wrong loading today's sky.");
    return;
  }
  offset = (S.now || Date.now()) - Date.now();
  $("meta").textContent = `Sky #${S.no}`;
  $("sky-no").textContent = `SKY #${S.no}`;
  runScore = (S.results || []).reduce((a, r) => a + (r.pts || 0), 0);
  $("pad-rocket").classList.remove("launching");
  $("name-input").value = S.name || S.defaultName;
  const stats = [`<span class="stat"><b>${S.players}</b> ${S.players === 1 ? "player" : "players"} today</span>`];
  if (S.streak > 0) stats.push(`<span class="stat">🔥 <b>${S.streak}</b>-day streak</span>`);
  $("home-stats").innerHTML = stats.join("");
  const btn = $("play");
  btn.disabled = false; btn.classList.add("pulse");
  if (S.completed >= ROUNDS) { $("play-label").textContent = "▲ See today's results ▲"; btn.onclick = () => openResults(); }
  else {
    $("play-label").textContent = S.completed || S.current ? "▲ Continue launch ▲" : "▲ Begin launch ▲";
    btn.onclick = () => {
      btn.disabled = true; Sound.unlock(); Sound.start();
      $("pad-rocket").classList.add("launching");
      const [x, y] = Sky.centerOf($("pad-rocket"));
      Sky.burst(x, y + 30, ["#FFE07A", "#FF9A3C", "#FFFFFF"], 60, 0.35, { g: 0.0008 });
      setTimeout(() => Sky.warp(1), 350);
      setTimeout(() => { btn.disabled = false; playNext(); }, 1100);
    };
  }
}

// ---------- round ----------
let R = null, raf = 0, busy = false, lastSec = -1;
const A_PT = [16, 18], B_PT = [84, 18], C_PT = [50, 46.8];

async function playNext() {
  let d;
  try { d = await api("/api/start", {}); }
  catch (e) { if (e.code === "finished") return openResults(); toast(ERRORS[e.code] || "Couldn't start the round."); return; }
  offset = d.now - Date.now();
  R = { round: d.round, pair: d.pair, deadline: d.deadline - offset };
  busy = false; lastSec = -1;
  $("pips").innerHTML = pipsHTML(d.round);
  setHud(d.round);
  $("round-label").textContent = `Pair ${d.round + 1} of ${ROUNDS}`;
  $("w-a").textContent = d.pair[0]; $("w-b").textContent = d.pair[1];
  for (const id of ["star-a", "star-b"]) { const el = $(id); el.classList.remove("in"); void el.offsetWidth; el.classList.add("in"); }
  $("core").classList.remove("lit", "low");
  document.querySelector(".links").classList.remove("locked");
  setLinks(0);
  $("ans").value = ""; $("ans").disabled = false; $("lock").disabled = false; $("ans-err").textContent = "";
  show("round");
  setTimeout(() => { $("ans").focus(); }, 350);
  cancelAnimationFrame(raf); tick();
}
function setLinks(p) {
  const la = $("link-a"), lb = $("link-b");
  la.setAttribute("x2", A_PT[0] + (C_PT[0] - A_PT[0]) * p); la.setAttribute("y2", A_PT[1] + (C_PT[1] - A_PT[1]) * p);
  lb.setAttribute("x2", B_PT[0] + (C_PT[0] - B_PT[0]) * p); lb.setAttribute("y2", B_PT[1] + (C_PT[1] - B_PT[1]) * p);
}
function tick() {
  const total = (S?.secs || 30) * 1000;
  const left = Math.max(0, R.deadline - Date.now());
  $("ring").style.strokeDashoffset = String(289.03 * (1 - left / total));
  const sec = Math.ceil(left / 1000);
  $("timer-num").textContent = sec;
  $("core").classList.toggle("low", left < 8000);
  if (sec !== lastSec) { if (sec <= 5 && sec > 0) Sound.tick(); lastSec = sec; }
  if (left <= 0) { submit(true); return; }
  raf = requestAnimationFrame(tick);
}
$("ans").addEventListener("input", () => {
  $("ans-err").textContent = "";
  const n = $("ans").value.trim().length;
  setLinks(Math.min(0.9, n / 7));
  if (n) { Sound.key(); const [x, y] = Sky.centerOf($("core")); Sky.sparkle(x + (Math.random() - 0.5) * 30, y - 20); }
});
$("ans-form").addEventListener("submit", (e) => { e.preventDefault(); submit(false); });

async function submit(timeUp) {
  if (busy) return;
  const answer = $("ans").value.trim();
  if (!timeUp && !answer) { fail("empty"); return; }
  busy = true;
  $("lock").disabled = true;
  let res;
  try { res = await api("/api/answer", { round: R.round, answer, timeUp }); }
  catch (e) {
    busy = false; $("lock").disabled = false;
    if (e.status === 422 && !timeUp) { fail(e.code); return; }
    if (e.code === "already_answered" || e.code === "not_started") { cancelAnimationFrame(raf); return playNext(); }
    toast(ERRORS[e.code] || "Couldn't send that answer. Try again.");
    if (timeUp) { busy = true; await wait(1500); busy = false; submit(true); }
    return;
  }
  cancelAnimationFrame(raf);
  $("ans").disabled = true;
  if (res.result.raw) {
    document.querySelector(".links").classList.add("locked");
    setLinks(1);
    $("core").classList.add("lit");
    Sound.lock();
    const [x, y] = Sky.centerOf($("core"));
    Sky.burst(x, y, ["#FFE7A3", "#FFFFFF", "#8FD3FF"], 50, 0.45);
    await wait(750);
  } else {
    Sound.err(); await wait(350);
  }
  reveal(res);
}
function fail(code) {
  Sound.err();
  $("ans-err").textContent = ERRORS[code] || "Try a different word.";
  const f = $("ans-form"); f.classList.remove("shake"); void f.offsetWidth; f.classList.add("shake");
  $("ans").focus();
}

// ---------- reveal ----------
async function reveal({ result, map }) {
  const i = result.round, last = i === ROUNDS - 1;
  $("pips2").innerHTML = pipsHTML(i + 1);
  $("rv-tag").textContent = `Pair ${i + 1} of ${ROUNDS}`;
  $("rv-pair").textContent = `${result.pair[0]} · ${result.pair[1]}`;
  const ans = $("rv-ans");
  ans.textContent = result.raw || (result.status === "missed" ? "Time ran out" : "No answer");
  ans.className = "rv-answer" + (result.raw ? "" : " miss");
  const tierEl = $("rv-tier"), ptsEl = $("rv-pts"), cnt = $("rv-count");
  tierEl.innerHTML = ""; tierEl.className = "rv-tier"; ptsEl.textContent = ""; $("rv-note").textContent = "";
  cnt.innerHTML = "&nbsp;";
  $("rv-top").innerHTML = ""; $("rv-top-wrap").hidden = true;
  const next = $("rv-next");
  next.textContent = last ? "See my constellation" : "Next pair";
  next.disabled = true;
  show("reveal");
  await wait(450);

  if (result.status === "found") {
    const as = result.matched && result.matched.toLowerCase() !== String(result.raw).toLowerCase() ? ` · counted as <b>${esc(result.matched)}</b>` : "";
    cnt.innerHTML = `Found by <span id="cnt-n">0</span> of ${result.total} ${result.total === 1 ? "player" : "players"}${as}`;
    await countUp($("cnt-n"), result.n, Math.min(900, 200 + result.n * 60), (v) => Sound.count(v % 12));
    await wait(250);
  } else if (result.status === "off_map") {
    cnt.textContent = "Not on today's star map";
    await wait(400);
  }
  const t = tierOf(result);
  tierEl.style.setProperty("--c", t.c);
  tierEl.innerHTML = `<span class="dot" style="--c:${t.c}"></span>${t.name}`;
  void tierEl.offsetWidth; tierEl.classList.add("in");
  ptsEl.style.setProperty("--c", t.c);
  ptsEl.textContent = "+0";
  Sound.tier(result.tier);
  const [x, y] = Sky.centerOf(tierEl);
  if (result.tier === "supernova") {
    Sky.flash(0.85); Sky.shake(1);
    Sky.ring(x, y, "#FFE7A3", Math.max(innerWidth, innerHeight) * 0.6, 1200);
    setTimeout(() => Sky.ring(x, y, "#C690FF", Math.max(innerWidth, innerHeight) * 0.4, 1000), 150);
    Sky.burst(x, y, t.hex, 220, 1.1, { size: 3, ttl: 1400, drag: 0.975 });
  } else if (result.tier === "nebula") {
    Sky.shake(0.4); Sky.ring(x, y, "#C690FF", 320, 1000);
    Sky.burst(x, y, t.hex, 120, 0.8, { size: 2.6, ttl: 1200 });
  } else if (result.tier === "comet") {
    Sky.ring(x, y, "#5EE3FF", 220, 900); Sky.burst(x, y, t.hex, 70, 0.6);
  } else if (result.tier) {
    Sky.burst(x, y, t.hex, result.tier === "moon" ? 34 : 14, 0.35);
  } else {
    Sky.burst(x, y, ["#FF6B7F", "#552030"], 30, -0.35, { g: 0, drag: 0.94 });   // implode
  }
  await countUp(ptsEl, t.pts, 700).catch(() => {});
  ptsEl.textContent = `+${t.pts}`;
  runScore += t.pts;
  setHud(i + 1, t.pts > 0);

  const notes = {
    off_map: "That link wasn't on the map. See what was hiding in the stars below.",
    missed: "The stars drifted apart before you locked in a link.",
  };
  const tierNotes = { supernova: "One of the hardest links on the map!", nebula: "A clever one. Few people find this.", satellite: "The obvious link. Everyone could see this one coming." };
  $("rv-note").textContent = notes[result.status] || tierNotes[result.tier] || "";

  if (map && map.length) {
    $("rv-top-wrap").hidden = false;
    $("rv-top").innerHTML = mapHTML(map);
  }
  next.disabled = false;
  next.focus({ preventScroll: true });
}
// The full star map, rarest tier first.
function mapHTML(map) {
  const order = ["supernova", "nebula", "comet", "moon", "satellite"];
  return order.map((k, gi) => {
    const items = map.filter((e) => e.tier === k);
    if (!items.length) return "";
    const t = TIERS[k];
    return `<div class="smap-group" style="--c:${t.c};animation-delay:${gi * 90}ms">
      <div class="smap-head"><span class="dot" style="--c:${t.c}"></span><span class="smap-name">${t.name}</span><span class="smap-pts">${t.pts}</span></div>
      <div class="smap-items">${items.map((e) => `<span class="smap-item${e.mine ? " mine" : ""}${e.pct ? "" : " unfound"}">${esc(e.label)}<span class="smap-pct">${e.pct}%</span></span>`).join("")}</div>
    </div>`;
  }).join("");
}
$("rv-next").addEventListener("click", () => {
  const done = $("pips2").querySelectorAll(".done").length;
  if (done >= ROUNDS) openResults(); else { Sky.warp(0.6); playNext(); }
});

// ---------- results ----------
let RES = null;
const CPTS = [[10, 40], [30, 14], [50, 34], [70, 12], [90, 30]];

async function openResults() {
  try { RES = await api("/api/results"); }
  catch (e) { if (e.code === "not_finished") return playNext(); toast(ERRORS[e.code] || "Couldn't load your results."); return; }
  $("meta").textContent = `Sky #${RES.no}`;
  show("results");
  drawConstellation(RES.rounds);
  $("res-score").textContent = "0";
  setTimeout(() => countUp($("res-score"), RES.score, 1600, (v) => { if (v % 20 === 0) Sound.count(v / 20); }), 900);
  const st = [`<span class="stat">Rank <b>#${RES.rank}</b> of ${RES.finished}</span>`, `<span class="stat">Altitude <b>${(RES.score * 10).toLocaleString()}</b> km</span>`];
  if (RES.streak > 0) st.push(`<span class="stat">🔥 <b>${RES.streak}</b>-day streak</span>`);
  $("res-stats").innerHTML = st.join("");
  $("res-rows").innerHTML = RES.rounds.map((r, k) => {
    const t = tierOf(r);
    const who = r.status === "found" ? `found by ${r.n} of ${r.total} ${r.total === 1 ? "player" : "players"}` : "";
    const status = r.status === "off_map" ? "not on the map" : r.status === "missed" ? "time ran out" : "";
    return `<div class="row" style="--c:${t.c};animation-delay:${1.2 + k * 0.08}s">
      <div class="row-head"><span class="dot" style="--c:${t.c}"></span><span class="row-pair">${esc(r.pair[0])} · ${esc(r.pair[1])}</span><span class="row-pts">${t.pts}</span>
      <span class="row-ans${r.raw ? "" : " miss"}">${r.raw ? esc(r.raw) : "No answer"}</span></div>
      <div class="row-sub"><span class="tname">${t.name}</span>${who ? `<span>${who}</span>` : ""}${status ? `<span>${status}</span>` : ""}</div>
      ${r.map && r.map.length ? `<details><summary>See the star map</summary><div class="smap">${mapHTML(r.map)}</div></details>` : ""}
    </div>`;
  }).join("");
  $("lb").innerHTML = RES.leaderboard.length
    ? RES.leaderboard.map((p) => `<li class="${p.me ? "me" : ""}"><span class="rk">#${p.rank}</span><span class="nm">${esc(p.name)}</span><span class="sc">${p.score}</span></li>`).join("")
    : `<li><span class="empty">You're the first to finish today.</span></li>`;
}

function drawConstellation(rounds) {
  const svg = $("constellation");
  let h = `<defs>${Object.entries({ ...TIERS, hole: HOLE }).map(([k, t]) => `<radialGradient id="cg-${k}"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${t.hex[1] || t.hex[0]}"/><stop offset="1" stop-color="${t.hex[1] || t.hex[0]}" stop-opacity="0"/></radialGradient>`).join("")}</defs>`;
  for (let i = 0; i < CPTS.length - 1; i++) {
    const [x1, y1] = CPTS[i], [x2, y2] = CPTS[i + 1], len = Math.hypot(x2 - x1, y2 - y1).toFixed(1);
    const hole = !rounds[i]?.tier || !rounds[i + 1]?.tier;
    h += `<line class="cl" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="--len:${len};animation-delay:${0.25 + i * 0.22}s;${hole ? "stroke-dasharray:1 1.2;stroke:rgba(160,180,230,.35);stroke-dashoffset:0;animation:fadein .5s " + (0.25 + i * 0.22) + "s forwards;opacity:0" : ""}"/>`;
  }
  rounds.forEach((r, i) => {
    const [x, y] = CPTS[i], k = r.tier || "hole";
    const size = { supernova: 7.5, nebula: 6, comet: 5, moon: 4, satellite: 3.2, hole: 2.6 }[k];
    const d = 0.15 + i * 0.22;
    h += `<circle class="cs" cx="${x}" cy="${y}" r="${size}" fill="url(#cg-${k})" style="animation-delay:${d}s"/>`;
    h += `<circle class="cs" cx="${x}" cy="${y}" r="${size * 0.22}" fill="${k === "hole" ? "#2A1020" : "#fff"}" ${k === "hole" ? 'stroke="#FF6B7F" stroke-width=".3"' : ""} style="animation-delay:${d}s"/>`;
    h += `<text class="ct" x="${x}" y="${y + size * 0.55 + 5}" style="animation-delay:${d + 0.2}s">${esc(r.raw || "—")}</text>`;
    h += `<text class="cp" x="${x}" y="${y + size * 0.55 + 8.2}" style="animation-delay:${d + 0.2}s">${tierOf(r).pts}</text>`;
  });
  svg.innerHTML = h;
  rounds.forEach((r, i) => setTimeout(() => {
    if (screen !== "results") return;
    const b = svg.getBoundingClientRect(), [cx, cy] = CPTS[i];
    const x = b.left + (cx / 100) * b.width, y = b.top + (cy / 64) * b.height;
    const t = tierOf(r);
    if (r.tier) { Sky.burst(x, y, t.hex, r.tier === "supernova" ? 60 : 20, r.tier === "supernova" ? 0.5 : 0.25); Sound.count(i * 2); }
  }, (0.25 + i * 0.22) * 1000));
}

function shareText() {
  const sq = RES.rounds.map((r) => tierOf(r).emoji).join("");
  return `Middle Ground #${RES.no} ✦ ${RES.score}/500 · 🚀 ${(RES.score * 10).toLocaleString()} km\n${sq}\n${location.origin}`;
}
$("share").addEventListener("click", async () => {
  const txt = shareText(), box = $("sharebox");
  try {
    if (navigator.share && matchMedia("(pointer: coarse)").matches) { await navigator.share({ text: txt }); return; }
    await navigator.clipboard.writeText(txt);
    $("share").textContent = "Copied!"; setTimeout(() => ($("share").textContent = "Copy my result"), 1600); box.hidden = true;
  } catch (e) {
    if (e && e.name === "AbortError") return;
    box.value = txt; box.hidden = false; box.focus(); box.select();
  }
});

// ---------- name, sound, home, countdown ----------
$("name-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  try { const r = await api("/api/name", { name: $("name-input").value }); $("name-input").value = r.name; $("name-msg").textContent = "Saved"; setTimeout(() => ($("name-msg").textContent = ""), 1800); }
  catch (err) { $("name-msg").textContent = err.code === "name_too_short" ? "Use at least 2 letters." : err.code === "name_blocked" ? "Please pick a friendlier name." : "Couldn't save the name."; }
});
function paintMute() { $("mute-waves").toggleAttribute("hidden", !Sound.on); $("mute-x").toggleAttribute("hidden", Sound.on); $("mute").setAttribute("aria-label", Sound.on ? "Turn sound off" : "Turn sound on"); }
$("mute").addEventListener("click", () => { Sound.toggle(); paintMute(); });
paintMute();
$("home-link").addEventListener("click", () => { if (screen === "round") return; show("home"); loadHome(); });

setInterval(() => {
  if (!S) return;
  let s = Math.max(0, Math.floor((S.nextAt - (Date.now() + offset)) / 1000));
  const h = String(Math.floor(s / 3600)).padStart(2, "0"); s %= 3600;
  $("countdown").textContent = `${h}:${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  if (Date.now() + offset >= S.nextAt && (screen === "home" || screen === "results")) { S = null; show("home"); loadHome(); }
}, 1000);

loadHome();
