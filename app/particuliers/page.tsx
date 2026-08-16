import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByAudience } from "@/lib/products";

export const metadata: Metadata = {
  title: "Particuliers — confort thermique au quotidien",
  description:
    "Ventilateurs de cou et de table pour les canicules, vestes chauffantes et semelles pour l'hiver : des solutions simples pour la maison, les trajets et les loisirs.",
};

/** Page profil GRAND PUBLIC : quotidien, maison, loisirs. */
export default function ParticuliersPage() {
  const products = getProductsByAudience("particuliers");

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Particuliers"
        title="Le confort thermique, chez vous et en déplacement"
        subtitle="Canicule en ville, appartement difficile à rafraîchir, trajets glacés en hiver : des solutions simples et efficaces pour votre quotidien et vos loisirs."
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="quotidien-titre">
          <h2 id="quotidien-titre" className="text-2xl font-bold text-anthracite">
            Pour chaque moment de la journée
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🏠 À la maison</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Ventilateur de table silencieux pour le bureau ou la chambre en été, gilet
                chauffant pour baisser le chauffage sans avoir froid en hiver.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🚶 En déplacement</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Ventilateur de cou mains libres pour les trajets et les festivals, veste
                chauffante discrète pour attendre le bus par -5 °C.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🌿 Jardin & loisirs</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Serviettes rafraîchissantes pour le jardinage estival, semelles chauffantes
                pour les matchs et balades d&apos;hiver.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="produits-part-titre">
          <h2 id="produits-part-titre" className="text-2xl font-bold text-anthracite">
            Sélection particuliers
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
