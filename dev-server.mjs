// Local test server: `node dev-server.mjs`, then open http://localhost:8787
// Uses Node's built-in SQLite (Node 22.5+), so there is nothing to install.
import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { handleApi } from "./src/game.js";

const sqlite = new DatabaseSync(process.env.DB_FILE || "local.db");
const db = {
  all: async (sql, ...p) => sqlite.prepare(sql).all(...p).map(r => ({ ...r })),
  run: async (sql, ...p) => sqlite.prepare(sql).run(...p),
};
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".webmanifest": "application/manifest+json" };
const PORT = Number(process.env.PORT || 8787);

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname.startsWith("/api/")) {
    const chunks = []; for await (const c of req) chunks.push(c);
    const request = new Request(url, { method: req.method, headers: req.headers, body: req.method === "POST" ? Buffer.concat(chunks) : undefined });
    let r;
    try { r = await handleApi(request, db, process.env); } catch (e) { console.error(e); r = new Response('{"error":"server_error"}', { status: 500 }); }
    res.writeHead(r.status, Object.fromEntries(r.headers)); res.end(Buffer.from(await r.arrayBuffer()));
    return;
  }
  let file = normalize(url.pathname === "/" ? "/index.html" : url.pathname).replace(/^(\.\.[/\\])+/, "");
  try {
    const data = await readFile(join("public", file));
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" }); res.end(data);
  } catch { res.writeHead(404); res.end("Not found"); }
}).listen(PORT, () => console.log(`Middle Ground running at http://localhost:${PORT}`));
