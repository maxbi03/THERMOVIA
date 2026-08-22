/** Grille simple de cartes produit (sans filtre) — pages profils. */
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import type { Dictionary } from "@/lib/i18n";

export default function ProductGrid({
  products,
  dict,
}: {
  products: Product[];
  dict: Dictionary;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} dict={dict} />
      ))}
    </div>
  );
}
