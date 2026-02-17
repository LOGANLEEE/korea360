import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

export type ProductCardProps = {
  title: string
  description: string
  href?: string
  ctaLabel?: string
  className?: string
}

export function ProductCard({
  title,
  description,
  href,
  ctaLabel = "View details",
  className,
}: ProductCardProps) {
  const cardContent = (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="text-base md:text-lg">
          {description}
        </CardDescription>
      </CardHeader>
      {href && (
        <CardContent className="pt-0">
          <span className="text-primary underline underline-offset-4 hover:no-underline rounded-xl inline-block">
            {ctaLabel}
          </span>
        </CardContent>
      )}
    </>
  )

  const cardClassName = cn(
    "h-full transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02] block",
    href && "cursor-pointer",
    className
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        <Card className={cardClassName}>{cardContent}</Card>
      </Link>
    )
  }

  return <Card className={cardClassName}>{cardContent}</Card>
}
