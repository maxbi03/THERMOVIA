import type { Univers } from "@/lib/products";

/**
 * Visuel temporaire du design 2a : placeholder rayé (repeating-linear-gradient)
 * avec légende monospace décrivant la photo attendue.
 * Sera remplacé par de vraies photos via le champ `imageUrl` des produits.
 * Le ratio (4/5, 3/4…) est fixé par le conteneur parent.
 */

const STRIPES: Record<string, string> = {
  // Été : rayures teal très claires
  ete: "repeating-linear-gradient(135deg, #E3E9EA 0 12px, #DBE2E3 12px 24px)",
  // Hiver : rayures sable
  hiver: "repeating-linear-gradient(135deg, #EDE3D8 0 12px, #E6DACD 12px 24px)",
  // Seconde vie : rayures verdâtres
  refurb: "repeating-linear-gradient(135deg, #DFE6DC 0 12px, #D7E0D4 12px 24px)",
  // Neutre (atelier, visuels institutionnels)
  neutral: "repeating-linear-gradient(135deg, #E8E6E1 0 14px, #E1DFD9 14px 28px)",
};

interface PlaceholderVisualProps {
  univers?: Univers;
  /** Force la variante (ex. "refurb" pour les produits seconde vie). */
  variant?: keyof typeof STRIPES;
  /** Légende monospace décrivant la photo attendue (aussi utilisée en aria-label). */
  caption: string;
  className?: string;
}

export default function PlaceholderVisual({
  univers = "hiver",
  variant,
  caption,
  className = "",
}: PlaceholderVisualProps) {
  const background = STRIPES[variant ?? univers];

  return (
    <div
      role="img"
      aria-label={caption}
      className={`flex h-full w-full items-end p-3.5 ${className}`}
      style={{ background }}
    >
      <span className="bg-white/80 px-2 py-1.5 font-mono text-[10px] font-medium leading-relaxed text-ink/55">
        {caption}
      </span>
    </div>
  );
}
