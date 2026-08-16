import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProfileSelector from "@/components/ProfileSelector";

export const metadata: Metadata = {
  title: "Thermovia — Équipements chauffants et rafraîchissants en Suisse",
  description:
    "Boutique suisse romande d'équipements de régulation thermique : gilets ventilés et PCM contre la canicule, vestes et gants chauffants contre le froid. Stock en Suisse, vrai SAV.",
};

/** Page d'accueil : proposition de valeur, les 2 univers, accès par profil. */
export default function HomePage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Boutique suisse — régulation thermique corporelle"
        title="Restez au frais l'été, au chaud l'hiver."
        subtitle="Gilets ventilés, gilets PCM, vestes et gants chauffants, sélectionnés pour la Suisse romande. Avec du stock local et un vrai service après-vente — pas du dropshipping."
      >
        <Link
          href="/chaleur"
          className="rounded-lg bg-cool px-6 py-3 font-semibold text-white transition-colors hover:bg-cool-dark"
        >
          ❄ Univers Chaleur — se rafraîchir
        </Link>
        <Link
          href="/froid"
          className="rounded-lg bg-heat px-6 py-3 font-semibold text-white transition-colors hover:bg-heat-dark"
        >
          🔥 Univers Froid — se réchauffer
        </Link>
      </Hero>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6">
        {/* Proposition de valeur */}
        <section aria-labelledby="valeur-titre">
          <h2 id="valeur-titre" className="text-2xl font-bold text-anthracite sm:text-3xl">
            Pourquoi Thermovia ?
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">📦 Stock en Suisse</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Nous constituons un stock local des produits clés : livraison rapide et
                disponibilité réelle, sans dépendre d&apos;expéditions lointaines.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🔧 Vrai SAV</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Garantie, pièces (batteries, ventilateurs), réparation et un interlocuteur
                joignable en Suisse romande. <Link href="/sav" className="text-cool underline">Découvrir notre SAV</Link>.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🎯 Sélection exigeante</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Chaque produit est testé et sélectionné auprès de fournisseurs européens et
                asiatiques identifiés — pas un catalogue infini copié-collé.
              </p>
            </div>
          </div>
        </section>

        {/* Les deux univers */}
        <section aria-labelledby="univers-titre">
          <h2 id="univers-titre" className="text-2xl font-bold text-anthracite sm:text-3xl">
            Deux univers, un seul objectif : votre confort thermique
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Link
              href="/chaleur"
              className="group rounded-xl bg-gradient-to-br from-sky-700 to-cyan-600 p-8 text-white transition-transform hover:-translate-y-0.5"
            >
              <p className="text-3xl" aria-hidden="true">❄</p>
              <h3 className="mt-3 text-xl font-bold">Chaleur & canicule</h3>
              <p className="mt-2 text-white/85">
                Gilets ventilés, gilets PCM, ventilateurs de cou, portables et de table pour
                travailler et vivre au frais.
              </p>
              <p className="mt-4 font-semibold group-hover:underline">Voir le catalogue →</p>
            </Link>
            <Link
              href="/froid"
              className="group rounded-xl bg-gradient-to-br from-orange-700 to-red-600 p-8 text-white transition-transform hover:-translate-y-0.5"
            >
              <p className="text-3xl" aria-hidden="true">🔥</p>
              <h3 className="mt-3 text-xl font-bold">Froid & hiver</h3>
              <p className="mt-2 text-white/85">
                Vestes chauffantes, gilets chauffants, gants chauffants et accessoires pour
                affronter l&apos;hiver sans se figer.
              </p>
              <p className="mt-4 font-semibold group-hover:underline">Voir le catalogue →</p>
            </Link>
          </div>
        </section>

        {/* Accès par profil */}
        <section aria-labelledby="profils-titre">
          <h2 id="profils-titre" className="text-2xl font-bold text-anthracite sm:text-3xl">
            Trouvez votre équipement selon votre usage
          </h2>
          <div className="mt-6">
            <ProfileSelector />
          </div>
        </section>

        {/* Note V1 */}
        <p className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center text-sm text-zinc-500">
          Site en version de lancement : les produits affichés sont des exemples
          représentatifs. Le catalogue final (fournisseurs en cours de sélection) arrive
          prochainement — <Link href="/contact" className="underline">contactez-nous</Link> pour
          être tenu informé.
        </p>
      </div>
    </>
  );
}
