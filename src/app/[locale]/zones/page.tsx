import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ZONES } from "@/content/zones";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { Link } from "@/i18n/navigation";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("zones.index");
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/zones",
    locale,
  });
}

export default async function ZonesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("zones.index");
  const tZone = await getTranslations("zones");

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

        <FadeInSection className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {ZONES.map((z) => (
            <Card
              key={z.slug}
              className="h-full transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02]"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {tZone(`${z.slug}.name`)}
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  {tZone(`${z.slug}.subtitle`)}
                </CardDescription>
                <div className="pt-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-xl px-0 hover:bg-transparent hover:underline"
                  >
                    <Link href={`/zones/${z.slug}`}>{t("viewDetails")}</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </FadeInSection>
      </main>
    </div>
  );
}
