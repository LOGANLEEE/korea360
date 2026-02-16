import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export type ZoneVisitCtaProps = {
  title?: string
  description?: string
}

export function ZoneVisitCta({
  title = "Visit KOREA 360 UAE",
  description = "Find us at Dubai Festival City Mall — browse more zones, then plan your visit.",
}: ZoneVisitCtaProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <Card className="overflow-hidden">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {description}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/#visit">Plan your visit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl"
                >
                  <Link href="/#experience-zones">Browse all zones</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="h-full rounded-2xl border bg-muted p-8 shadow-sm">
                <p className="text-xl font-semibold md:text-2xl">
                  Designed for easy discovery
                </p>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  Start with what you love, then explore nearby zones — the
                  experience is curated for clarity, breathing room, and quick
                  scanning.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default ZoneVisitCta

