import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { localePath, resolvePage, type LocaleParams } from "@/lib/i18n";
import { getProductsByAudience } from "@/lib/products";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.travail.title, description: dict.meta.travail.description };
}

/**
 * Page profil TRAVAIL EXTÉRIEUR : s'adresse au travailleur lui-même
 * (usage individuel). Les achats en quantité sont traités sur /entreprises.
 */
export default async function TravailExterieurPage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);
  const products = getProductsByAudience("travail-exterieur").filter((p) => !p.isRefurbished);

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow={dict.travail.eyebrow}
        title={dict.travail.title}
        subtitle={dict.travail.subtitle}
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="enjeux-titre">
          <h2 id="enjeux-titre" className="text-2xl font-bold text-anthracite">
            {dict.travail.whyTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {dict.travail.why.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="font-semibold text-anthracite">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="produits-pro-titre">
          <h2 id="produits-pro-titre" className="text-2xl font-bold text-anthracite">
            {dict.travail.productsTitle}
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">{dict.travail.productsNote}</p>
          <ProductGrid products={products} dict={dict} />
        </section>

        <p className="text-center text-sm text-zinc-500">
          {dict.travail.b2bNoteBefore}
          <Link
            href={localePath(locale, "/entreprises")}
            className="underline hover:text-anthracite"
          >
            {dict.travail.b2bNoteLink}
          </Link>
          .
        </p>
      </div>
    </>
  );
}
