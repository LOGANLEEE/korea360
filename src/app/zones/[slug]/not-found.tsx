import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <Card className="p-8 md:p-12">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Zone not found
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            The zone you’re looking for doesn’t exist (or the link has changed).
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#experience-zones">Browse Experience Zones</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

