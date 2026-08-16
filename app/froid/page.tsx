import type { Metadata } from "next";
import CatalogueSection from "@/components/CatalogueSection";
import Hero from "@/components/Hero";
import { getProductsByUnivers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Froid & hiver — vestes, gilets et gants chauffants",
  description:
    "Catalogue contre le froid : vestes chauffantes, gilets chauffants, gants chauffants et accessoires. Stock en Suisse, garantie et SAV local.",
};

/** Catalogue de l'univers FROID (produits chauffants) — accent orange/rouge. */
export default function FroidPage() {
  const products = getProductsByUnivers("froid");

  return (
    <>
      <Hero
        variant="heat"
        eyebrow="Univers froid & hiver"
        title="La chaleur qui vous suit partout"
        subtitle="Vestes, gilets et gants chauffants à batterie : restez efficace sur le chantier, performant à l'entraînement et confortable au quotidien, même par -10 °C."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <CatalogueSection univers="froid" products={products} />
      </div>
    </>
  );
}
