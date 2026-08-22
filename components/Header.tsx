"use client";

/**
 * En-tête : bandeau service sombre + barre logo / nav / recherche / panier.
 * Item de nav actif : souligné teal. Menu hamburger sur mobile.
 * L'entrée « Hiver » ouvre un mega-menu : au survol sur bureau
 * (group-hover + focus-within pour le clavier), au tap sur mobile.
 * Tous les liens sont préfixés de la langue courante.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import SearchBar from "@/components/SearchBar";
import { useCart } from "@/lib/cart";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { HIVER_MEGA_MENU, NAV_ITEMS, SITE } from "@/lib/site";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiverMobileOpen, setHiverMobileOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const isActive = (href: string) => pathname === localePath(locale, href);

  const desktopLink = (href: string) =>
    isActive(href)
      ? "text-ink border-b-2 border-cool pb-[3px]"
      : "text-ink/65 hover:text-ink";

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setHiverMobileOpen(false);
  };

  const megaMenuEntries = HIVER_MEGA_MENU.map((entry) => ({
    cat: entry.cat,
    ...dict.header.megaMenu[entry.key],
  }));

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur">
      {/* Bandeau service */}
      {/* À-VALIDER: le seuil de livraison offerte (CHF 80.–) reste à confirmer une fois les tarifs postaux et les marges connus. */}
      <div className="flex items-center justify-center gap-11 overflow-x-auto whitespace-nowrap bg-ink px-4 py-[11px] font-mono text-[11px] font-medium tracking-[.12em] text-[#F2F0EB]/75">
        {dict.header.banner.map((msg) => (
          <span key={msg}>{msg}</span>
        ))}
      </div>

      {/* Barre principale */}
      <div className="flex items-center justify-between gap-4 border-b border-ink/[.12] px-4 py-[18px] sm:px-11">
        {/* Logo : pastilles + wordmark */}
        <Link
          href={localePath(locale, "/")}
          className="flex flex-none items-center gap-1.5"
          aria-label={`${SITE.name} — ${dict.header.homeAria}`}
        >
          <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-cool" />
          <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-heat" />
          <span className="ml-1 text-xl font-bold tracking-[-.02em]">THERMOVIA</span>
        </Link>

        {/* Navigation bureau */}
        <nav
          aria-label={dict.header.mainNavAria}
          className="hidden items-center gap-[26px] text-sm font-medium xl:flex"
        >
          {NAV_ITEMS.map((item) =>
            item.href === "/hiver" ? (
              /* Entrée « Hiver » : lien + mega-menu au survol / focus clavier */
              <div key={item.href} className="group relative">
                <Link
                  href={localePath(locale, item.href)}
                  className={`transition-colors ${desktopLink(item.href)}`}
                  aria-haspopup="true"
                >
                  {dict.header.nav[item.key]}
                </Link>
                {/* pt-[21px] : pont de survol entre le lien et le panneau */}
                <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-[21px] group-hover:block group-focus-within:block">
                  <div className="w-[300px] rounded-lg border border-ink/[.12] bg-paper p-2.5 shadow-[0_18px_44px_rgba(23,24,26,.14)]">
                    {megaMenuEntries.map((entry) => (
                      <Link
                        key={entry.cat}
                        href={localePath(locale, `/hiver?cat=${entry.cat}`)}
                        className="flex items-baseline justify-between gap-3 rounded-md px-3.5 py-3 transition-colors hover:bg-ink/5"
                      >
                        <span className="text-[14px] font-semibold text-ink">{entry.label}</span>
                        <span className="whitespace-nowrap font-mono text-[10.5px] font-medium tracking-[.08em] text-ink/50">
                          {entry.sublabel}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href={localePath(locale, "/hiver")}
                      className="mt-1 block border-t border-ink/[.1] px-3.5 pb-1.5 pt-3 text-[12.5px] font-semibold text-ink/60 transition-colors hover:text-ink"
                    >
                      {dict.header.megaMenu.all}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className={`transition-colors ${desktopLink(item.href)}`}
              >
                {dict.header.nav[item.key]}
              </Link>
            )
          )}
        </nav>

        {/* Droite : recherche / langue / panier */}
        <div className="flex flex-none items-center gap-3.5 text-[13px] text-ink/55">
          <div className="hidden lg:block">
            {/* Suspense : SearchBar et LocaleSwitcher lisent l'URL (useSearchParams). */}
            <Suspense fallback={null}>
              <SearchBar locale={locale} dict={dict} />
            </Suspense>
          </div>
          <div className="hidden sm:block">
            <Suspense fallback={null}>
              <LocaleSwitcher locale={locale} dict={dict} />
            </Suspense>
          </div>
          <Link
            href={localePath(locale, "/panier")}
            className="whitespace-nowrap rounded-full border border-ink/25 px-4 py-[9px] text-[13px] font-semibold text-ink transition-colors hover:bg-ink/5"
            aria-label={`${dict.header.cartAria}, ${count}`}
          >
            {dict.header.cart} · {count}
          </Link>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-md p-2 text-ink/70 hover:bg-ink/5 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? dict.header.closeMenu : dict.header.openMenu}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label={dict.header.mobileNavAria}
          className="border-b border-ink/[.12] bg-paper px-4 pb-4 pt-3 xl:hidden"
        >
          {/* La recherche est en haut du menu : c'est le premier réflexe sur mobile. */}
          <div className="mb-3 lg:hidden">
            <Suspense fallback={null}>
              <SearchBar locale={locale} dict={dict} variant="mobile" onNavigate={closeMobileMenu} />
            </Suspense>
          </div>

          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.href === "/hiver" ? (
                  <>
                    {/* Pas de survol sur mobile : le tap ouvre les sous-catégories */}
                    <button
                      type="button"
                      onClick={() => setHiverMobileOpen((o) => !o)}
                      aria-expanded={hiverMobileOpen}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                        isActive(item.href)
                          ? "bg-ink/5 text-ink"
                          : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                      }`}
                    >
                      {dict.header.nav[item.key]}
                      <span aria-hidden="true" className="text-ink/45">
                        {hiverMobileOpen ? "−" : "+"}
                      </span>
                    </button>
                    {hiverMobileOpen && (
                      <ul className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-ink/[.12] pl-3">
                        {megaMenuEntries.map((entry) => (
                          <li key={entry.cat}>
                            <Link
                              href={localePath(locale, `/hiver?cat=${entry.cat}`)}
                              onClick={closeMobileMenu}
                              className="flex items-baseline justify-between gap-3 rounded-md px-3 py-2 hover:bg-ink/5"
                            >
                              <span className="text-sm font-medium text-ink/80">{entry.label}</span>
                              <span className="whitespace-nowrap font-mono text-[10px] font-medium tracking-[.08em] text-ink/45">
                                {entry.sublabel}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={localePath(locale, "/hiver")}
                            onClick={closeMobileMenu}
                            className="block rounded-md px-3 py-2 text-[13px] font-semibold text-ink/60 hover:bg-ink/5 hover:text-ink"
                          >
                            {dict.header.megaMenu.all}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={localePath(locale, item.href)}
                    onClick={closeMobileMenu}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      isActive(item.href)
                        ? "bg-ink/5 text-ink"
                        : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {dict.header.nav[item.key]}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-3 border-t border-ink/[.1] pt-3 sm:hidden">
            <Suspense fallback={null}>
              <LocaleSwitcher locale={locale} dict={dict} />
            </Suspense>
          </div>
        </nav>
      )}
    </header>
  );
}
