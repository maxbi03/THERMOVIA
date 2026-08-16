"use client";

/**
 * Filtre par catégorie sous forme de "pilules".
 * Composant contrôlé : l'état vit dans le parent (CatalogueSection).
 */
import type { Univers } from "@/lib/products";

interface CategoryFilterProps {
  univers: Univers;
  categories: { id: string; label: string }[];
  selected: string | null; // null = toutes les catégories
  onSelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({
  univers,
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  const activeClass =
    univers === "ete" ? "bg-cool text-white border-cool" : "bg-heat text-white border-heat";
  const inactiveClass =
    "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-500";

  const pill = (isActive: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
      isActive ? activeClass : inactiveClass
    }`;

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par type de produit">
      <button
        type="button"
        onClick={() => onSelect(null)}
        aria-pressed={selected === null}
        className={pill(selected === null)}
      >
        Tous
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onSelect(cat.id)}
          aria-pressed={selected === cat.id}
          className={pill(selected === cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
