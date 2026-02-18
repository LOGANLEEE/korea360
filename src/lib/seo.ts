import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/config/site";

/**
 * Build absolute URL for a path. Use for canonical, openGraph.url, alternates.
 * With localePrefix "as-needed", en uses no prefix; ko uses /ko.
 */
export function buildAbsoluteUrl(path: string, locale: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const pathNorm = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ko") {
    const withoutLeadingSlash = pathNorm.replace(/^\//, "");
    const withKo = withoutLeadingSlash ? `/ko/${withoutLeadingSlash}` : "/ko";
    return `${base}${withKo}`;
  }
  return `${base}${pathNorm}`;
}

/** Path for a route without locale (for alternates we'll add /ko when needed). */
export function pathForLocale(path: string, locale: string): string {
  if (locale === "en") return path || "/";
  return path === "/" || !path ? "/ko" : `/ko${path}`;
}

export interface PageMeta {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  image?: string | null;
  noIndex?: boolean;
}

/**
 * Build Next.js Metadata for a page. Use for generateMetadata().
 */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  locale = "en",
  image = null,
  noIndex = false,
}: PageMeta): Metadata {
  const canonicalUrl = buildAbsoluteUrl(path, locale);
  const ogImage = image ?? `${SITE_URL}/og.png`;

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: buildAbsoluteUrl(pathForLocale(path, "en"), "en"),
        ko: buildAbsoluteUrl(pathForLocale(path, "ko"), "ko"),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_AE",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };

  return metadata;
}

// ——— JSON-LD (AI-SEO) ———

export interface OrganizationJsonLd {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  description: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    telephone: string;
    email: string;
    contactType: string;
    areaServed: string;
  };
}

export function buildOrganizationJsonLd(): OrganizationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    sameAs: ["https://www.instagram.com/korea360uae/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-56-500-3577",
      email: "korea360.uae@kocca.kr",
      contactType: "customer service",
      areaServed: "AE",
    },
  };
}

export interface WebSiteJsonLd {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: ["en", "ko"];
  publisher: { "@id": string };
}

export function buildWebSiteJsonLd(): WebSiteJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: ["en", "ko"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface PlaceJsonLd {
  "@context": "https://schema.org";
  "@type": "Place";
  name: string;
  description: string;
  url: string;
  image?: string;
  containedInPlace?: { "@type": "Place"; name: string };
}

export function buildZonePlaceJsonLd(
  name: string,
  description: string,
  url: string,
  image?: string
): PlaceJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name,
    description,
    url,
    ...(image && { image }),
    containedInPlace: { "@type": "Place", name: SITE_NAME },
  };
}

export interface EventJsonLd {
  "@context": "https://schema.org";
  "@type": "Event";
  name: string;
  description: string;
  url: string;
  startDate: string;
  endDate?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
  location?: { "@type": "Place"; name: string };
}

export function buildEventJsonLd(
  name: string,
  description: string,
  url: string,
  startDate: string,
  endDate: string,
  location?: string
): EventJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    url,
    startDate,
    endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(location && {
      location: { "@type": "Place", name: location },
    }),
  };
}
