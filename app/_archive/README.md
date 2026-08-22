# Pages archivées

Ces trois pages ont été retirées du site le 22 août 2026 : elles n'étaient
plus liées depuis aucune navigation, elles étaient sorties du sitemap, et
elles affirmaient des choses que l'entreprise ne peut pas tenir aujourd'hui
(un atelier de réparation à Lausanne, un programme de reprise valorisée).

Rien n'a été supprimé : le code est conservé ici tel quel. Le préfixe `_`
sort ce dossier du routage Next.js, et `tsconfig.json` l'exclut du
typecheck — ces fichiers ne suivent donc plus les évolutions de l'app
(ils utilisent encore l'ancienne API des composants, avant le multilingue).

- `accessoires/` — renvoyait vers « l'atelier & SAV »
- `seconde-vie/` — produits reconditionnés, reprise contre avoir
- `textile-couches/` — famille de produits annoncée mais jamais ouverte

Pour en réactiver une : la remonter sous `app/[locale]/`, ajouter ses textes
aux trois dictionnaires (`lib/i18n/`), et la rebrancher dans
`PUBLIC_ROUTES` et `FOOTER_ITEMS` (`lib/site.ts`).
