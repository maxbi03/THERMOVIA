/**
 * Bandeau d'en-tête de page, avec 3 variantes de couleur :
 * - "neutral" : base anthracite (accueil, pages institutionnelles)
 * - "cool"    : bleu/cyan (univers chaleur → produits rafraîchissants)
 * - "heat"    : orange/rouge (univers froid → produits chauffants)
 */
import type { ReactNode } from "react";

interface HeroProps {
  variant?: "neutral" | "cool" | "heat";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode; // CTA optionnels
}

const VARIANTS = {
  neutral: "bg-gradient-to-br from-zinc-900 to-zinc-700",
  cool: "bg-gradient-to-br from-sky-700 to-cyan-600",
  heat: "bg-gradient-to-br from-orange-700 to-red-600",
} as const;

export default function Hero({ variant = "neutral", eyebrow, title, subtitle, children }: HeroProps) {
  return (
    <section className={`${VARIANTS[variant]} text-white`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
