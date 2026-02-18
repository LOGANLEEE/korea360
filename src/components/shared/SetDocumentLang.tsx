"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

/**
 * Sets document.documentElement.lang to the active locale for SEO and a11y.
 * Rendered inside [locale] layout so useLocale() is available.
 */
export function SetDocumentLang() {
  const locale = useLocale();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "ko" ? "ko" : "en";
    }
  }, [locale]);

  return null;
}
