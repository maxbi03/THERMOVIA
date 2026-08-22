import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { localePath, resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.aPropos.title, description: dict.meta.aPropos.description };
}

/** Page positionnement : stock + SAV, engagement qualité, sourcing. */
export default async function AProposPage({ params }: LocaleParams) {
  const { locale, dict } = await resolvePage(params);

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow={dict.aPropos.eyebrow}
        title={dict.aPropos.title}
        subtitle={dict.aPropos.subtitle}
      />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <section aria-labelledby="approche-titre">
          <h2 id="approche-titre" className="text-2xl font-bold text-anthracite">
            {dict.aPropos.approachTitle}
          </h2>
          <div className="mt-4 space-y-4 text-zinc-700">
            <p>{dict.aPropos.approachIntro}</p>
            <ul className="list-disc space-y-2 pl-5">
              {dict.aPropos.approachItems.map((item, i) => (
                <li key={item.strong}>
                  <strong>{item.strong}</strong> : {item.text}
                  {/* Le renvoi vers le SAV n'a de sens que sur la puce qui en parle. */}
                  {i === 1 && (
                    <>
                      {" "}
                      <Link href={localePath(locale, "/sav")} className="text-cool underline">
                        {dict.aPropos.savLink}
                      </Link>
                      .
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="sourcing-titre">
          <h2 id="sourcing-titre" className="text-2xl font-bold text-anthracite">
            {dict.aPropos.sourcingTitle}
          </h2>
          <div className="mt-4 space-y-4 text-zinc-700">
            <p>{dict.aPropos.sourcingP1}</p>
            <p>
              {dict.aPropos.sourcingP2Before}
              <strong>{dict.aPropos.sourcingP2Strong}</strong>
              {dict.aPropos.sourcingP2After}
            </p>
          </div>
        </section>

        <section aria-labelledby="engagement-titre">
          <h2 id="engagement-titre" className="text-2xl font-bold text-anthracite">
            {dict.aPropos.commitmentsTitle}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {dict.aPropos.commitments.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-5">
                <h3 className="font-semibold text-anthracite">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
