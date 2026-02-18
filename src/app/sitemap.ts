import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { ZONES } from "@/content/zones";
import { EVENTS_BY_SLUG } from "@/content/events";

const LOCALES = ["en", "ko"] as const;

function pathForLocale(path: string, locale: string): string {
  if (locale === "en") return path || "/";
  return path === "/" || !path ? "/ko" : `/ko${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  const paths: { path: string; priority?: number; changeFrequency?: "weekly" | "daily" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/zones", priority: 0.9, changeFrequency: "weekly" },
    { path: "/events", priority: 0.9, changeFrequency: "weekly" },
  ];

  ZONES.forEach((z) => {
    paths.push({ path: `/zones/${z.slug}`, priority: 0.8, changeFrequency: "monthly" });
  });
  Object.keys(EVENTS_BY_SLUG).forEach((slug) => {
    paths.push({ path: `/events/${slug}`, priority: 0.8, changeFrequency: "weekly" });
  });

  for (const locale of LOCALES) {
    for (const { path, priority = 0.7, changeFrequency = "monthly" } of paths) {
      const segment = pathForLocale(path, locale);
      entries.push({
        url: `${base}${segment}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }

  return entries;
}
