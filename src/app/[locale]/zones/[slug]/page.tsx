import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { ZoneDetailPage } from "@/components/marketing/zones/ZoneDetailPage";
import { JsonLd } from "@/components/shared/JsonLd";
import { ZONES, ZONES_BY_SLUG } from "@/content/zones";
import { buildPageMetadata, buildZonePlaceJsonLd, buildAbsoluteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return ZONES.flatMap((z) =>
    ["en", "ko"].map((locale) => ({ slug: z.slug, locale }))
  );
}

function getZoneMeta(slug: string, locale: string) {
  const zone = ZONES_BY_SLUG[slug];
  if (!zone) return null;
  return { zone, slug };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const meta = getZoneMeta(slug, locale);
  if (!meta) return {};
  setRequestLocale(locale);
  const t = await getTranslations("zones");
  const messages = await getMessages();
  const zoneMessages = (messages.zones as Record<string, { name?: string; subtitle?: string }>)?.[slug];
  const title = zoneMessages?.name ?? t(`${slug}.name`);
  const subtitle = zoneMessages?.subtitle ?? t(`${slug}.subtitle`);
  return buildPageMetadata({
    title,
    description: subtitle,
    path: `/zones/${slug}`,
    locale,
  });
}

export default async function ZonePage({ params }: PageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const zone = ZONES_BY_SLUG[slug];

  if (!zone) notFound();

  const t = await getTranslations("zones");
  const messages = await getMessages();
  const zoneMessages = (messages.zones as Record<string, { name?: string; subtitle?: string; highlights?: Array<{ title: string; description: string }> }>)?.[slug];
  const title = zoneMessages?.name ?? t(`${slug}.name`);
  const subtitle = zoneMessages?.subtitle ?? t(`${slug}.subtitle`);
  const highlights = Array.isArray(zoneMessages?.highlights)
    ? zoneMessages.highlights
    : zone.highlights;

  const zoneUrl = buildAbsoluteUrl(`/zones/${slug}`, locale);
  const jsonLd = buildZonePlaceJsonLd(title, subtitle, zoneUrl);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ZoneDetailPage
        title={title}
        subtitle={subtitle}
        heroImage={zone.heroImage}
        highlights={highlights}
        gallery={zone.gallery}
      />
    </>
  );
}
