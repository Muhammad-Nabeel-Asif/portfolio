# Portfolio

The personal site of Muhammad Nabeel Asif, senior software engineer.

Static HTML built with [Astro](https://astro.build). No client framework: the page ships
about a kilobyte of JavaScript for the theme switch and the section marker.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks, then writes dist/
npm run preview    # serves dist/
```

Node 22.23 or newer.

## Where it is served from

Two values in [`site.config.mjs`](site.config.mjs), and nothing else, depend on the host:

| Value | Meaning | Example |
|---|---|---|
| `SITE_URL` | The origin, used for canonical and social preview URLs | `https://example.com` |
| `BASE_PATH` | The path the site lives under | `/` or `/portfolio/` |

Either can be set from the environment instead:

```bash
SITE_URL=https://example.github.io BASE_PATH=/portfolio/ npm run build
```

## Deployment

Every push to `main` is built and published to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The site is served at
https://nabeelasif.cloud; the domain's DNS points at GitHub Pages.

## Change the content

Everything on the page comes from `src/content/`. No component needs to change.

| File | Holds |
|---|---|
| `profile.yaml` | Name, contact, headline, about, the hero diagram, the recommendation |
| `projects/*.yaml` | One case study each: the story, the tech, the track diagram |
| `more-work.yaml` | The shorter entries under the case studies |
| `experience.yaml` | Jobs, newest first |
| `education.yaml` | Degrees and certificates |
| `skills.yaml` | Skills, each tied to the places it was used |

The shapes are checked at build time by `src/content.config.ts`, so a typo fails the build
instead of reaching the page.

A track diagram is a list of steps. Each step has a `kind` that says who acts there:
`start`, `code`, `model`, `person`, `planned` (a person, not built yet) or `end`.

The resume link appears only when `public/Muhammad-Nabeel-Asif-Resume.pdf` exists. The PDF
is ignored by git.

## Structure

```
site.config.mjs        the two host-dependent values
src/content/           all text, as YAML
src/content.config.ts  schemas for that content
src/components/        one file per section, plus Track (the diagram)
src/layouts/Base.astro head, metadata, fonts
src/pages/             index and 404
src/styles/global.css  tokens, base styles, shared pieces
scripts/make-assets.mjs  redraws the social preview and icons (npm run assets)
.github/workflows/     the deploy to GitHub Pages
```

## Design

The reasoning behind the look is in [DESIGN.md](DESIGN.md).

## Licences

The typefaces are under the SIL Open Font License 1.1; the licence texts sit next to the
font files in `src/assets/fonts/`.
