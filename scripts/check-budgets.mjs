import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

async function files(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(async (entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  }))).flat();
}
const totals = { javascriptGzip: 0, cssGzip: 0, largestImage: 0 };
for (const path of await files('build')) {
  if (!/\.(js|css|png|webp|jpe?g)$/.test(path)) continue;
  const bytes = await readFile(path);
  if (path.endsWith('.js')) totals.javascriptGzip += gzipSync(bytes).length;
  else if (path.endsWith('.css')) totals.cssGzip += gzipSync(bytes).length;
  else totals.largestImage = Math.max(totals.largestImage, bytes.length);
}
const limits = { javascriptGzip: 250_000, cssGzip: 50_000, largestImage: 1_000_000 };
console.log(JSON.stringify({ totals, limits }, null, 2));
if (Object.keys(limits).some((key) => totals[key] > limits[key])) process.exitCode = 1;
