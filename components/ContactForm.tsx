"use client";

/**
 * Formulaire de contact V1 — sans backend.
 * À l'envoi, ouvre le client e-mail de l'utilisateur (mailto:) avec le
 * message pré-rempli ; si le sujet est une demande de devis, le contenu
 * du panier est joint automatiquement au message.
 * Plus tard : remplacer par un vrai endpoint (API route / service d'e-mail).
 */
import { useEffect, useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { getProductById } from "@/lib/products";
import { formatPrice, SITE } from "@/lib/site";

const SUJETS = [
  { id: "devis", label: "Demande de devis (panier)" },
  { id: "question", label: "Question sur un produit" },
  { id: "sav", label: "Service après-vente" },
  { id: "b2b", label: "Demande entreprise / B2B" },
  { id: "autre", label: "Autre" },
] as const;

export default function ContactForm({ defaultSujet = "question" }: { defaultSujet?: string }) {
  const { items } = useCart();
  const [sujet, setSujet] = useState(defaultSujet);
  const [sent, setSent] = useState(false);

  // Pré-sélectionne le sujet passé en query string (ex. /contact?sujet=devis
  // depuis la page panier). Lu côté client pour rester 100 % statique.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("sujet");
    if (param && SUJETS.some((s) => s.id === param)) setSujet(param);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nom = String(form.get("nom") ?? "");
    const message = String(form.get("message") ?? "");
    const sujetLabel = SUJETS.find((s) => s.id === sujet)?.label ?? sujet;

    // Récapitulatif du panier joint aux demandes de devis
    let recap = "";
    if (sujet === "devis" && items.length > 0) {
      const lignes = items.map((i) => {
        const p = getProductById(i.productId);
        return p ? `- ${i.quantity} × ${p.name} (${formatPrice(p.price)})` : null;
      });
      recap = `\n\nProduits du panier :\n${lignes.filter(Boolean).join("\n")}`;
    }

    const body = `Bonjour,\n\n${message}${recap}\n\n${nom}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `[${sujetLabel}] Demande via le site`
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
            Nom
          </label>
          <input id="nom" name="nom" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-anthracite">
            E-mail
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="sujet" className="mb-1 block text-sm font-medium text-anthracite">
          Sujet
        </label>
        <select
          id="sujet"
          name="sujet"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          className={inputClass}
        >
          {SUJETS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-anthracite">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-anthracite px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
      >
        Envoyer via mon e-mail
      </button>

      {sent && (
        <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Votre client e-mail vient de s&apos;ouvrir avec le message pré-rempli — il ne reste
          qu&apos;à l&apos;envoyer. Si rien ne s&apos;est ouvert, écrivez-nous directement à{" "}
          <a href={`mailto:${SITE.email}`} className="font-medium underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <p className="text-xs text-zinc-500">
        V1 : l&apos;envoi passe par votre logiciel d&apos;e-mail. Un formulaire direct sera mis en
        place avec la version finale du site.
      </p>
    </form>
  );
}
