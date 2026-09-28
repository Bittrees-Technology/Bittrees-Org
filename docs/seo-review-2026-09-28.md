# Bittrees landing-page SEO review — 28 September 2026

Scope: https://bittrees.org and /info. The www hostname already redirects to the apex. The misspelled bitrees.org did not resolve; it was not modified.

The current main branch already prerenders both React pages, supplies distinct titles/descriptions/canonical URLs, builds a sitemap and serves a real 404. This release preserves those features and the current visible wording, three-link home layout and deliberate removal of the home AI button.

Improvements:

- Full Open Graph and Twitter large-image metadata, including route-specific Twitter titles/descriptions, image dimensions and alternative text.
- A 1200 × 630 social card based on the existing Bittrees emblem and the landing page's governance/research/capital purpose. Editable source: design/social-preview.html; render with node scripts/render-social.mjs after Playwright Chromium installation.
- Scalable tree favicon plus PNG, ICO, Apple touch and 192/512px manifest icons, matching the Bittrees family design. The favicon identifies Bittrees, not Governance.
- Accessible main landmarks and visually hidden page headings without introducing new visible promotional copy.
- Existing WebP logo selected in supported browsers with the original PNG fallback: about 49 KB versus 175 KB. A narrow-screen card width limit prevents overflow at 320px.
- Automated checks of the built HTML, image dimensions, sitemap, canonical URLs, no-JavaScript navigation, mobile layout and 404 behavior. CI runs both static SEO and browser checks.

Validation: production build; existing component and operations tests; content check; static SEO assertions; browser tests with JavaScript both disabled and enabled; existing transfer-size budgets. Runtime JavaScript remains about 71 KB gzip and CSS about 3.4 KB gzip. Public page content is present in the initial HTML.

Content ownership fields remain unassigned in the existing project catalog; this release does not invent owners. Search Console submission and social-network cache refreshes are outside deployment itself. No ranking increase or immediate recrawl is guaranteed. No unrelated project, authority, wallet or role changes are included.
