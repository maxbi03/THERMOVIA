/**
 * Recherche dans le catalogue.
 *
 * Tout se passe côté navigateur : le catalogue tient dans le bundle, il n'y a
 * donc ni index à construire ni requête réseau. Deux familles de résultats,
 * comme chez la plupart des boutiques : les PRODUITS d'abord, les CATÉGORIES
 * ensuite (une recherche « gants » doit aussi proposer le rayon).
 *
 * Périmètre : uniquement l'univers hiver, seul catalogue ouvert. Les produits
 * été existent en données mais n'ont pas de page où atterrir (la page /ete est
 * un teaser) — les proposer mènerait à un cul-de-sac.
 */
import { CATEGORY_IDS, getProductsByUnivers, type Product } from "@/lib/products";
import type { Dictionary } from "@/lib/i18n";

export interface CategoryHit {
  id: string;
  label: string;
}

export interface SearchResults {
  products: Product[];
  categories: CategoryHit[];
}

/** Minuscules + accents retirés : « Réfléchissante » et « reflechissante » matchent. */
export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/** Découpe la requête en mots ; chaque mot doit matcher (ET, pas OU). */
function terms(query: string): string[] {
  return normalize(query).split(/\s+/).filter(Boolean);
}

/** Texte indexé d'un produit : nom, specs, description et caractéristiques. */
function haystack(product: Product, categoryLabel: string): string {
  return normalize(
    [
      product.name,
      product.specs,
      product.shortDescription,
      product.features.join(" "),
      categoryLabel,
      product.sizes,
    ].join(" ")
  );
}

/**
 * Score d'un produit : plus il est élevé, plus le résultat remonte.
 * Un mot trouvé dans le nom pèse davantage que le même mot noyé dans la
 * description — sinon « veste » ferait remonter n'importe quel produit dont
 * la description mentionne une veste.
 */
function score(product: Product, categoryLabel: string, words: string[]): number {
  const name = normalize(product.name);
  const full = haystack(product, categoryLabel);

  let total = 0;
  for (const word of words) {
    if (!full.includes(word)) return 0; // tous les mots doivent être présents
    if (name.startsWith(word)) total += 6;
    else if (name.includes(word)) total += 4;
    else total += 1;
  }
  return total;
}

/**
 * Recherche produits + catégories.
 * `limit` borne le nombre de produits (suggestions du header : 5 ;
 * page de résultats : tout).
 */
export function searchCatalogue(
  query: string,
  dict: Dictionary,
  limit?: number
): SearchResults {
  const words = terms(query);
  if (words.length === 0) return { products: [], categories: [] };

  const labels = dict.categories.hiver as Record<string, string>;

  const products = getProductsByUnivers("hiver")
    // Même règle que le catalogue : pas de reconditionné tant que la
    // reprise n'existe pas.
    .filter((p) => !p.isRefurbished)
    .map((product) => ({
      product,
      value: score(product, labels[product.category] ?? "", words),
    }))
    .filter((entry) => entry.value > 0)
    .sort((a, b) => b.value - a.value || a.product.name.localeCompare(b.product.name))
    .map((entry) => entry.product);

  // Un rayon est proposé si son libellé matche, OU s'il contient au moins un
  // produit qui matche : chercher « gants » doit remonter « Mains & pieds »,
  // même si le mot « gants » n'apparaît pas dans le nom du rayon.
  const matchedCategoryIds = new Set(products.map((p) => p.category));
  const categories = CATEGORY_IDS.hiver
    .map((id) => ({ id, label: labels[id] ?? id }))
    .filter((category) => {
      const label = normalize(category.label);
      return words.every((word) => label.includes(word)) || matchedCategoryIds.has(category.id);
    });

  return {
    products: limit === undefined ? products : products.slice(0, limit),
    categories,
  };
}
