import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { localePath, resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.sav.title, description: dict.meta.sav.description };
}

// À-VALIDER: fiches d'entretien à rédiger une fois les produits finaux reçus (contenu placeholder en attendant).
// À-VALIDER: durées de garantie exactes à confirmer selon les conditions des fabricants retenus.
// À-VALIDER: délai de réponse à confirmer selon disponibilité réelle de l'équipe.

/** Page SAV : garantie, échange, support, entretien, reprise. Cœur du positionnement. */
export default async function SavPage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow={dict.sav.eyebrow}
        title={dict.sav.title}
        subtitle={dict.sav.subtitle}
      />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <section aria-labelledby="engagements-titre">
          <h2 id="engagements-titre" className="text-2xl font-bold text-anthracite">
            {dict.sav.commitmentsTitle}
          </h2>
          <div className="mt-4 space-y-4">
            {dict.sav.commitments.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="font-semibold text-anthracite">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">{dict.sav.cgvNote}</p>
        </section>

        <section aria-labelledby="entretien-titre">
          <h2 id="entretien-titre" className="text-2xl font-bold text-anthracite">
            {dict.sav.careTitle}
          </h2>
          <p className="mt-2 text-zinc-600">{dict.sav.careIntro}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {dict.sav.care.map((fiche) => (
              <div
                key={fiche.titre}
                className="rounded-xl border border-dashed border-zinc-300 p-6"
              >
                <h3 className="font-semibold text-anthracite">{fiche.titre}</h3>
                <p className="mt-2 text-sm text-zinc-600">{fiche.resume}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {dict.sav.careSoon}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="reprise-titre">
          <h2 id="reprise-titre" className="text-2xl font-bold text-anthracite">
            {dict.sav.takebackTitle}
          </h2>
          {/* À-VALIDER: formulation à valider avec la fiduciaire, notamment le volet inscription TAR comme importateur. */}
          <div className="mt-4 rounded-xl border border-zinc-200 p-6">
            <p className="text-sm text-zinc-600">{dict.sav.takebackText}</p>
          </div>
        </section>

        <section aria-labelledby="processus-titre">
          <h2 id="processus-titre" className="text-2xl font-bold text-anthracite">
            {dict.sav.processTitle}
          </h2>
          <ol className="mt-4 space-y-3 text-zinc-700">
            {dict.sav.process.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-anthracite text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl bg-zinc-50 p-8 text-center">
          <h2 className="text-xl font-bold text-anthracite">{dict.sav.ctaTitle}</h2>
          <Link
            href={localePath(locale, "/contact?sujet=sav")}
            className="mt-4 inline-block rounded-lg bg-anthracite px-6 py-2.5 font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            {dict.sav.ctaButton}
          </Link>
        </section>
      </div>
    </>
  );
}
