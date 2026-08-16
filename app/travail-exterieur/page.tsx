import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByAudience } from "@/lib/products";

export const metadata: Metadata = {
  title: "Travail extérieur — équipements thermiques pour BTP, agriculture, logistique",
  description:
    "Gilets ventilés et PCM pour la canicule, vestes et gants chauffants pour l'hiver : travaillez dehors dans de bonnes conditions, toute l'année. Sélection compatible EPI.",
};

/**
 * Page profil TRAVAIL EXTÉRIEUR : s'adresse au travailleur lui-même
 * (usage individuel). Les achats en quantité sont traités sur /entreprises.
 */
export default function TravailExterieurPage() {
  const products = getProductsByAudience("travail-exterieur");

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Travail extérieur"
        title="Travaillez dehors sans subir la météo"
        subtitle="BTP, agriculture, logistique : quand on passe ses journées dehors, la canicule et le froid ne sont pas un détail. Équipez-vous pour rester efficace et en sécurité, toute l'année."
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="enjeux-titre">
          <h2 id="enjeux-titre" className="text-2xl font-bold text-anthracite">
            Pourquoi s&apos;équiper ?
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">🛡 Votre sécurité d&apos;abord</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Coup de chaleur en été, engourdissement et perte de dextérité en hiver : des
                risques réels du travail en extérieur, que le bon équipement réduit
                concrètement.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">📋 Compatible avec vos EPI</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Nous sélectionnons des modèles qui se portent avec les équipements de
                protection courants : gilet haute visibilité, harnais, chaussures de
                sécurité.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-6">
              <h3 className="font-semibold text-anthracite">💪 Tenir la journée</h3>
              <p className="mt-2 text-sm text-zinc-600">
                À bonne température, on travaille mieux et on finit la journée moins épuisé :
                moins de pauses forcées à l&apos;ombre, moins d&apos;heures à grelotter.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="produits-pro-titre">
          <h2 id="produits-pro-titre" className="text-2xl font-bold text-anthracite">
            Sélection pour le travail extérieur
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">
            Produits d&apos;exemple — le catalogue final est en cours de constitution avec nos
            fournisseurs.
          </p>
          <ProductGrid products={products} />
        </section>

        <p className="text-center text-sm text-zinc-500">
          Vous cherchez à équiper plusieurs collaborateurs ? Rendez-vous sur notre{" "}
          <Link href="/entreprises" className="underline hover:text-anthracite">
            espace entreprises
          </Link>
          .
        </p>
      </div>
    </>
  );
}
