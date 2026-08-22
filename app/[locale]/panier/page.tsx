import type { Metadata } from "next";
import PanierClient from "@/components/PanierClient";
import { resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.panier.title, description: dict.meta.panier.description };
}

/** Panier V1 : liste, total indicatif, validation en demande de devis. */
export default async function PanierPage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);
  return <PanierClient locale={locale} dict={dict} />;
}
