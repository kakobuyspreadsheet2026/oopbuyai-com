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
  // Dev: keep **4322** here so `kakobuy-cn-com` can own **4321** without Astro silently hopping ports (easy to confuse the two hubs).
  // Preview: `npm run preview` passes `--port 4173` in package.json.
  server: {
    port: 4322,
    open: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
});
