import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oopbuyai.com',
  integrations: [sitemap()],
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'pt', 'es', 'fr', 'it', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Dev: default 4321; if the port is busy Astro picks the next free one — always use the "Local" URL from the terminal.
  // Preview (static dist): separate port 4173 so it does not fight with `npm run dev` on 4321.
  // Do not open dist/*.html via file:// — run `npm run build && npm run preview`.
  server: {
    port: 4321,
    open: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    port: 4173,
  },
});
