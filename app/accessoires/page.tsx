import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Accessoires — en préparation",
  description:
    "Batteries de rechange, ventilateurs, semelles, packs PCM et petits accessoires thermiques : cette famille rejoint le catalogue Thermovia prochainement.",
};

/** Page Accessoires : famille en préparation (catalogue à venir). */
export default function AccessoiresPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Accessoires"
        title="Batteries, pièces et petits équipements"
        subtitle="Batteries universelles, ventilateurs de rechange, packs PCM, semelles et accessoires d'appoint : de quoi compléter et faire durer votre équipement."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
        <p className="text-ink/60">
          En attendant l&apos;ouverture de la catégorie, les pièces détachées sont
          disponibles via{" "}
          <Link href="/sav" className="font-semibold underline hover:text-ink">
            l&apos;atelier &amp; SAV
          </Link>
          .
        </p>
      </div>
    </>
  );
}
