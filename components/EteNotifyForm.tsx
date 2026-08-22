"use client";

/**
 * Champ e-mail « Être averti au lancement » de la page teaser /ete.
 */
import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function EteNotifyForm({ dict }: { dict: Dictionary }) {
  const [sent, setSent] = useState(false);

  // À-VALIDER: pas encore de backend de collecte — l'envoi passe temporairement par le client e-mail (mailto:, comme le formulaire de contact existant) ; brancher un service externe à décider (Mailchimp, Brevo, etc.).
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      dict.ete.notifySubject
    )}&body=${encodeURIComponent(`${dict.ete.notifyBody}\n${email}`)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <p role="status" className="text-sm font-semibold text-eco">
        {dict.ete.notifySent}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5">
      <label htmlFor="ete-notify-email" className="sr-only">
        {dict.ete.notifyAria}
      </label>
      <input
        id="ete-notify-email"
        name="email"
        type="email"
        required
        placeholder={dict.ete.notifyPlaceholder}
        className="w-full rounded-full border border-ink/25 bg-transparent px-[26px] py-3.5 text-sm placeholder:text-ink/45 focus:border-cool focus:outline-none sm:w-[260px]"
      />
      <button
        type="submit"
        className="rounded-full bg-cool px-[26px] py-3.5 text-sm font-bold text-white transition-colors hover:bg-cool-dark"
      >
        {dict.ete.notifyButton}
      </button>
    </form>
  );
}
