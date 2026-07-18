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
npm run dev            # site only, at http://localhost:4321
npm run edit           # site + visual editor (see "Editing in the browser")
```

## Editing in the browser (visual editor)

Run `npm run edit`. This starts two things together:

- **Astro dev server** at `http://localhost:4321`
- **Decap CMS proxy** (`decap-server`) at port `8081`, which lets the editor
  read and write the real Markdown files on disk.

Then open the editor at:

```
http://localhost:4321/admin/
```

You'll see a "Blog Posts" collection. Click a post to edit it, or "New Post" to
create one — title, description, date, tags, draft toggle, and a rich Markdown
body. Saving writes straight to `src/content/posts/` (no login, no deploy). The
Astro dev server hot-reloads, so the change shows up on the site immediately.

> Note: the config uses `local_backend: true`, so editing only touches local
> files. Publishing still happens the normal way — commit and push to `main`.
> If you're on a remote/SSH dev box, forward **both** ports `4321` and `8081`.

## Build

```bash
npm run build       # outputs to ./dist
npm run preview     # serves the built site locally
npx astro check     # type-checks Astro + TS
```

## Writing a new post

**Option A — visual editor (easiest):** run `npm run edit` and open
`http://localhost:4321/admin/`. Create/edit posts with a form + rich
Markdown editor; saves write to `src/content/posts/` automatically.

**Option B — by hand:**

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
├── public/                     # served verbatim at /
│   ├── admin/                  # Decap CMS config (config.yml)
│   ├── assets/                 # images, figures, demo galleries + ONNX models
│   ├── robots.txt
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/             # Nav, Footer, Eyebrow, LinkChip, PaperCard
│   ├── content/                # blog collections (posts/)
│   ├── content.config.ts       # posts schema (zod)
│   ├── data/                   # papers.ts, projects.ts
│   ├── layouts/                # BaseLayout.astro
│   ├── lib/                    # url.ts (withBase helper)
│   ├── pages/                  # index.astro + routes (talks, posts, demos, admin, rss)
│   └── styles/                 # global.css (Tailwind v4 entry)
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json               # extends astro/tsconfigs/strict
```
