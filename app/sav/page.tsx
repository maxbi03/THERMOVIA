import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Service après-vente — garantie, échange, entretien, reprise",
  description:
    "Le SAV Thermovia : garantie fabricant, échange sous 30 jours en cas de défaut, support par e-mail et téléphone, fiches d'entretien et reprise gratuite des appareils usagés.",
};

/**
 * Fiches d'entretien par produit — structure préparée, contenu à remplir.
 */
// À-VALIDER: fiches à rédiger une fois les produits finaux reçus (contenu placeholder en attendant).
const FICHES_ENTRETIEN = [
  {
    titre: "Lavage du textile chauffant",
    resume: "Batterie retirée, cycle délicat, séchage à plat : les bons gestes par produit.",
  },
  {
    titre: "Charge et autonomie",
    resume: "Chargeurs compatibles, cycles de charge et gestes qui préservent la batterie.",
  },
  {
    titre: "Stockage de la batterie",
    resume: "Niveau de charge idéal, température et précautions pour l'entre-saison.",
  },
] as const;

/** Page SAV : garantie, échange, support, entretien, reprise. Cœur du positionnement. */
export default function SavPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Service après-vente"
        title="Un SAV qui existe vraiment"
        subtitle="Acheter un équipement à batterie sans SAV, c'est acheter un produit jetable. Le nôtre est au cœur de notre modèle."
      />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <section aria-labelledby="engagements-titre">
          <h2 id="engagements-titre" className="text-2xl font-bold text-anthracite">
            Nos engagements
          </h2>
          <div className="mt-4 space-y-4">
            {[
              [
                "✅ Garantie fabricant 12–24 mois",
                // À-VALIDER: durées de garantie exactes à confirmer selon les conditions des fabricants retenus.
                "Chaque produit est couvert par une garantie fabricant de 12 à 24 mois selon le modèle, batteries comprises selon conditions. La durée exacte est indiquée sur chaque fiche produit.",
              ],
              [
                "🔁 Échange sous 30 jours",
                "Un défaut constaté à la réception ? Nous échangeons le produit sous 30 jours, sans parcours du combattant : signalez-le, nous organisons le remplacement.",
              ],
              [
                "📞 Support e-mail et téléphone",
                // À-VALIDER: délai de réponse à confirmer selon disponibilité réelle de l'équipe.
                "Un interlocuteur joignable par e-mail et par téléphone, en français. Réponse sous 48 h.",
              ],
              [
                "🔋 Batteries & pièces détachées",
                "Batteries de remplacement, ventilateurs, câbles et chargeurs disponibles séparément — pour prolonger la vie de votre équipement au lieu de le remplacer.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="font-semibold text-anthracite">{title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Conditions détaillées (CGV) en cours de finalisation — publiées avec le
            catalogue définitif.
          </p>
        </section>

        <section aria-labelledby="entretien-titre">
          <h2 id="entretien-titre" className="text-2xl font-bold text-anthracite">
            Fiches d&apos;entretien par produit
          </h2>
          <p className="mt-2 text-zinc-600">
            Lavage, charge, stockage de la batterie : chaque produit aura sa fiche
            d&apos;entretien détaillée, publiée avec le catalogue définitif.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {FICHES_ENTRETIEN.map((fiche) => (
              <div key={fiche.titre} className="rounded-xl border border-dashed border-zinc-300 p-6">
                <h3 className="font-semibold text-anthracite">{fiche.titre}</h3>
                <p className="mt-2 text-sm text-zinc-600">{fiche.resume}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Fiche à venir
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="reprise-titre">
          <h2 id="reprise-titre" className="text-2xl font-bold text-anthracite">
            Reprise gratuite des appareils usagés
          </h2>
          {/* À-VALIDER: formulation à valider avec la fiduciaire, notamment le volet inscription TAR comme importateur. */}
          <div className="mt-4 rounded-xl border border-zinc-200 p-6">
            <p className="text-sm text-zinc-600">
              ♻️ Conformément à la loi suisse (OREA), nous reprenons gratuitement vos anciens
              appareils électriques du même type. Contactez-nous ou déposez-les dans un point
              de collecte SENS/Swico proche de chez vous.
            </p>
          </div>
        </section>

        <section aria-labelledby="processus-titre">
          <h2 id="processus-titre" className="text-2xl font-bold text-anthracite">
            Comment ça se passe ?
          </h2>
          <ol className="mt-4 space-y-3 text-zinc-700">
            {[
              "Contactez-nous via le formulaire (sujet « Service après-vente ») ou par téléphone en décrivant le problème.",
              "Nous répondons sous 48 h avec un diagnostic ou une demande de précisions.",
              "Selon le cas : envoi d'une pièce, étiquette de retour pour réparation, ou échange.",
              "Suivi jusqu'à la résolution — vous avez un interlocuteur, pas un ticket anonyme.",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-anthracite text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl bg-zinc-50 p-8 text-center">
          <h2 className="text-xl font-bold text-anthracite">Un problème avec un produit ?</h2>
          <Link
            href="/contact?sujet=sav"
            className="mt-4 inline-block rounded-lg bg-anthracite px-6 py-2.5 font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            Contacter le SAV
          </Link>
        </section>
      </div>
    </>
  );
}
