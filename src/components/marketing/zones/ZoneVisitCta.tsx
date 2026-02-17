import { CTASection } from "@/components/shared/CTASection"

export type ZoneVisitCtaProps = {
  title?: string
  description?: string
}

export function ZoneVisitCta({
  title = "Visit KOREA 360 UAE",
  description = "Find us at Dubai Festival City Mall — browse more zones, then plan your visit.",
}: ZoneVisitCtaProps) {
  return (
    <CTASection
      title={title}
      description={description}
      primaryCta={{ label: "Plan your visit", href: "/#visit" }}
      secondaryCta={{ label: "Browse all zones", href: "/#experience-zones" }}
      aside={{
        title: "Designed for easy discovery",
        description:
          "Start with what you love, then explore nearby zones — the experience is curated for clarity, breathing room, and quick scanning.",
      }}
    />
  )
}

export default ZoneVisitCta

