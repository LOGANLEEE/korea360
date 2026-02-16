import Link from "next/link";

import HeroSection from "@/components/marketing/HeroSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const valueProps = [
    {
      title: "Official, trusted experience",
      description:
        "A government-backed cultural hub connecting Korea and the Middle East with credibility and care.",
    },
    {
      title: "15 immersive Experience Zones",
      description:
        "K-pop, K-beauty, K-food, tourism, characters, design, and more — designed for quick scanning and deeper discovery.",
    },
    {
      title: "Visit us in Dubai",
      description:
        "Located at Dubai Festival City Mall — easy to reach, easy to explore, and perfect for families and friends.",
    },
  ];

  const zones = [
    { slug: "k-pop", name: "K-POP", blurb: "Music, idols, and fan culture." },
    {
      slug: "k-drama-cinema",
      name: "K-Drama & Cinema",
      blurb: "Stories that travel worldwide.",
    },
    { slug: "k-beauty", name: "K-Beauty", blurb: "Skincare, trends, and routines." },
    { slug: "k-food", name: "K-Food", blurb: "Tastes, snacks, and Korean flavors." },
    { slug: "k-travel", name: "K-Travel", blurb: "Plan your next Korea itinerary." },
    {
      slug: "k-characters",
      name: "K-Characters",
      blurb: "IP, cute collectibles, and collabs.",
    },
    {
      slug: "k-craft-design",
      name: "K-Craft & Design",
      blurb: "Objects, makers, and modern craft.",
    },
    {
      slug: "k-tech-lifestyle",
      name: "K-Tech & Lifestyle",
      blurb: "Smart living, gadgets, and style.",
    },
    { slug: "k-fashion", name: "K-Fashion", blurb: "Streetwear, brands, and looks." },
    { slug: "k-wellness", name: "K-Wellness", blurb: "Mindful routines and self-care." },
    { slug: "k-gaming", name: "K-Gaming", blurb: "Play, esports, and fandom." },
    {
      slug: "k-books-webtoon",
      name: "K-Books & Webtoon",
      blurb: "Comics, webtoons, and reads.",
    },
    {
      slug: "k-music-instruments",
      name: "K-Music Instruments",
      blurb: "Sounds, tradition, and rhythm.",
    },
    { slug: "k-events", name: "K-Events", blurb: "Seasonal moments and programs." },
    {
      slug: "k-community",
      name: "K-Community",
      blurb: "Workshops, meetups, and culture.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection
        backgroundSrc="/globe.svg"
        headline="Discover Korea in Dubai — at KOREA 360 UAE"
        subtext="An official cultural experience hub showcasing K-culture, K-contents, products, and immersive zones — all in one place."
        primaryCta={{ label: "Explore Experience Zones", href: "#experience-zones" }}
        secondaryCta={{ label: "Plan Your Visit", href: "#visit" }}
      />

      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  A cultural bridge between Korea and the UAE
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  KOREA 360 UAE is designed to be immersive, clear, and
                  welcoming — whether you’re visiting for the first time or
                  returning to explore something new.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-6 md:grid-cols-3">
                  {valueProps.map((item) => (
                    <Card
                      key={item.title}
                      className="h-full transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02]"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl md:text-2xl">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience-zones" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Experience Zones
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  15 categories that make K-culture easy to browse — pick a zone
                  and dive in.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <Link href="#visit">Get directions</Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {zones.map((zone) => (
                <Card
                  key={zone.name}
                  className="h-full transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02]"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl">
                      {zone.name}
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      {zone.blurb}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      variant="ghost"
                      className="rounded-xl px-0 hover:bg-transparent hover:underline"
                      asChild
                    >
                      <Link href={`/zones/${zone.slug}`}>View details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Trusted partnerships
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  In collaboration with trusted organizations supporting culture,
                  trade, tourism, design, and exports.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Korean Cultural Center (KCC)",
                      description:
                        "Promotes Korean culture and cultural exchange through various programs and events.",
                    },
                    {
                      title:
                        "Korea Agro-Fisheries & Food Trade Corporation (aT)",
                      description:
                        "Government agency promoting trade, export, and marketing of Korean food and beverages.",
                    },
                    {
                      title: "Korean Cosmetic Industry Institute (KCII)",
                      description:
                        "Promotes K-Beauty by researching ingredient safety, building global skin data, and supporting exports.",
                    },
                    {
                      title: "Korean Craft & Design Foundation (KCDF)",
                      description:
                        "Promotes Korean craft, design, and Hanbok globally while preserving cultural heritage.",
                    },
                    {
                      title: "Korea Institute of Design Promotion (KIDP)",
                      description:
                        "Promotes Korea’s design industry and strengthens design capabilities of companies.",
                    },
                    {
                      title: "Korea International Trade Association (KITA)",
                      description:
                        "Supports trade and economic development, helping companies expand internationally.",
                    },
                    {
                      title: "Korea SMEs and Startups Agency (KOSME)",
                      description:
                        "Government agency supporting the growth of SMEs and startups in Korea.",
                    },
                    {
                      title: "Korea Tourism Organization (KTO)",
                      description:
                        "Promotes tourism to Korea and strengthens its image as a travel destination.",
                    },
                    {
                      title:
                        "Korea Trade-Investment Promotion Agency (KOTRA)",
                      description:
                        "Government agency supporting trade and global expansion of Korean businesses.",
                    },
                  ].map((p) => (
                    <Card
                      key={p.title}
                      className="h-full transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02]"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl md:text-2xl">
                          {p.title}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg">
                          {p.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Card className="overflow-hidden">
              <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    Visit KOREA 360 UAE
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    Find us at Dubai Festival City Mall. Bring friends, take
                    your time, and explore zone by zone.
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-base md:text-lg font-semibold">
                        Location
                      </p>
                      <p className="mt-2 text-base text-muted-foreground md:text-lg">
                        Dubai Festival City Mall, Dubai, UAE
                      </p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold">
                        Hours
                      </p>
                      <p className="mt-2 text-base text-muted-foreground md:text-lg">
                        Daily (hours to be confirmed)
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="rounded-xl">
                      <Link href="#experience-zones">Browse zones</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-xl"
                    >
                      <Link href="https://maps.google.com" target="_blank" rel="noreferrer">
                        Open in Google Maps
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="h-full rounded-2xl border bg-muted p-8 shadow-sm">
                    <p className="text-xl md:text-2xl font-semibold">
                      Quick tip
                    </p>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">
                      Start with the zones you’re most curious about, then loop
                      back for favorites — the layout is designed for easy
                      navigation and repeat discovery.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base md:text-lg font-semibold">KOREA 360 UAE</p>
              <p className="mt-2 text-base text-muted-foreground md:text-lg">
                Official marketing & cultural experience website.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="ghost" className="rounded-xl">
                <Link href="#experience-zones">Experience Zones</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl">
                <Link href="#visit">Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
