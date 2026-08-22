import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getRefurbishedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Seconde vie — équipements reconditionnés en atelier",
  description:
    "Équipements thermiques repris, révisés et testés dans notre atelier de Lausanne : garantis 1 an, à prix réduit. Reprise de votre ancien matériel contre un avoir.",
};

/** Page Seconde vie : produits reconditionnés + principe de la reprise. */
export default function SecondeViePage() {
  const products = getRefurbishedProducts();

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Seconde vie"
        title="Reconditionné en atelier, garanti 1 an"
        subtitle="Chaque équipement repris est testé, révisé (batterie, zones de chauffe, ventilation) et remis en vente à prix réduit — ou démonté pour ses pièces."
      />
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6">
        <ProductGrid products={products} />
        <p className="rounded-lg bg-surface p-5 text-center text-sm text-ink/60">
          Vous avez un équipement à faire reprendre ? Toute marque acceptée, avoir
          jusqu&apos;à CHF 60.–.{" "}
          <Link href="/contact?sujet=sav" className="font-semibold underline hover:text-ink">
            Estimer ma reprise
          </Link>
        </p>
      </div>
    </>
  );
}
