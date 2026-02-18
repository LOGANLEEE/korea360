import { getTranslations } from "next-intl/server"
import { CTASection } from "@/components/shared/CTASection"

export type ZoneVisitCtaProps = {
  title?: string
  description?: string
}

export async function ZoneVisitCta(props: ZoneVisitCtaProps) {
  const t = await getTranslations("zones.visitCta")
  const title = props.title ?? t("title")
  const description = props.description ?? t("description")
  return (
    <CTASection
      title={title}
      description={description}
      primaryCta={{ label: t("planVisit"), href: "/#visit" }}
      secondaryCta={{ label: t("browseZones"), href: "/#experience-zones" }}
      aside={{
        title: t("asideTitle"),
        description: t("asideDescription"),
      }}
    />
  )
}

export default ZoneVisitCta

