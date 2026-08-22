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
  /**
   * Note de réparabilité (0–10) — critère INTERNE de sélection fournisseur,
   * plus affiché publiquement : annoncer un indice supposerait une méthode
   * de notation testée que nous n'avons pas encore.
   */
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

/**
 * Identifiants de catégorie par univers, dans l'ordre d'affichage.
 * Les LIBELLÉS ne sont plus ici : ils vivent dans les dictionnaires
 * (dict.categories.hiver / dict.categories.ete), puisqu'ils sont traduits.
 * Ces identifiants servent d'URL (?cat=) et de clé de données : ils ne
 * changent pas d'une langue à l'autre.
 */
// À-VALIDER: noms et regroupements des 4 sous-catégories hiver (alignés sur le mega-menu) à ajuster une fois le catalogue final défini (dépend des échantillons retenus).
export const CATEGORY_IDS: Record<Univers, string[]> = {
  ete: [
    "gilet-ventile",
    "gilet-pcm",
    "ventilateur-cou",
    "ventilateur-portable",
    "ventilateur-table",
    "accessoire-rafraichissant",
  ],
  hiver: ["vestes", "gilets", "mains-pieds", "accessoires"],
};

/**
 * Profils clients proposés en filtre secondaire sur la page /hiver
 * (le mega-menu ne filtre que par catégorie ; les profils restent sur la page).
 */
export const AUDIENCE_FILTER_IDS: Audience[] = [
  "travail-exterieur",
  "sport",
  "particuliers",
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

/** Produits reconditionnés — masqués partout tant que la reprise n'existe pas. */
export function getRefurbishedProducts(): Product[] {
  return products.filter((p) => p.isRefurbished);
}

/** Retrouve un produit par id (utilisé par le panier). */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
