"use client";

/**
 * Barre de recherche du header.
 *
 * Suggestions instantanées pendant la frappe (produits puis catégories),
 * navigation au clavier, et validation qui mène à la page de résultats
 * complète. Tout est local : le catalogue est déjà dans le bundle.
 */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { formatPrice } from "@/lib/site";
import { searchCatalogue } from "@/lib/search";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";

/** Nombre de produits proposés dans le panneau de suggestions. */
const SUGGESTION_LIMIT = 5;

interface SearchBarProps {
  locale: Locale;
  dict: Dictionary;
  /** Variante pleine largeur, utilisée dans le menu mobile. */
  variant?: "header" | "mobile";
  /** Appelé après une navigation, pour refermer le menu mobile. */
  onNavigate?: () => void;
}

export default function SearchBar({ locale, dict, variant = "header", onNavigate }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(
    () => searchCatalogue(query, dict, SUGGESTION_LIMIT),
    [query, dict]
  );

  /**
   * Liste à plat des suggestions, dans l'ordre d'affichage : c'est elle que
   * parcourent les flèches du clavier.
   */
  const flat = useMemo(
    () => [
      ...results.products.map((p) => ({
        key: `p-${p.id}`,
        href: localePath(locale, `/hiver?cat=${p.category}`),
      })),
      ...results.categories.map((c) => ({
        key: `c-${c.id}`,
        href: localePath(locale, `/hiver?cat=${c.id}`),
      })),
    ],
    [results, locale]
  );

  const hasQuery = query.trim().length > 0;
  const hasResults = flat.length > 0;

  // Referme le panneau au clic en dehors.
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  // Toute nouvelle frappe remet la sélection clavier à zéro.
  useEffect(() => setActiveIndex(-1), [query]);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(href);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!hasQuery) return;
    // Une suggestion sélectionnée au clavier prime sur la page de résultats.
    if (activeIndex >= 0 && flat[activeIndex]) {
      go(flat[activeIndex].href);
      return;
    }
    go(localePath(locale, `/recherche?q=${encodeURIComponent(query.trim())}`));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
      return;
    }
    if (!hasResults) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i + 1) % flat.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i <= 0 ? flat.length - 1 : i - 1));
    }
  };

  const panelOpen = open && hasQuery;
  const wrapperWidth = variant === "mobile" ? "w-full" : "w-[210px] focus-within:w-[280px]";

  return (
    <div ref={containerRef} className={`relative ${variant === "mobile" ? "w-full" : ""}`}>
      <form onSubmit={submit} role="search">
        <label htmlFor={`search-${variant}`} className="sr-only">
          {dict.search.label}
        </label>
        <input
          id={`search-${variant}`}
          type="search"
          value={query}
          autoComplete="off"
          placeholder={dict.search.placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={panelOpen}
          aria-controls={`search-panel-${variant}`}
          aria-autocomplete="list"
          className={`rounded-full border border-ink/20 bg-transparent px-4 py-2 text-[13px] transition-all placeholder:text-ink/45 focus:border-cool focus:outline-none ${wrapperWidth}`}
        />
      </form>

      {panelOpen && (
        <div
          id={`search-panel-${variant}`}
          role="listbox"
          aria-label={dict.search.suggestionsAria}
          className={`absolute right-0 z-50 mt-2 rounded-lg border border-ink/[.12] bg-paper p-2 shadow-[0_18px_44px_rgba(23,24,26,.14)] ${
            variant === "mobile" ? "left-0" : "w-[340px]"
          }`}
        >
          {!hasResults ? (
            <div className="px-3 py-4">
              <p className="text-[13.5px] font-semibold text-ink">
                {dict.search.noResults} « {query.trim()} »
              </p>
              <p className="mt-1.5 text-[12.5px] text-ink/55">{dict.search.noResultsHint}</p>
            </div>
          ) : (
            <>
              {results.products.length > 0 && (
                <>
                  <p className="px-3 pb-1 pt-2 font-mono text-[10px] font-semibold tracking-[.12em] text-ink/45">
                    {dict.search.groupProducts}
                  </p>
                  {results.products.map((product, i) => (
                    <Link
                      key={product.id}
                      href={localePath(locale, `/hiver?cat=${product.category}`)}
                      role="option"
                      aria-selected={activeIndex === i}
                      onClick={() => go(localePath(locale, `/hiver?cat=${product.category}`))}
                      className={`flex items-baseline justify-between gap-3 rounded-md px-3 py-2 transition-colors hover:bg-ink/5 ${
                        activeIndex === i ? "bg-ink/5" : ""
                      }`}
                    >
                      <span className="text-[13.5px] font-medium text-ink">{product.name}</span>
                      <span className="whitespace-nowrap font-mono text-[11px] text-ink/50">
                        {formatPrice(product.price)}
                      </span>
                    </Link>
                  ))}
                </>
              )}

              {results.categories.length > 0 && (
                <>
                  <p className="px-3 pb-1 pt-3 font-mono text-[10px] font-semibold tracking-[.12em] text-ink/45">
                    {dict.search.groupCategories}
                  </p>
                  {results.categories.map((category, i) => {
                    const index = results.products.length + i;
                    return (
                      <Link
                        key={category.id}
                        href={localePath(locale, `/hiver?cat=${category.id}`)}
                        role="option"
                        aria-selected={activeIndex === index}
                        onClick={() => go(localePath(locale, `/hiver?cat=${category.id}`))}
                        className={`block rounded-md px-3 py-2 text-[13.5px] text-ink/80 transition-colors hover:bg-ink/5 ${
                          activeIndex === index ? "bg-ink/5" : ""
                        }`}
                      >
                        {category.label}
                      </Link>
                    );
                  })}
                </>
              )}

              <button
                type="button"
                onClick={() =>
                  go(localePath(locale, `/recherche?q=${encodeURIComponent(query.trim())}`))
                }
                className="mt-1 block w-full border-t border-ink/[.1] px-3 pb-1.5 pt-3 text-left text-[12.5px] font-semibold text-ink/60 transition-colors hover:text-ink"
              >
                {dict.search.seeAll} →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
