import type { Metadata } from "next";
import EteNotifyForm from "@/components/EteNotifyForm";
import Hero from "@/components/Hero";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import Reveal from "@/components/Reveal";
import { resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.ete.title, description: dict.meta.ete.description };
}

// À-VALIDER: liste indicative des produits annoncés, à ajuster selon le sourcing été réel au printemps.

/** Page teaser de l'univers ÉTÉ : gamme en préparation, lancement au printemps. */
export default async function EtePage({ params }: LocaleParams) {
  const { dict } = await resolvePage(params);

  return (
    <>
      <Hero
        variant="cool"
        eyebrow={dict.ete.eyebrow}
        title={dict.ete.title}
        subtitle={dict.ete.subtitle}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-stretch gap-9 lg:grid-cols-[1fr_1.1fr]">
          {/* Visuel été cohérent avec l'identité (rayures teal fraîches) */}
          <Reveal>
            <div className="min-h-[300px] overflow-hidden rounded-lg lg:min-h-full">
              <PlaceholderVisual univers="ete" caption={dict.ete.caption} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <p className="eyebrow-mono mb-3 text-cool">{dict.ete.programEyebrow}</p>
                <h2 className="text-[28px] font-bold tracking-[-.025em]">
                  {dict.ete.programTitle}
                </h2>
                <div className="mt-6 flex flex-col gap-3.5">
                  {dict.ete.program.map((item) => (
                    <div key={item.label} className="rounded-lg border border-ink/[.12] p-6">
                      <p className="text-[15.5px] font-semibold">{item.label}</p>
                      <p className="mt-1.5 text-[13.5px] leading-[1.55] text-ink/[.58]">
                        {item.sublabel}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-surface p-7">
                <p className="text-lg font-semibold">{dict.ete.notifyTitle}</p>
                <p className="mb-5 mt-1.5 text-sm text-ink/[.58]">{dict.ete.notifyText}</p>
                <EteNotifyForm dict={dict} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
