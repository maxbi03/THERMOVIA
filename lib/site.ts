/**
 * Configuration globale du site Thermovia.
 * Centralise les textes de marque et les liens de navigation
 * (structure i18n-ready : ces constantes seront déplacées dans des
 * fichiers de locale fr-CH / de-CH / it-CH lors de l'ajout des langues).
 */

export const SITE = {
  name: "Thermovia",
  tagline: "Régulation thermique corporelle — chaleur & froid",
  locale: "fr-CH",
  currency: "CHF",
  url: "https://www.thermovia.ch", // Placeholder — à remplacer par le domaine définitif
  email: "contact@thermovia.ch", // Placeholder
  // Mentions légales — placeholders à compléter avant mise en ligne
  legal: {
    raisonSociale: "[Raison sociale à compléter] Sàrl",
    adresse: "[Rue et n°], [NPA] [Localité], Suisse",
    ide: "CHE-XXX.XXX.XXX",
  },
} as const;

/**
 * Liens de la navigation principale (Header) — ordre du lancement hiver.
 * Les familles secondaires (textile, accessoires, seconde vie) restent
 * accessibles via le pied de page.
 */
export const NAV_LINKS = [
  { href: "/hiver", label: "Hiver" },
  { href: "/ete", label: "Été" },
  // À-VALIDER: l'ordre de ces deux entrées (Sport / Travail extérieur) pourra être inversé selon les résultats de la campagne marketing de lancement.
  { href: "/sport", label: "Sport" },
  { href: "/travail-exterieur", label: "Travail extérieur" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/sav", label: "SAV" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Sous-catégories du mega-menu « Hiver » (panneau au survol sur bureau,
 * au tap sur mobile). Chaque entrée mène vers /hiver avec le filtre
 * de catégorie pré-appliqué via le paramètre ?cat=.
 */
// À-VALIDER: noms et regroupements des 4 sous-catégories à ajuster une fois le catalogue final défini (dépend des échantillons retenus).
export const HIVER_MEGA_MENU = [
  { cat: "vestes", label: "Vestes", sublabel: "pro & sport" },
  { cat: "gilets", label: "Gilets", sublabel: "fins et légers" },
  { cat: "mains-pieds", label: "Mains & pieds", sublabel: "gants & semelles" },
  // Les pièces à l'unité vivent ici plutôt que dans une entrée de menu
  // dédiée : c'est la structure retenue par les boutiques spécialisées
  // (Therm-ic, Lenz, G-Heat rangent toutes batteries et pièces sous
  // l'univers produit, jamais au premier niveau du menu).
  { cat: "accessoires", label: "Batteries & accessoires", sublabel: "pièces à l'unité" },
] as const;

/**
 * Colonnes de liens du pied de page.
 * Ne référencer ici que des pages qui existent réellement et dont le contenu
 * est assumé : pas de rubrique annoncée avant d'être ouverte.
 */
export const FOOTER_LINKS = {
  boutique: [
    { href: "/hiver", label: "Hiver" },
    { href: "/ete", label: "Été — bientôt" },
    { href: "/sport", label: "Sport" },
    { href: "/travail-exterieur", label: "Travail extérieur" },
    { href: "/entreprises", label: "Entreprises" },
  ],
  service: [
    { href: "/guide-tailles", label: "Guide des tailles" },
    { href: "/sav", label: "Garantie & SAV" },
    { href: "/a-propos", label: "Qui sommes-nous" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

/** Formate un prix en CHF (fr-CH). */
export function formatPrice(price: number): string {
  return `CHF ${price.toFixed(2).replace(".", ",").replace(",00", ".–")}`;
}
