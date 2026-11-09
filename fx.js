// Starfield, particle bursts, shockwaves and synthesized sound.
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Sky = (() => {
  const cv = document.getElementById("sky");
  const ctx = cv.getContext("2d");
  let W = 0, H = 0, stars = [], parts = [], rings = [], shooting = [];
  let flash = 0, shake = 0, warp = 0, last = performance.now();
  let px = 0, py = 0, tx = 0, ty = 0;
  const app = document.getElementById("app");

  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(520, Math.round(W * H / 2400));
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, z: Math.random() ** 1.6,
      tw: Math.random() * 6.28, sp: 0.4 + Math.random() * 1.6,
      hue: Math.random() < 0.12 ? "#FFE3B0" : Math.random() < 0.2 ? "#BFD8FF" : "#F1F5FF",
    }));
  }
  addEventListener("resize", resize);
  addEventListener("pointermove", (e) => { tx = e.clientX / W - 0.5; ty = e.clientY / H - 0.5; });
  resize();

  function frame(t) {
    const dt = Math.min(48, t - last); last = t;
    px += (tx - px) * 0.04; py += (ty - py) * 0.04;
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    const speed = reduce ? 0 : 1 + warp * 30;
    for (const s of stars) {
      s.tw += dt * 0.0012 * s.sp;
      s.y += dt * 0.006 * s.z * speed;
      if (s.y > H + 4) { s.y -= H + 8; s.x = Math.random() * W; }
      const x = ((s.x - px * 40 * s.z) % W + W) % W, y = s.y - py * 40 * s.z;
      const a = 0.18 + 0.75 * s.z * (0.55 + 0.45 * Math.sin(s.tw));
      const r = 0.35 + s.z * 1.5;
      ctx.globalAlpha = a; ctx.fillStyle = s.hue;
      if (warp > 0.02) { ctx.fillRect(x - r / 2, y - r * warp * 28 * s.z, r, r + r * warp * 28 * s.z); }
      else { ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill(); }
    }
    if (warp > 0) warp = Math.max(0, warp - dt / 900);

    if (!reduce && Math.random() < dt / 5200) {
      shooting.push({ x: W * (0.3 + Math.random() * 0.8), y: H * Math.random() * 0.45, vx: -(0.7 + Math.random() * 0.6), vy: 0.3 + Math.random() * 0.25, life: 1 });
    }
    for (const s of shooting) {
      s.x += s.vx * dt; s.y += s.vy * dt; s.life -= dt / 900;
      const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 160, s.y - s.vy * 160);
      g.addColorStop(0, `rgba(255,255,255,${0.9 * s.life})`); g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 160, s.y - s.vy * 160); ctx.stroke();
    }
    shooting = shooting.filter((s) => s.life > 0);

    for (const p of parts) {
      p.vx *= p.drag; p.vy *= p.drag; p.vy += p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt / p.ttl;
      if (p.life <= 0) continue;
      ctx.globalAlpha = Math.min(1, p.life * 1.4);
      ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.2, p.r * (0.4 + 0.6 * p.life)), 0, 6.283); ctx.fill();
    }
    parts = parts.filter((p) => p.life > 0);

    for (const r of rings) {
      r.life -= dt / r.ttl; if (r.life <= 0) continue;
      const k = 1 - r.life;
      ctx.globalAlpha = r.life * 0.9; ctx.strokeStyle = r.c; ctx.lineWidth = 1 + 5 * r.life;
      ctx.beginPath(); ctx.arc(r.x, r.y, 8 + r.max * (1 - (1 - k) ** 3), 0, 6.283); ctx.stroke();
    }
    rings = rings.filter((r) => r.life > 0);

    ctx.globalCompositeOperation = "source-over";
    if (flash > 0) { ctx.globalAlpha = Math.min(1, flash); ctx.fillStyle = "#FFF6E0"; ctx.fillRect(0, 0, W, H); flash -= dt / 500; }
    ctx.globalAlpha = 1;

    if (shake > 0) {
      const m = shake * 10;
      app.style.transform = `translate(${(Math.random() - 0.5) * m}px,${(Math.random() - 0.5) * m}px)`;
      shake -= dt / 600; if (shake <= 0) app.style.transform = "";
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  const centerOf = (el) => { const b = el.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2]; };

  function burst(x, y, colors, count = 40, power = 0.5, opts = {}) {
    if (reduce) count = Math.min(count, 12);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * 6.283, v = power * (0.25 + Math.random() * 0.85);
      parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: 1 + Math.random() * (opts.size || 2.4), c: colors[i % colors.length], life: 1, ttl: 700 + Math.random() * (opts.ttl || 900), drag: opts.drag || 0.965, g: opts.g ?? 0.0004 });
    }
  }
  function ring(x, y, c, max = 220, ttl = 900) { if (!reduce) rings.push({ x, y, c, max, ttl, life: 1 }); }
  function sparkle(x, y) { burst(x, y, ["#BFE7FF", "#FFFFFF"], 3, 0.12, { size: 1.2, ttl: 300, g: 0 }); }

  return {
    centerOf, burst, ring, sparkle,
    flash: (v = 1) => { if (!reduce) flash = v; },
    shake: (v = 1) => { if (!reduce) shake = v; },
    warp: (v = 1) => { if (!reduce) warp = v; },
  };
})();

export const Sound = (() => {
  let ac = null, on = true;
  try { on = localStorage.getItem("mg.sound") !== "off"; } catch {}
  const ensure = () => {
    if (!on) return null;
    try {
      if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === "suspended") ac.resume();
    } catch { return null; }
    return ac;
  };
  function tone(freq, dur = 0.15, type = "sine", vol = 0.07, slide = 0, delay = 0) {
    const a = ensure(); if (!a) return;
    const t = a.currentTime + delay;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.02);
  }
  function noise(dur = 0.6, vol = 0.12, delay = 0) {
    const a = ensure(); if (!a) return;
    const len = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 2;
    const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    f.type = "lowpass"; f.frequency.value = 900; g.gain.value = vol;
    s.buffer = buf; s.connect(f).connect(g).connect(a.destination); s.start(a.currentTime + delay);
  }
  const SCALE = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
  return {
    get on() { return on; },
    toggle() { on = !on; try { localStorage.setItem("mg.sound", on ? "on" : "off"); } catch {} if (on) tone(660, 0.1); return on; },
    unlock: ensure,
    key: () => tone(SCALE[Math.floor(Math.random() * SCALE.length)] * 2, 0.05, "sine", 0.025),
    tick: () => tone(1200, 0.05, "square", 0.025),
    start: () => { tone(220, 0.5, "sine", 0.06, 3); tone(330, 0.5, "triangle", 0.03, 3, 0.05); },
    lock: () => { tone(392, 0.12, "triangle", 0.07); tone(784, 0.3, "sine", 0.06, 1, 0.08); },
    err: () => tone(180, 0.18, "sawtooth", 0.04, 0.7),
    count: (i) => tone(400 + i * 40, 0.04, "sine", 0.03),
    tier(key) {
      const seq = { satellite: [523], moon: [523, 659], comet: [523, 659, 784], nebula: [523, 659, 784, 1046], supernova: [523, 659, 784, 1046, 1318] }[key];
      if (!seq) { tone(300, 0.6, "sine", 0.08, 0.25); return; }   // black hole
      seq.forEach((f, i) => tone(f, 0.35, "triangle", 0.06, 1, i * 0.07));
      if (key === "supernova") { noise(1.2, 0.18, 0.1); tone(80, 1, "sine", 0.12, 0.5, 0.05); }
    },
    vote: (yes) => tone(yes ? 880 : 330, 0.12, "triangle", 0.06, yes ? 1.5 : 0.7),
  };
})();
