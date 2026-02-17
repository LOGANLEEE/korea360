import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type FeatureCardProps = {
  title: string
  description: string
  href?: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  href,
  className,
}: FeatureCardProps) {
  const cardContent = (
    <Card
      className={cn(
        "h-full transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02]",
        href && "cursor-pointer",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="text-base md:text-lg">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )

  if (href) {
    const isExternal = href.startsWith("http")
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
