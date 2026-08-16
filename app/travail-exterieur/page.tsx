import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByAudience } from "@/lib/products";

export const metadata: Metadata = {
  title: "Travail extérieur — équipements thermiques pour BTP, agriculture, logistique",
  description:
    "Gilets ventilés et PCM pour la canicule, vestes et gants chauffants pour l'hiver : protégez vos équipes de chantier, d'exploitation et d'entrepôt. Achats en quantité et SAV pro.",
};

/** Page profil PRO : BTP, agriculture, logistique. */
export default function TravailExterieurPage() {
  const products = getProductsByAudience("travail-exterieur");

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Professionnels du terrain"
        title="Des équipes protégées, été comme hiver"
        subtitle="BTP, agriculture, logistique : la chaleur et le froid extrêmes sont des risques professionnels réels. Nos équipements aident vos collaborateurs à rester en sécurité et productifs."
      >
        <Link
          href="/entreprises"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-anthracite transition-colors hover:bg-zinc-100"
        >
          Demander un devis équipe →
        </Link>
      </Hero>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="enjeux-titre">
          <h2 id="enjeux-titre" className="text-2xl font-bold text-anthracite">
            Pourquoi équiper vos équipes ?
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🛡 Sécurité & prévention</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Les coups de chaleur et l&apos;hypothermie sont des accidents du travail
                évitables. La SUVA recommande des mesures de protection actives lors des
                canicules et du travail au froid.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">📋 Compatibilité terrain</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Nous sélectionnons des modèles compatibles avec les EPI courants (gilets
                haute visibilité, harnais, chaussures de sécurité) et adaptés à un usage
                intensif.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">📈 Productivité maintenue</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Un collaborateur à bonne température travaille mieux et plus longtemps :
                moins de pauses forcées, moins d&apos;arrêts, meilleures conditions de
                travail.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="produits-pro-titre">
          <h2 id="produits-pro-titre" className="text-2xl font-bold text-anthracite">
            Sélection pour le travail extérieur
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">
            Produits d&apos;exemple — le catalogue professionnel final est en cours de
            constitution avec nos fournisseurs.
          </p>
          <ProductGrid products={products} />
        </section>

        <section className="rounded-xl bg-zinc-50 p-8 text-center">
          <h2 className="text-xl font-bold text-anthracite">
            Besoin d&apos;équiper toute une équipe ?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-zinc-600">
            Devis groupés, tailles multiples, facturation entreprise et SAV dédié : passez
            par notre espace entreprises.
          </p>
          <Link
            href="/entreprises"
            className="mt-4 inline-block rounded-lg bg-anthracite px-6 py-2.5 font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            Espace entreprises
          </Link>
        </section>
      </div>
    </>
  );
}
