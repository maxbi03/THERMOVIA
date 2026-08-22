import type { Metadata } from "next";
import { Suspense } from "react";
import RechercheClient from "@/components/RechercheClient";
import { resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return {
    title: dict.meta.recherche.title,
    description: dict.meta.recherche.description,
    // Une page de résultats n'a rien à faire dans l'index d'un moteur.
    robots: { index: false, follow: true },
  };
}

/** Page de résultats de recherche (?q=). */
export default async function RecherchePage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-11">
      {/* Suspense : RechercheClient lit ?q= via useSearchParams. */}
      <Suspense>
        <RechercheClient locale={locale} dict={dict} />
      </Suspense>
    </div>
  );
}
