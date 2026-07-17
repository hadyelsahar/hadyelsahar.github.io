# hadyelsahar.com (Astro)

Personal site, scaffolded with Astro 6 + Tailwind v4 + MDX. Static-built and deployed to GitHub Pages.

## Scaffolding path used

Took the **`npm create astro@latest` happy path** (`--template minimal --typescript strict --no-install --skip-houston --yes`).
Because the working directory was not empty, the tool generated the project into a
sibling folder (`useful-proxima/`) which was then moved into the repo root and removed.
Tailwind and MDX were added via the official integrations (`npx astro add ...`).

Node 22.12.0 was installed locally to `~/.local/node` (Homebrew install hit a
sqlite-tap conflict; the official Node tarball was the simplest unblocker). Add
`~/.local/node/bin` to your PATH or use a normal `brew install node` once the
sqlite conflict is resolved.

## Dev

```bash
export PATH="$HOME/.local/node/bin:$PATH"  # or however you have node 22+
npm install
npm run dev
```

## Build

```bash
npm run build       # outputs to ./dist
npm run preview     # serves the built site locally
npx astro check     # type-checks Astro + TS
```

## Writing a new post

1. Create `src/content/posts/<slug>.md` (or `.mdx` if you want components).
2. Frontmatter:
   ```yaml
   ---
   title: "Your title"
   description: "One-sentence deck"
   pubDate: 2026-05-21
   tags: ["multilingual", "opinion"]
   draft: false
   ---
   ```
3. Write markdown below. Push to `main` → GitHub Actions deploys.
4. Set `draft: true` to hide from the list while writing.

The list page lives at `/posts/`, each post at `/posts/<slug>/`, and the
RSS feed at `/rss.xml`. Schema is enforced by `src/content/config.ts` —
build will fail loudly if frontmatter is malformed.

## Deployment

Push to `main`. The workflow in `.github/workflows/deploy.yml` uses the official
`withastro/action@v3` + `actions/deploy-pages@v4` to build and publish to GitHub
Pages.

**One-time setup:** in repo settings → Pages → Source, pick **GitHub Actions**.

Also: before the first deploy, update `site:` in `astro.config.mjs` to the
production URL (the placeholder is `https://hadyelsahar.github.io`).

## Repo layout

```
.
├── _legacy/                    # original standalone HTML (index, talks, nk48-2022) — DO NOT DELETE
├── _extracted/                 # narrative-strategy + extraction reports — DO NOT DELETE
├── website_old.txt             # raw text dump of the old site — DO NOT DELETE
├── Squarespace-Wordpress-Export-05-20-2026.xml  # source export — DO NOT DELETE
├── public/                     # served verbatim at /
│   ├── assets/                 # images (paper thumbnails, profile, logo) — URLs stable as /assets/...
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/             # Nav.astro, Footer.astro (stubs)
│   ├── content/                # blog collections (config.ts pending)
│   ├── layouts/                # BaseLayout.astro
│   ├── pages/                  # index.astro + routes
│   └── styles/                 # global.css (Tailwind v4 entry)
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json               # extends astro/tsconfigs/strict
```
