import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

// import mainAtrium1 from "@/assets/14.Main_atrium_photo/IMG_8753.jpg"
import mainAtrium1 from "@/assets/15.Vivid360_photo/IMG_8834.jpg";

import mainHall4 from "@/assets/mainHall/4.jpg";


/** Distinct image for the Experience Hub card (Main Atrium, not main hall) */
const HERO_CARD_IMAGE = mainAtrium1;

type HeroCta = {
  label: string;
  href: string;
};

export type HeroSectionProps = {
  className?: string;
  backgroundSrc?: StaticImageData | string;
  backgroundAlt?: string;
  headline?: string;
  subtext?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

export function HeroSection({
  className,
  backgroundSrc = mainHall4,
  backgroundAlt = "KOREA 360 main hall",
  headline = "Discover Korea in Dubai — at KOREA 360 UAE",
  subtext = "An official cultural experience hub showcasing K-culture, K-contents, products, and immersive zones — all in one place.",
  primaryCta = { label: "Explore Experience Zones", href: "#experience-zones" },
  secondaryCta = { label: "Plan Your Visit", href: "#visit" },
}: HeroSectionProps) {
  const cardImage = HERO_CARD_IMAGE;

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        "bg-background text-foreground",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-background/55 via-background/45 to-background"
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="max-w-2xl space-y-6">
              <div className="animate-fade-in-up animation-delay-0">
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                  {headline}
                </h1>
              </div>
              <div className="animate-fade-in-up animation-delay-75">
                <p className="text-base text-muted-foreground md:text-lg">
                  {subtext}
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-150 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl shadow-sm transition-all duration-200 ease-in-out hover:shadow-md sm:w-auto"
                >
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={cn(
                    "rounded-xl bg-background/60 shadow-sm backdrop-blur-sm",
                    "transition-all duration-200 ease-in-out hover:bg-accent hover:shadow-md sm:w-auto"
                  )}
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200 lg:col-span-5">
            <Card
              className={cn(
                "relative overflow-hidden rounded-2xl border shadow-md",
                "bg-background/80 backdrop-blur-sm",
                "transition-all duration-200 ease-in-out hover:shadow-lg"
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={cardImage}
                  alt=""
                  fill
                  className="object-cover object-center opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-br from-background/50 via-background/80 to-background"
                />
              </div>

              <div className="relative flex flex-col gap-8 p-8 md:p-10">
                <div className="space-y-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    Experience Hub
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    A curated gateway to Korea
                  </h2>
                  <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                    Experience 15 themed zones — from K-food and K-beauty to
                    characters, design, and tourism — designed to be scannable,
                    immersive, and easy to navigate.
                  </p>
                </div>
                <div className="border-t border-border/60 pt-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Explore
                  </p>
                  <ul
                    className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground"
                    aria-hidden
                  >
                    {["K-food", "K-beauty", "K-POP", "Design", "Tourism"].map(
                      (tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-border/60 bg-background/40 px-3 py-1.5 font-medium backdrop-blur-sm"
                        >
                          {tag}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
