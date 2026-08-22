"use client";

/**
 * Formulaire de contact V1 — sans backend.
 * À l'envoi, ouvre le client e-mail de l'utilisateur (mailto:) avec le
 * message pré-rempli ; si le sujet est une demande de devis, le contenu
 * du panier est joint automatiquement au message.
 * Plus tard : remplacer par un vrai endpoint (API route / service d'e-mail).
 */
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart";
import type { Dictionary } from "@/lib/i18n";
import { getProductById } from "@/lib/products";
import { formatPrice, SITE } from "@/lib/site";

/** Identifiants de sujet — stables, indépendants de la langue (?sujet=sav). */
const SUJET_IDS = ["devis", "question", "sav", "b2b", "autre"] as const;
type SujetId = (typeof SUJET_IDS)[number];

function isSujet(value: string): value is SujetId {
  return (SUJET_IDS as readonly string[]).includes(value);
}

export default function ContactForm({
  dict,
  defaultSujet = "question",
}: {
  dict: Dictionary;
  defaultSujet?: SujetId;
}) {
  const { items } = useCart();
  const [sujet, setSujet] = useState<SujetId>(defaultSujet);
  const [sent, setSent] = useState(false);
  const f = dict.contact.form;

  // Pré-sélectionne le sujet passé en query string (ex. /contact?sujet=devis
  // depuis la page panier).
  const searchParams = useSearchParams();
  const param = searchParams.get("sujet");
  useEffect(() => {
    if (param && isSujet(param)) setSujet(param);
  }, [param]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nom = String(form.get("nom") ?? "");
    const message = String(form.get("message") ?? "");
    const sujetLabel = f.subjects[sujet];

    // Récapitulatif du panier joint aux demandes de devis
    let recap = "";
    if (sujet === "devis" && items.length > 0) {
      const lignes = items.map((i) => {
        const p = getProductById(i.productId);
        return p ? `- ${i.quantity} × ${p.name} (${formatPrice(p.price)})` : null;
      });
      recap = `\n\n${f.cartRecap}\n${lignes.filter(Boolean).join("\n")}`;
    }

    const body = `${message}${recap}\n\n${nom}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `[${sujetLabel}] ${f.mailSubject}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-cool focus:outline-none focus:ring-2 focus:ring-cool/30";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-anthracite">
            {f.name}
          </label>
          <input id="nom" name="nom" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-anthracite">
            {f.email}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="sujet" className="mb-1 block text-sm font-medium text-anthracite">
          {f.subject}
        </label>
        <select
          id="sujet"
          name="sujet"
          value={sujet}
          onChange={(e) => setSujet(e.target.value as SujetId)}
          className={inputClass}
        >
          {SUJET_IDS.map((id) => (
            <option key={id} value={id}>
              {f.subjects[id]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-anthracite">
          {f.message}
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-anthracite px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
      >
        {f.submit}
      </button>

      {sent && (
        <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          {f.sentBefore}
          <a href={`mailto:${SITE.email}`} className="font-medium underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <p className="text-xs text-zinc-500">{f.v1Note}</p>
    </form>
  );
}
