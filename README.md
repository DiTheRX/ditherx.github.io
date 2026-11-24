# ditherx.github.io

Public test plugin **ditherx-test** for [Dev.Sox.Cinema](https://github.com/Dev-Sox/cinema)
third-party plugins (see `docs/PLUGINS.md` there).

- `cinema/plugin.js` — the plugin bundle (runs in the platform's QuickJS sandbox)
- `cinema/manifest.json` — its catalog entry (bundle pinned to a commit, sha256)
- `cinema/catalog.json` — a one-plugin catalog for trying it: `PLUGIN_CATALOG_URL=https://ditherx.github.io/cinema/catalog.json`
- `cinema/library.json` — what it offers: a generic test clip for any title, own entries for a few TMDB ids
- `cinema/media/test-720p.mp4` — a 30 s generated test clip (testsrc2 + 440 Hz tone)
- `.well-known/devsox-plugin.txt` — the domain `ditherx.github.io` vouches for `ditherx-test`

Settings: `everywhere` (boolean, default on) — offer the test clip on every title.
