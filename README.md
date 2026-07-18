# hadyelsahar.github.io

Personal website of **Hady Elsahar** — Staff Research Scientist at FAIR, Meta Superintelligence Labs.

Live at **https://hadyelsahar.github.io**

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + MDX, statically generated and deployed to GitHub Pages via GitHub Actions.

## Highlights

- **Homepage** — bio, a selected-projects carousel, and a "research journey" timeline (reversible, newest-first by default) with figures and selected papers per era.
- **In-browser ML demos** — [`/demos/videoseal`](https://hadyelsahar.github.io/demos/videoseal) and [`/demos/audioseal`](https://hadyelsahar.github.io/demos/audioseal) run watermark detection/embedding entirely client-side via ONNX Runtime Web (no server, no upload).
- **Animated avatar** — hover the profile photo for 1s to see the "coding" GIF; leave the page idle (no scroll) for 10s and it falls asleep.
- **Dark mode**, RSS, sitemap, JSON-LD, and OpenGraph metadata.
- **Privacy-friendly analytics** — GoatCounter, loaded only on the production host.

## Requirements

- Node **22+** (see `engines` in `package.json`).

## Develop

```bash
npm install
npm run dev            # site at http://localhost:4321
npm run edit           # site + Decap CMS visual editor (see below)
```

## Build

```bash
npm run build          # static output to ./dist
npm run preview        # serve the built site locally
npx astro check        # type-check Astro + TS
```

## Editing content

### Papers & projects

The research papers and project cards are plain data files — edit them directly:

- `src/data/papers.ts` — publication list (title, authors, venue, links); grouped into eras by `eraPapers` in `src/pages/index.astro`.
- `src/data/projects.ts` — project cards (blurb, images, press/links, clickable cover targets).

### Blog posts

Posts are Markdown/MDX files in `src/content/posts/`, validated against the schema in `src/content.config.ts` (build fails loudly on bad frontmatter).

**Option A — visual editor:** run `npm run edit`, open `http://localhost:4321/admin/`, and edit with a form + Markdown editor. Uses Decap CMS with `local_backend: true`, so it writes straight to `src/content/posts/` on disk (no login, no deploy). On a remote/SSH dev box, forward ports **4321** and **8081**.

**Option B — by hand:** create `src/content/posts/<slug>.md` with frontmatter:

```yaml
---
title: "Your title"
description: "One-sentence deck"
pubDate: 2026-05-21
tags: ["multilingual", "opinion"]
draft: false        # true = hide from public list
---
```

The list page is `/posts/`, each post is `/posts/<slug>/`, and the feed is `/rss.xml`.

> **Note:** the **Writing** (`/posts`) and **Talks** (`/talks`) pages are currently
> disabled in the nav (commented out in `src/components/Nav.astro`), and the homepage
> "Recent writing" section is commented out in `src/pages/index.astro`. Re-enable those
> when the content is ready.

## Analytics

[GoatCounter](https://www.goatcounter.com/) is wired up in `src/layouts/BaseLayout.astro`.
The tracking script is injected **only** on the production host (`hadyelsahar.github.io`),
so localhost and previews are never counted. Append `?gctest` to any URL to force a test
pageview from any host. Dashboard: `https://hadyelsahar.goatcounter.com`.

## Deployment

Push to `main`. The workflow in `.github/workflows/deploy.yml` uses
`withastro/action@v3` + `actions/deploy-pages@v4` to build and publish to GitHub Pages.

**One-time setup:** repo **Settings → Pages → Source → GitHub Actions**.

## Repo layout

```
.
├── public/                     # served verbatim at /
│   ├── admin/                  # Decap CMS config (config.yml)
│   ├── assets/                 # images, figures, demo galleries + ONNX models + avatar GIFs
│   ├── robots.txt
│   └── favicon.*
├── src/
│   ├── components/             # Nav, Footer, Eyebrow, LinkChip, PaperCard, ShipOfTheseus (disabled)
│   ├── content/                # blog posts (posts/)
│   ├── content.config.ts       # posts schema (zod)
│   ├── data/                   # papers.ts, projects.ts
│   ├── layouts/                # BaseLayout.astro
│   ├── lib/                    # url.ts (withBase helper)
│   ├── pages/                  # index.astro + routes (posts, talks, demos, admin, rss)
│   └── styles/                 # global.css (Tailwind v4 entry)
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json               # extends astro/tsconfigs/strict
```
