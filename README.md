# bittrees.org — hub

The public landing page for **bittrees.org**. It's a lightweight hub that introduces
the organization and routes visitors to the three Bittrees apps, plus a short `/info`
page with the mission.

The Bittrees family it links out to:

- **Bittrees, Inc.** — governance → [gov.bittrees.org](https://gov.bittrees.org)
- **Research** — the members' research foundation → [research.bittrees.org](https://research.bittrees.org)
- **Capital** — holdings & treasury → [capital.bittrees.org](https://capital.bittrees.org)

## Pages

- `/` — the hub: the Bittrees mark (which opens `/info`) over the three app cards.
- `/info` — the mission blurb and the same three links, laid out for reading.

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
