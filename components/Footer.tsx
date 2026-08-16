/**
 * Pied de page : liens utiles + mentions légales suisses (placeholders
 * à compléter : raison sociale, adresse, numéro IDE).
 */
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Marque */}
        <div className="space-y-3">
          <p className="text-lg font-bold text-anthracite">
            <span className="text-cool" aria-hidden="true">❄</span> {SITE.name}{" "}
            <span className="text-heat" aria-hidden="true">🔥</span>
          </p>
          <p className="text-sm text-zinc-600">{SITE.tagline}</p>
          <p className="text-sm text-zinc-600">
            Fournisseurs sélectionnés, stock en Suisse et service après-vente en Suisse romande.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Liens du pied de page">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Navigation
          </p>
          <ul className="grid grid-cols-2 gap-1.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-zinc-600 hover:text-anthracite hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/a-propos" className="text-zinc-600 hover:text-anthracite hover:underline">
                Qui sommes-nous
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mentions légales — placeholders */}
        <div className="text-sm text-zinc-600">
          <p className="mb-3 font-semibold uppercase tracking-wide text-zinc-500">
            Informations légales
          </p>
          <address className="space-y-1 not-italic">
            <p>{SITE.legal.raisonSociale}</p>
            <p>{SITE.legal.adresse}</p>
            <p>IDE : {SITE.legal.ide}</p>
            <p>
              <a href={`mailto:${SITE.email}`} className="hover:underline">
                {SITE.email}
              </a>
            </p>
          </address>
          <p className="mt-3 text-xs text-zinc-500">
            Prix indicatifs en CHF, TVA suisse incluse. Mentions légales et CGV
            définitives en cours de rédaction.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {SITE.name} — Site V1, catalogue d&apos;exemple en cours de
        constitution.
      </div>
    </footer>
  );
}
