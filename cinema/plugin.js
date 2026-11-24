// ditherx-test: a public test plugin for Dev.Sox.Cinema third-party plugins.
// Everything it needs lives on https://ditherx.github.io (GitHub Pages): the library, the clip,
// and /.well-known/devsox-plugin.txt that vouches for the plugin id.
const ID = 'ditherx-test';
const BASE = 'https://ditherx.github.io/cinema';

async function library() {
  const r = await fetch(`${BASE}/library.json`);
  if (r.status !== 200) throw new Error(`library: HTTP ${r.status}`);
  return JSON.parse(r.text);
}

globalThis.plugin = {
  async sources(title, settings) {
    const lib = await library();
    const own = lib.byTmdb[`${title.type}:${title.id}`] || [];
    const items = own.length ? own : settings.everywhere === false ? [] : lib.any;
    return items.map((it) => ({
      title: it.title,
      detail: it.quality,
      source: `${ID}:${it.id}`,
    }));
  },

  async resolve(source) {
    const id = source.slice(ID.length + 1);
    const lib = await library();
    const m = lib.media[id];
    if (!m) throw new Error(`unknown item ${id}`);
    log(`resolve ${id}`);
    return { url: `${BASE}/${m.file}`, title: m.name, duration: m.duration };
  },
};
