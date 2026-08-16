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

/** Liens de la navigation principale (Header). */
export const NAV_LINKS = [
  { href: "/ete", label: "Été" },
  { href: "/hiver", label: "Hiver" },
  { href: "/travail-exterieur", label: "Travail extérieur" },
  { href: "/sport", label: "Sport" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/sav", label: "SAV" },
  { href: "/contact", label: "Contact" },
] as const;

/** Formate un prix en CHF (fr-CH). */
export function formatPrice(price: number): string {
  return `CHF ${price.toFixed(2).replace(".", ",").replace(",00", ".–")}`;
}
