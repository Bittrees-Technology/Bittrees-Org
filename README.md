# bittrees.org — hub

The public landing page for **bittrees.org**. It's a lightweight hub that introduces
the Bittrees DAO and ecosystem, plus a short `/info` page explaining their relationship.

The Bittrees family it links out to:

- **Bittrees, Inc.** — governance → [gov.bittrees.org](https://gov.bittrees.org)
- **Research** — the members' research foundation → [research.bittrees.org](https://research.bittrees.org)
- **Capital** — holdings & treasury → [capital.bittrees.org](https://capital.bittrees.org)
**Bittrees, Inc.**, **Research**, and **Capital** form the DAO. The homepage's
separate **Ecosystem** section links to the [Bittrees Index](https://index.bittrees.org),
where the other products, tools, and communities are discovered. Keep detailed
product listings in that directory and the main landing page minimal.

## Pages

- `/` — the entry point: the Bittrees mark (which opens `/info`), a DAO group with three destinations, and an Ecosystem link.
- `/info` — the DAO and ecosystem relationship, the three DAO destinations, the ecosystem hub and a link to report a website issue.

## Stack

Create React App (`react-scripts`) · React · TypeScript · Tailwind CSS + DaisyUI.
Intentionally minimal — this is a static front door, not an app; it holds no wallet or
chain logic of its own and simply links to the apps that do.

## Local development

Requires Node 18+ and npm.

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build → build/
```

## Deployment

Deploys to Vercel and is served at `bittrees.org`. It's a static build with no
environment variables or backend.

## Content operations

Both public pages use `src/ecosystem.json`. See
[content ownership, freshness, link checks, performance budgets, and support gaps](docs/content-operations.md).
Run `yarn test:operations`, `yarn check:content`, `yarn check:links`, and
`yarn check:budgets` after building. Owner assignment remains an explicit release gate.

## Search indexing

`npm run build` prerenders the existing React page components into `index.html`
and `info.html`, with distinct titles, descriptions, and canonical URLs. It also
creates `sitemap.xml`; `robots.txt` advertises that sitemap. Internal page links
load the document so navigation keeps the matching metadata.

Vercel uses clean URLs and removes trailing slashes. There is no catch-all SPA
rewrite: unknown URLs must return HTTP 404 using `public/404.html`, rather than
serve the homepage with HTTP 200. `/index` redirects to `/`; Vercel's clean-URL
handling normalizes `.html` aliases. The explicit build command in `vercel.json`
ensures the hosting project's older `react-scripts build` override cannot skip
prerendering.

After deployment, check `/`, `/info`, `/sitemap.xml`, `/robots.txt`, a nonexistent
path, `/info/`, and `/index.html`. In Google Search Console, inspect the actual
excluded URLs, submit the sitemap, and validate only issues that are resolved.
HTTP and www redirects to the canonical HTTPS domain are intentional.
