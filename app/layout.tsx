import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { SITE } from "@/lib/site";
import "./globals.css";

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
    "Gilets ventilés, gilets PCM, vestes et gants chauffants : équipements de régulation thermique corporelle avec stock en Suisse et vrai service après-vente.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale}>
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
