/**
 * Site-wide config for SEO, metadata, and absolute URLs.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://korea360.ae).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://korea360.ae";

export const SITE_NAME = "KOREA 360 UAE";

export const DEFAULT_DESCRIPTION =
  "Official marketing & cultural experience website for KOREA 360 UAE at Dubai Festival City Mall. Experience K-content, K-POP, K-beauty, K-food, and 15 immersive zones.";

export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

/** Path segments without leading locale (en is as-needed, so default locale has no prefix). */
export function pathWithoutLocale(pathname: string, locale: string): string {
  const segment = pathname.replace(/^\/+/, "").split("/")[0];
  if (locale === "en" || segment !== "ko") return pathname;
  return "/" + pathname.replace(/^\/ko\/?/, "/") || "/";
}
