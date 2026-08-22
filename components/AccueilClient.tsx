"use client";

/**
 * Page d'accueil — design 2a, orientée lancement HIVER grand public.
 * Sections : hero hiver avec échelle de température, bande d'arguments,
 * grille produits hiver filtrable, indice de réparabilité, atelier
 * (reprise / réparation), teaser été, accès rapides (Sport / Travail
 * extérieur / Entreprises), capture e-mail.
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

/** Accès rapides sous le teaser été — ordre : Sport, Travail extérieur, Entreprises. */
const ACCES_RAPIDES = [
  {
    href: "/sport",
    eyebrow: "Sport",
    title: "Extrémités au chaud, sorties toute l'année",
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
    text: "Commandes en volume, personnalisation logo et parc suivi par l'atelier.",
  },
] as const;

export default function AccueilClient() {
  const [categorie, setCategorie] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  const products = getProductsByUnivers("hiver");
  const categories = [...CATEGORIES.hiver, { id: "seconde-vie", label: "Seconde vie" }];
  const visibleProducts =
    categorie === "seconde-vie"
      ? products.filter((p) => p.isRefurbished)
      : categorie
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
                  href="/contact"
                  className="rounded-full border border-ink/[.28] px-[30px] py-[15px] text-[14.5px] font-semibold transition-colors hover:bg-ink/5"
                >
                  Trouver ma taille
                </Link>
              </div>
            </div>

            {/* Échelle de température — élément signature */}
            <div className="mt-10">
              <p className="mb-3 font-mono text-[10.5px] font-medium tracking-[.14em] text-ink/50">
                CE QUE COUVRE LA GAMME
              </p>
              <div
                className="h-2 rounded-full"
                style={{
                  background: "linear-gradient(to right, #2F6A7A, #7FA3AC 42%, #D9C7B4 58%, #B85F2E)",
                }}
              />
              <div className="mt-2.5 flex justify-between font-mono text-[11px] font-medium text-ink/55">
                <span>−15 °C</span>
                <span>0 °C</span>
                <span>+18 °C</span>
                <span>+38 °C</span>
              </div>
              <div className="mt-1.5 flex justify-between text-[12.5px] text-ink/[.42]">
                <span>Gants &amp; vestes chauffantes</span>
                <span className="hidden sm:inline">Couches intermédiaires</span>
                <span>Gamme été — au printemps</span>
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
            ["Stock à Lausanne", "Expédié sous 24 h ouvrées"],
            // À-VALIDER: durées de garantie exactes à confirmer selon les conditions des fabricants retenus (voir page SAV).
            ["Garantie fabricant", "12 à 24 mois selon produit"],
            ["Pièces à l'unité", "Ventilateurs, packs, batteries"],
            ["Reprise valorisée", "Avoir jusqu'à CHF 60.–"],
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

      {/* ============ INDICE DE RÉPARABILITÉ ============ */}
      <section aria-labelledby="reparabilite-titre" className="px-4 pt-[60px] sm:px-11">
        <Reveal>
          <div className="grid items-center gap-8 rounded-lg bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div>
              <p className="eyebrow-mono mb-4 text-eco">Indice de réparabilité Thermovia</p>
              <h2 id="reparabilite-titre" className="text-[28px] font-bold leading-[1.08] tracking-[-.028em] sm:text-[38px]">
                Chaque produit est noté sur ce qu&apos;il devient après la panne.
              </h2>
              <p className="mt-[18px] text-[15.5px] leading-relaxed text-ink/70">
                Batterie remplaçable, ventilateur démontable, textile lavable, pièces
                disponibles cinq ans : la note s&apos;affiche sur la fiche produit et
                conditionne notre référencement fournisseur.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/sav"
                  className="rounded-full bg-ink px-6 py-[13px] text-[13.5px] font-semibold text-cream transition-colors hover:bg-ink/85"
                >
                  Voir la méthode
                </Link>
                <Link
                  href="/seconde-vie"
                  className="rounded-full border border-ink/30 px-6 py-[13px] text-[13.5px] font-semibold transition-colors hover:bg-ink/5"
                >
                  Filtrer par note ≥ 8
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              {[
                ["Batterie remplaçable sans outil", "9,5", 95],
                ["Disponibilité des pièces (5 ans)", "8,7", 87],
                ["Démontage documenté", "7,9", 79],
                ["Textile lavable et recyclable", "7,2", 72],
              ].map(([label, note, pct]) => (
                <div key={label as string}>
                  <div className="mb-[7px] flex justify-between text-[13.5px] font-semibold">
                    <span>{label}</span>
                    <span>{note}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink/[.12]">
                    <div className="h-1.5 rounded-full bg-eco" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ ATELIER ============ */}
      <section aria-labelledby="atelier-titre" className="px-4 pt-[60px] sm:px-11">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h2 id="atelier-titre" className="text-[32px] font-bold tracking-[-.025em]">
              L&apos;atelier, au centre de la boutique
            </h2>
            <span className="font-mono text-[11px] font-medium tracking-[.12em] text-ink/50">
              RUE — LAUSANNE
            </span>
          </div>
        </Reveal>
        <div className="grid gap-[18px] lg:grid-cols-[1.2fr_1fr_1fr]">
          <Reveal>
            <div className="min-h-[280px] overflow-hidden rounded-lg">
              <PlaceholderVisual variant="neutral" caption="photo — établi de réparation, batteries et outils" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-ink/[.12] p-7">
              <div>
                <p className="eyebrow-mono text-cool">Reprise</p>
                <p className="mt-3.5 text-xl font-semibold leading-[1.25]">
                  Rapportez votre ancien équipement, recevez un avoir
                </p>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink/[.58]">
                  Toute marque acceptée. Testé, réparé et remis en vente — ou démonté pour
                  ses composants.
                </p>
              </div>
              <Link href="/contact?sujet=sav" className="mt-[22px] text-[13.5px] font-semibold hover:underline">
                Estimer ma reprise →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-ink/[.12] p-7">
              <div>
                <p className="eyebrow-mono text-heat">Réparation</p>
                <p className="mt-3.5 text-xl font-semibold leading-[1.25]">
                  Diagnostic sous 48 h, devis avant intervention
                </p>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink/[.58]">
                  Batteries, ventilateurs, câblage chauffant, coutures : la plupart des
                  pannes se réparent.
                </p>
              </div>
              <Link href="/contact?sujet=sav" className="mt-[22px] text-[13.5px] font-semibold hover:underline">
                Ouvrir un dossier SAV →
              </Link>
            </div>
          </Reveal>
        </div>
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
              <form onSubmit={handleEmailSubmit} className="flex flex-none flex-wrap gap-2.5">
                <label htmlFor="email-capture" className="sr-only">
                  Votre adresse e-mail
                </label>
                <input
                  id="email-capture"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.ch"
                  className="min-w-[260px] rounded-full border border-ink/25 bg-transparent px-[26px] py-3.5 text-sm placeholder:text-ink/45 focus:border-cool focus:outline-none"
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
