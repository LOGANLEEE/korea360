import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HeroCta = {
  label: string
  href: string
}

export type HeroSectionProps = {
  className?: string
  backgroundSrc?: string
  backgroundAlt?: string
  headline?: string
  subtext?: string
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
}

export function HeroSection({
  className,
  backgroundSrc = "/globe.svg",
  backgroundAlt = "KOREA 360 background",
  headline = "Discover Korea in Dubai — at KOREA 360 UAE",
  subtext = "An official cultural experience hub showcasing K-culture, K-contents, products, and immersive zones — all in one place.",
  primaryCta = { label: "Explore Experience Zones", href: "#experience-zones" },
  secondaryCta = { label: "Plan Your Visit", href: "#visit" },
}: HeroSectionProps) {
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
          className="absolute inset-0 bg-linear-to-b from-background/55 via-background/85 to-background"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                {headline}
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                {subtext}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
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

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border bg-background/60 shadow-sm backdrop-blur-sm">
              <div className="absolute inset-0">
                <Image
                  src={backgroundSrc}
                  alt=""
                  fill
                  className="object-cover object-center opacity-30"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-br from-background/30 via-background/70 to-background"
                />
              </div>

              <div className="relative p-8 md:p-10">
                <h2 className="text-xl font-semibold md:text-2xl">
                  A curated gateway to Korea
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  Experience 15 themed zones — from K-food and K-beauty to
                  characters, design, and tourism — designed to be scannable,
                  immersive, and easy to navigate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
