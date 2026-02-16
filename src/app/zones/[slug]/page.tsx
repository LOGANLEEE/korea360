import { notFound } from "next/navigation"

import { ZoneDetailPage } from "@/components/marketing/zones/ZoneDetailPage"
import { ZONES, ZONES_BY_SLUG } from "@/content/zones"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ZONES.map((z) => ({ slug: z.slug }))
}

export default async function ZonePage({ params }: PageProps) {
  const { slug } = await params
  const zone = ZONES_BY_SLUG[slug]

  if (!zone) notFound()

  return (
    <ZoneDetailPage
      title={zone.name}
      subtitle={zone.subtitle}
      heroImage={zone.heroImage}
      highlights={zone.highlights}
      gallery={zone.gallery}
    />
  )
}

