import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur un produit, une demande de devis ou un besoin SAV ? Contactez Thermovia — réponse en français sous 2 jours ouvrés.",
};

/** Page contact générique (le sujet peut être présélectionné via ?sujet=...). */
export default function ContactPage() {
  return (
    <>
      <Hero
        variant="neutral"
        eyebrow="Contact"
        title="Parlons de votre besoin"
        subtitle="Question produit, demande de devis, SAV ou projet d'entreprise : nous répondons en français, sous 2 jours ouvrés."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ContactForm />
      </div>
    </>
  );
}
