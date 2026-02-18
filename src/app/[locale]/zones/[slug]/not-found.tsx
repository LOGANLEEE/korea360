import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

export default async function ZoneNotFound() {
  const t = await getTranslations("zones.notFound");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <Card className="p-8 md:p-12">
          <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#experience-zones">{t("browseZones")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/">{t("backToHome")}</Link>
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
