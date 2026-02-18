import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import KOREA360_MAP from "@/assets/KOREA360_MAP2.png";
import { KOREA360_LOGO } from "@/assets/logo";
import HeroSection from "@/components/marketing/HeroSection";
import { ScrollRotateBackground } from "@/components/marketing/ScrollRotateBackground";
import {
  CTASection,
  Container,
  FadeInSection,
  FeatureCard,
  Logo,
  ProductCard,
  Section,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { ZONES } from "@/content/zones";
import { Link as I18nLink } from "@/i18n/navigation";

const DUBAI_FESTIVAL_CITY_MAPS =
  "https://www.google.com/maps/place/KOREA+360+UAE/@25.2263551,55.3475337,15z/data=!4m6!3m5!1s0x3e5f5d900d484dd7:0x6428e4ac14e512c9!8m2!3d25.2234688!4d55.3507226!16s%2Fg%2F11xgspstpk?entry=tts&g_ep=EgoyMDI2MDIxMS4wIPu8ASoASAFQAw%3D%3D&skid=a05a73b8-415d-4f60-871f-f93ded9c30bb";

const PARTNER_KEYS = [
  "kcc",
  "at",
  "kcii",
  "kcdf",
  "kidp",
  "kita",
  "kosme",
  "kto",
  "kotra",
] as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tFooter = await getTranslations("home.footer");
  const { buildPageMetadata } = await import("@/lib/seo");
  return buildPageMetadata({
    title: t("hero.headline"),
    description: tFooter("tagline"),
    path: "/",
    locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tZones = await getTranslations("home.experienceZones");
  const tZonesNs = await getTranslations("zones");
  const tPartners = await getTranslations("home.partners");
  const tPartnersList = await getTranslations("home.partnersList");
  const tVisit = await getTranslations("home.visit");
  const tFooter = await getTranslations("home.footer");

  const valueProps = [
    { title: t("valueProp1.title"), description: t("valueProp1.description") },
    { title: t("valueProp2.title"), description: t("valueProp2.description") },
    { title: t("valueProp3.title"), description: t("valueProp3.description") },
  ];

  const zones = ZONES.map((z) => {
    const name = tZonesNs(`${z.slug}.name`);
    const subtitle = tZonesNs(`${z.slug}.subtitle`);
    const blurb = subtitle.slice(0, 80) + (subtitle.length > 80 ? "…" : "");
    return { slug: z.slug, name, blurb };
  });

  return (
    <div className="relative min-h-screen text-foreground">
      <ScrollRotateBackground />
      <div className="relative z-10">
        <HeroSection
          headline={t("hero.headline")}
          subtext={t("hero.subtext")}
          primaryCta={{ label: t("hero.primaryCta"), href: "#experience-zones" }}
          secondaryCta={{ label: t("hero.secondaryCta"), href: "#visit" }}
        />

        <main>
          <Section>
            <Container>
              <FadeInSection className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    {t("experienceAll.title")}
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    {t("experienceAll.body1")}
                  </p>
                  <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    {t("experienceAll.body2")}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid gap-6 md:grid-cols-3">
                    {valueProps.map((item) => (
                      <FeatureCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                      />
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </Container>
          </Section>

          <Section id="experience-zones">
            <Container>
              <FadeInSection className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    {tZones("title")}
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    {tZones("description")}
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl"
                >
                  <a href={DUBAI_FESTIVAL_CITY_MAPS} target="_blank" rel="noreferrer">
                    {tZones("getDirections")}
                  </a>
                </Button>
              </FadeInSection>

              <FadeInSection className="mt-12 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {zones.map((zone) => (
                  <ProductCard
                    key={zone.slug}
                    title={zone.name}
                    description={zone.blurb}
                    href={`/zones/${zone.slug}`}
                    ctaLabel={tZonesNs("index.viewDetails")}
                  />
                ))}
              </FadeInSection>
            </Container>
          </Section>

          <Section>
            <Container>
              <FadeInSection className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    {tPartners("title")}
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    {tPartners("description")}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {PARTNER_KEYS.map((key) => (
                      <FeatureCard
                        key={key}
                        title={tPartnersList(`${key}.title`)}
                        description={tPartnersList(`${key}.description`)}
                        href={
                          key === "kcc"
                            ? "https://www.kocca.kr"
                            : key === "at"
                              ? "https://www.at.or.kr"
                              : key === "kcii"
                                ? "https://www.kcii.re.kr"
                                : key === "kcdf"
                                  ? "https://www.kcdf.or.kr"
                                  : key === "kidp"
                                    ? "https://www.kidp.or.kr"
                                    : key === "kita"
                                      ? "https://www.kita.net"
                                      : key === "kosme"
                                        ? "https://www.kosme.or.kr"
                                        : key === "kto"
                                          ? "https://www.visitkorea.or.kr"
                                          : "https://www.kotra.or.kr/english/index.do"
                        }
                      />
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </Container>
          </Section>

          <CTASection
            id="visit"
            title={tVisit("title")}
            description={tVisit("description")}
            primaryCta={{ label: tVisit("primaryCta"), href: "#experience-zones" }}
            secondaryCta={{
              label: tVisit("secondaryCta"),
              href: DUBAI_FESTIVAL_CITY_MAPS,
            }}
            details={[
              { label: tVisit("location"), value: tVisit("locationValue") },
              {
                label: tVisit("operationTime"),
                value: tVisit("operationTimeValue"),
              },
              {
                label: tVisit("callWhatsApp"),
                value: "+971 56 500 3577",
                href: "tel:+971565003577",
              },
              {
                label: tVisit("email"),
                value: "korea360.uae@kocca.kr",
                href: "mailto:korea360.uae@kocca.kr",
              },
              {
                label: tVisit("instagram"),
                value: "korea360uae",
                href: "https://www.instagram.com/korea360uae/",
              },
            ]}
            aside={{
              title: tVisit("asideTitle"),
              description: tVisit("asideDescription"),
            }}
            mapImage={{
              src: KOREA360_MAP,
              alt: t("mapAlt"),
              caption: tVisit("mapCaption"),
            }}
          />
        </main>

        <footer className="border-t bg-muted/30">
          <Container className="py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-3">
                <Logo
                  src={KOREA360_LOGO}
                  alt="KOREA 360 UAE"
                  height={32}
                  className="h-8 w-auto md:h-9"
                />
                <p className="max-w-sm text-base text-muted-foreground md:text-lg">
                  {tFooter("tagline")}
                </p>
              </div>
              <nav
                className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-1"
                aria-label="Footer navigation"
              >
                <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                  <I18nLink href="/zones">{tFooter("experienceZones")}</I18nLink>
                </Button>
                <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                  <I18nLink href="/events">{tFooter("events")}</I18nLink>
                </Button>
                <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                  <I18nLink href="/#visit">{tFooter("visit")}</I18nLink>
                </Button>
                <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                  <a
                    href="https://www.instagram.com/korea360uae/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {tFooter("instagram")}
                  </a>
                </Button>
              </nav>
            </div>
            <div className="mt-6 border-t pt-6">
              <p className="text-sm text-muted-foreground">
                {tFooter("copyright", { year: new Date().getFullYear() })}
              </p>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

