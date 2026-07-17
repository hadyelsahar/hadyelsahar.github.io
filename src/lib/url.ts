// Small helper to join Astro's configured `base` with relative URLs so links
// keep working under a sub-path deploy (e.g. GitHub Pages project pages).
// Pass-through for absolute (http(s)://) or mailto: URLs.

const RAW_BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

export function withBase(path: string): string {
  if (!path) return RAW_BASE + '/';
  if (/^[a-z]+:/i.test(path)) return path; // http(s):, mailto:, etc.
  if (path.startsWith('#')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${RAW_BASE}${normalized}` || '/';
}
