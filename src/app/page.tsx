import Link from "next/link";

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

const DUBAI_FESTIVAL_CITY_MAPS =
  "https://www.google.com/maps/place/KOREA+360+UAE/@25.2263551,55.3475337,15z/data=!4m6!3m5!1s0x3e5f5d900d484dd7:0x6428e4ac14e512c9!8m2!3d25.2234688!4d55.3507226!16s%2Fg%2F11xgspstpk?entry=tts&g_ep=EgoyMDI2MDIxMS4wIPu8ASoASAFQAw%3D%3D&skid=a05a73b8-415d-4f60-871f-f93ded9c30bb";

export default function Home() {
  const valueProps = [
    {
      title: "First and only K-Content & Product hub",
      description:
        "The only experience hub of its kind in the region — K-content, culture, tourism, fashion, food, beauty, and lifestyle in one place.",
    },
    {
      title: "15 immersive Experience Zones",
      description:
        "From K-POP to K-food, everything about Korea unfolds like a 360° panorama. Pick a zone and experience the uniqueness of Korean brands from all directions.",
    },
    {
      title: "Visit us in Dubai",
      description:
        "Dubai Festival City Mall, 1st Floor (Near North Parking) — easy to reach, easy to explore, and perfect for families and friends.",
    },
  ];

  const zones = ZONES.map((z) => ({
    slug: z.slug,
    name: z.name,
    blurb: z.subtitle.slice(0, 80) + (z.subtitle.length > 80 ? "…" : ""),
  }));

  return (
    <div className="relative min-h-screen text-foreground">
      <ScrollRotateBackground />
      <div className="relative z-10">
      <HeroSection
        headline="KOREA 360 UAE — A New Bridge Connecting Korea and the Middle East"
        subtext="The first and only K-Content & Product Experience Hub. Experience all of Korea — K-content, culture, tourism, fashion, food, beauty, and lifestyle — in one immersive space."
        primaryCta={{ label: "Explore Experience Zones", href: "#experience-zones" }}
        secondaryCta={{ label: "Plan Your Visit", href: "#visit" }}
      />

      <main>
        <Section>
          <Container>
            <FadeInSection className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Experience all of Korea in one place
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  KOREA 360 is where visitors can experience all of Korea —
                  K-content, culture, tourism, fashion, food, beauty, and
                  lifestyle. From K-pop to K-food, everything unfolds like a 360°
                  panorama. Experience the uniqueness of Korean brands from all
                  directions.
                </p>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  Led by the Korea Creative Content Agency (KOCCA), the leading
                  institution fostering the growth of the K-content industry —
                  from broadcasting, games, animation, characters, webtoons, and
                  music to fashion and emerging technology.
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
                  Experience Zones
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  15 zones that make K-culture easy to browse — from K-POP and
                  K-Character to K-Beauty, K-Food, K-Tourism, and more. Pick a
                  zone and dive in.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <Link href={DUBAI_FESTIVAL_CITY_MAPS} target="_blank" rel="noreferrer">
                  Get directions
                </Link>
              </Button>
            </FadeInSection>

            <FadeInSection className="mt-12 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {zones.map((zone) => (
                <ProductCard
                  key={zone.name}
                  title={zone.name}
                  description={zone.blurb}
                  href={`/zones/${zone.slug}`}
                  ctaLabel="View details"
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
                  Partner organizations
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  In collaboration with trusted organizations supporting culture,
                  trade, tourism, design, and exports across Korea and the UAE.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Korean Cultural Center (KCC)",
                      description:
                        "Promotes Korean culture and cultural exchange through various programs and events.",
                      href: "https://www.kocca.kr",
                    },
                    {
                      title:
                        "Korea Agro-Fisheries & Food Trade Corporation (aT)",
                      description:
                        "Government agency that promotes trade, export, and marketing of Korean food and beverages.",
                      href: "https://www.at.or.kr",
                    },
                    {
                      title: "Korean Cosmetic Industry Institute (KCII)",
                      description:
                        "Research organization promoting K-Beauty by researching ingredient safety, creating a global skin data bank, and supporting exports.",
                      href: "https://www.kcii.re.kr",
                    },
                    {
                      title: "Korean Craft & Design Foundation (KCDF)",
                      description:
                        "Promotes Korean craft, design, and Hanbok globally while preserving cultural heritage and fostering regional development.",
                      href: "https://www.kcdf.or.kr",
                    },
                    {
                      title: "Korea Institute of Design Promotion (KIDP)",
                      description:
                        "Promotes Korea’s design industry and strengthens design capabilities of companies.",
                      href: "https://www.kidp.or.kr",
                    },
                    {
                      title: "Korea International Trade Association (KITA)",
                      description:
                        "Non-profit organization that supports Korea's trade and economic development, aiding domestic companies' international expansion.",
                      href: "https://www.kita.net",
                    },
                    {
                      title: "Korea SMEs and Startups Agency (KOSME)",
                      description:
                        "Government agency that supports the growth and development of SMEs and startups in South Korea.",
                      href: "https://www.kosme.or.kr",
                    },
                    {
                      title: "Korea Tourism Organization (KTO)",
                      description:
                        "Government agency that promotes tourism to South Korea and enhances its image as a travel destination.",
                      href: "https://www.visitkorea.or.kr",
                    },
                    {
                      title:
                        "Korea Trade-Investment Promotion Agency (KOTRA)",
                      description:
                        "Government agency that supports trade and global expansion of Korean businesses.",
                      href: "https://www.kotra.or.kr/english/index.do",
                    },
                  ].map((p) => (
                    <FeatureCard
                      key={p.title}
                      title={p.title}
                      description={p.description}
                      href={p.href}
                    />
                  ))}
                </div>
              </div>
            </FadeInSection>
          </Container>
        </Section>

        <CTASection
          id="visit"
          title="Visit KOREA 360 UAE"
          description="Find us at Dubai Festival City Mall. Bring friends, take your time, and explore zone by zone."
          primaryCta={{ label: "Browse zones", href: "#experience-zones" }}
          secondaryCta={{
            label: "Open in Google Maps",
            href: DUBAI_FESTIVAL_CITY_MAPS,
          }}
          details={[
            {
              label: "Location",
              value: "Dubai Festival City Mall, 1st Floor (Near North Parking), Dubai, UAE",
            },
            {
              label: "Operation time",
              value: "Mon–Thu 10:00–23:00, Fri–Sun 10:00–24:00",
            },
            {
              label: "Call / WhatsApp",
              value: "+971 56 500 3577",
              href: "tel:+971565003577",
            },
            {
              label: "E-mail",
              value: "korea360.uae@kocca.kr",
              href: "mailto:korea360.uae@kocca.kr",
            },
            {
              label: "Instagram",
              value: "korea360uae",
              href: "https://www.instagram.com/korea360uae/",
            },
          ]}
          aside={{
            title: "Quick tip",
            description:
              "Start with the zones you're most curious about, then loop back for favorites — the layout is designed for easy navigation and repeat discovery.",
          }}
          mapImage={{
            src: KOREA360_MAP,
            alt: "KOREA 360 Explore Map — floor plan showing 18 Experience Zones at Dubai Festival City Mall",
            caption: "KOREA 360 Explore Map — find your way through the zones",
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
                Official marketing & cultural experience website for KOREA 360 UAE at Dubai Festival City Mall.
              </p>
            </div>
            <nav
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-1"
              aria-label="Footer navigation"
            >
              <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                <Link href="/zones">Experience Zones</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                <Link href="/events">Events</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                <Link href="/#visit">Visit</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl justify-start sm:justify-center">
                <Link
                  href="https://www.instagram.com/korea360uae/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>
              </Button>
            </nav>
          </div>
          <div className="mt-6 border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KOREA 360 UAE. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
      </div>
    </div>
  );
}
