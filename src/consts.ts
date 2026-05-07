export const ml = 'https://maisonlooks.com/en';

/** Site branding (aligned with `<meta property="og:site_name">` and JSON-LD). */
export const siteName = 'Oopbuy Spreadsheet Hub';

/**
 * Official Oopbuy WEB · TOP banner (same `position: TOP` CDN object as prod).
 * @see banner `jump` payload on oopbuy.com — invite below should stay in sync.
 */
export const oopbuyTopBannerImageUrl =
  'https://libcdn1.hahbuy.com/prod/banner/TOP/20260324/PC%E6%A8%AA%E5%B9%853x_1774318924268.png';

/** Centered strip inner max width (CSS px); full-bleed black rail wraps this. */
export const oopbuyTopBannerInnerMaxPx = 1920;

/** Default Discord invite (TOP banner `/join/discord` redirect + floating dock). Override with `PUBLIC_OOPBUY_DISCORD_URL` or `PUBLIC_FLOAT_DISCORD_URL`. */
export const defaultOopbuyDiscordUrl = 'https://discord.gg/9hrqg53zgs';

/** Default WhatsApp deep link for floating dock; override with `PUBLIC_FLOAT_WHATSAPP_URL`. */
export const defaultFloatingWhatsappUrl = 'https://wa.me/447594927259';

/**
 * Default floating-dock intro MP4 (Oopbuy / hahbuy CDN). Not stored in this repo.
 * Override with `PUBLIC_FLOAT_VIDEO_URL` (any HTTPS MP4 or same-origin path).
 */
export const defaultFloatingIntroVideoUrl =
  'https://libcdn1.hahbuy.com/public/opb_20250428_intro.mp4?_t=1';

/**
 * Default Open Graph / Twitter preview image (public path, resolved with `Astro.site`).
 * Standard 1200×630 for large social link previews.
 */
export const defaultOgImagePath = '/og-default.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Logo for JSON-LD `Organization` (min ~112×112 recommended; we use 512×512 PNG). */
export const structuredDataLogoPath = '/logo-512.png';
export const structuredDataLogoWidth = 512;
export const structuredDataLogoHeight = 512;

/** Stable JSON-LD `@id`s — must stay in sync with `src/layouts/Layout.astro`. */
export function siteStructuredDataIds(siteOrigin: string) {
  const o = siteOrigin.replace(/\/$/, '');
  return {
    organizationId: `${o}/#organization`,
    websiteId: `${o}/#website`,
  } as const;
}
