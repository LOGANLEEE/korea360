import { cn } from "@/lib/utils"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "main"
}

export function Section({
  as: Comp = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn("py-16 md:py-24", className)}
      {...props}
    />
  )
}
