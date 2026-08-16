"use client";

/**
 * Carte produit — design 2a : visuel 4:5 rayé, badges réparabilité / BEST /
 * SECONDE VIE, specs courtes, pastilles coloris + tailles, prix et bouton
 * « Ajouter » (panier local, pas de paiement en V1).
 */
import { useState } from "react";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/site";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.id);
    // Retour visuel bref sur le bouton (~1,5 s)
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const refurb = product.isRefurbished === true;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(23,24,26,.08)] ${
        refurb ? "border border-eco/35" : "border border-ink/10"
      }`}
    >
      {/* Visuel 4:5 + badges */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <PlaceholderVisual
            univers={product.univers}
            variant={refurb ? "refurb" : undefined}
            caption={`photo produit — ${product.name}`}
          />
        </div>
        {refurb ? (
          <span className="absolute left-3.5 top-3.5 rounded-[3px] bg-eco px-2 py-1.5 font-mono text-[10px] font-semibold tracking-[.08em] text-[#EAF0EA]">
            SECONDE VIE
          </span>
        ) : (
          <span className="absolute left-3.5 top-3.5 rounded-[3px] bg-ink/80 px-2 py-1.5 font-mono text-[10px] font-semibold tracking-[.08em] text-cream">
            RÉPARABILITÉ {product.repairabilityScore.toFixed(1).replace(".", ",")}
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute right-3.5 top-3.5 rounded-[3px] bg-heat px-2 py-1.5 font-mono text-[10px] font-semibold tracking-[.08em] text-white">
            BEST
          </span>
        )}
      </div>

      {/* Corps de carte */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15.5px] font-semibold leading-snug">{product.name}</h3>
        <p className="mt-1.5 text-[12.5px] text-ink/55">{product.specs}</p>

        {/* Coloris + tailles */}
        <div className="mt-3 flex items-center gap-1.5">
          {product.colors.map((color) => (
            <span
              key={color}
              aria-hidden="true"
              className="h-4 w-4 rounded-full border border-ink/20"
              style={{ background: color }}
            />
          ))}
          <span className="ml-1 text-[11.5px] text-ink/45">{product.sizes}</span>
        </div>

        {/* Prix + ajout panier */}
        <div className="mt-auto flex items-center justify-between pt-3.5">
          <span className="flex items-baseline gap-2">
            <span className="text-[16.5px] font-bold">{formatPrice(product.price)}</span>
            {product.previousPrice && (
              <span className="text-[12.5px] text-ink/45 line-through">
                {formatPrice(product.previousPrice).replace("CHF ", "")}
              </span>
            )}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Ajouter ${product.name} au panier`}
            className={`rounded-full px-3.5 py-2 text-[12.5px] font-semibold transition-colors ${
              added
                ? "bg-eco text-white"
                : "border border-ink/30 text-ink hover:bg-ink/5"
            }`}
          >
            {added ? "Ajouté ✓" : "Ajouter"}
          </button>
        </div>
      </div>
    </article>
  );
}
