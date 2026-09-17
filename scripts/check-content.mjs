import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export async function checkContent(registry, { now = new Date(), checkLinks = false, requireOwners = false, fetchImpl = fetch } = {}) {
  const errors = [];
  const pending = [];
  const links = [];
  const ids = new Set();
  for (const project of registry.projects) {
    if (!project.id || ids.has(project.id)) errors.push(`Duplicate or missing project ID: ${project.id}`);
    ids.add(project.id);
    const reviewed = Date.parse(project.lastReviewed);
    const ageDays = (now.getTime() - reviewed) / 86_400_000;
    if (!Number.isFinite(reviewed) || ageDays > 90 || ageDays < -1) errors.push(`${project.id}: review date is missing, stale, or in the future`);
    if (!project.owner?.trim()) (requireOwners ? errors : pending).push(`${project.id}: content owner has not been assigned`);
    let url;
    try { url = new URL(project.href); } catch { errors.push(`${project.id}: invalid URL`); continue; }
    if (url.protocol !== 'https:' || url.username || url.password) { errors.push(`${project.id}: an HTTPS URL without credentials is required`); continue; }
    if (checkLinks) {
      try {
        let response = await fetchImpl(url, { method: 'HEAD', signal: AbortSignal.timeout(10_000) });
        if (response.status === 405) {
          response = await fetchImpl(url, { signal: AbortSignal.timeout(10_000) });
          await response.body?.cancel();
        }
        links.push({ id: project.id, status: response.status });
        if (!response.ok) errors.push(`${project.id}: destination returned HTTP ${response.status}`);
      } catch { errors.push(`${project.id}: destination failed or timed out`); }
    }
  }
  return { checkedAt: now.toISOString(), errors, pending, links };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const registry = JSON.parse(await readFile(new URL('../src/ecosystem.json', import.meta.url), 'utf8'));
  const result = await checkContent(registry, { checkLinks: process.argv.includes('--links'), requireOwners: process.argv.includes('--require-owners') });
  console.log(JSON.stringify(result, null, 2));
  if (result.errors.length) process.exitCode = 1;
}
