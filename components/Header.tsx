"use client";

/**
 * En-tête design 2a : bandeau service sombre + barre logo/nav/panier.
 * Logo : deux pastilles (teal + terracotta) + THERMOVIA (plus d'emojis).
 * Item de nav actif : souligné teal. Menu hamburger sur mobile.
 * L'entrée « Hiver » ouvre un mega-menu : au survol sur bureau
 * (CSS group-hover + focus-within pour le clavier), au tap sur mobile.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { HIVER_MEGA_MENU, NAV_LINKS, SITE } from "@/lib/site";

/** Messages du bandeau service (annonce). */
const SERVICE_BANNER = [
  "LIVRAISON OFFERTE DÈS CHF 80.–",
  "RETOURS 30 JOURS",
  "ATELIER DE RÉPARATION À LAUSANNE",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiverMobileOpen, setHiverMobileOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const desktopLink = (href: string) =>
    pathname === href
      ? "text-ink border-b-2 border-cool pb-[3px]"
      : "text-ink/65 hover:text-ink";

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setHiverMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur">
      {/* Bandeau service */}
      <div className="flex items-center justify-center gap-11 overflow-x-auto whitespace-nowrap bg-ink px-4 py-[11px] font-mono text-[11px] font-medium tracking-[.12em] text-[#F2F0EB]/75">
        {SERVICE_BANNER.map((msg) => (
          <span key={msg}>{msg}</span>
        ))}
      </div>

      {/* Barre principale */}
      <div className="flex items-center justify-between border-b border-ink/[.12] px-4 py-[18px] sm:px-11">
        {/* Logo : pastilles + wordmark */}
        <Link href="/" className="flex items-center gap-1.5" aria-label={`${SITE.name} — accueil`}>
          <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-cool" />
          <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-heat" />
          <span className="ml-1 text-xl font-bold tracking-[-.02em]">THERMOVIA</span>
        </Link>

        {/* Navigation bureau */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-[26px] text-sm font-medium xl:flex">
          {NAV_LINKS.map((link) =>
            link.href === "/hiver" ? (
              /* Entrée « Hiver » : lien + mega-menu au survol / focus clavier */
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`transition-colors ${desktopLink(link.href)}`}
                  aria-haspopup="true"
                >
                  {link.label}
                </Link>
                {/* pt-[21px] : pont de survol entre le lien et le panneau */}
                <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-[21px] group-hover:block group-focus-within:block">
                  <div className="w-[300px] rounded-lg border border-ink/[.12] bg-paper p-2.5 shadow-[0_18px_44px_rgba(23,24,26,.14)]">
                    {HIVER_MEGA_MENU.map((entry) => (
                      <Link
                        key={entry.cat}
                        href={`/hiver?cat=${entry.cat}`}
                        className="flex items-baseline justify-between gap-3 rounded-md px-3.5 py-3 transition-colors hover:bg-ink/5"
                      >
                        <span className="text-[14px] font-semibold text-ink">{entry.label}</span>
                        <span className="font-mono text-[10.5px] font-medium tracking-[.08em] text-ink/50">
                          {entry.sublabel}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/hiver"
                      className="mt-1 block border-t border-ink/[.1] px-3.5 pb-1.5 pt-3 text-[12.5px] font-semibold text-ink/60 transition-colors hover:text-ink"
                    >
                      Tout l&apos;univers hiver →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={`transition-colors ${desktopLink(link.href)}`}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Droite : recherche / langue / panier */}
        <div className="flex items-center gap-3.5 text-[13px] text-ink/55">
          <span className="hidden sm:inline" title="Recherche — à venir">
            Recherche
          </span>
          <span className="hidden sm:inline" title="Français (de/it à venir)">
            FR
          </span>
          <Link
            href="/panier"
            className="rounded-full border border-ink/25 px-4 py-[9px] text-[13px] font-semibold text-ink transition-colors hover:bg-ink/5"
            aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
          >
            Panier · {count}
          </Link>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-md p-2 text-ink/70 hover:bg-ink/5 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
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
          aria-label="Navigation mobile"
          className="border-b border-ink/[.12] bg-paper px-4 pb-4 pt-2 xl:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href === "/hiver" ? (
                  <>
                    {/* Pas de survol sur mobile : le tap ouvre le panneau des sous-catégories */}
                    <button
                      type="button"
                      onClick={() => setHiverMobileOpen((o) => !o)}
                      aria-expanded={hiverMobileOpen}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === link.href ? "bg-ink/5 text-ink" : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                      }`}
                    >
                      {link.label}
                      <span aria-hidden="true" className="text-ink/45">
                        {hiverMobileOpen ? "−" : "+"}
                      </span>
                    </button>
                    {hiverMobileOpen && (
                      <ul className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-ink/[.12] pl-3">
                        {HIVER_MEGA_MENU.map((entry) => (
                          <li key={entry.cat}>
                            <Link
                              href={`/hiver?cat=${entry.cat}`}
                              onClick={closeMobileMenu}
                              className="flex items-baseline justify-between gap-3 rounded-md px-3 py-2 hover:bg-ink/5"
                            >
                              <span className="text-sm font-medium text-ink/80">{entry.label}</span>
                              <span className="font-mono text-[10px] font-medium tracking-[.08em] text-ink/45">
                                {entry.sublabel}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/hiver"
                            onClick={closeMobileMenu}
                            className="block rounded-md px-3 py-2 text-[13px] font-semibold text-ink/60 hover:bg-ink/5 hover:text-ink"
                          >
                            Tout l&apos;univers hiver →
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      pathname === link.href ? "bg-ink/5 text-ink" : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
