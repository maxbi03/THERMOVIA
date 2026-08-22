"use client";

/**
 * Section catalogue filtrable (page /hiver) :
 * filtre par catégorie + grille de cartes.
 * Le paramètre d'URL ?cat= (mega-menu Hiver du Header) pré-applique un filtre ;
 * lu via useSearchParams → le parent doit envelopper dans <Suspense>.
 * Les profils clients (pro / sport / particuliers) sont un filtre secondaire
 * propre à la page, jamais présent dans le mega-menu.
 */
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import {
  AUDIENCE_FILTER_IDS,
  CATEGORY_IDS,
  type Audience,
  type Product,
  type Univers,
} from "@/lib/products";
import type { Dictionary } from "@/lib/i18n";

interface CatalogueSectionProps {
  univers: Univers;
  products: Product[];
  dict: Dictionary;
  /** Affiche la rangée de filtres secondaires par profil (page /hiver). */
  showAudienceFilter?: boolean;
}

export default function CatalogueSection({
  univers,
  products,
  dict,
  showAudienceFilter = false,
}: CatalogueSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>(null);

  // Les libellés de catégorie viennent du dictionnaire, les identifiants des données.
  const categories = useMemo(() => {
    const labels = dict.categories[univers] as Record<string, string>;
    return CATEGORY_IDS[univers].map((id) => ({ id, label: labels[id] ?? id }));
  }, [univers, dict]);

  // Pré-applique la catégorie passée en query string (ex. /hiver?cat=vestes
  // depuis le mega-menu). Réactif aux navigations internes successives.
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  useEffect(() => {
    if (catParam && CATEGORY_IDS[univers].includes(catParam)) {
      setSelectedCategory(catParam);
    }
  }, [catParam, univers]);

  // Produits reconditionnés masqués tant que la reprise n'existe pas
  // (même règle que sur la page d'accueil).
  const catalogue = products.filter((p) => !p.isRefurbished);
  const byCategory = selectedCategory
    ? catalogue.filter((p) => p.category === selectedCategory)
    : catalogue;

  const visible = selectedAudience
    ? byCategory.filter((p) => p.audiences.includes(selectedAudience))
    : byCategory;

  const audiencePill = (isActive: boolean) =>
    `rounded-full px-[13px] py-1.5 text-[12px] font-medium whitespace-nowrap transition-colors ${
      isActive
        ? "bg-ink text-cream"
        : "border border-ink/[.18] text-ink/60 hover:bg-ink/5 hover:text-ink"
    }`;

  return (
    <section aria-label={dict.hiver.catalogueAria} className="space-y-6">
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        allLabel={dict.common.all}
        ariaLabel={dict.categories.filterAria}
      />

      {showAudienceFilter && (
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label={dict.categories.profileAria}
        >
          <span className="font-mono text-[10.5px] font-medium tracking-[.14em] text-ink/50">
            {dict.categories.profileLabel}
          </span>
          <button
            type="button"
            onClick={() => setSelectedAudience(null)}
            aria-pressed={selectedAudience === null}
            className={audiencePill(selectedAudience === null)}
          >
            {dict.categories.profileAll}
          </button>
          {AUDIENCE_FILTER_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedAudience(id)}
              aria-pressed={selectedAudience === id}
              className={audiencePill(selectedAudience === id)}
            >
              {dict.categories.profiles[id as keyof typeof dict.categories.profiles]}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-ink/20 p-8 text-center text-ink/55">
          {dict.common.emptyCategory}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} dict={dict} />
          ))}
        </div>
      )}
    </section>
  );
}
