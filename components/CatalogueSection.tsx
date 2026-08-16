"use client";

/**
 * Section catalogue filtrable (pages /ete et /hiver) :
 * filtre par catégorie (+ pseudo-catégorie « Seconde vie ») + grille de cartes.
 */
import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, type Product, type Univers } from "@/lib/products";

interface CatalogueSectionProps {
  univers: Univers;
  products: Product[];
}

export default function CatalogueSection({ univers, products }: CatalogueSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...CATEGORIES[univers], { id: "seconde-vie", label: "Seconde vie" }];

  const visible =
    selectedCategory === "seconde-vie"
      ? products.filter((p) => p.isRefurbished)
      : selectedCategory
        ? products.filter((p) => p.category === selectedCategory)
        : products;

  return (
    <section aria-label="Catalogue de produits" className="space-y-6">
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

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
