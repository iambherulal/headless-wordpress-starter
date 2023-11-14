import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const MENU_REVALIDATE_TIME = 10;
export const SEO_REVALIDATE_TIME = 10;
export const PAGE_REVALIDATE_TIME = 10;
export const POST_REVALIDATE_TIME = 10;
export const OTHER_REVALIDATE_TIME = 10;


export const isSEOEnable = process.env.WORDPRESS_PLUGIN_SEO === "true" || process.env.WORDPRESS_PLUGIN_SEO === true;
// export function isSEOEnable() {
//   return process.env.WORDPRESS_PLUGIN_SEO === "true" || process.env.WORDPRESS_PLUGIN_SEO === true;
// }

/**
 * decodeHtmlEntities
 */

export function decodeHtmlEntities(text) {
  if (typeof text !== 'string') {
    throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
  }

  let decoded = text;

  const entities = {
    '&amp;': '\u0026',
    '&quot;': '\u0022',
    '&#039;': '\u0027',
  };
  return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
}

/**
 * removeLastTrailingSlash
 */

export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

export function removeExtraSpaces(text) {
  if (typeof text !== 'string') return;
  return text.replace(/\s+/g, ' ').trim();
}