"use client"

import Image, { type StaticImageData } from "next/image"
import { useState } from "react"

import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

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
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)
  const previewImage = previewIndex !== null ? images[previewIndex] : null

  return (
    <Section>
      <Container>
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
              role="button"
              tabIndex={0}
              className="group cursor-pointer overflow-hidden shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02] focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => setPreviewIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setPreviewIndex(idx)
                }
              }}
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
      </Container>

      <Dialog open={previewIndex !== null} onOpenChange={(open) => !open && setPreviewIndex(null)}>
        <DialogContent
          className="max-h-[90vh] max-w-4xl border-0 bg-black/95 p-0 shadow-lg [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:hover:text-white/90"
          showCloseButton={true}
        >
          {previewImage && (
            <>
              <DialogTitle className="sr-only">{previewImage.alt}</DialogTitle>
              <div className="relative flex max-h-[85vh] w-full items-center justify-center p-4">
                <div className="relative aspect-auto max-h-[80vh] w-full">
                  <Image
                    src={previewImage.src}
                    alt={previewImage.alt}
                    width={previewImage.src.width}
                    height={previewImage.src.height}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                </div>
              </div>
              <p className="border-t border-white/10 px-4 py-3 text-center text-sm text-white/90">
                {previewImage.alt}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  )
}

export default ZoneGallery

