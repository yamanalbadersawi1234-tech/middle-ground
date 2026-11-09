import { handleApi } from "./game.js";

// D1 adapter: same tiny interface the game logic uses everywhere.
const d1 = (DB) => ({
  all: async (sql, ...params) => (await DB.prepare(sql).bind(...params).all()).results || [],
  run: (sql, ...params) => DB.prepare(sql).bind(...params).run(),
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      try { return await handleApi(request, d1(env.DB), env); }
      catch (e) { console.error(e); return new Response(JSON.stringify({ error: "server_error" }), { status: 500, headers: { "content-type": "application/json" } }); }
    }
    return env.ASSETS.fetch(request);
  },
};
