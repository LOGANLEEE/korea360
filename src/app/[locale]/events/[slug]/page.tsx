import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { EVENTS_BY_SLUG } from "@/content/events";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import {
  buildPageMetadata,
  buildEventJsonLd,
  buildAbsoluteUrl,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(EVENTS_BY_SLUG).flatMap((slug) =>
    ["en", "ko"].map((locale) => ({ slug, locale }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const event = EVENTS_BY_SLUG[slug];
  if (!event) return {};
  setRequestLocale(locale);
  const tEvent = await getTranslations("events");
  const title = tEvent(`${slug}.title`);
  const description = tEvent(`${slug}.shortDescription`);
  return buildPageMetadata({
    title,
    description,
    path: `/events/${slug}`,
    locale,
  });
}

function formatDate(s: string, locale: string): string {
  const d = new Date(s);
  return d.toLocaleDateString(locale === "ko" ? "ko-KR" : "en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const event = EVENTS_BY_SLUG[slug];

  if (!event) notFound();

  const t = await getTranslations("events.detail");
  const tEvent = await getTranslations("events");

  const title = tEvent(`${slug}.title`);
  const description = tEvent(`${slug}.description`);
  const shortDescription = tEvent(`${slug}.shortDescription`);
  const eventUrl = buildAbsoluteUrl(`/events/${slug}`, locale);
  const jsonLd = buildEventJsonLd(
    title,
    shortDescription,
    eventUrl,
    event.startDate,
    event.endDate,
    event.location
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={jsonLd} />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="rounded-xl -ml-2">
            <Link href="/events">{t("backToEvents")}</Link>
          </Button>
        </div>

        <article className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge
              variant={event.status === "ongoing" ? "default" : "secondary"}
              className="rounded-lg"
            >
              {event.status === "ongoing" ? t("ongoing") : t("upcoming")}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {formatDate(event.startDate, locale)}
            {event.endDate && event.endDate !== event.startDate && (
              <> – {formatDate(event.endDate, locale)}</>
            )}
          </p>

          <p className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
            {description}
          </p>

          <Card className="mt-10 rounded-2xl">
            <CardHeader>
              <h2 className="text-xl font-semibold md:text-2xl">
                {t("eventDetails")}
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {event.location && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {t("location")}
                  </span>
                  <p className="mt-1 text-base">{event.location}</p>
                </div>
              )}
              {event.time && (
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {t("time")}
                  </span>
                  <p className="mt-1 text-base">{event.time}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#visit">{t("planVisit")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/events">{t("viewAllEvents")}</Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
