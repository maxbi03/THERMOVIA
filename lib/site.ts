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
 * Liens de la navigation principale (Header) — vocabulaire « verbe d'usage »
 * du design 2a : Chauffer (hiver) / Rafraîchir (été).
 */
export const NAV_LINKS = [
  { href: "/hiver", label: "Chauffer" },
  { href: "/ete", label: "Rafraîchir" },
  { href: "/textile-couches", label: "Textile & couches" },
  { href: "/accessoires", label: "Accessoires" },
  { href: "/seconde-vie", label: "Seconde vie" },
  { href: "/travail-exterieur", label: "Métiers" },
  { href: "/entreprises", label: "Entreprises" },
] as const;

/** Colonnes de liens du pied de page (design 2a). */
export const FOOTER_LINKS = {
  boutique: [
    { href: "/hiver", label: "Chauffer" },
    { href: "/ete", label: "Rafraîchir" },
    { href: "/textile-couches", label: "Textile & couches" },
    { href: "/seconde-vie", label: "Seconde vie" },
    { href: "/entreprises", label: "Entreprises" },
  ],
  service: [
    { href: "/sav", label: "Atelier & SAV" },
    { href: "/sav", label: "Pièces détachées" },
    { href: "/contact", label: "Guide des tailles" },
    { href: "/sav", label: "Livraison & retours" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

/** Formate un prix en CHF (fr-CH). */
export function formatPrice(price: number): string {
  return `CHF ${price.toFixed(2).replace(".", ",").replace(",00", ".–")}`;
}
