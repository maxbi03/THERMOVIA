import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Entreprises — devis groupés, facturation et SAV dédié",
  description:
    "Équipez vos collaborateurs contre la chaleur et le froid : devis groupés, tarifs dégressifs, facturation entreprise et service après-vente dédié en Suisse romande.",
};

/** Page B2B : achats en quantité, flotte d'équipements, contact commercial. */
export default function EntreprisesPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Espace entreprises"
        title="Équipez vos collaborateurs, simplement"
        subtitle="Du gilet ventilé pour l'équipe de chantier à la dotation hivernale complète : un interlocuteur unique, des devis clairs et un SAV qui suit vos équipements dans la durée."
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="b2b-titre">
          <h2 id="b2b-titre" className="text-2xl font-bold text-anthracite">
            Ce que nous proposons aux entreprises
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">📄 Devis groupés</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Tarifs dégressifs selon les quantités, panachage des tailles et des modèles,
                réponse sous 2 jours ouvrés.
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
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🧪 Essais avant achat</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Possibilité de tester des échantillons avec vos équipes avant une commande
                de flotte.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-b2b-titre" className="max-w-3xl">
          <h2 id="contact-b2b-titre" className="text-2xl font-bold text-anthracite">
            Contact commercial
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">
            Décrivez votre besoin (métier, effectif, saison, budget indicatif) et nous
            revenons vers vous avec une proposition.
          </p>
          <ContactForm defaultSujet="b2b" />
        </section>
      </div>
    </>
  );
}
