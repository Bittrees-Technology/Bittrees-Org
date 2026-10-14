import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
for(const [file,path,title] of [['index.html','/','Bittrees | Governance, Research, and Capital'],['info.html','/info','About Bittrees | Our Mission']]){
 const html=readFileSync('build/'+file,'utf8');
 assert.equal((html.match(/rel="canonical"/g)||[]).length,1);
 assert(html.includes(`href="https://bittrees.org${path}"`));
 assert(html.includes(`<title>${title}</title>`));
 assert(html.includes(`name="twitter:title" content="${title}"`));
 assert(html.includes('name="twitter:card" content="summary_large_image"'));
 assert(html.includes('property="og:image" content="https://bittrees.org/social/bittrees.png"'));
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 assert(html.includes('<main'));assert(html.includes('href="https://gov.bittrees.org"'));
 assert(html.includes('bittrees.webp'));assert(!html.includes('noindex'));
}
const sitemap=readFileSync('build/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,2);
assert(readFileSync('build/robots.txt','utf8').includes('Sitemap: https://bittrees.org/sitemap.xml'));
assert(readFileSync('build/404.html','utf8').includes('content="noindex"'));
const png=readFileSync('build/social/bittrees.png');assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);
const manifest=JSON.parse(readFileSync('build/site.webmanifest'));assert.equal(manifest.name,'Bittrees');
for(const icon of manifest.icons)assert(existsSync('build'+icon.src));
console.log('SEO checks passed: two prerendered pages, route-specific sharing, canonical URLs, sitemap, semantic headings and brand assets.');
