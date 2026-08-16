import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderVisual from "@/components/PlaceholderVisual";
import ProfileSelector from "@/components/ProfileSelector";
import Reveal from "@/components/Reveal";
import { getProductById } from "@/lib/products";
import { formatPrice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thermovia — Équipements chauffants et rafraîchissants en Suisse",
  description:
    "Boutique suisse romande d'équipements de régulation thermique : gilets ventilés et PCM pour l'été, vestes et gants chauffants pour l'hiver. Fournisseurs sélectionnés, stock en Suisse, SAV local.",
};

/**
 * Page d'accueil : hero immersif, univers été/hiver, produits vedettes,
 * argumentaire fournisseurs + SAV, accès par profil.
 */
export default function HomePage() {
  // Produits mis en avant (sections alternées texte/visuel)
  const vedetteEte = getProductById("ch-003")!; // Gilet PCM Fresh Core
  const vedetteHiver = getProductById("fr-001")!; // Veste chauffante Alpine Pro

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-zinc-900 text-white">
        {/* Halos été (bleu) et hiver (orange) */}
        <div
          aria-hidden="true"
          className="animate-float-slow absolute -left-24 top-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-cool/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slower absolute -right-24 bottom-[-20%] -z-10 h-[28rem] w-[28rem] rounded-full bg-heat/30 blur-3xl"
        />
        {/* Trame de points subtile */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            <span aria-hidden="true" className="h-px w-10 bg-white/40" />
            Boutique suisse romande
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
            L&apos;été{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              au frais
            </span>
            .<br />
            L&apos;hiver{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              au chaud
            </span>
            .
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Gilets ventilés, gilets PCM, vestes et gants chauffants — sélectionnés auprès de
            fournisseurs de confiance, avec stock en Suisse et service après-vente en Suisse
            romande.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ete"
              className="group rounded-xl bg-cool px-7 py-3.5 font-semibold text-white shadow-lg shadow-cool/25 transition-all hover:-translate-y-0.5 hover:bg-cool-dark hover:shadow-xl hover:shadow-cool/30"
            >
              ❄ Univers Été{" "}
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/hiver"
              className="group rounded-xl bg-heat px-7 py-3.5 font-semibold text-white shadow-lg shadow-heat/25 transition-all hover:-translate-y-0.5 hover:bg-heat-dark hover:shadow-xl hover:shadow-heat/30"
            >
              🔥 Univers Hiver{" "}
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Badges de confiance */}
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <span aria-hidden="true">🇨🇭</span> Stock en Suisse
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true">🔧</span> SAV en Suisse romande
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true">✅</span> Garantie 2 ans
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true">🤝</span> Fournisseurs sélectionnés
            </li>
          </ul>
        </div>
      </section>

      {/* ================= PILIERS ================= */}
      <section aria-labelledby="valeur-titre" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 id="valeur-titre" className="text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl">
            Pourquoi Thermovia ?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">
            Un commerçant qui s&apos;engage sur ce qu&apos;il vend — du choix du fournisseur
            jusqu&apos;à la réparation.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: (
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z M9 12l2 2 4-4" />
              ),
              title: "Sélection exigeante",
              text: "Chaque produit est testé et retenu auprès de fournisseurs de confiance en Europe et en Asie : une gamme courte que nous connaissons et assumons.",
            },
            {
              icon: (
                <path d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z M9 21V12h6v9" />
              ),
              title: "Stock en Suisse",
              text: "Les produits clés sont stockés localement : livraison rapide, disponibilité réelle et retours vers une adresse suisse.",
            },
            {
              icon: (
                <path d="M14.7 6.3a4.5 4.5 0 0 0-6.1 6.1L3 18l3 3 5.6-5.6a4.5 4.5 0 0 0 6.1-6.1l-2.9 2.9-2.1-2.1 2-2.8Z" />
              ),
              title: "SAV en Suisse romande",
              text: "Garantie 2 ans, batteries et pièces détachées, réparation quand c'est possible — et un interlocuteur qui répond en français.",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-anthracite"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {pillar.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-anthracite">{pillar.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= DEUX UNIVERS ================= */}
      <section aria-labelledby="univers-titre" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 id="univers-titre" className="text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl">
              Deux univers, un objectif : votre confort
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link
                href="/ete"
                className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-sky-800 via-sky-700 to-cyan-600 p-9 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl transition-transform duration-500 group-hover:scale-150"
                />
                <p className="text-4xl" aria-hidden="true">❄</p>
                <h3 className="mt-4 text-2xl font-bold">Été</h3>
                <p className="mt-2 max-w-md leading-relaxed text-white/85">
                  Gilets ventilés, gilets PCM, ventilateurs de cou, portables et de table
                  pour travailler et vivre au frais.
                </p>
                <p className="mt-6 font-semibold">
                  Voir le catalogue{" "}
                  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </p>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="/hiver"
                className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-orange-800 via-orange-700 to-red-600 p-9 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl transition-transform duration-500 group-hover:scale-150"
                />
                <p className="text-4xl" aria-hidden="true">🔥</p>
                <h3 className="mt-4 text-2xl font-bold">Hiver</h3>
                <p className="mt-2 max-w-md leading-relaxed text-white/85">
                  Vestes chauffantes, gilets chauffants, gants chauffants et accessoires pour
                  affronter le froid sans se figer.
                </p>
                <p className="mt-6 font-semibold">
                  Voir le catalogue{" "}
                  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1.5">
                    →
                  </span>
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PRODUIT VEDETTE ÉTÉ ================= */}
      <section aria-labelledby="vedette-ete-titre" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cool">
                Vedette de l&apos;été
              </p>
              <h2 id="vedette-ete-titre" className="mt-3 text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl">
                {vedetteEte.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {vedetteEte.shortDescription}
              </p>
              <ul className="mt-6 space-y-3">
                {vedetteEte.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-zinc-700">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cool-light text-xs font-bold text-cool"
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-6">
                <p className="text-2xl font-extrabold text-anthracite">
                  {formatPrice(vedetteEte.price)}
                  <span className="block text-xs font-normal text-zinc-500">TVA incluse</span>
                </p>
                <Link
                  href="/ete"
                  className="rounded-xl bg-cool px-6 py-3 font-semibold text-white shadow-md shadow-cool/20 transition-all hover:-translate-y-0.5 hover:bg-cool-dark"
                >
                  Découvrir l&apos;univers Été →
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <PlaceholderVisual
                univers={vedetteEte.univers}
                category={vedetteEte.category}
                alt={`Visuel temporaire du produit ${vedetteEte.name}`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PRODUIT VEDETTE HIVER ================= */}
      <section aria-labelledby="vedette-hiver-titre" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-heat">
                Vedette de l&apos;hiver
              </p>
              <h2 id="vedette-hiver-titre" className="mt-3 text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl">
                {vedetteHiver.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {vedetteHiver.shortDescription}
              </p>
              <ul className="mt-6 space-y-3">
                {vedetteHiver.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-zinc-700">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-heat-light text-xs font-bold text-heat"
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-6">
                <p className="text-2xl font-extrabold text-anthracite">
                  {formatPrice(vedetteHiver.price)}
                  <span className="block text-xs font-normal text-zinc-500">TVA incluse</span>
                </p>
                <Link
                  href="/hiver"
                  className="rounded-xl bg-heat px-6 py-3 font-semibold text-white shadow-md shadow-heat/20 transition-all hover:-translate-y-0.5 hover:bg-heat-dark"
                >
                  Découvrir l&apos;univers Hiver →
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <PlaceholderVisual
                univers={vedetteHiver.univers}
                category={vedetteHiver.category}
                alt={`Visuel temporaire du produit ${vedetteHiver.name}`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= BANDE SAV ================= */}
      <section aria-labelledby="sav-titre" className="relative isolate overflow-hidden bg-zinc-900 py-20 text-white">
        <div
          aria-hidden="true"
          className="animate-float-slow absolute right-[15%] top-[-30%] -z-10 h-72 w-72 rounded-full bg-cool/20 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Notre engagement
            </p>
            <h2 id="sav-titre" className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Réparer plutôt que remplacer
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
              Un équipement à batterie n&apos;est pas un produit jetable. Notre service
              après-vente en Suisse romande assure garantie, pièces détachées et réparation —
              pour que votre équipement dure.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              ["2 ans", "de garantie sur tous les produits, batteries comprises selon conditions"],
              ["48 h", "de délai de réponse maximum, en français, par un interlocuteur local"],
              ["100 %", "des batteries et pièces d'usure disponibles séparément"],
            ].map(([stat, label], i) => (
              <Reveal key={stat} delay={i * 120}>
                <div className="border-l-2 border-white/20 pl-5">
                  <p className="text-4xl font-extrabold tracking-tight">{stat}</p>
                  <p className="mt-2 leading-relaxed text-white/70">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              href="/sav"
              className="mt-12 inline-block rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-anthracite"
            >
              Découvrir notre SAV →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= PROFILS ================= */}
      <section aria-labelledby="profils-titre" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 id="profils-titre" className="text-3xl font-extrabold tracking-tight text-anthracite sm:text-4xl">
            Trouvez votre équipement selon votre usage
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <ProfileSelector />
          </div>
        </Reveal>
      </section>

      {/* ================= NOTE V1 ================= */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <Reveal>
          <p className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-center text-sm text-zinc-500">
            Site en version de lancement : les produits affichés sont des exemples
            représentatifs. Le catalogue final (fournisseurs en cours de sélection) arrive
            prochainement —{" "}
            <Link href="/contact" className="underline hover:text-anthracite">
              contactez-nous
            </Link>{" "}
            pour être tenu informé.
          </p>
        </Reveal>
      </div>
    </>
  );
}
