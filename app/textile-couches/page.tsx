import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Textile & couches — en préparation",
  description:
    "Couches intermédiaires, sous-vêtements techniques et textile thermorégulant : cette famille de produits rejoint le catalogue Thermovia prochainement.",
};

/** Page Textile & couches : famille en préparation (catalogue à venir). */
export default function TextileCouchesPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Textile & couches"
        title="Les couches intermédiaires arrivent"
        subtitle="Sous-vêtements techniques, couches thermorégulantes et textile d'appoint : la famille qui complète les équipements actifs, en cours de sélection chez nos fournisseurs."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <p className="text-ink/60">
          Laissez-nous votre adresse via le{" "}
          <Link href="/contact" className="font-semibold underline hover:text-ink">
            formulaire de contact
          </Link>{" "}
          pour être averti de l&apos;ouverture de cette catégorie.
        </p>
      </div>
    </>
  );
}
