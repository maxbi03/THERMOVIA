import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByAudience } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sport — régulation thermique pour running, cyclisme et outdoor",
  description:
    "Gilets rafraîchissants PCM pour l'été, gants et gilets chauffants pour l'hiver : entraînez-vous toute l'année, quelle que soit la météo.",
};

/** Page profil SPORTIFS : running, cyclisme, outdoor. */
export default function SportPage() {
  const products = getProductsByAudience("sport");

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Sportives & sportifs"
        title="Entraînez-vous toute l'année, pas seulement à la mi-saison"
        subtitle="Récupération au frais après l'effort estival, extrémités au chaud pour les sorties hivernales : la température maîtrisée fait partie de la performance."
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="usages-titre">
          <h2 id="usages-titre" className="text-2xl font-bold text-anthracite">
            Des usages concrets
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🏃 Running & trail</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Gilet PCM pour l&apos;échauffement et la récupération en été, serviette
                rafraîchissante en course, gilet chauffant léger avant le départ hivernal.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🚴 Cyclisme</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Gants chauffants fins et coupe-vent pour les sorties d&apos;hiver, quand les
                doigts lâchent avant les jambes.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">⛰ Outdoor & montagne</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Randonnée, ski de fond, chasse ou pêche : chaleur d&apos;appoint longue
                autonomie pour les journées entières dehors.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="produits-sport-titre">
          <h2 id="produits-sport-titre" className="text-2xl font-bold text-anthracite">
            Sélection sport
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">
            Produits d&apos;exemple — le catalogue final est en cours de constitution.
          </p>
          <ProductGrid products={products} />
        </section>
      </div>
    </>
  );
}
