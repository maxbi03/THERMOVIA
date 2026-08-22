"use client";

/**
 * Formulaire de demande de devis / commande en volume (page /entreprises).
 * Modèle devis plutôt que panier : produit souhaité, quantité,
 * personnalisation logo et coordonnées entreprise.
 * V1 sans backend : à l'envoi, ouvre le client e-mail de l'utilisateur
 * (mailto:) avec la demande pré-remplie — même mécanique que ContactForm.
 */
import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function DevisVolumeForm({ dict }: { dict: Dictionary }) {
  const [sent, setSent] = useState(false);
  const f = dict.entreprises.form;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lignes = [
      `${f.labelCompany} : ${form.get("entreprise") ?? ""}`,
      `${f.labelContact} : ${form.get("nom") ?? ""}`,
      `${f.email} : ${form.get("email") ?? ""}`,
      `${f.phone} : ${form.get("telephone") ?? ""}`,
      "",
      `${f.product} : ${form.get("produit") ?? ""}`,
      `${f.labelQuantity} : ${form.get("quantite") ?? ""}`,
      `${f.labelLogo} : ${form.get("logo") === "on" ? f.yes : f.no}`,
      "",
      `${f.labelDetails} :\n${form.get("message") ?? ""}`,
    ];
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      f.subject
    )}&body=${encodeURIComponent(lignes.join("\n"))}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-cool focus:outline-none focus:ring-2 focus:ring-cool/30";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="produit" className="mb-1 block text-sm font-medium text-anthracite">
            {f.product}
          </label>
          <select id="produit" name="produit" required className={inputClass}>
            {f.products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantite" className="mb-1 block text-sm font-medium text-anthracite">
            {f.quantity}
          </label>
          <input
            id="quantite"
            name="quantite"
            type="number"
            min={1}
            required
            placeholder={f.quantityPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <label className="flex items-center gap-2.5 text-sm text-anthracite">
        <input
          type="checkbox"
          name="logo"
          className="h-4 w-4 rounded border-zinc-300 accent-anthracite"
        />
        {f.logo}
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-anthracite">
            {f.company}
          </label>
          <input id="entreprise" name="entreprise" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-anthracite">
            {f.contact}
          </label>
          <input id="nom" name="nom" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-anthracite">
            {f.email}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-anthracite">
            {f.phone}
          </label>
          <input id="telephone" name="telephone" type="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-anthracite">
          {f.message}
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
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
