# Hub content operations

The homepage and info page now read the same records in `src/ecosystem.json`.
Each record has a review date and an explicit owner field. The September 5 review
checked the source destinations and their use on both pages; it is not a review
of the destination products' financial, legal, or security claims.

## Assignment still required

Content owners are deliberately null until the operator names the responsible
people. A dedicated monitored support route and response commitment also need an
owner decision. No email address or monitoring commitment is inferred from a
repository name. Run `yarn check:content --require-owners` for the final ownership
gate; the normal check reports these gaps separately from technical failures.
The ecosystem P2 task remains open until these assignments are recorded.

## Routine checks

The content workflow runs on pull requests, main pushes, and daily. It validates
unique records and review dates (90-day maximum age), runs the existing UI tests,
builds the site, and checks performance budgets. Scheduled/manual runs also check
the three product destinations with bounded requests and a GET fallback when HEAD
is unsupported. A redirect/login page only proves reachability, not product health.
Subscribe the eventual content owner to workflow failure notifications. Confirm
that person receives a test failure before claiming monitored operations.

After reviewing a destination, update its date and owner in the same reviewed PR
as the content change. Do not automatically refresh dates to silence stale checks.

## Performance and analytics

Build limits: 250 KB aggregate gzipped JavaScript, 50 KB aggregate gzipped CSS,
and 1 MB per image. `yarn check:budgets` fails above these limits. These are bundle
budgets, not measured field Web Vitals or an availability SLO.

Analytics are currently disabled: `reportWebVitals()` receives no reporting
callback. Retain this setting until an owner approves a documented aggregate-only
measurement purpose and retention policy. Do not introduce visitor identifiers,
wallet addresses, URLs with query strings, or session replay as routine analytics.

## Support and uptime

Use the repository issue tracker for non-sensitive source defects only. It is
not yet a promised support channel. The content workflow reports link reachability;
continuous first-party uptime monitoring and its alert recipient remain pending.
The future monitor should verify `/` and `/info`, expected content, TLS, and latency,
then record its cadence, recipient, incident response, and a notification drill.
