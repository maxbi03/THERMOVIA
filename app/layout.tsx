import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { SITE } from "@/lib/site";
import "./globals.css";

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

/**
 * Layout racine : structure commune (Header / contenu / Footer),
 * fournisseur de panier et métadonnées SEO par défaut.
 * Langue : fr-CH uniquement en V1 (structure prête pour de-CH / it-CH).
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Équipements chauffants et rafraîchissants en Suisse`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Vestes, gilets et gants chauffants : équipements de régulation thermique corporelle, stock et expédition depuis la Suisse romande, pièces détachées disponibles à l'unité.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale} className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
