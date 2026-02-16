import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ZoneHeroProps = {
  className?: string
  title: string
  subtitle: string
  heroImage: StaticImageData
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function ZoneHero({
  className,
  title,
  subtitle,
  heroImage,
  primaryCta = { label: "Back to Experience Zones", href: "/#experience-zones" },
  secondaryCta = { label: "Plan Your Visit", href: "/#visit" },
}: ZoneHeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-background/40 via-background/80 to-background"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={cn(
                  "rounded-xl bg-background/60 shadow-sm backdrop-blur-sm",
                  "transition-all duration-200 ease-in-out hover:bg-accent hover:shadow-md"
                )}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border bg-background/60 shadow-sm backdrop-blur-sm">
              <div className="absolute inset-0">
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  className="object-cover object-center opacity-25"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-br from-background/30 via-background/70 to-background"
                />
              </div>
              <div className="relative p-8 md:p-10">
                <p className="text-xl font-semibold md:text-2xl">
                  Explore the zone
                </p>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  Discover curated highlights, a quick gallery, and what to look
                  for when you visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZoneHero

