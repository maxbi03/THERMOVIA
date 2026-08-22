import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Sitemap simple : toutes les pages publiques du site. */
export default function sitemap(): MetadataRoute.Sitemap {
  // Uniquement les pages assumées : /textile-couches, /accessoires et
  // /seconde-vie existent encore en fichier mais ne sont plus liées ni
  // référencées tant que leur contenu n'est pas d'actualité.
  const routes = [
    "",
    "/hiver",
    "/ete",
    "/sport",
    "/travail-exterieur",
    "/entreprises",
    "/guide-tailles",
    "/sav",
    "/a-propos",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
