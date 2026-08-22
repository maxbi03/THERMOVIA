import type { Metadata } from "next";
import EteNotifyForm from "@/components/EteNotifyForm";
import Hero from "@/components/Hero";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Été — la gamme rafraîchissante arrive",
  description:
    "Gilets ventilés, gilets PCM et ventilateurs de cou et portables : la gamme été Thermovia est en préparation. Laissez votre e-mail pour être averti·e au lancement.",
};

// À-VALIDER: liste indicative des produits annoncés, à ajuster selon le sourcing été réel au printemps.
const GAMME_A_VENIR = [
  {
    label: "Gilets ventilés",
    sublabel: "Flux d'air continu pour le chantier, la logistique et les loisirs",
  },
  {
    label: "Gilets PCM",
    sublabel: "Fraîcheur constante sans batterie, par matériau à changement de phase",
  },
  {
    label: "Ventilateurs de cou & portables",
    sublabel: "Mains libres ou format poche, pour les trajets et les journées dehors",
  },
] as const;

/** Page teaser de l'univers ÉTÉ : gamme en préparation, lancement au printemps. */
export default function EtePage() {
  return (
    <>
      <Hero
        variant="cool"
        eyebrow="Univers été — bientôt disponible"
        title="La gamme été arrive avec les beaux jours"
        subtitle="Nous préparons la sélection anti-canicule : elle ouvrira après le lancement de l'hiver, une fois les échantillons testés en conditions réelles."
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-stretch gap-9 lg:grid-cols-[1fr_1.1fr]">
          {/* Visuel été cohérent avec l'identité (rayures teal fraîches) */}
          <Reveal>
            <div className="min-h-[300px] overflow-hidden rounded-lg lg:min-h-full">
              <PlaceholderVisual
                univers="ete"
                caption="photo teaser — gilet ventilé porté en plein été, lumière chaude"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <p className="eyebrow-mono mb-3 text-cool">Au programme</p>
                <h2 className="text-[28px] font-bold tracking-[-.025em]">
                  Ce que la gamme été vous réserve
                </h2>
                <div className="mt-6 flex flex-col gap-3.5">
                  {GAMME_A_VENIR.map((item) => (
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
                <p className="text-lg font-semibold">Être averti·e au lancement</p>
                <p className="mb-5 mt-1.5 text-sm text-ink/[.58]">
                  Un seul message à l&apos;ouverture de la gamme été. Pas de newsletter.
                </p>
                <EteNotifyForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
