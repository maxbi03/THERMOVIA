/**
 * Configuration multilingue — Suisse : français, allemand, italien.
 *
 * Le marché visé au lancement reste la Suisse romande : le français est la
 * langue par défaut, mais toute la structure est en place pour servir la
 * Suisse entière. Chaque page vit sous un préfixe de langue (/fr, /de, /it) ;
 * la racine « / » redirige vers la langue par défaut.
 */

export const LOCALES = ["fr", "de", "it"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

/** Libellés du sélecteur de langue (toujours dans leur propre langue). */
export const LOCALE_LABELS: Record<Locale, { short: string; long: string }> = {
  fr: { short: "FR", long: "Français" },
  de: { short: "DE", long: "Deutsch" },
  it: { short: "IT", long: "Italiano" },
};

/** Code de langue complet pour l'attribut <html lang> et Intl. */
export const LOCALE_TAGS: Record<Locale, string> = {
  fr: "fr-CH",
  de: "de-CH",
  it: "it-CH",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Préfixe un chemin interne de la langue courante.
 * `localePath("fr", "/hiver")` → `/fr/hiver`
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/**
 * Remplace la langue dans un chemin déjà préfixé, en conservant le reste.
 * Utilisé par le sélecteur de langue pour rester sur la même page.
 */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join("/")}`;
  }
  return localePath(next, pathname);
}
