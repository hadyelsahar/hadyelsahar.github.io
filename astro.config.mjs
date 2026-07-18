// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Dev-only Vite plugin: send `Cache-Control: no-store` on every response so the
// browser (especially VS Code's embedded browser) never caches pages or 404s.
// This prevents stale "Not Found" screens lingering after dev-server restarts.
const devNoStore = {
  name: 'dev-no-store',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      res.setHeader('Cache-Control', 'no-store');
      next();
    });
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://hadyelsahar.com',
  base: '/',
  vite: {
    plugins: [tailwindcss(), devNoStore],
  },
  integrations: [mdx(), sitemap()],
});
