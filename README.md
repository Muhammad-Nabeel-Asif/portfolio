# Muhammad Nabeel Asif — Developer Portfolio

A high-end, single-page developer portfolio for **Muhammad Nabeel Asif**, Senior Backend &
Systems Engineer. It showcases professional experience, an interactive system-architecture
explorer, and a simulated API sandbox — all in a fully responsive, dark-themed UI.

**Live site:** https://muhammad-nabeel-asif.github.io/portfolio/

## Features

- **Experience timeline** — filterable work history with technical achievements and notable projects.
- **Interactive system architecture** — clickable node diagrams (Delight Desk AI, Calendar Sync,
  Web3 Identity) with live data-flow animation, per-node metrics, and code snippets.
- **API playground** — simulated endpoint sandbox that streams server-style logs and JSON responses.
- **Fluid responsive design** — `clamp()`-based typography and layout that scales cleanly from
  ~320px phones to large desktops, with no horizontal overflow.
- **Printable CV** — a clean, print-only resume layout (use your browser's Print / Save as PDF).

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) (dev server and build)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev/) icons and [motion](https://motion.dev/)

## Getting Started

**Prerequisites:** Node.js 18+ (Node 20 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev
```

### Available scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server on port 3000       |
| `npm run build`   | Production build to `dist/`                  |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Type-check the project (`tsc --noEmit`)      |

## Project Structure

```
src/
  components/
    Header.tsx                 # Sticky nav + responsive mobile nav
    Hero.tsx                   # Landing hero + metrics panel
    ExperienceTimeline.tsx     # Work history with tabs
    SkillOrbit.tsx             # Searchable/filterable skills grid
    ArchitectureVisualizer.tsx # Interactive system diagrams
    ApiPlayground.tsx          # Simulated API request/response console
    ContactPortal.tsx          # Contact details + inquiry form
  data/portfolioData.ts        # All portfolio content (single source of truth)
  types.ts                     # Shared TypeScript types
  App.tsx                      # View switcher + print-only resume
  index.css                    # Tailwind theme, fluid type scale, print styles
```

To update portfolio content (experience, skills, architectures, API cases), edit
[`src/data/portfolioData.ts`](src/data/portfolioData.ts).

## Deployment

The site auto-deploys to **GitHub Pages** via the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

- The Vite `base` path is detected automatically from the repository name, so deep asset
  paths resolve correctly on the project Pages URL.
- Pages source is set to **GitHub Actions** (Settings → Pages).

To deploy any change:

```bash
git add -A
git commit -m "your message"
git push
```

## Configuration

This is a fully static front-end — no backend, API keys, or environment variables are required
to run or deploy it. The API playground is fully simulated and makes no external network calls.
Any local `.env*` files are git-ignored.
