/**
 * Pied de page : 4 colonnes (marque / BOUTIQUE / SERVICE / LÉGAL),
 * bordure haute fine, valeurs légales depuis SITE.legal (placeholders).
 * Ne liste que des pages qui existent réellement.
 */
import Link from "next/link";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { FOOTER_ITEMS, SITE } from "@/lib/site";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
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
            {dict.footer.brandText}
          </p>
        </div>

        {/* Boutique */}
        <nav aria-label={dict.footer.shopAria} className="flex flex-col gap-2 text-[13.5px] text-ink/60">
          <p className="mb-1 text-xs font-semibold tracking-[.08em] text-ink">
            {dict.footer.shopTitle}
          </p>
          {FOOTER_ITEMS.shop.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.href)}
              className="hover:text-ink hover:underline"
            >
              {dict.footer.shop[item.key]}
            </Link>
          ))}
        </nav>

        {/* Service */}
        <nav aria-label={dict.footer.serviceAria} className="flex flex-col gap-2 text-[13.5px] text-ink/60">
          <p className="mb-1 text-xs font-semibold tracking-[.08em] text-ink">
            {dict.footer.serviceTitle}
          </p>
          {FOOTER_ITEMS.service.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.href)}
              className="hover:text-ink hover:underline"
            >
              {dict.footer.service[item.key]}
            </Link>
          ))}
        </nav>

        {/* Légal — placeholders à compléter avant mise en ligne */}
        <div className="flex flex-col gap-2 text-[13.5px] text-ink/60">
          <p className="mb-1 text-xs font-semibold tracking-[.08em] text-ink">
            {dict.footer.legalTitle}
          </p>
          <span>
            {SITE.legal.raisonSociale} — IDE : {SITE.legal.ide}
          </span>
          <a href={`mailto:${SITE.email}`} className="hover:text-ink hover:underline">
            {SITE.email}
          </a>
          <span>{dict.footer.vat}</span>
          <span>{dict.footer.cgv}</span>
        </div>
      </div>
    </footer>
  );
}
