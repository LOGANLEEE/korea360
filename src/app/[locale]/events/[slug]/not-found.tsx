import { getTranslations } from "next-intl/server";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function EventNotFound() {
  const t = await getTranslations("events.notFound");
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <Container className="py-24 text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">{t("title")}</h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {t("description")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-xl">
            <Link href="/events">{t("viewAllEvents")}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl">
            <Link href="/">{t("backToHome")}</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
