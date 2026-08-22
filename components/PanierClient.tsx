"use client";

/**
 * Contenu du panier V1 : liste des articles (état local), total indicatif.
 * Pas de paiement en ligne : la validation redirige vers le formulaire
 * de demande de devis (/contact?sujet=devis).
 */
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { getProductById } from "@/lib/products";
import { formatPrice } from "@/lib/site";

export default function PanierClient({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { items, setQuantity, removeItem, clear } = useCart();

  const lignes = items
    .map((item) => ({ item, product: getProductById(item.productId) }))
    .filter((l) => l.product !== undefined);

  const total = lignes.reduce((sum, l) => sum + l.product!.price * l.item.quantity, 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-anthracite">{dict.panier.title}</h1>

      {lignes.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-zinc-300 p-10 text-center">
          <p className="text-zinc-600">{dict.panier.empty}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href={localePath(locale, "/hiver")}
              className="rounded-lg bg-heat px-5 py-2.5 text-sm font-semibold text-white hover:bg-heat-dark"
            >
              {dict.panier.goHiver}
            </Link>
            <Link
              href={localePath(locale, "/ete")}
              className="rounded-lg bg-cool px-5 py-2.5 text-sm font-semibold text-white hover:bg-cool-dark"
            >
              {dict.panier.goEte}
            </Link>
          </div>
        </div>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-zinc-200 rounded-xl border border-zinc-200">
            {lignes.map(({ item, product }) => (
              <li key={item.productId} className="flex flex-wrap items-center gap-4 p-4">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-anthracite">{product!.name}</p>
                  <p className="text-sm text-zinc-500">
                    {formatPrice(product!.price)} {dict.panier.perPiece}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor={`qte-${item.productId}`} className="sr-only">
                    {dict.panier.quantityAria} {product!.name}
                  </label>
                  <input
                    id={`qte-${item.productId}`}
                    type="number"
                    min={1}
                    max={999}
                    value={item.quantity}
                    onChange={(e) => setQuantity(item.productId, Number(e.target.value))}
                    className="w-16 rounded-lg border border-zinc-300 px-2 py-1.5 text-center text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-red-600"
                    aria-label={`${dict.panier.removeAria} — ${product!.name}`}
                  >
                    ✕
                  </button>
                </div>
                <p className="w-24 text-right font-semibold text-anthracite">
                  {formatPrice(product!.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={clear}
              className="text-sm text-zinc-500 underline hover:text-anthracite"
            >
              {dict.panier.clear}
            </button>
            <p className="text-lg font-bold text-anthracite">
              {dict.panier.total} {formatPrice(total)}
              <span className="block text-right text-xs font-normal text-zinc-500">
                {dict.panier.vatIncluded}
              </span>
            </p>
          </div>

          {/* Pas de paiement en V1 : validation via demande de devis */}
          <div className="mt-8 rounded-xl bg-zinc-50 p-6 text-center">
            <p className="text-sm text-zinc-600">{dict.panier.noPaymentNote}</p>
            <Link
              href={localePath(locale, "/contact?sujet=devis")}
              className="mt-4 inline-block rounded-lg bg-anthracite px-6 py-3 font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              {dict.panier.validate}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
