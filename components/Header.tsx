"use client";

/**
 * En-tête design 2a : bandeau service sombre + barre logo/nav/panier.
 * Logo : deux pastilles (teal + terracotta) + THERMOVIA (plus d'emojis).
 * Item de nav actif : souligné teal. Menu hamburger sur mobile.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { NAV_LINKS, SITE } from "@/lib/site";

/** Messages du bandeau service (annonce). */
const SERVICE_BANNER = [
  "LIVRAISON OFFERTE DÈS CHF 80.–",
  "RETOURS 30 JOURS",
  "ATELIER DE RÉPARATION À LAUSANNE",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const desktopLink = (href: string) =>
    pathname === href
      ? "text-ink border-b-2 border-cool pb-[3px]"
      : "text-ink/65 hover:text-ink";

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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`transition-colors ${desktopLink(link.href)}`}>
              {link.label}
            </Link>
          ))}
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
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === link.href ? "bg-ink/5 text-ink" : "text-ink/65 hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
