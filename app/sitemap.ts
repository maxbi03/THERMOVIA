import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Sitemap simple : toutes les pages publiques du site. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ete",
    "/hiver",
    "/textile-couches",
    "/accessoires",
    "/seconde-vie",
    "/travail-exterieur",
    "/sport",
    "/particuliers",
    "/entreprises",
    "/a-propos",
    "/sav",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
