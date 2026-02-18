import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ONGOING_EVENTS,
  UPCOMING_EVENTS,
} from "@/content/events";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@/i18n/navigation";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("events.index");
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/events",
    locale,
  });
}

export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("events.index");
  const tEvent = await getTranslations("events");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <FadeInSection className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              {t("description")}
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="rounded-xl">
            <Link href="/#visit">{t("planVisit")}</Link>
          </Button>
        </FadeInSection>

        <FadeInSection className="mt-12">
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList variant="line" className="h-11 rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="ongoing"
                className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {t("ongoing")}
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {t("upcoming")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ongoing" className="mt-8 focus-visible:outline-none">
              {ONGOING_EVENTS.length === 0 ? (
                <p className="text-base text-muted-foreground md:text-lg">
                  {t("noOngoing")}
                </p>
              ) : (
                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {ONGOING_EVENTS.map((event) => (
                    <ProductCard
                      key={event.slug}
                      title={tEvent(`${event.slug}.title`)}
                      description={tEvent(`${event.slug}.shortDescription`)}
                      href={`/events/${event.slug}`}
                      ctaLabel={t("viewDetails")}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="mt-8 focus-visible:outline-none">
              {UPCOMING_EVENTS.length === 0 ? (
                <p className="text-base text-muted-foreground md:text-lg">
                  {t("noUpcoming")}
                </p>
              ) : (
                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {UPCOMING_EVENTS.map((event) => (
                    <ProductCard
                      key={event.slug}
                      title={tEvent(`${event.slug}.title`)}
                      description={tEvent(`${event.slug}.shortDescription`)}
                      href={`/events/${event.slug}`}
                      ctaLabel={t("viewDetails")}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </FadeInSection>
      </main>
    </div>
  );
}
