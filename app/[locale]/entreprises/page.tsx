import type { Metadata } from "next";
import DevisVolumeForm from "@/components/DevisVolumeForm";
import Hero from "@/components/Hero";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import { resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return {
    title: dict.meta.entreprises.title,
    description: dict.meta.entreprises.description,
  };
}

/** Page B2B : modèle devis/commande en volume (pas de panier), cas d'usage terrain. */
export default async function EntreprisesPage({ params }: LocaleParams) {
  const { dict } = await resolvePage(params);

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow={dict.entreprises.eyebrow}
        title={dict.entreprises.title}
        subtitle={dict.entreprises.subtitle}
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        {/* Cas d'usage mis en avant : équipes terrain */}
        <section aria-labelledby="cas-usage-titre">
          <div className="grid items-center gap-8 rounded-xl border border-zinc-200 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="min-h-[240px] overflow-hidden rounded-lg">
              <PlaceholderVisual univers="hiver" caption={dict.entreprises.useCaseCaption} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {dict.entreprises.useCaseEyebrow}
              </p>
              <h2 id="cas-usage-titre" className="mt-3 text-2xl font-bold text-anthracite">
                {dict.entreprises.useCaseTitle}
              </h2>
              <p className="mt-3 text-zinc-600">{dict.entreprises.useCaseText}</p>
              {/* À-VALIDER: délai indicatif 4-6 semaines à confirmer une fois le fabricant retenu et les délais réels de production + import connus. */}
              <p className="mt-4 text-sm font-medium text-anthracite">
                {dict.entreprises.useCaseDelay}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="b2b-titre">
          <h2 id="b2b-titre" className="text-2xl font-bold text-anthracite">
            {dict.entreprises.offerTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.entreprises.offer.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-6">
                <h3 className="font-semibold text-anthracite">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="devis-titre" className="max-w-3xl">
          <h2 id="devis-titre" className="text-2xl font-bold text-anthracite">
            {dict.entreprises.formTitle}
          </h2>
          <p className="mt-2 mb-6 text-zinc-600">{dict.entreprises.formIntro}</p>
          <DevisVolumeForm dict={dict} />
        </section>
      </div>
    </>
  );
}
