import { ZoneGallery, type ZoneGalleryImage } from "@/components/marketing/zones/ZoneGallery"
import { ZoneHero } from "@/components/marketing/zones/ZoneHero"
import {
  ZoneHighlights,
  type ZoneHighlight,
} from "@/components/marketing/zones/ZoneHighlights"
import { ZoneVisitCta } from "@/components/marketing/zones/ZoneVisitCta"

import type { StaticImageData } from "next/image"

export type ZoneDetailPageProps = {
  title: string
  subtitle: string
  heroImage: StaticImageData
  highlights: ZoneHighlight[]
  gallery: ZoneGalleryImage[]
}

export function ZoneDetailPage({
  title,
  subtitle,
  heroImage,
  highlights,
  gallery,
}: ZoneDetailPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ZoneHero title={title} subtitle={subtitle} heroImage={heroImage} />
      <main>
        <ZoneHighlights items={highlights} />
        <ZoneGallery images={gallery} />
        <ZoneVisitCta />
      </main>
    </div>
  )
}

export default ZoneDetailPage

