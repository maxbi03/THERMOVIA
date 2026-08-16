import type { Metadata } from "next";
import CatalogueSection from "@/components/CatalogueSection";
import Hero from "@/components/Hero";
import { getProductsByUnivers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Chaleur & canicule — gilets ventilés, gilets PCM, ventilateurs",
  description:
    "Catalogue anti-canicule : gilets ventilés, gilets à matériau à changement de phase (PCM), ventilateurs de cou, portables et de table. Livraison depuis la Suisse.",
};

/** Catalogue de l'univers CHALEUR (produits rafraîchissants) — accent bleu/cyan. */
export default function ChaleurPage() {
  const products = getProductsByUnivers("chaleur");

  return (
    <>
      <Hero
        variant="cool"
        eyebrow="Univers chaleur & canicule"
        title="Gardez la tête froide, même en pleine canicule"
        subtitle="Gilets ventilés et PCM, ventilateurs de cou et portables : des solutions concrètes pour travailler, bouger et vivre confortablement quand le thermomètre s'emballe."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <CatalogueSection univers="chaleur" products={products} />
      </div>
    </>
  );
}
