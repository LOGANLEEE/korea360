import Image, { type StaticImageData } from "next/image"

import { Card } from "@/components/ui/card"

export type ZoneGalleryImage = {
  src: StaticImageData
  alt: string
}

export type ZoneGalleryProps = {
  title?: string
  description?: string
  images: ZoneGalleryImage[]
}

export function ZoneGallery({
  title = "Gallery",
  description = "A quick look at the zone — more photos and updates can be added anytime.",
  images,
}: ZoneGalleryProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, idx) => (
            <Card
              key={`${img.alt}-${idx}`}
              className="group overflow-hidden shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02]"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ZoneGallery

