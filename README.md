# THERMOVIA

Site vitrine V1 — boutique suisse (romande) d'équipements de régulation thermique corporelle : gilets ventilés et PCM contre la canicule, vestes et gants chauffants contre le froid.

**Positionnement** : fournisseurs sélectionnés, stock partiel en Suisse et service après-vente en Suisse romande.

## Démarrage

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Site statique (SSG) — pas de backend e-commerce en V1
- Température affichée sur l'accueil : mesure réelle du réseau MétéoSuisse (station de Pully), lue directement depuis les données ouvertes `data.geo.admin.ch` par le navigateur — voir [`lib/meteo.ts`](lib/meteo.ts). Licence CC-BY : la mention « MétéoSuisse » doit rester affichée
- Catalogue : données JSON locales dans [`data/products.json`](data/products.json) (produits d'exemple, à remplacer par un CMS/back-office plus tard)
- Panier : état local (React Context + localStorage), validation via demande de devis — le paiement (Stripe/TWINT/PostFinance) sera branché avec le catalogue définitif
- Multilingue : français, allemand et italien (`/fr`, `/de`, `/it` ; la racine redirige vers `/fr`). Les textes vivent dans [`lib/i18n/`](lib/i18n/) — le français sert de référence de types, donc **une clé oubliée en DE ou IT casse le build**. Devise CHF
- Recherche : côté navigateur, sur le catalogue déjà présent dans le bundle — voir [`lib/search.ts`](lib/search.ts). Suggestions dans le header, page de résultats sur `/{langue}/recherche?q=`

## Structure

```
app/[locale]/ Pages (App Router), une fois par langue : accueil, hiver, été, sport,
              travail extérieur, entreprises, SAV, guide des tailles, à-propos,
              contact, panier, recherche
app/_archive/ Pages retirées du site, conservées hors routage (voir son README)
components/   Composants réutilisables : Header, Footer, SearchBar, LocaleSwitcher…
data/         products.json — catalogue d'exemple (textes encore en français seulement)
lib/          i18n/ (dictionnaires), site.ts (structure de navigation), products.ts,
              search.ts, meteo.ts, cart.tsx
```

## À faire avant la mise en ligne définitive

- Remplacer les produits d'exemple par le catalogue réel (fournisseurs en cours de sélection)
- Brancher le paiement en ligne et la gestion de stock
- Compléter les mentions légales dans [`lib/site.ts`](lib/site.ts) (raison sociale, adresse, IDE) et rédiger les CGV
- Faire relire les traductions allemande et italienne par des locuteurs natifs
- Traduire les données produits (`data/products.json`), encore en français dans les trois langues
- Remplacer les placeholders visuels par de vraies photos produits (champ `imageUrl`)
