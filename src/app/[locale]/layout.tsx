import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { JsonLd } from "@/components/shared/JsonLd";
import { SetDocumentLang } from "@/components/shared/SetDocumentLang";
import { routing } from "@/i18n/routing";
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SetDocumentLang />
      <JsonLd data={[buildOrganizationJsonLd(), buildWebSiteJsonLd()]} />
      <SiteHeader />
      {children}
    </NextIntlClientProvider>
  );
}
