import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Qui sommes-nous — notre approche : stock local et vrai SAV",
  description:
    "Thermovia : fournisseurs de confiance sélectionnés en Europe et en Asie, stock partiel en Suisse et un vrai service après-vente en Suisse romande.",
};

/** Page positionnement : stock + SAV, engagement qualité, sourcing. */
export default function AProposPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Qui sommes-nous"
        title="Une boutique suisse qui s'engage sur ses produits"
        subtitle="Notre conviction : les équipements thermiques à batterie méritent un vrai commerçant — qui stocke, qui teste, qui répare et qui répond."
      />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <section aria-labelledby="approche-titre">
          <h2 id="approche-titre" className="text-2xl font-bold text-anthracite">
            Notre approche
          </h2>
          <div className="mt-4 space-y-4 text-zinc-700">
            <p>
              Nous construisons Thermovia autour d&apos;un principe simple : ne proposer que
              des produits que nous connaissons, issus de fournisseurs sélectionnés et de
              confiance, et les accompagner d&apos;un service après-vente basé en Suisse
              romande — garantie réelle, pièces de rechange, interlocuteur joignable.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Stock partiel en Suisse</strong> : les produits clés sont stockés
                localement pour une livraison rapide et une disponibilité vérifiée.
              </li>
              <li>
                <strong>Vrai service après-vente</strong> : garantie assumée, batteries et
                pièces détachées disponibles, réparation quand c&apos;est possible plutôt que
                jetable. <Link href="/sav" className="text-cool underline">Voir notre SAV</Link>.
              </li>
              <li>
                <strong>Sélection restreinte et testée</strong> : plutôt qu&apos;un catalogue
                infini, une gamme courte de produits que nous connaissons et pouvons
                défendre.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="sourcing-titre">
          <h2 id="sourcing-titre" className="text-2xl font-bold text-anthracite">
            Un sourcing exigeant, Europe et Asie
          </h2>
          <div className="mt-4 space-y-4 text-zinc-700">
            <p>
              Nous sommes en cours de sélection de nos fournisseurs, en Europe et en Asie.
              Nos critères : qualité de fabrication constante, sécurité des batteries
              (certifications), batterie remplaçable sans outil spécifique, disponibilité
              des pièces détachées dans la durée et conditions de production responsables. Nous préférons retarder l&apos;ouverture du catalogue
              final plutôt que de vendre des produits que nous n&apos;assumerions pas.
            </p>
            <p>
              C&apos;est pourquoi les produits actuellement affichés sont des{" "}
              <strong>exemples représentatifs</strong> de la gamme cible, clairement
              identifiés comme tels.
            </p>
          </div>
        </section>

        <section aria-labelledby="engagement-titre">
          <h2 id="engagement-titre" className="text-2xl font-bold text-anthracite">
            Nos engagements
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              ["Transparence", "Prix en CHF TVA incluse, origine des produits indiquée, pas de fausse urgence ni de faux rabais."],
              ["Durabilité", "Produits réparables, batteries remplaçables, conseils d'entretien pour prolonger la durée de vie."],
              ["Proximité", "Interlocuteur en Suisse romande, réponse en français, retours simplifiés."],
              ["Honnêteté produit", "Autonomies et performances annoncées telles que mesurées, pas telles qu'imprimées sur la boîte."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-zinc-200 p-5">
                <h3 className="font-semibold text-anthracite">{title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
