import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_TAGS } from "@/lib/i18n";
import { PUBLIC_ROUTES, SITE } from "@/lib/site";

/**
 * Sitemap : chaque page publique, déclinée dans les trois langues.
 * Chaque entrée déclare ses équivalents linguistiques (hreflang), ce qui
 * évite que Google traite /de/sav et /fr/sav comme du contenu dupliqué.
 * La page de résultats de recherche est volontairement absente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    PUBLIC_ROUTES.map((route) => ({
      url: `${SITE.url}/${locale}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_TAGS[l], `${SITE.url}/${l}${route}`])
        ),
      },
    }))
  );
}
