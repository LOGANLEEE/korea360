import Link from "next/link";

import { KOREA360_LOGO } from "@/assets/logo";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience Zones", href: "/zones" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/#visit" },
] as const;

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
    >
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Logo
          src={KOREA360_LOGO}
          alt="KOREA 360 UAE – Home"
          height={36}
          className="h-9 w-auto md:h-10"
        />
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className="rounded-xl text-sm md:text-base"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
      </Container>
    </header>
  );
}
