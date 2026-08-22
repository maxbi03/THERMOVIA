/**
 * Configuration globale du site Thermovia.
 *
 * Depuis le passage au multilingue, ce fichier ne contient plus AUCUN texte
 * affiché : uniquement la structure (quels liens, dans quel ordre, vers quelle
 * URL). Les libellés vivent dans lib/i18n/{fr,de,it}.ts et sont retrouvés par
 * la clé `key` de chaque entrée.
 */

export const SITE = {
  name: "Thermovia",
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
 * Navigation principale (Header) — ordre du lancement hiver.
 * `key` pointe vers dict.header.nav[key] pour le libellé traduit.
 */
export const NAV_ITEMS = [
  { href: "/hiver", key: "hiver" },
  { href: "/ete", key: "ete" },
  // À-VALIDER: l'ordre de ces deux entrées (Sport / Travail extérieur) pourra être inversé selon les résultats de la campagne marketing de lancement.
  { href: "/sport", key: "sport" },
  { href: "/travail-exterieur", key: "travail" },
  { href: "/entreprises", key: "entreprises" },
  { href: "/sav", key: "sav" },
  { href: "/contact", key: "contact" },
] as const;

/**
 * Sous-catégories du mega-menu « Hiver » (survol sur bureau, tap sur mobile).
 * Chaque entrée mène vers /hiver avec le filtre pré-appliqué (?cat=).
 */
// À-VALIDER: noms et regroupements des 4 sous-catégories à ajuster une fois le catalogue final défini (dépend des échantillons retenus).
export const HIVER_MEGA_MENU = [
  { cat: "vestes", key: "vestes" },
  { cat: "gilets", key: "gilets" },
  { cat: "mains-pieds", key: "mainsPieds" },
  // Les pièces à l'unité vivent ici plutôt que dans une entrée de menu
  // dédiée : c'est la structure retenue par les boutiques spécialisées
  // (Therm-ic, Lenz, G-Heat rangent toutes batteries et pièces sous
  // l'univers produit, jamais au premier niveau du menu).
  { cat: "accessoires", key: "accessoires" },
] as const;

/**
 * Colonnes de liens du pied de page.
 * Ne référencer ici que des pages qui existent réellement et dont le contenu
 * est assumé : pas de rubrique annoncée avant d'être ouverte.
 */
export const FOOTER_ITEMS = {
  shop: [
    { href: "/hiver", key: "hiver" },
    { href: "/ete", key: "ete" },
    { href: "/sport", key: "sport" },
    { href: "/travail-exterieur", key: "travail" },
    { href: "/entreprises", key: "entreprises" },
  ],
  service: [
    { href: "/guide-tailles", key: "guideTailles" },
    { href: "/sav", key: "sav" },
    { href: "/a-propos", key: "aPropos" },
    { href: "/contact", key: "contact" },
  ],
} as const;

/** Routes publiques, utilisées par le sitemap (déclinées dans les 3 langues). */
export const PUBLIC_ROUTES = [
  "",
  "/hiver",
  "/ete",
  "/sport",
  "/travail-exterieur",
  "/entreprises",
  "/guide-tailles",
  "/sav",
  "/a-propos",
  "/contact",
] as const;

/** Formate un prix en CHF (mêmes conventions dans les trois langues). */
export function formatPrice(price: number): string {
  return `CHF ${price.toFixed(2).replace(".", ",").replace(",00", ".–")}`;
}
