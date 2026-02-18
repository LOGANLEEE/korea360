import { getTranslations } from "next-intl/server";

import { KOREA360_LOGO } from "@/assets/logo";
import { Container } from "@/components/shared/Container";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home" as const, href: "/" },
  { key: "experienceZones" as const, href: "/zones" },
  { key: "events" as const, href: "/events" },
  { key: "visit" as const, href: "/#visit" },
] as const;

export async function SiteHeader({ className }: { className?: string }) {
  const t = await getTranslations("nav");
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
              <Link href={item.href}>{t(item.key)}</Link>
            </Button>
          ))}
          <LanguageSwitcher className="ml-2 sm:ml-4" />
        </nav>
      </Container>
    </header>
  );
}
