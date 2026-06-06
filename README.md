# Muhammad Nabeel Asif — Developer Portfolio

A clean, single-page developer portfolio for **Muhammad Nabeel Asif**, Senior Backend &
Systems Engineer. It showcases professional experience, technical skills, and contact details
in a fully responsive, light-themed UI.

**Live site:** https://muhammad-nabeel-asif.github.io/portfolio/

## Features

- **Experience timeline** — filterable work history with technical achievements and notable projects.
- **Skills explorer** — searchable, category-filterable grid of technical competencies.
- **Contact portal** — direct contact channels plus an inquiry form.
- **Fluid responsive design** — `clamp()`-based typography and layout that scales cleanly from
  ~320px phones to large desktops, with no horizontal overflow.
- **Printable CV** — a clean, print-only resume layout (use your browser's Print / Save as PDF).

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) (dev server and build)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev/) icons

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
    Header.tsx                 # Sticky header with branding + contact links
    Hero.tsx                   # Landing hero + metrics panel
    ExperienceTimeline.tsx     # Work history with tabs
    SkillOrbit.tsx             # Searchable/filterable skills grid
    ContactPortal.tsx          # Contact details + inquiry form
  data/portfolioData.ts        # All portfolio content (single source of truth)
  types.ts                     # Shared TypeScript types
  App.tsx                      # Page layout + print-only resume
  index.css                    # Tailwind theme, fluid type scale, print styles
```

To update portfolio content (experience and skills), edit
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
to run or deploy it. Any local `.env*` files are git-ignored.
