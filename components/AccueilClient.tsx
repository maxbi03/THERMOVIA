"use client";

/**
 * Page d'accueil — design 2a, orientée lancement HIVER grand public.
 *
 * C'EST ICI que se modifie le contenu de la page d'accueil : app/page.tsx ne
 * porte que le titre et la description SEO, tout le reste vit dans ce fichier.
 *
 * Sections : hero hiver avec échelle de température, bande d'arguments,
 * grille produits hiver filtrable, teaser été, accès rapides (Sport /
 * Travail extérieur / Entreprises), capture e-mail.
 * L'ancienne bascule « J'ai froid dehors / J'ai trop chaud » a été retirée :
 * le lancement se fait hiver d'abord, l'été vit en teaser sur /ete.
 */
import Link from "next/link";
import { useState, type FormEvent } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import MeteoLive from "@/components/MeteoLive";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { CATEGORIES, getProductsByUnivers } from "@/lib/products";
import { SITE } from "@/lib/site";

/**
 * Échelle de température de l'univers affiché.
 * Elle ne couvre que l'hiver tant que la gamme été n'est pas ouverte : une
 * seconde entrée « ete » viendra s'ajouter ici au printemps, la structure est
 * prête pour basculer selon la saison affichée.
 */
// À-VALIDER: bornes de température et association produit/température à revoir après les tests terrain des échantillons.
const ECHELLE_HIVER = {
  titre: "CE QUE COUVRE LA GAMME HIVER",
  gradient: "linear-gradient(to right, #24525F, #2F6A7A 38%, #7FA3AC 72%, #D9C7B4)",
  temperatures: ["−15 °C", "−5 °C", "+3 °C", "+12 °C"],
  usages: ["Veste chauffante + gants", "Gilet chauffant + gants", "Gilet seul, sous la veste"],
} as const;

/** Accès rapides sous le teaser été — ordre : Sport, Travail extérieur, Entreprises. */
const ACCES_RAPIDES = [
  {
    href: "/sport",
    eyebrow: "Sport",
    title: "Mains et pieds au chaud, toute la saison",
    text: "Gants fins pour le vélo, gilets légers pour l'avant-course : la chaleur qui suit l'effort.",
  },
  {
    href: "/travail-exterieur",
    eyebrow: "Travail extérieur",
    title: "Tenir la journée dehors, sans se figer",
    text: "BTP, agriculture, logistique : des équipements compatibles avec vos EPI.",
  },
  {
    href: "/entreprises",
    eyebrow: "Entreprises",
    title: "Équiper une équipe, du devis à la maintenance",
    text: "Commandes en volume, personnalisation logo et devis chiffré sous 2 jours.",
  },
] as const;

export default function AccueilClient() {
  const [categorie, setCategorie] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  // Les produits reconditionnés restent masqués tant que la reprise et
  // l'atelier n'existent pas : on n'affiche pas une promesse qu'on ne tient
  // pas encore. Retirer ce filtre le jour où la seconde vie ouvre.
  const products = getProductsByUnivers("hiver").filter((p) => !p.isRefurbished);
  const categories = CATEGORIES.hiver;
  const visibleProducts = categorie
    ? products.filter((p) => p.category === categorie)
    : products;

  /** Capture e-mail V1 : ouvre le client mail pré-rempli (pas de backend). */
  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "M'avertir à l'arrivée du catalogue définitif"
    )}&body=${encodeURIComponent(`Bonjour,\n\nMerci de m'avertir quand le catalogue définitif sera disponible.\n\n${email}`)}`;
    setEmailSent(true);
  };

  return (
    <>
      {/* ============ MÉTÉO + HERO HIVER ============ */}
      <section className="px-4 pt-8 sm:px-11 sm:pt-11">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow-mono text-heat">Univers hiver — la saison commence ici</p>
          <MeteoLive />
        </div>

        {/* Hero : titre + CTA + échelle de température | visuel vertical */}
        <div className="mt-8 grid items-stretch gap-9 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[44px] font-bold leading-[.96] tracking-[-.038em] sm:text-[64px] xl:text-[82px]">
                Le froid ne devrait
                <br />
                pas décider de
                <br />
                <span className="text-cool">votre journée.</span>
              </h1>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.62] text-ink/[.66]">
                Vestes, gilets et gants chauffants pour les trajets, les balades, le sport et
                le travail dehors. Sélection testée en Suisse romande, batteries et pièces
                disponibles pendant toute la vie du produit.
              </p>
              <div className="mt-[30px] flex flex-wrap gap-3">
                <Link
                  href="/hiver"
                  className="rounded-full bg-ink px-[30px] py-[15px] text-[14.5px] font-bold text-white transition-colors hover:bg-ink/85"
                >
                  Découvrir l&apos;univers Hiver
                </Link>
                <Link
                  href="/guide-tailles"
                  className="rounded-full border border-ink/[.28] px-[30px] py-[15px] text-[14.5px] font-semibold transition-colors hover:bg-ink/5"
                >
                  Trouver ma taille
                </Link>
              </div>
            </div>

            {/* Échelle de température — élément signature, borné à l'hiver */}
            <div className="mt-10">
              <p className="mb-3 font-mono text-[10.5px] font-medium tracking-[.14em] text-ink/50">
                {ECHELLE_HIVER.titre}
              </p>
              <div className="h-2 rounded-full" style={{ background: ECHELLE_HIVER.gradient }} />
              <div className="mt-2.5 flex justify-between font-mono text-[11px] font-medium text-ink/55">
                {ECHELLE_HIVER.temperatures.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="mt-1.5 flex justify-between gap-3 text-[12.5px] text-ink/[.42]">
                {ECHELLE_HIVER.usages.map((usage, i) => (
                  // L'usage du milieu passe à la trappe sous 640 px, faute de place.
                  <span key={usage} className={i === 1 ? "hidden sm:inline" : undefined}>
                    {usage}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visuel héro vertical 3:4 */}
          <div className="min-h-[320px] overflow-hidden rounded-md lg:min-h-[520px]">
            <PlaceholderVisual
              univers="hiver"
              caption="photo héro — veste chauffante portée en extérieur froid, cadrage vertical 3:4"
            />
          </div>
        </div>

        {/* ============ BANDE D'ARGUMENTS (4 colonnes) ============ */}
        <div className="mt-9 grid grid-cols-2 gap-px border-y border-ink/[.14] bg-ink/[.14] lg:grid-cols-4">
          {[
            ["Stock en Suisse romande", "Expédié depuis la région de Vevey (VD)"],
            // À-VALIDER: durées de garantie exactes à confirmer selon les conditions des fabricants retenus (voir page SAV).
            ["Garantie fabricant", "12 à 24 mois selon produit"],
            ["Pièces à l'unité", "Batteries, chargeurs, éléments chauffants"],
            // À-VALIDER: délai de réponse à confirmer selon disponibilité réelle (voir page SAV).
            ["Réponse sous 48 h", "Par e-mail ou téléphone, en français"],
          ].map(([title, sub], i) => (
            <div key={title} className={`bg-paper py-5 ${i === 0 ? "pr-5" : "px-5"}`}>
              <p className="text-[13.5px] font-semibold">{title}</p>
              <p className="mt-[5px] text-[12.5px] text-ink/55">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GRILLE PRODUITS HIVER ============ */}
      <section aria-labelledby="essentiels-titre" className="px-4 pt-[60px] sm:px-11">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow-mono mb-2 text-heat">UNIVERS HIVER</p>
              <h2 id="essentiels-titre" className="text-[32px] font-bold tracking-[-.025em]">
                Les essentiels de l&apos;hiver
              </h2>
            </div>
            <CategoryFilter categories={categories} selected={categorie} onSelect={setCategorie} />
          </div>
        </Reveal>
        <Reveal delay={120}>
          {visibleProducts.length === 0 ? (
            <p className="mt-[26px] rounded-lg border border-dashed border-ink/20 p-8 text-center text-ink/55">
              Aucun produit d&apos;exemple dans cette catégorie pour l&apos;instant.
            </p>
          ) : (
            <div className="mt-[26px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </Reveal>
      </section>

      {/* ============ TEASER ÉTÉ ============ */}
      <section aria-labelledby="teaser-ete-titre" className="px-4 pt-[60px] sm:px-11">
        <Reveal>
          <Link href="/ete" className="group relative block min-h-[260px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
              <PlaceholderVisual univers="ete" caption="" />
            </div>
            <div className="relative flex h-full min-h-[260px] flex-col justify-end p-8 sm:p-10">
              <p className="eyebrow-mono mb-2.5 text-cool">Été — bientôt disponible</p>
              <h2 id="teaser-ete-titre" className="text-[28px] font-bold tracking-[-.02em]">
                La gamme été se prépare pour les beaux jours
              </h2>
              <p className="mt-3 max-w-[460px] text-[14.5px] leading-[1.55] text-ink/[.62]">
                Gilets ventilés, gilets PCM et ventilateurs de cou : découvrez ce qui arrive
                et laissez votre e-mail pour être averti·e au lancement.
              </p>
              <span className="mt-4 text-[13.5px] font-semibold group-hover:underline">
                Découvrir le teaser été →
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* ============ ACCÈS RAPIDES : SPORT / TRAVAIL EXTÉRIEUR / ENTREPRISES ============ */}
      <section aria-label="Accès rapides" className="grid gap-[18px] px-4 pt-[60px] sm:px-11 lg:grid-cols-3">
        {ACCES_RAPIDES.map((carte, i) => (
          <Reveal key={carte.href} delay={i * 120}>
            <Link
              href={carte.href}
              className="group flex h-full flex-col justify-between rounded-lg border border-ink/[.12] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(23,24,26,.08)]"
            >
              <div>
                <p className="eyebrow-mono text-ink/50">{carte.eyebrow}</p>
                <p className="mt-3.5 text-xl font-semibold leading-[1.25]">{carte.title}</p>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink/[.58]">{carte.text}</p>
              </div>
              <span className="mt-[22px] text-[13.5px] font-semibold group-hover:underline">
                Voir la sélection →
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* ============ CAPTURE E-MAIL ============ */}
      <section aria-labelledby="email-titre" className="px-4 pt-[60px] sm:px-11">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-8 rounded-lg bg-surface px-8 py-9 sm:px-11">
            <div>
              <p id="email-titre" className="text-xl font-semibold">
                Recevoir l&apos;arrivée du catalogue définitif
              </p>
              <p className="mt-2 text-sm text-ink/[.58]">
                Un message quand les fournisseurs sont validés et les premières pièces en
                stock. Pas de newsletter hebdomadaire.
              </p>
            </div>
            {emailSent ? (
              <p role="status" className="text-sm font-semibold text-eco">
                Votre client e-mail s&apos;est ouvert — envoyez le message pour être averti.
              </p>
            ) : (
              // Pas de flex-none ici : le champ doit pouvoir passer sous le
              // bouton sur mobile, sinon il déborde de l'écran.
              <form onSubmit={handleEmailSubmit} className="flex w-full flex-wrap gap-2.5 sm:w-auto">
                <label htmlFor="email-capture" className="sr-only">
                  Votre adresse e-mail
                </label>
                <input
                  id="email-capture"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.ch"
                  className="w-full rounded-full border border-ink/25 bg-transparent px-[26px] py-3.5 text-sm placeholder:text-ink/45 focus:border-cool focus:outline-none sm:w-[260px]"
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-[26px] py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink/85"
                >
                  M&apos;avertir
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
