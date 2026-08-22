import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { getDictionary, isLocale, LOCALES, LOCALE_TAGS, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import "../globals.css";

/** Polices du design 2a : Archivo (texte) + JetBrains Mono (technique). */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

/** Pré-génère les trois langues au build : /fr, /de, /it. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.layout.titleDefault,
      template: `%s | ${SITE.name}`,
    },
    description: dict.meta.layout.description,
    alternates: {
      canonical: `/${locale}`,
      // Signale aux moteurs les trois versions linguistiques de la page.
      languages: Object.fromEntries(
        LOCALES.map((l) => [LOCALE_TAGS[l], `/${l}`])
      ),
    },
  };
}

/**
 * Layout racine effectif : c'est ici que vivent <html> et <body>, parce que
 * c'est le premier endroit où la langue de la page est connue.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);

  return (
    <html lang={LOCALE_TAGS[typedLocale]} className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <CartProvider>
          <Header locale={typedLocale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer locale={typedLocale} dict={dict} />
        </CartProvider>
      </body>
    </html>
  );
}
