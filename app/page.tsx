import type { Metadata } from "next";
import AccueilClient from "@/components/AccueilClient";

export const metadata: Metadata = {
  title: "Thermovia — Équipements chauffants et rafraîchissants en Suisse",
  description:
    "Vestes et gants chauffants pour l'hiver, gilets ventilés et PCM pour l'été : sélection testée en Suisse romande, stock à Lausanne, atelier de réparation intégré.",
};

/** Page d'accueil — design 2a. Tout le contenu est client (bascule saison). */
export default function HomePage() {
  return <AccueilClient />;
}
