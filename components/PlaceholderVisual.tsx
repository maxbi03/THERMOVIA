import type { Univers } from "@/lib/products";

/**
 * Visuel produit temporaire (V1) : bloc coloré + icône SVG selon la catégorie.
 * Sera remplacé par de vraies photos via le champ `imageUrl` des produits.
 */

/** Icône SVG simple par famille de produit. */
function CategoryIcon({ category }: { category: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  // Ventilateurs (cou, portable, table) : hélice stylisée
  if (category.startsWith("ventilateur")) {
    return (
      <svg viewBox="0 0 48 48" className="h-16 w-16" aria-hidden="true" {...common}>
        <circle cx="24" cy="24" r="3" />
        <path d="M24 21c0-6-2-10 3-13s10 2 7 8-7 5-10 5Z" />
        <path d="M21 24c-6 0-10 2-13-3s2-10 8-7 5 7 5 10Z" />
        <path d="M24 27c0 6 2 10-3 13s-10-2-7-8 7-5 10-5Z" />
        <path d="M27 24c6 0 10-2 13 3s-2 10-8 7-5-7-5-10Z" />
      </svg>
    );
  }

  // Gants
  if (category.startsWith("gants")) {
    return (
      <svg viewBox="0 0 48 48" className="h-16 w-16" aria-hidden="true" {...common}>
        <path d="M16 42V22l-5-8c-1.5-2.5 2-5 4-3l5 6V9a2.5 2.5 0 0 1 5 0v8-11a2.5 2.5 0 0 1 5 0v11-8a2.5 2.5 0 0 1 5 0v10 -5a2.5 2.5 0 0 1 5 0v18c0 6-4 10-12 10s-12-4-12-10Z" />
      </svg>
    );
  }

  // Semelles / accessoires chauffants
  if (category === "accessoire-chauffant") {
    return (
      <svg viewBox="0 0 48 48" className="h-16 w-16" aria-hidden="true" {...common}>
        <path d="M14 6c8 0 12 6 12 14 0 6 8 6 8 14 0 5-4 8-10 8s-14-3-14-10V12c0-4 1-6 4-6Z" />
        <path d="M12 32h20" />
      </svg>
    );
  }

  // Serviettes / accessoires rafraîchissants : goutte + vagues
  if (category === "accessoire-rafraichissant") {
    return (
      <svg viewBox="0 0 48 48" className="h-16 w-16" aria-hidden="true" {...common}>
        <path d="M24 6s11 12 11 20a11 11 0 0 1-22 0C13 18 24 6 24 6Z" />
        <path d="M10 42c3-2 6-2 9 0s6 2 9 0 6-2 10 0" />
      </svg>
    );
  }

  // Gilets et vestes (défaut) : silhouette de gilet
  return (
    <svg viewBox="0 0 48 48" className="h-16 w-16" aria-hidden="true" {...common}>
      <path d="M17 6c2 2 4 3 7 3s5-1 7-3l6 4v32a2 2 0 0 1-2 2h-7V26l-4-6-4 6v18h-7a2 2 0 0 1-2-2V10l6-4Z" />
      <path d="M24 9v11" />
    </svg>
  );
}

interface PlaceholderVisualProps {
  univers: Univers;
  category: string;
  /** Texte alternatif descriptif (accessibilité). */
  alt: string;
}

export default function PlaceholderVisual({ univers, category, alt }: PlaceholderVisualProps) {
  // Univers "ete" (rafraîchissement) → dégradé bleu ; "hiver" (chauffage) → dégradé orange.
  const gradient =
    univers === "ete"
      ? "from-sky-100 to-cyan-50 text-cool"
      : "from-orange-100 to-amber-50 text-heat";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex aspect-[4/3] w-full items-center justify-center rounded-t-xl bg-gradient-to-br ${gradient}`}
    >
      <CategoryIcon category={category} />
    </div>
  );
}
