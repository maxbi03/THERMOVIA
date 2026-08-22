import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { localePath, resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return {
    title: dict.meta.guideTailles.title,
    description: dict.meta.guideTailles.description,
  };
}

// À-VALIDER: toutes les mesures de cette page sont indicatives. Les remplacer par les mesures relevées sur les échantillons retenus (les tailles asiatiques taillent souvent une à deux tailles en dessous des standards européens).

/** Mesures en centimètres — identiques dans les trois langues, donc hors dictionnaire. */
const HAUTS = [
  { taille: "S", poitrine: "88–96", tour: "74–82", hauteur: "165–172" },
  { taille: "M", poitrine: "96–104", tour: "82–90", hauteur: "170–177" },
  { taille: "L", poitrine: "104–112", tour: "90–98", hauteur: "175–182" },
  { taille: "XL", poitrine: "112–120", tour: "98–106", hauteur: "180–187" },
  { taille: "XXL", poitrine: "120–128", tour: "106–114", hauteur: "185–192" },
];

const GANTS = [
  { taille: "7 (S)", paume: "18–19" },
  { taille: "8 (M)", paume: "20–21" },
  { taille: "9 (L)", paume: "22–23" },
  { taille: "10 (XL)", paume: "24–25" },
  { taille: "11 (XXL)", paume: "26–27" },
];

/** Guide des tailles — valeurs d'exemple en attendant les mesures réelles. */
export default async function GuideTaillesPage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);
  const g = dict.guideTailles;

  const th = "py-2.5 pr-4 font-semibold text-anthracite";
  const rowTh = "py-2.5 pr-4 text-left font-semibold text-anthracite";

  return (
    <>
      <Hero variant="neutral" eyebrow={g.eyebrow} title={g.title} subtitle={g.subtitle} />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
          <p className="text-sm text-zinc-600">
            <strong className="text-anthracite">{g.exampleStrong}</strong> {g.exampleText}
          </p>
        </div>

        <section aria-labelledby="hauts-titre">
          <h2 id="hauts-titre" className="text-2xl font-bold text-anthracite">
            {g.topsTitle}
          </h2>
          <p className="mt-2 mb-4 text-zinc-600">{g.topsIntro}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-300 text-left">
                  <th scope="col" className={th}>
                    {g.colSize}
                  </th>
                  <th scope="col" className={th}>
                    {g.colChest}
                  </th>
                  <th scope="col" className={th}>
                    {g.colWaist}
                  </th>
                  <th scope="col" className="py-2.5 font-semibold text-anthracite">
                    {g.colHeight}
                  </th>
                </tr>
              </thead>
              <tbody>
                {HAUTS.map((ligne) => (
                  <tr key={ligne.taille} className="border-b border-zinc-200">
                    <th scope="row" className={rowTh}>
                      {ligne.taille}
                    </th>
                    <td className="py-2.5 pr-4 text-zinc-600">{ligne.poitrine}</td>
                    <td className="py-2.5 pr-4 text-zinc-600">{ligne.tour}</td>
                    <td className="py-2.5 text-zinc-600">{ligne.hauteur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="gants-titre">
          <h2 id="gants-titre" className="text-2xl font-bold text-anthracite">
            {g.glovesTitle}
          </h2>
          <p className="mt-2 mb-4 text-zinc-600">{g.glovesIntro}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-300 text-left">
                  <th scope="col" className={th}>
                    {g.colSize}
                  </th>
                  <th scope="col" className="py-2.5 font-semibold text-anthracite">
                    {g.colHand}
                  </th>
                </tr>
              </thead>
              <tbody>
                {GANTS.map((ligne) => (
                  <tr key={ligne.taille} className="border-b border-zinc-200">
                    <th scope="row" className={rowTh}>
                      {ligne.taille}
                    </th>
                    <td className="py-2.5 text-zinc-600">{ligne.paume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="semelles-titre">
          <h2 id="semelles-titre" className="text-2xl font-bold text-anthracite">
            {g.insolesTitle}
          </h2>
          <p className="mt-2 text-zinc-600">{g.insolesText}</p>
        </section>

        <section aria-labelledby="mesurer-titre">
          <h2 id="mesurer-titre" className="text-2xl font-bold text-anthracite">
            {g.measureTitle}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {g.measures.map((mesure) => (
              <div key={mesure.titre} className="rounded-xl border border-zinc-200 p-5">
                <h3 className="font-semibold text-anthracite">{mesure.titre}</h3>
                <p className="mt-1.5 text-sm text-zinc-600">{mesure.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-zinc-50 p-8 text-center">
          <h2 className="text-xl font-bold text-anthracite">{g.doubtTitle}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">{g.doubtText}</p>
          <Link
            href={localePath(locale, "/contact?sujet=question")}
            className="mt-5 inline-block rounded-lg bg-anthracite px-6 py-2.5 font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            {dict.common.askAdvice}
          </Link>
        </section>
      </div>
    </>
  );
}
