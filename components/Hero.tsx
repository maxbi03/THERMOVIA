/**
 * Bandeau d'en-tête de page, avec 3 variantes de couleur :
 * - "neutral" : base anthracite (pages institutionnelles)
 * - "cool"    : bleu/cyan (univers ÉTÉ → produits rafraîchissants)
 * - "heat"    : orange/rouge (univers HIVER → produits chauffants)
 * Halos décoratifs flottants + typographie renforcée pour un rendu premium.
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
  neutral: {
    bg: "bg-gradient-to-br from-[#17181A] to-[#2B3036]",
    glowA: "bg-cool/25",
    glowB: "bg-heat/20",
  },
  cool: {
    bg: "bg-gradient-to-br from-[#24525F] to-[#2F6A7A]",
    glowA: "bg-[#7FA3AC]/25",
    glowB: "bg-white/10",
  },
  heat: {
    bg: "bg-gradient-to-br from-[#9A4E24] to-[#B85F2E]",
    glowA: "bg-[#D9C7B4]/25",
    glowB: "bg-white/10",
  },
} as const;

export default function Hero({ variant = "neutral", eyebrow, title, subtitle, children }: HeroProps) {
  const v = VARIANTS[variant];

  return (
    <section className={`relative isolate overflow-hidden ${v.bg} text-white`}>
      {/* Halos décoratifs */}
      <div
        aria-hidden="true"
        className={`absolute -top-24 right-[10%] -z-10 h-72 w-72 rounded-full blur-3xl ${v.glowA}`}
      />
      <div
        aria-hidden="true"
        className={`absolute -bottom-32 left-[5%] -z-10 h-80 w-80 rounded-full blur-3xl ${v.glowB}`}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        {eyebrow && (
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            <span aria-hidden="true" className="h-px w-8 bg-white/50" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
