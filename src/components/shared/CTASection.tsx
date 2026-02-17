import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "./Container"
import { FadeInSection } from "./FadeInSection"
import { Section } from "./Section"

export type CTASectionProps = {
  id?: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  aside?: { title: string; description: string }
  details?: Array<{
    label: string
    value: string
    /** If set, value is rendered as a link (e.g. tel:, mailto:, https:) */
    href?: string
  }>
  /** Optional map or hero image shown below the main content, e.g. explore map */
  mapImage?: { src: StaticImageData; alt: string; caption?: string }
  children?: ReactNode
  className?: string
}

export function CTASection({
  id,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
  details,
  mapImage,
  children,
  className,
}: CTASectionProps) {
  return (
    <Section id={id} className={className}>
      <Container>
        <FadeInSection>
        <Card className="overflow-hidden">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {description}
              </p>

              {details && details.length > 0 && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {details.map(({ label, value, href }) => (
                    <div key={label}>
                      <p className="text-base font-semibold md:text-lg">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-2 inline-block text-base text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline md:text-lg"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base text-muted-foreground md:text-lg">
                          {value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  {primaryCta && (
                    <Button asChild size="lg" className="rounded-xl">
                      <Link href={primaryCta.href}>{primaryCta.label}</Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-xl"
                    >
                      <Link
                        href={secondaryCta.href}
                        target={
                          secondaryCta.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          secondaryCta.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {secondaryCta.label}
                      </Link>
                    </Button>
                  )}
                </div>
              )}

              {children}
            </div>

            {aside && (
              <div className="lg:col-span-4">
                <Card className="h-full rounded-2xl border bg-muted p-8 shadow-sm">
                  <p className="text-xl font-semibold md:text-2xl">
                    {aside.title}
                  </p>
                  <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    {aside.description}
                  </p>
                </Card>
              </div>
            )}
          </div>

          {mapImage && (
            <div className="border-t px-8 pb-8 pt-2 md:px-12 md:pb-12 md:pt-4">
              <div className="relative w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                <Image
                  src={mapImage.src}
                  alt={mapImage.alt}
                  width={mapImage.src.width}
                  height={mapImage.src.height}
                  className="w-full object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
              {mapImage.caption && (
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  {mapImage.caption}
                </p>
              )}
            </div>
          )}
        </Card>
        </FadeInSection>
      </Container>
    </Section>
  )
}
