"use client";

/**
 * Section catalogue filtrable (page /hiver, ex-/ete) :
 * filtre par catégorie + grille de cartes.
 * Le paramètre d'URL ?cat= (mega-menu Hiver du Header) pré-applique un filtre ;
 * lu via useSearchParams → le parent doit envelopper dans <Suspense>.
 * Les profils clients (pro / sport / particuliers) sont un filtre secondaire
 * propre à la page, jamais présent dans le mega-menu.
 */
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { AUDIENCE_FILTERS, CATEGORIES, type Audience, type Product, type Univers } from "@/lib/products";

interface CatalogueSectionProps {
  univers: Univers;
  products: Product[];
  /** Affiche la rangée de filtres secondaires par profil (page /hiver). */
  showAudienceFilter?: boolean;
}

export default function CatalogueSection({
  univers,
  products,
  showAudienceFilter = false,
}: CatalogueSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>(null);

  const categories = CATEGORIES[univers];

  // Pré-applique la catégorie passée en query string (ex. /hiver?cat=vestes
  // depuis le mega-menu). Réactif aux navigations internes successives.
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");
  useEffect(() => {
    if (catParam && categories.some((c) => c.id === catParam)) {
      setSelectedCategory(catParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catParam]);

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
    <section aria-label="Catalogue de produits" className="space-y-6">
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {showAudienceFilter && (
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer par profil">
          <span className="font-mono text-[10.5px] font-medium tracking-[.14em] text-ink/50">
            PROFIL
          </span>
          <button
            type="button"
            onClick={() => setSelectedAudience(null)}
            aria-pressed={selectedAudience === null}
            className={audiencePill(selectedAudience === null)}
          >
            Tous
          </button>
          {AUDIENCE_FILTERS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setSelectedAudience(a.id)}
              aria-pressed={selectedAudience === a.id}
              className={audiencePill(selectedAudience === a.id)}
            >
              {a.label}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-ink/20 p-8 text-center text-ink/55">
          Aucun produit d&apos;exemple dans cette catégorie pour l&apos;instant — le catalogue
          final est en cours de constitution.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
