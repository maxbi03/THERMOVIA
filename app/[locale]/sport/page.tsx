import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { resolvePage, type LocaleParams } from "@/lib/i18n";
import { getProductsByAudience } from "@/lib/products";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.sport.title, description: dict.meta.sport.description };
}

/** Page profil SPORTIFS : running, cyclisme, outdoor. */
export default async function SportPage({ params }: LocaleParams) {
  const { dict } = await resolvePage(params);
  // Même règle que le catalogue : pas de reconditionné tant que la reprise n'existe pas.
  const products = getProductsByAudience("sport").filter((p) => !p.isRefurbished);

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow={dict.sport.eyebrow}
        title={dict.sport.title}
        subtitle={dict.sport.subtitle}
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="usages-titre">
          <h2 id="usages-titre" className="text-2xl font-bold text-anthracite">
            {dict.sport.usagesTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {dict.sport.usages.map((usage) => (
              <div key={usage.title} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="font-semibold text-anthracite">{usage.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{usage.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="produits-sport-titre">
          <h2 id="produits-sport-titre" className="text-2xl font-bold text-anthracite">
            {dict.sport.productsTitle}
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">{dict.common.exampleProductsNote}</p>
          <ProductGrid products={products} dict={dict} />
        </section>
      </div>
    </>
  );
}
