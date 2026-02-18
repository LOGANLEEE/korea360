import { getTranslations } from "next-intl/server"
import { FeatureCard } from "@/components/shared/FeatureCard"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

export type ZoneHighlight = {
  title: string
  description: string
}

export type ZoneHighlightsProps = {
  items: ZoneHighlight[]
}

export async function ZoneHighlights({ items }: ZoneHighlightsProps) {
  const t = await getTranslations("zones.highlights")
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold md:text-4xl">{t("title")}</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {t("description")}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-3">
              {items.map((item) => (
                <FeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ZoneHighlights

