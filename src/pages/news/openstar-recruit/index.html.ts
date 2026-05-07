import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

/** Offline mirror of oopbuy.com notice id=1960930800926523394 (openstar / rookie creator). */
export const GET: APIRoute = () => {
  const fp = path.join(process.cwd(), 'public', 'news-openstar', 'mirror-inner.html');
  const body = fs.readFileSync(fp);
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
