/**
 * Pied de page design 2a : 4 colonnes (marque / BOUTIQUE / SERVICE / LÉGAL),
 * bordure haute fine, valeurs légales depuis SITE.legal (placeholders).
 */
import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 px-4 sm:px-11">
      <div className="grid gap-9 border-t border-ink/[.14] py-10 pb-11 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        {/* Marque */}
        <div>
          <p className="flex items-center gap-1.5 text-lg font-bold tracking-[-.02em]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cool" />
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-heat" />
            <span className="ml-1">THERMOVIA</span>
          </p>
          <p className="mt-3 max-w-[270px] text-[13.5px] leading-relaxed text-ink/60">
            Régulation thermique corporelle. Suisse romande, stock local, atelier de
            réparation intégré.
          </p>
        </div>

        {/* Boutique */}
        <nav aria-label="Liens boutique" className="flex flex-col gap-2 text-[13.5px] text-ink/60">
          <p className="mb-1 text-xs font-semibold tracking-[.08em] text-ink">BOUTIQUE</p>
          {FOOTER_LINKS.boutique.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Service */}
        <nav aria-label="Liens service" className="flex flex-col gap-2 text-[13.5px] text-ink/60">
          <p className="mb-1 text-xs font-semibold tracking-[.08em] text-ink">SERVICE</p>
          {FOOTER_LINKS.service.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Légal — placeholders à compléter avant mise en ligne */}
        <div className="flex flex-col gap-2 text-[13.5px] text-ink/60">
          <p className="mb-1 text-xs font-semibold tracking-[.08em] text-ink">LÉGAL</p>
          <span>
            {SITE.legal.raisonSociale} — IDE : {SITE.legal.ide}
          </span>
          <a href={`mailto:${SITE.email}`} className="hover:text-ink hover:underline">
            {SITE.email}
          </a>
          <span>Prix en CHF, TVA suisse incluse</span>
          <span>CGV — en rédaction</span>
        </div>
      </div>
    </footer>
  );
}
