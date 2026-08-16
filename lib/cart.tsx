"use client";

/**
 * Panier V1 — état local uniquement (React Context + localStorage).
 * Pas de checkout réel : la validation redirige vers le formulaire de
 * demande de devis (/contact). Stripe/TWINT/PostFinance seront branchés
 * une fois les produits et fournisseurs confirmés.
 */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  /** Nombre total d'articles (somme des quantités). */
  count: number;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "thermovia-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Restaure le panier depuis localStorage au montage (côté client uniquement).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // Stockage indisponible ou corrompu : on repart d'un panier vide.
    }
  }, []);

  // Persiste chaque modification.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignoré : le panier reste fonctionnel en mémoire.
    }
  }, [items]);

  const addItem = (productId: string) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });

  const removeItem = (productId: string) =>
    setItems((prev) => prev.filter((i) => i.productId !== productId));

  const setQuantity = (productId: string, quantity: number) =>
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.productId !== productId)
        : prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
    );

  const clear = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, count, addItem, removeItem, setQuantity, clear }}>
      {children}
    </CartContext.Provider>
  );
}

/** Hook d'accès au panier — à utiliser dans les composants clients. */
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un <CartProvider>");
  return ctx;
}
