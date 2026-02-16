import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export type ZoneHighlight = {
  title: string
  description: string
}

export type ZoneHighlightsProps = {
  items: ZoneHighlight[]
}

export function ZoneHighlights({ items }: ZoneHighlightsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold md:text-4xl">Highlights</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              A quick set of cues to guide your visit — designed to be scannable
              and easy to navigate.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-3">
              {items.map((item) => (
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
  )
}

export default ZoneHighlights

