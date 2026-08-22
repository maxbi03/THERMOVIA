import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueSection from "@/components/CatalogueSection";
import Hero from "@/components/Hero";
import { getProductsByUnivers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Hiver — vestes, gilets et gants chauffants",
  description:
    "Catalogue hiver : vestes chauffantes, gilets chauffants, gants chauffants et accessoires. Stock en Suisse, garantie et SAV local.",
};

/** Catalogue de l'univers HIVER (produits chauffants) — accent orange/rouge. */
export default function HiverPage() {
  const products = getProductsByUnivers("hiver");

  return (
    <>
      <Hero
        variant="heat"
        eyebrow="Univers hiver"
        title="La chaleur qui vous suit partout"
        subtitle="Vestes, gilets et gants chauffants à batterie : restez efficace sur le chantier, performant à l'entraînement et confortable au quotidien, même par -10 °C."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Suspense requis : CatalogueSection lit ?cat= via useSearchParams
            (filtre pré-appliqué depuis le mega-menu Hiver). */}
        <Suspense>
          <CatalogueSection univers="hiver" products={products} showAudienceFilter />
        </Suspense>
      </div>
    </>
  );
}
