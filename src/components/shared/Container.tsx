import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto max-w-7xl px-6 md:px-8", className)}
      {...props}
    />
  )
}
