import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { resolvePage, type LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { dict } = await resolvePage(params);
  return { title: dict.meta.contact.title, description: dict.meta.contact.description };
}

/** Page contact générique (le sujet peut être présélectionné via ?sujet=...). */
export default async function ContactPage({ params }: LocaleParams) {
  const { dict } = await resolvePage(params);

  return (
    <>
      <Hero
        variant="neutral"
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {/* Suspense : ContactForm lit ?sujet= via useSearchParams. */}
        <Suspense>
          <ContactForm dict={dict} />
        </Suspense>
      </div>
    </>
  );
}
