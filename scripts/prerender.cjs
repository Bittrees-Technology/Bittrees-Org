// Render the same React components used by the browser into crawlable HTML.
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');

function component(name) {
  const filename = path.join(__dirname, '..', 'src', `${name}.tsx`);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    fileName: filename,
  });
  const exports = {};
  // Only compile our two local, build-time page components.
  new Function('require', 'exports', outputText)(createRequire(filename), exports);
  return exports.default;
}

const build = path.join(__dirname, '..', 'build');
const template = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const pages = [
  { route: '/', file: 'index.html', component: 'App', title: 'Bittrees | Governance, Research, and Capital', description: 'Bittrees connects governance, research, and capital for a more collaborative future.' },
  { route: '/info', file: 'info.html', component: 'Info', title: 'About Bittrees | Our Mission', description: 'Learn about the Bittrees mission: making business simpler and more impactful through technology and community.' },
];

for (const page of pages) {
  const url = `https://bittrees.org${page.route}`;
  const markup = renderToString(React.createElement(StaticRouter, { location: page.route }, React.createElement(component(page.component))));
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${page.description}"/>`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${url}"/>`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${page.title}"/>`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${page.description}"/>`)
    .replace('</head>', `<link rel="canonical" href="${url}"/></head>`)
    .replace(/<noscript>.*?<\/noscript>/, '')
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  fs.writeFileSync(path.join(build, page.file), html);
}

fs.writeFileSync(path.join(build, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>https://bittrees.org${page.route}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log('Prerendered / and /info; generated sitemap.xml.');
