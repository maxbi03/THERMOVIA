import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Guide des tailles",
  description:
    "Comment choisir la taille de votre veste, gilet ou gants chauffants : tableaux de correspondance en centimètres et méthode de mesure, pour commander juste du premier coup.",
};

// À-VALIDER: toutes les mesures de cette page sont indicatives. Les remplacer par les mesures relevées sur les echantillons retenus (les tailles asiatiques taillent souvent une a deux tailles en dessous des standards europeens).

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

const MESURES = [
  {
    titre: "Tour de poitrine",
    texte:
      "Mètre ruban à l'horizontale, sur la partie la plus large de la poitrine, bras le long du corps. Ne serrez pas.",
  },
  {
    titre: "Tour de taille",
    texte: "À l'endroit le plus étroit du buste, généralement juste au-dessus du nombril.",
  },
  {
    titre: "Tour de main",
    texte:
      "Autour de la paume, juste sous les doigts, sans inclure le pouce. Mesurez votre main dominante.",
  },
];

/** Guide des tailles — valeurs d'exemple en attendant les mesures réelles. */
export default function GuideTaillesPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Guide des tailles"
        title="Trouver la bonne taille du premier coup"
        subtitle="Un vêtement chauffant doit être près du corps pour que les zones de chauffe touchent le buste, sans comprimer. Mesurez-vous une fois, commandez tranquille."
      />

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6">
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
          <p className="text-sm text-zinc-600">
            <strong className="text-anthracite">Valeurs d&apos;exemple.</strong> Les tableaux
            ci-dessous illustrent la structure du guide définitif. Les mesures réelles seront
            relevées sur chaque modèle retenu, après réception et test des échantillons — les
            tailles annoncées par les fabricants ne correspondent pas toujours aux standards
            européens.
          </p>
        </div>

        <section aria-labelledby="hauts-titre">
          <h2 id="hauts-titre" className="text-2xl font-bold text-anthracite">
            Vestes et gilets chauffants
          </h2>
          <p className="mt-2 mb-4 text-zinc-600">
            Coupe unisexe. Entre deux tailles, prenez la plus grande si vous comptez porter une
            couche épaisse dessous, la plus petite pour un gilet à porter sous une veste.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-300 text-left">
                  <th scope="col" className="py-2.5 pr-4 font-semibold text-anthracite">
                    Taille
                  </th>
                  <th scope="col" className="py-2.5 pr-4 font-semibold text-anthracite">
                    Tour de poitrine (cm)
                  </th>
                  <th scope="col" className="py-2.5 pr-4 font-semibold text-anthracite">
                    Tour de taille (cm)
                  </th>
                  <th scope="col" className="py-2.5 font-semibold text-anthracite">
                    Hauteur (cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {HAUTS.map((ligne) => (
                  <tr key={ligne.taille} className="border-b border-zinc-200">
                    <th scope="row" className="py-2.5 pr-4 text-left font-semibold text-anthracite">
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
            Gants chauffants
          </h2>
          <p className="mt-2 mb-4 text-zinc-600">
            Un gant trop grand chauffe mal : l&apos;air circule entre la main et les fils
            chauffants. Privilégiez l&apos;ajusté.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-300 text-left">
                  <th scope="col" className="py-2.5 pr-4 font-semibold text-anthracite">
                    Taille
                  </th>
                  <th scope="col" className="py-2.5 font-semibold text-anthracite">
                    Tour de main (cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {GANTS.map((ligne) => (
                  <tr key={ligne.taille} className="border-b border-zinc-200">
                    <th scope="row" className="py-2.5 pr-4 text-left font-semibold text-anthracite">
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
            Semelles chauffantes
          </h2>
          <p className="mt-2 text-zinc-600">
            Les semelles se commandent en pointure européenne (36 à 46) et se découpent au
            besoin : suivez le tracé imprimé correspondant à votre pointure, puis coupez avec des
            ciseaux — sans jamais entamer la zone du câblage chauffant, matérialisée sur la
            semelle.
          </p>
        </section>

        <section aria-labelledby="mesurer-titre">
          <h2 id="mesurer-titre" className="text-2xl font-bold text-anthracite">
            Comment vous mesurer
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {MESURES.map((mesure) => (
              <div key={mesure.titre} className="rounded-xl border border-zinc-200 p-5">
                <h3 className="font-semibold text-anthracite">{mesure.titre}</h3>
                <p className="mt-1.5 text-sm text-zinc-600">{mesure.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-zinc-50 p-8 text-center">
          <h2 className="text-xl font-bold text-anthracite">Un doute sur votre taille ?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
            Envoyez-nous vos mesures et l&apos;usage prévu : nous vous répondons avec une
            recommandation, plutôt que de vous laisser deviner.
          </p>
          <Link
            href="/contact?sujet=question"
            className="mt-5 inline-block rounded-lg bg-anthracite px-6 py-2.5 font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            Demander conseil
          </Link>
        </section>
      </div>
    </>
  );
}
