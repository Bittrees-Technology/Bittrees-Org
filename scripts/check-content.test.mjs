import assert from 'node:assert/strict';
import test from 'node:test';
import { checkContent } from './check-content.mjs';
const now = new Date('2026-09-05T00:00:00Z');
const project = { id: 'example', href: 'https://example.com', lastReviewed: '2026-09-01', owner: 'Editor' };
test('stale, missing owner and duplicate records cannot satisfy release acceptance', async () => {
  const result = await checkContent({ projects: [{ ...project, owner: null, lastReviewed: '2025-01-01' }, project] }, { now, requireOwners: true });
  assert.equal(result.errors.length, 3);
});
test('HEAD-only unsupported destinations use a bounded GET fallback', async () => {
  const methods = [];
  const result = await checkContent({ projects: [project] }, { now, checkLinks: true, fetchImpl: async (_url, options) => {
    methods.push(options.method ?? 'GET');
    assert.ok(options.signal instanceof AbortSignal);
    return new Response('', { status: methods.length === 1 ? 405 : 200 });
  } });
  assert.deepEqual(methods, ['HEAD', 'GET']);
  assert.deepEqual(result.errors, []);
});
test('unavailable destinations fail the check; owner gaps remain explicit', async () => {
  const result = await checkContent({ projects: [{ ...project, owner: null }] }, { now, checkLinks: true, fetchImpl: async () => new Response('', { status: 503 }) });
  assert.match(result.errors[0], /503/);
  assert.equal(result.pending.length, 1);
});
