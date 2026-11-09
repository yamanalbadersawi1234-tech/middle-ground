# Middle Ground

A daily word game. Two words appear in the sky, and players type one word that links them both. The rarer your link among today's players, the brighter your star:

| Tier | Who else said it | Points |
|---|---|---|
| Supernova | only you | 100 |
| Nebula | 5% or fewer | 75 |
| Comet | 5–15% | 50 |
| Moon | 15–35% | 25 |
| Satellite | over 35% | 10 |
| Black hole | voted down / no answer | 0 |

Five pairs a day, 30 seconds each, and a new sky every midnight UTC. Rare answers that only one person gave are checked by other players: after finishing, players vote on whether each one really links both words. Two or more net "doesn't link" votes send an answer to the black hole. An answer given by two or more people counts automatically.

It runs on **Cloudflare Workers + D1** (free tier, no server to manage, and it never goes to sleep).

---

## Put it online (about 15 minutes, no coding)

You need a free **GitHub** account and a free **Cloudflare** account.

### 1. Put the code on GitHub
1. Go to github.com → **New repository** → name it `middle-ground` → **Create**.
2. Click **uploading an existing file** and drag in everything from this folder (`public`, `src`, `package.json`, `wrangler.toml`, `dev-server.mjs`, `README.md`, `.gitignore`). Click **Commit changes**.

### 2. Create the database
1. Go to dash.cloudflare.com → **Storage & Databases** → **D1 SQL Database** → **Create**.
2. Name it `middle-ground` → **Create**.
3. Copy the **Database ID** shown on the page (it looks like `a1b2c3d4-…`).

### 3. Paste the database ID
1. On GitHub, open `wrangler.toml` → click the pencil to edit.
2. Replace `PASTE-YOUR-DATABASE-ID-HERE` with your Database ID → **Commit changes**.

### 4. Deploy
1. In Cloudflare → **Workers & Pages** → **Create** → **Import a repository** (connect GitHub when asked).
2. Pick `middle-ground` → keep the defaults (deploy command `npx wrangler deploy`) → **Deploy**.
3. When it finishes you get a link like `https://middle-ground.<you>.workers.dev`. That's your game. 🎉

The tables are created automatically the first time someone plays. Every time you edit a file on GitHub, Cloudflare redeploys by itself.

### 5. (Recommended) Hide future puzzles
The daily pairs come from the word list in `src/game.js`. Since your code is on GitHub, someone could work out tomorrow's pairs. To stop that:
Cloudflare → your Worker → **Settings** → **Variables and Secrets** → **Add** → type **Secret**, name `PAIR_SALT`, value: any long random text. Save and deploy.
(Set this before people start playing. Changing it later changes that day's pairs.)

### 6. (Optional) Your own domain
Cloudflare → your Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain**.

---

## Try it on your computer first

With Node.js 22.5 or newer installed, nothing else is needed:

```
node dev-server.mjs
```

Then open http://localhost:8787. Answers are saved in a local file called `local.db`.

## Change the game

- **Words**: edit the `WORDS` list at the top of `src/game.js`. Each day picks 10 different words from it.
- **Rounds / timer**: `ROUNDS` and `SECS` in `src/game.js`. Also update the "5" and "30s" text in `public/index.html`.
- **Tier thresholds**: `tierFor()` in `src/game.js`.
- **Voting rules**: `statusOf()` in `src/game.js`.
- **Look and animations**: `public/style.css`, `public/fx.js` (stars, particles, sounds), `public/app.js` (screens).

## Files

```
public/        the website (HTML, CSS, animations, game screens)
src/game.js    game rules + API (shared by Cloudflare and the local server)
src/worker.js  Cloudflare entry point
dev-server.mjs local test server
wrangler.toml  Cloudflare settings
```
