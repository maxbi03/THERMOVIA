import type { Metadata } from "next";
import AccueilClient from "@/components/AccueilClient";

export const metadata: Metadata = {
  title: "Thermovia — Vestes, gilets et gants chauffants en Suisse",
  description:
    "Vestes, gilets et gants chauffants sélectionnés et testés en Suisse romande : stock et expédition depuis la région de Vevey, pièces détachées à l'unité. La gamme été arrive au printemps.",
};

/** Page d'accueil — design 2a, orientée lancement hiver. Contenu client (filtres). */
export default function HomePage() {
  return <AccueilClient />;
}
