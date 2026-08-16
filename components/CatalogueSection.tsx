"use client";

/**
 * Section catalogue filtrable (pages /chaleur et /froid) :
 * filtre par catégorie + grille de ProductCard.
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

  const visible = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <section aria-label="Catalogue de produits" className="space-y-6">
      <CategoryFilter
        univers={univers}
        categories={CATEGORIES[univers]}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-300 p-8 text-center text-zinc-500">
          Aucun produit d&apos;exemple dans cette catégorie pour l&apos;instant — le catalogue
          final est en cours de constitution.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
