"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "en" as const, label: "EN" },
  { code: "ko" as const, label: "한국어" },
] as const;

type Props = { className?: string };

export function LanguageSwitcher({ className }: Props) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-1", className)} role="group" aria-label="Language">
      {LOCALES.map(({ code, label }) => (
        <Button
          key={code}
          asChild
          variant={locale === code ? "secondary" : "ghost"}
          size="sm"
          className={cn(
            "rounded-xl min-w-[2.25rem]",
            locale === code && "font-semibold"
          )}
        >
          <Link href={pathname} locale={code}>
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
