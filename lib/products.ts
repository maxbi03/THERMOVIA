/**
 * Accès typé au catalogue produits.
 * V1 : données dans /data/products.json (produits d'exemple).
 * Plus tard : remplacer ces fonctions par des appels à un CMS / back-office
 * sans toucher aux composants qui les consomment.
 */
import productsJson from "@/data/products.json";

/** Univers produit : rafraîchissement (chaleur/canicule) ou chauffage (froid). */
export type Univers = "chaleur" | "froid";

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
  /** URL de la vraie photo produit — null en V1 (placeholder SVG affiché). */
  imageUrl: string | null;
  /** true tant que le produit est un exemple (catalogue final à venir). */
  isExample: boolean;
}

/** Catégories par univers, avec libellés d'affichage (utilisées par les filtres). */
export const CATEGORIES: Record<Univers, { id: string; label: string }[]> = {
  chaleur: [
    { id: "gilet-ventile", label: "Gilets ventilés" },
    { id: "gilet-pcm", label: "Gilets PCM" },
    { id: "ventilateur-cou", label: "Ventilateurs de cou" },
    { id: "ventilateur-portable", label: "Ventilateurs portables" },
    { id: "ventilateur-table", label: "Ventilateurs de table" },
    { id: "accessoire-rafraichissant", label: "Autres accessoires" },
  ],
  froid: [
    { id: "veste-chauffante", label: "Vestes chauffantes" },
    { id: "gants-chauffants", label: "Gants chauffants" },
    { id: "gilet-chauffant", label: "Gilets chauffants" },
    { id: "accessoire-chauffant", label: "Autres accessoires" },
  ],
};

const products = productsJson as Product[];

/** Tous les produits du catalogue. */
export function getAllProducts(): Product[] {
  return products;
}

/** Produits d'un univers (page /chaleur ou /froid). */
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

/** Retrouve un produit par id (utilisé par le panier). */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
