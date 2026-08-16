# THERMOVIA

Site vitrine V1 — boutique suisse (romande) d'équipements de régulation thermique corporelle : gilets ventilés et PCM contre la canicule, vestes et gants chauffants contre le froid.

**Positionnement** : stock partiel en Suisse + vrai service après-vente — pas du dropshipping.

## Démarrage

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Site statique (SSG) — pas de backend e-commerce en V1
- Catalogue : données JSON locales dans [`data/products.json`](data/products.json) (produits d'exemple, à remplacer par un CMS/back-office plus tard)
- Panier : état local (React Context + localStorage), validation via demande de devis — le paiement (Stripe/TWINT/PostFinance) sera branché avec le catalogue définitif
- Langue : fr-CH uniquement (structure i18n-ready), devise CHF

## Structure

```
app/          Pages (App Router) : accueil, chaleur, froid, profils, entreprises, à-propos, SAV, contact, panier
components/   Composants réutilisables : Header, Footer, Hero, ProductCard, CategoryFilter, ProfileSelector…
data/         products.json — catalogue d'exemple
lib/          site.ts (config), products.ts (accès typé au catalogue), cart.tsx (panier)
```

## À faire avant la mise en ligne définitive

- Remplacer les produits d'exemple par le catalogue réel (fournisseurs en cours de sélection)
- Brancher le paiement en ligne et la gestion de stock
- Compléter les mentions légales dans [`lib/site.ts`](lib/site.ts) (raison sociale, adresse, IDE) et rédiger les CGV
- Ajouter les traductions de-CH / it-CH
- Remplacer les placeholders visuels par de vraies photos produits (champ `imageUrl`)
