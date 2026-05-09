import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

/** r/oopbuy announcement mirror; body under `/public/news-rumor-patrol/`. */
export const GET: APIRoute = () => {
  const fp = path.join(process.cwd(), 'public', 'news-rumor-patrol', 'mirror-inner.html');
  const body = fs.readFileSync(fp);
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
