import type { Metadata } from "next";
import AccueilClient from "@/components/AccueilClient";
import { resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.home.title, description: dict.meta.home.description };
}

/**
 * Page d'accueil — orientée lancement hiver.
 * Le contenu visible vit dans components/AccueilClient.tsx ; les textes
 * eux-mêmes vivent dans les dictionnaires lib/i18n/.
 */
export default async function HomePage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);
  return <AccueilClient locale={locale} dict={dict} />;
}
