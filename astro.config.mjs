import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Must match `site` — used for sitemap URLs. */
const site = 'https://oopbuyai.com';

export default defineConfig({
  site,
  integrations: [
    sitemap({
      /** Prerendered `index.html.ts` endpoints are not listed as page routes — add manually. */
      customPages: [
        new URL('/news/oopbuy-activity/', site).href,
        new URL('/news/openstar-recruit/', site).href,
      ],
    }),
  ],
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'pt', 'es', 'fr', 'it', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Dev: `npm run dev` uses this port; if busy Astro tries the next free port (see terminal).
  // Preview: `npm run preview` passes `--port 4173` in package.json so it does not collide with dev on 4321.
  // (Astro’s static preview server reads `server.*` for host/headers; a top-level `preview` key is not applied.)
  // Do not open dist/*.html via file:// — run `npm run build && npm run preview`.
  server: {
    port: 4321,
    open: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
});
