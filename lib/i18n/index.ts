/**
 * Point d'entrée du système multilingue.
 * Les dictionnaires sont de simples objets TypeScript importés statiquement :
 * pas de chargement asynchrone, pas de dépendance externe, et le site reste
 * entièrement pré-rendu.
 */
import de from "./de";
import fr, { type Dictionary } from "./fr";
import it from "./it";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

const DICTIONARIES: Record<Locale, Dictionary> = { fr, de, it };

/** Dictionnaire d'une langue ; retombe sur le français si la langue est inconnue. */
export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

export type { Dictionary };
export * from "./config";

/**
 * Amorce commune à toutes les pages : résout la langue de l'URL et rend le
 * dictionnaire correspondant. Une langue inconnue retombe sur le français —
 * le layout de segment a déjà renvoyé un 404 dans ce cas.
 */
export async function resolvePage(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  const typed: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  return { locale: typed, dict: getDictionary(typed) };
}

/** Type des props `params` d'une page localisée. */
export type LocaleParams = { params: Promise<{ locale: string }> };
