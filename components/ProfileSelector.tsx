/**
 * Accès rapide par profil client : Travail extérieur / Sport /
 * Particuliers / Entreprises. Utilisé sur la page d'accueil.
 */
import Link from "next/link";

const PROFILES = [
  {
    href: "/travail-exterieur",
    title: "Travail extérieur",
    description: "BTP, agriculture, logistique : travaillez dehors dans de bonnes conditions, été comme hiver.",
    icon: "M4 20h16M6 20V9l6-4 6 4v11M10 20v-5h4v5",
  },
  {
    href: "/sport",
    title: "Sport",
    description: "Running, cyclisme, outdoor : performance et confort par tous les temps.",
    icon: "M13 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 20l4-8 3 2 2-5 5 3M9 12 7 9l4-3",
  },
  {
    href: "/particuliers",
    title: "Particuliers",
    description: "Confort au quotidien : maison, trajets, jardin, loisirs.",
    icon: "M4 11l8-7 8 7M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9",
  },
  {
    href: "/entreprises",
    title: "Entreprises",
    description: "Devis groupés, facturation et SAV dédié pour équiper vos collaborateurs.",
    icon: "M3 20h18M5 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14m0-10h4a1 1 0 0 1 1 1v9M8 8h3m-3 4h3m-3 4h3",
  },
] as const;

export default function ProfileSelector() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {PROFILES.map((profile) => (
        <Link
          key={profile.href}
          href={profile.href}
          className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 transition-colors group-hover:bg-anthracite">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-zinc-500 transition-colors group-hover:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={profile.icon} />
          </svg>
          </div>
          <h3 className="font-semibold text-anthracite">{profile.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{profile.description}</p>
          <p className="mt-3 text-sm font-medium text-cool group-hover:underline">
            Découvrir →
          </p>
        </Link>
      ))}
    </div>
  );
}
