import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Service après-vente — garantie, réparation, pièces détachées",
  description:
    "Le SAV Thermovia : garantie 2 ans, batteries et pièces de rechange, réparation en Suisse et un interlocuteur joignable en français. Notre différence face au dropshipping.",
};

/** Page SAV : garantie, réparation, contact. Cœur du positionnement. */
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
        <section aria-labelledby="garantie-titre">
          <h2 id="garantie-titre" className="text-2xl font-bold text-anthracite">
            Ce que couvre notre SAV
          </h2>
          <div className="mt-4 space-y-4">
            {[
              [
                "✅ Garantie 2 ans",
                "Garantie légale suisse assumée sur tous les produits, batteries comprises selon conditions. En cas de défaut : échange ou réparation, sans parcours du combattant.",
              ],
              [
                "🔋 Batteries & pièces détachées",
                "Batteries de remplacement, ventilateurs, câbles et chargeurs disponibles séparément — pour prolonger la vie de votre équipement au lieu de le remplacer.",
              ],
              [
                "🔧 Réparation",
                "Diagnostic et réparation en Suisse quand c'est techniquement possible (connectique, zones de chauffe, ventilation). Devis avant toute intervention payante hors garantie.",
              ],
              [
                "↩️ Retours simplifiés",
                "14 jours pour changer d'avis sur les produits non utilisés. Retour vers une adresse suisse — pas de colis à renvoyer à l'étranger à vos frais.",
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

        <section aria-labelledby="processus-titre">
          <h2 id="processus-titre" className="text-2xl font-bold text-anthracite">
            Comment ça se passe ?
          </h2>
          <ol className="mt-4 space-y-3 text-zinc-700">
            {[
              "Contactez-nous via le formulaire (sujet « Service après-vente ») en décrivant le problème.",
              "Nous répondons sous 2 jours ouvrés avec un diagnostic ou une demande de précisions.",
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
