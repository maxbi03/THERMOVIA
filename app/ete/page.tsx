import type { Metadata } from "next";
import CatalogueSection from "@/components/CatalogueSection";
import Hero from "@/components/Hero";
import { getProductsByUnivers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Été — gilets ventilés, gilets PCM, ventilateurs",
  description:
    "Catalogue été anti-canicule : gilets ventilés, gilets à matériau à changement de phase (PCM), ventilateurs de cou, portables et de table. Livraison depuis la Suisse.",
};

/** Catalogue de l'univers ÉTÉ (produits rafraîchissants) — accent bleu/cyan. */
export default function EtePage() {
  const products = getProductsByUnivers("ete");

  return (
    <>
      <Hero
        variant="cool"
        eyebrow="Univers été"
        title="Gardez la tête froide, même en pleine canicule"
        subtitle="Gilets ventilés et PCM, ventilateurs de cou et portables : des solutions concrètes pour travailler, bouger et vivre confortablement quand le thermomètre s'emballe."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <CatalogueSection univers="ete" products={products} />
      </div>
    </>
  );
}
