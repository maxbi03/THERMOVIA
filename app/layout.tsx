/**
 * Racine du routage — volontairement vide.
 *
 * Toutes les pages vivent sous app/[locale]/, et c'est le layout de ce
 * segment qui rend <html lang="…"> : c'est le seul endroit qui connaît la
 * langue demandée. Ce layout-ci ne fait donc que laisser passer ses enfants.
 * La racine « / » est redirigée vers la langue par défaut (voir next.config.ts).
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
