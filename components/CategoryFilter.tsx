"use client";

/**
 * Filtre par catégorie — pilules du design 2a.
 * Actif : fond encre / texte crème ; inactif : contour fin.
 * Composant contrôlé : l'état vit dans le parent.
 */

interface CategoryFilterProps {
  categories: { id: string; label: string }[];
  selected: string | null; // null = toutes les catégories
  onSelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  const pill = (isActive: boolean) =>
    `rounded-full px-[15px] py-2 text-[12.5px] font-medium whitespace-nowrap transition-colors ${
      isActive
        ? "bg-ink text-cream"
        : "border border-ink/[.18] text-ink/60 hover:bg-ink/5 hover:text-ink"
    }`;

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par type de produit">
      <button
        type="button"
        onClick={() => onSelect(null)}
        aria-pressed={selected === null}
        className={pill(selected === null)}
      >
        Tout
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
