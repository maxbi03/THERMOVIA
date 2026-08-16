"use client";

/**
 * Carte produit : visuel placeholder, badge "Exemple", prix CHF,
 * bouton "Ajouter au panier" (état local — pas de paiement en V1).
 */
import { useState } from "react";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/site";
import { getCategoryLabel, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.id);
    // Retour visuel bref sur le bouton
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const accent =
    product.univers === "ete"
      ? "bg-cool hover:bg-cool-dark"
      : "bg-heat hover:bg-heat-dark";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-105">
          <PlaceholderVisual
            univers={product.univers}
            category={product.category}
            alt={`Visuel temporaire du produit ${product.name}`}
          />
        </div>
        {product.isExample && (
          <span className="absolute left-3 top-3 rounded-full bg-anthracite/75 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Exemple — catalogue final à venir
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          {getCategoryLabel(product.category)}
        </p>
        <h3 className="font-semibold text-anthracite">{product.name}</h3>
        <p className="text-sm text-zinc-600">{product.shortDescription}</p>

        <ul className="mt-1 space-y-1 text-sm text-zinc-500">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden="true">·</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <p className="text-lg font-bold text-anthracite">
            {formatPrice(product.price)}
            <span className="block text-xs font-normal text-zinc-500">TVA incluse</span>
          </p>
          <button
            type="button"
            onClick={handleAdd}
            className={`rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors ${
              added ? "bg-emerald-600" : accent
            }`}
          >
            {added ? "Ajouté ✓" : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </article>
  );
}
