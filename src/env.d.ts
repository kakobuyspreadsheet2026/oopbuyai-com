/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_OOPBUY_SPREADSHEET_URL?: string;
  /** Overrides Discord invite used by TOP banner `/join/discord` redirect */
  readonly PUBLIC_OOPBUY_DISCORD_URL?: string;
  /** Override intro video source (default `/videos/opb_20250428_intro.mp4`); may be another path or HTTPS URL to an MP4 */
  readonly PUBLIC_FLOAT_VIDEO_URL?: string;
  readonly PUBLIC_FLOAT_DISCORD_URL?: string;
  readonly PUBLIC_FLOAT_REDDIT_URL?: string;
  readonly PUBLIC_FLOAT_WHATSAPP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
