"use client";

/**
 * Formulaire de demande de devis / commande en volume (page /entreprises).
 * Modèle devis plutôt que panier : produit souhaité, quantité,
 * personnalisation logo et coordonnées entreprise.
 * V1 sans backend : à l'envoi, ouvre le client e-mail de l'utilisateur
 * (mailto:) avec la demande pré-remplie — même mécanique que ContactForm.
 */
import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

const PRODUITS = [
  "Veste réfléchissante chauffante",
  "Veste chauffante",
  "Gilet chauffant",
  "Gants chauffants",
  "Autre / plusieurs produits",
] as const;

export default function DevisVolumeForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lignes = [
      `Entreprise : ${form.get("entreprise") ?? ""}`,
      `Contact : ${form.get("nom") ?? ""}`,
      `E-mail : ${form.get("email") ?? ""}`,
      `Téléphone : ${form.get("telephone") ?? ""}`,
      "",
      `Produit souhaité : ${form.get("produit") ?? ""}`,
      `Quantité estimée : ${form.get("quantite") ?? ""}`,
      `Personnalisation logo : ${form.get("logo") === "on" ? "oui" : "non"}`,
      "",
      `Précisions :\n${form.get("message") ?? ""}`,
    ];
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "[Devis entreprise] Demande de commande en volume"
    )}&body=${encodeURIComponent(`Bonjour,\n\n${lignes.join("\n")}`)}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-cool focus:outline-none focus:ring-2 focus:ring-cool/30";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="produit" className="mb-1 block text-sm font-medium text-anthracite">
            Produit souhaité
          </label>
          <select id="produit" name="produit" required className={inputClass}>
            {PRODUITS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantite" className="mb-1 block text-sm font-medium text-anthracite">
            Quantité estimée
          </label>
          <input
            id="quantite"
            name="quantite"
            type="number"
            min={1}
            required
            placeholder="ex. 25"
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
        Personnalisation avec le logo de l&apos;entreprise
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-anthracite">
            Entreprise
          </label>
          <input id="entreprise" name="entreprise" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-anthracite">
            Personne de contact
          </label>
          <input id="nom" name="nom" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-anthracite">
            E-mail
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-anthracite">
            Téléphone
          </label>
          <input id="telephone" name="telephone" type="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-anthracite">
          Précisions (métier, saison, échéance…)
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-anthracite px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
      >
        Demander un devis
      </button>

      {sent && (
        <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
          Votre client e-mail vient de s&apos;ouvrir avec la demande pré-remplie — il ne reste
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
