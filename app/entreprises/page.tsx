import type { Metadata } from "next";
import DevisVolumeForm from "@/components/DevisVolumeForm";
import Hero from "@/components/Hero";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "Entreprises — devis et commandes en volume, personnalisation logo",
  description:
    "Équipez vos équipes terrain : demande de devis en volume, veste réfléchissante chauffante pour le BTP et la logistique, personnalisation logo et SAV dédié en Suisse romande.",
};

/** Page B2B : modèle devis/commande en volume (pas de panier), cas d'usage terrain. */
export default function EntreprisesPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Espace entreprises"
        title="Équipez vos collaborateurs, simplement"
        subtitle="Ici, pas de panier : décrivez votre besoin, nous revenons avec un devis clair — produits, quantités, personnalisation logo et délais."
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        {/* Cas d'usage mis en avant : équipes terrain */}
        <section aria-labelledby="cas-usage-titre">
          <div className="grid items-center gap-8 rounded-xl border border-zinc-200 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="min-h-[240px] overflow-hidden rounded-lg">
              <PlaceholderVisual
                univers="hiver"
                caption="photo — veste réfléchissante chauffante portée sur chantier, gilet haute visibilité"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Cas d&apos;usage
              </p>
              <h2 id="cas-usage-titre" className="mt-3 text-2xl font-bold text-anthracite">
                La veste réfléchissante chauffante pour vos équipes terrain
              </h2>
              <p className="mt-3 text-zinc-600">
                BTP, logistique, voirie : une seule veste combine haute visibilité et chauffage
                sur batterie, pour des équipes qui restent efficaces tout l&apos;hiver.
                Personnalisable avec votre logo, livrée avec batteries, suivie par notre
                atelier pendant toute sa durée de vie.
              </p>
              {/* À-VALIDER: délai indicatif 4-6 semaines à confirmer une fois le fabricant retenu et les délais réels de production + import connus. */}
              <p className="mt-4 text-sm font-medium text-anthracite">
                ⏱ Délai indicatif : 4 à 6 semaines pour les commandes personnalisées en volume.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="b2b-titre">
          <h2 id="b2b-titre" className="text-2xl font-bold text-anthracite">
            Ce que nous proposons aux entreprises
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">📄 Devis en volume</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Tarifs dégressifs selon les quantités, panachage des tailles et des modèles,
                réponse sous 2 jours ouvrés.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🎨 Personnalisation logo</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Marquage de votre logo sur les vestes et gilets : broderie ou impression,
                validation sur maquette avant production.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🧾 Facturation CH</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Facture d&apos;entreprise suisse avec TVA, paiement sur facture (30 jours)
                pour les clients professionnels.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🔧 SAV dédié</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Suivi de votre parc d&apos;équipements, batteries et pièces de rechange,
                remplacement rapide pour limiter l&apos;immobilisation.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="devis-titre" className="max-w-3xl">
          <h2 id="devis-titre" className="text-2xl font-bold text-anthracite">
            Demander un devis
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">
            Indiquez le produit, la quantité et vos coordonnées : nous revenons vers vous
            avec une proposition chiffrée et un délai ferme.
          </p>
          <DevisVolumeForm />
        </section>
      </div>
    </>
  );
}
