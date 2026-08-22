import type { Metadata } from "next";
import AccueilClient from "@/components/AccueilClient";

export const metadata: Metadata = {
  title: "Thermovia — Vestes, gilets et gants chauffants en Suisse",
  description:
    "Vestes, gilets et gants chauffants testés en Suisse romande : stock à Lausanne, atelier de réparation intégré. La gamme été (gilets ventilés, PCM) arrive au printemps.",
};

/** Page d'accueil — design 2a, orientée lancement hiver. Contenu client (filtres). */
export default function HomePage() {
  return <AccueilClient />;
}
