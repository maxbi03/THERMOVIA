/**
 * Accès typé au catalogue produits.
 * V1 : données dans /data/products.json (produits d'exemple).
 * Plus tard : remplacer ces fonctions par des appels à un CMS / back-office
 * sans toucher aux composants qui les consomment.
 */
import productsJson from "@/data/products.json";

/** Univers produit : Été (rafraîchissement) ou Hiver (chauffage). */
export type Univers = "ete" | "hiver";

/** Profils clients ciblés. */
export type Audience = "travail-exterieur" | "sport" | "particuliers" | "entreprises";

export interface Product {
  id: string;
  slug: string;
  name: string;
  univers: Univers;
  category: string;
  price: number; // Prix indicatif en CHF, TTC (TVA suisse incluse, non calculée en V1)
  shortDescription: string;
  features: string[];
  audiences: Audience[];
  /** URL de la vraie photo produit — null en V1 (placeholder rayé affiché). */
  imageUrl: string | null;
  /** true tant que le produit est un exemple (catalogue final à venir). */
  isExample: boolean;
  /** Specs courtes affichées sur la carte, séparées par « · ». */
  specs: string;
  /** Indice de réparabilité Thermovia (0–10). */
  repairabilityScore: number;
  /** Coloris disponibles (pastilles, valeurs hex). */
  colors: string[];
  /** Plage de tailles affichée (ex. « S–XXL », « 7–11 »). */
  sizes: string;
  /** Produit reconditionné en atelier (« Seconde vie »). */
  isRefurbished?: boolean;
  /** Prix barré (produits seconde vie). */
  previousPrice?: number;
  /** Badge « BEST » sur la carte. */
  isBestSeller?: boolean;
}

/** Catégories par univers, avec libellés d'affichage (utilisées par les filtres). */
export const CATEGORIES: Record<Univers, { id: string; label: string }[]> = {
  ete: [
    { id: "gilet-ventile", label: "Gilets ventilés" },
    { id: "gilet-pcm", label: "Gilets PCM" },
    { id: "ventilateur-cou", label: "Ventilateurs de cou" },
    { id: "ventilateur-portable", label: "Ventilateurs portables" },
    { id: "ventilateur-table", label: "Ventilateurs de table" },
    { id: "accessoire-rafraichissant", label: "Autres accessoires" },
  ],
  // À-VALIDER: noms et regroupements des 4 sous-catégories hiver (alignés sur le mega-menu) à ajuster une fois le catalogue final défini (dépend des échantillons retenus).
  hiver: [
    { id: "vestes", label: "Vestes" },
    { id: "gilets", label: "Gilets" },
    { id: "extremites", label: "Extrémités" },
    { id: "accessoires", label: "Accessoires" },
  ],
};

/**
 * Profils clients proposés en filtre secondaire sur la page /hiver
 * (le mega-menu ne filtre que par catégorie ; les profils restent sur la page).
 */
export const AUDIENCE_FILTERS: { id: Audience; label: string }[] = [
  { id: "travail-exterieur", label: "Pro" },
  { id: "sport", label: "Sport" },
  { id: "particuliers", label: "Particuliers" },
];

const products = productsJson as Product[];

/** Tous les produits du catalogue. */
export function getAllProducts(): Product[] {
  return products;
}

/** Produits d'un univers (page /ete ou /hiver). */
export function getProductsByUnivers(univers: Univers): Product[] {
  return products.filter((p) => p.univers === univers);
}

/** Produits pertinents pour un profil client (pages Travail extérieur, Sport, etc.). */
export function getProductsByAudience(audience: Audience): Product[] {
  return products.filter((p) => p.audiences.includes(audience));
}

/** Libellé d'une catégorie à partir de son id. */
export function getCategoryLabel(categoryId: string): string {
  for (const univers of Object.values(CATEGORIES)) {
    const found = univers.find((c) => c.id === categoryId);
    if (found) return found.label;
  }
  return categoryId;
}

/** Produits reconditionnés en atelier (page /seconde-vie et filtre dédié). */
export function getRefurbishedProducts(): Product[] {
  return products.filter((p) => p.isRefurbished);
}

/** Retrouve un produit par id (utilisé par le panier). */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
