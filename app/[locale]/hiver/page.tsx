import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueSection from "@/components/CatalogueSection";
import Hero from "@/components/Hero";
import { resolvePage, type LocaleParams } from "@/lib/i18n";
import { getProductsByUnivers } from "@/lib/products";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.hiver.title, description: dict.meta.hiver.description };
}

/** Catalogue de l'univers HIVER (produits chauffants) — accent terracotta. */
export default async function HiverPage({ params }: LocaleParams) {
  const { dict } = await resolvePage(params);
  const products = getProductsByUnivers("hiver");

  return (
    <>
      <Hero
        variant="heat"
        eyebrow={dict.hiver.eyebrow}
        title={dict.hiver.title}
        subtitle={dict.hiver.subtitle}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {/* Suspense requis : CatalogueSection lit ?cat= via useSearchParams
            (filtre pré-appliqué depuis le mega-menu Hiver). */}
        <Suspense>
          <CatalogueSection univers="hiver" products={products} dict={dict} showAudienceFilter />
        </Suspense>
      </div>
    </>
  );
}
