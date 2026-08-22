"use client";

/**
 * Page de résultats de recherche.
 * Lit la requête dans ?q= et affiche les produits correspondants sous forme
 * de cartes (donc directement ajoutables au panier), plus les rayons qui
 * matchent — une recherche « gants » doit aussi proposer le rayon.
 */
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { searchCatalogue } from "@/lib/search";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";

export default function RechercheClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const results = useMemo(() => searchCatalogue(query, dict), [query, dict]);
  const count = results.products.length;

  return (
    <>
      <header className="border-b border-ink/[.14] pb-6">
        <p className="eyebrow-mono mb-2 text-ink/50">{dict.search.resultsTitle}</p>
        {query ? (
          <>
            <h1 className="text-[32px] font-bold tracking-[-.025em]">
              {dict.search.resultsFor} « {query} »
            </h1>
            <p className="mt-2 text-[14.5px] text-ink/[.58]">
              {count} {count === 1 ? dict.search.resultsCountOne : dict.search.resultsCountMany}
            </p>
          </>
        ) : (
          <h1 className="text-[32px] font-bold tracking-[-.025em]">{dict.search.emptyQuery}</h1>
        )}
      </header>

      {query && results.categories.length > 0 && (
        <section aria-labelledby="rayons-titre" className="mt-8">
          <h2 id="rayons-titre" className="eyebrow-mono mb-3 text-ink/50">
            {dict.search.groupCategories}
          </h2>
          <div className="flex flex-wrap gap-2">
            {results.categories.map((category) => (
              <Link
                key={category.id}
                href={localePath(locale, `/hiver?cat=${category.id}`)}
                className="rounded-full border border-ink/[.18] px-[15px] py-2 text-[12.5px] font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {query && count > 0 && (
        <section aria-labelledby="produits-titre" className="mt-8">
          <h2 id="produits-titre" className="eyebrow-mono mb-4 text-ink/50">
            {dict.search.groupProducts}
          </h2>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {results.products.map((product) => (
              <ProductCard key={product.id} product={product} dict={dict} />
            ))}
          </div>
        </section>
      )}

      {query && count === 0 && results.categories.length === 0 && (
        <div className="mt-10 rounded-lg border border-dashed border-ink/20 p-10 text-center">
          <p className="text-[15.5px] font-semibold text-ink">
            {dict.search.noResults} « {query} »
          </p>
          <p className="mt-2 text-[13.5px] text-ink/55">{dict.search.noResultsHint}</p>
          <Link
            href={localePath(locale, "/hiver")}
            className="mt-6 inline-block rounded-full bg-ink px-6 py-[13px] text-[13.5px] font-semibold text-cream transition-colors hover:bg-ink/85"
          >
            {dict.header.megaMenu.all}
          </Link>
        </div>
      )}
    </>
  );
}
