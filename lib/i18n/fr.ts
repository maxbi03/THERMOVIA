/**
 * Dictionnaire français — langue de référence.
 *
 * Ce fichier définit AUSSI la forme du dictionnaire (type `Dictionary`) :
 * toute clé ajoutée ici devient obligatoire en allemand et en italien, et
 * TypeScript refuse de compiler tant qu'elle manque. C'est volontaire —
 * une traduction oubliée doit casser le build, pas s'afficher en français
 * au milieu d'une page allemande.
 *
 * Les noms et descriptions des produits ne sont PAS ici : ils vivent dans
 * data/products.json et restent en français pour l'instant.
 */
// À-VALIDER: traductions allemandes et italiennes rédigées sans relecture native. Les faire relire avant toute communication hors Suisse romande.

const fr = {
  meta: {
    layout: {
      titleDefault: "Thermovia — Équipements chauffants et rafraîchissants en Suisse",
      description:
        "Vestes, gilets et gants chauffants : équipements de régulation thermique corporelle, stock et expédition depuis la Suisse romande, pièces détachées disponibles à l'unité.",
    },
    home: {
      title: "Thermovia — Vestes, gilets et gants chauffants en Suisse",
      description:
        "Vestes, gilets et gants chauffants sélectionnés et testés en Suisse romande : stock et expédition depuis la région de Vevey, pièces détachées à l'unité. La gamme été arrive au printemps.",
    },
    hiver: {
      title: "Hiver — vestes, gilets et gants chauffants",
      description:
        "Catalogue hiver : vestes chauffantes, gilets chauffants, gants chauffants et accessoires. Stock en Suisse, garantie et SAV local.",
    },
    ete: {
      title: "Été — la gamme rafraîchissante arrive",
      description:
        "Gilets ventilés, gilets PCM et ventilateurs de cou et portables : la gamme été Thermovia est en préparation. Laissez votre e-mail pour être averti au lancement.",
    },
    sport: {
      title: "Sport — régulation thermique pour running, cyclisme et outdoor",
      description:
        "Gants et gilets chauffants pour l'hiver, gilets rafraîchissants pour l'été : entraînez-vous toute l'année, quelle que soit la météo.",
    },
    travail: {
      title: "Travail extérieur — équipements thermiques pour BTP, agriculture, logistique",
      description:
        "Vestes et gants chauffants pour l'hiver, gilets ventilés pour la canicule : travaillez dehors dans de bonnes conditions, toute l'année. Sélection compatible EPI.",
    },
    entreprises: {
      title: "Entreprises — devis et commandes en volume, personnalisation logo",
      description:
        "Équipez vos équipes terrain : demande de devis en volume, veste réfléchissante chauffante pour le BTP et la logistique, personnalisation logo et SAV dédié en Suisse romande.",
    },
    sav: {
      title: "Service après-vente — garantie, échange, entretien, reprise",
      description:
        "Le SAV Thermovia : garantie fabricant, échange sous 30 jours en cas de défaut, support par e-mail et téléphone, fiches d'entretien et reprise gratuite des appareils usagés.",
    },
    guideTailles: {
      title: "Guide des tailles",
      description:
        "Comment choisir la taille de votre veste, gilet ou gants chauffants : tableaux de correspondance en centimètres et méthode de mesure, pour commander juste du premier coup.",
    },
    contact: {
      title: "Contact",
      description:
        "Une question sur un produit, une demande de devis ou un besoin SAV ? Contactez Thermovia — réponse sous 2 jours ouvrés.",
    },
    panier: {
      title: "Panier",
      description: "Votre sélection Thermovia, à valider en demande de devis.",
    },
    aPropos: {
      title: "Qui sommes-nous — notre approche : stock local et vrai SAV",
      description:
        "Thermovia : fournisseurs de confiance sélectionnés en Europe et en Asie, stock en Suisse romande et un vrai service après-vente.",
    },
    recherche: {
      title: "Recherche",
      description: "Rechercher un produit ou une catégorie dans le catalogue Thermovia.",
    },
  },

  common: {
    all: "Tout",
    seeSelection: "Voir la sélection →",
    askAdvice: "Demander conseil",
    exampleProductsNote: "Produits d'exemple — le catalogue final est en cours de constitution.",
    emptyCategory:
      "Aucun produit d'exemple dans cette catégorie pour l'instant — le catalogue final est en cours de constitution.",
  },

  header: {
    banner: [
      "LIVRAISON OFFERTE DÈS CHF 80.–",
      "ÉCHANGE SOUS 30 JOURS",
      "EXPÉDIÉ DEPUIS LA RÉGION DE VEVEY",
    ],
    homeAria: "accueil",
    mainNavAria: "Navigation principale",
    mobileNavAria: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    cart: "Panier",
    cartAria: "Panier",
    languageAria: "Choisir la langue",
    nav: {
      hiver: "Hiver",
      ete: "Été",
      sport: "Sport",
      travail: "Travail extérieur",
      entreprises: "Entreprises",
      sav: "SAV",
      contact: "Contact",
    },
    megaMenu: {
      vestes: { label: "Vestes", sublabel: "pro & sport" },
      gilets: { label: "Gilets", sublabel: "fins et légers" },
      mainsPieds: { label: "Mains & pieds", sublabel: "gants & semelles" },
      accessoires: { label: "Batteries & accessoires", sublabel: "pièces à l'unité" },
      all: "Tout l'univers hiver →",
    },
  },

  search: {
    placeholder: "Rechercher un produit…",
    label: "Rechercher dans le catalogue",
    open: "Ouvrir la recherche",
    close: "Fermer la recherche",
    groupProducts: "Produits",
    groupCategories: "Catégories",
    noResults: "Aucun résultat pour",
    noResultsHint: "Essayez « veste », « gants », « batterie » ou « gilet ».",
    seeAll: "Voir tous les résultats",
    resultsTitle: "Résultats de recherche",
    resultsFor: "Résultats pour",
    resultsCountOne: "produit trouvé",
    resultsCountMany: "produits trouvés",
    emptyQuery: "Saisissez un mot-clé pour lancer la recherche.",
    suggestionsAria: "Suggestions de recherche",
    inCategory: "dans",
  },

  meteo: {
    source: "MESURE MÉTÉOSUISSE",
    location: "LAUSANNE",
  },

  categories: {
    hiver: {
      vestes: "Vestes",
      gilets: "Gilets",
      "mains-pieds": "Mains & pieds",
      accessoires: "Batteries & accessoires",
    },
    ete: {
      "gilet-ventile": "Gilets ventilés",
      "gilet-pcm": "Gilets PCM",
      "ventilateur-cou": "Ventilateurs de cou",
      "ventilateur-portable": "Ventilateurs portables",
      "ventilateur-table": "Ventilateurs de table",
      "accessoire-rafraichissant": "Autres accessoires",
    },
    filterAria: "Filtrer par type de produit",
    profileAria: "Filtrer par profil",
    profileLabel: "PROFIL",
    profileAll: "Tous",
    profiles: {
      "travail-exterieur": "Pro",
      sport: "Sport",
      particuliers: "Particuliers",
    },
  },

  product: {
    add: "Ajouter",
    added: "Ajouté ✓",
    addAria: "Ajouter au panier",
    badgeSecondLife: "SECONDE VIE",
    badgeBest: "BEST",
    photoAlt: "photo produit —",
  },

  home: {
    eyebrow: "Univers hiver — la saison commence ici",
    heroLines: ["Le froid ne devrait", "pas décider de"],
    heroAccent: "votre journée.",
    heroSubtitle:
      "Vestes, gilets et gants chauffants pour les trajets, les balades, le sport et le travail dehors. Sélection testée en Suisse romande, batteries et pièces disponibles pendant toute la vie du produit.",
    ctaPrimary: "Découvrir l'univers Hiver",
    ctaSecondary: "Trouver ma taille",
    heroCaption: "photo héro — veste chauffante portée en extérieur froid, cadrage vertical 3:4",
    scaleTitle: "CE QUE COUVRE LA GAMME HIVER",
    scaleUsages: [
      "Veste chauffante + gants",
      "Gilet chauffant + gants",
      "Gilet seul, sous la veste",
    ],
    args: [
      { title: "Stock en Suisse romande", sub: "Expédié depuis la région de Vevey (VD)" },
      { title: "Garantie fabricant", sub: "12 à 24 mois selon produit" },
      { title: "Pièces à l'unité", sub: "Batteries, chargeurs, éléments chauffants" },
      { title: "Réponse sous 48 h", sub: "Par e-mail ou téléphone, en français" },
    ],
    productsEyebrow: "UNIVERS HIVER",
    productsTitle: "Les essentiels de l'hiver",
    productsEmpty: "Aucun produit d'exemple dans cette catégorie pour l'instant.",
    teaserEyebrow: "Été — bientôt disponible",
    teaserTitle: "La gamme été se prépare pour les beaux jours",
    teaserText:
      "Gilets ventilés, gilets PCM et ventilateurs de cou : découvrez ce qui arrive et laissez votre e-mail pour être averti au lancement.",
    teaserLink: "Découvrir le teaser été →",
    quickAccessAria: "Accès rapides",
    quickAccess: [
      {
        eyebrow: "Sport",
        title: "Mains et pieds au chaud, toute la saison",
        text: "Gants fins pour le vélo, gilets légers pour l'avant-course : la chaleur qui suit l'effort.",
      },
      {
        eyebrow: "Travail extérieur",
        title: "Tenir la journée dehors, sans se figer",
        text: "BTP, agriculture, logistique : des équipements compatibles avec vos EPI.",
      },
      {
        eyebrow: "Entreprises",
        title: "Équiper une équipe, du devis à la maintenance",
        text: "Commandes en volume, personnalisation logo et devis chiffré sous 2 jours.",
      },
    ],
    emailTitle: "Recevoir l'arrivée du catalogue définitif",
    emailText:
      "Un message quand les fournisseurs sont validés et les premières pièces en stock. Pas de newsletter hebdomadaire.",
    emailPlaceholder: "votre@email.ch",
    emailButton: "M'avertir",
    emailAria: "Votre adresse e-mail",
    emailSent: "Votre client e-mail s'est ouvert — envoyez le message pour être averti.",
    emailSubject: "M'avertir à l'arrivée du catalogue définitif",
    emailBody: "Bonjour,\n\nMerci de m'avertir quand le catalogue définitif sera disponible.\n",
  },

  hiver: {
    eyebrow: "Univers hiver",
    title: "La chaleur qui vous suit partout",
    subtitle:
      "Vestes, gilets et gants chauffants à batterie : restez efficace sur le chantier, performant à l'entraînement et confortable au quotidien, même par -10 °C.",
    catalogueAria: "Catalogue de produits",
  },

  ete: {
    eyebrow: "Univers été — bientôt disponible",
    title: "La gamme été arrive avec les beaux jours",
    subtitle:
      "Nous préparons la sélection anti-canicule : elle ouvrira après le lancement de l'hiver, une fois les échantillons testés en conditions réelles.",
    caption: "photo teaser — gilet ventilé porté en plein été, lumière chaude",
    programEyebrow: "Au programme",
    programTitle: "Ce que la gamme été vous réserve",
    program: [
      {
        label: "Gilets ventilés",
        sublabel: "Flux d'air continu pour le chantier, la logistique et les loisirs",
      },
      {
        label: "Gilets PCM",
        sublabel: "Fraîcheur constante sans batterie, par matériau à changement de phase",
      },
      {
        label: "Ventilateurs de cou & portables",
        sublabel: "Mains libres ou format poche, pour les trajets et les journées dehors",
      },
    ],
    notifyTitle: "Être averti au lancement",
    notifyText: "Un seul message à l'ouverture de la gamme été. Pas de newsletter.",
    notifyButton: "Être averti au lancement",
    notifyPlaceholder: "votre@email.ch",
    notifyAria: "Votre adresse e-mail",
    notifySent: "Votre client e-mail s'est ouvert — envoyez le message pour être averti.",
    notifySubject: "M'avertir au lancement de la gamme été",
    notifyBody: "Bonjour,\n\nMerci de m'avertir au lancement de la gamme été.\n",
  },

  sport: {
    eyebrow: "Sportives & sportifs",
    title: "Entraînez-vous toute l'année, pas seulement à la mi-saison",
    subtitle:
      "Extrémités au chaud pour les sorties hivernales, récupération au frais après l'effort estival : la température maîtrisée fait partie de la performance.",
    usagesTitle: "Des usages concrets",
    usages: [
      {
        title: "Running & trail",
        text: "Gilet chauffant léger avant le départ hivernal, gants fins pendant l'effort, et gilet rafraîchissant pour la récupération en été.",
      },
      {
        title: "Cyclisme",
        text: "Gants chauffants fins et coupe-vent pour les sorties d'hiver, quand les doigts lâchent avant les jambes.",
      },
      {
        title: "Outdoor & montagne",
        text: "Randonnée, ski de fond, chasse ou pêche : chaleur d'appoint longue autonomie pour les journées entières dehors.",
      },
    ],
    productsTitle: "Sélection sport",
  },

  travail: {
    eyebrow: "Travail extérieur",
    title: "Travaillez dehors sans subir la météo",
    subtitle:
      "BTP, agriculture, logistique : quand on passe ses journées dehors, le froid n'est pas un détail. Équipez-vous pour rester efficace et en sécurité, toute l'année.",
    whyTitle: "Pourquoi s'équiper ?",
    why: [
      {
        title: "Votre sécurité d'abord",
        text: "Engourdissement et perte de dextérité en hiver, coup de chaleur en été : des risques réels du travail en extérieur, que le bon équipement réduit concrètement.",
      },
      {
        title: "Compatible avec vos EPI",
        text: "Nous sélectionnons des modèles qui se portent avec les équipements de protection courants : gilet haute visibilité, harnais, chaussures de sécurité.",
      },
      {
        title: "Tenir la journée",
        text: "À bonne température, on travaille mieux et on finit la journée moins épuisé : moins d'heures à grelotter, moins de pauses forcées.",
      },
    ],
    productsTitle: "Sélection pour le travail extérieur",
    productsNote:
      "Produits d'exemple — le catalogue final est en cours de constitution avec nos fournisseurs.",
    b2bNoteBefore: "Vous cherchez à équiper plusieurs collaborateurs ? Rendez-vous sur notre ",
    b2bNoteLink: "espace entreprises",
  },

  entreprises: {
    eyebrow: "Espace entreprises",
    title: "Équipez vos collaborateurs, simplement",
    subtitle:
      "Ici, pas de panier : décrivez votre besoin, nous revenons avec un devis clair — produits, quantités, personnalisation logo et délais.",
    useCaseEyebrow: "Cas d'usage",
    useCaseTitle: "La veste réfléchissante chauffante pour vos équipes terrain",
    useCaseText:
      "BTP, logistique, voirie : une seule veste combine haute visibilité et chauffage sur batterie, pour des équipes qui restent efficaces tout l'hiver. Personnalisable avec votre logo, livrée avec batteries, et dont les pièces d'usure restent commandables à l'unité.",
    useCaseDelay:
      "⏱ Délai indicatif : 4 à 6 semaines pour les commandes personnalisées en volume.",
    useCaseCaption:
      "photo — veste réfléchissante chauffante portée sur chantier, gilet haute visibilité",
    offerTitle: "Ce que nous proposons aux entreprises",
    offer: [
      {
        title: "📄 Devis en volume",
        text: "Tarifs dégressifs selon les quantités, panachage des tailles et des modèles, réponse sous 2 jours ouvrés.",
      },
      {
        title: "🎨 Personnalisation logo",
        text: "Marquage de votre logo sur les vestes et gilets : broderie ou impression, validation sur maquette avant production.",
      },
      {
        title: "🧾 Facturation CH",
        text: "Facture d'entreprise suisse avec TVA, paiement sur facture (30 jours) pour les clients professionnels.",
      },
      {
        title: "🔧 SAV dédié",
        text: "Suivi de votre parc d'équipements, batteries et pièces de rechange, remplacement rapide pour limiter l'immobilisation.",
      },
    ],
    formTitle: "Demander un devis",
    formIntro:
      "Indiquez le produit, la quantité et vos coordonnées : nous revenons vers vous avec une proposition chiffrée et un délai ferme.",
    form: {
      product: "Produit souhaité",
      products: [
        "Veste réfléchissante chauffante",
        "Veste chauffante",
        "Gilet chauffant",
        "Gants chauffants",
        "Autre / plusieurs produits",
      ],
      quantity: "Quantité estimée",
      quantityPlaceholder: "ex. 25",
      logo: "Personnalisation avec le logo de l'entreprise",
      company: "Entreprise",
      contact: "Personne de contact",
      email: "E-mail",
      phone: "Téléphone",
      message: "Précisions (métier, saison, échéance…)",
      submit: "Demander un devis",
      subject: "[Devis entreprise] Demande de commande en volume",
      labelCompany: "Entreprise",
      labelContact: "Contact",
      labelQuantity: "Quantité estimée",
      labelLogo: "Personnalisation logo",
      labelDetails: "Précisions",
      yes: "oui",
      no: "non",
      sentBefore:
        "Votre client e-mail vient de s'ouvrir avec la demande pré-remplie — il ne reste qu'à l'envoyer. Si rien ne s'est ouvert, écrivez-nous directement à ",
      v1Note:
        "V1 : l'envoi passe par votre logiciel d'e-mail. Un formulaire direct sera mis en place avec la version finale du site.",
    },
  },

  sav: {
    eyebrow: "Service après-vente",
    title: "Un SAV qui existe vraiment",
    subtitle:
      "Acheter un équipement à batterie sans SAV, c'est acheter un produit jetable. Le nôtre est au cœur de notre modèle.",
    commitmentsTitle: "Nos engagements",
    commitments: [
      {
        title: "✅ Garantie fabricant 12–24 mois",
        text: "Chaque produit est couvert par une garantie fabricant de 12 à 24 mois selon le modèle, batteries comprises selon conditions. La durée exacte est indiquée sur chaque fiche produit.",
      },
      {
        title: "🔁 Échange sous 30 jours",
        text: "Un défaut constaté à la réception ? Nous échangeons le produit sous 30 jours, sans parcours du combattant : signalez-le, nous organisons le remplacement.",
      },
      {
        title: "📞 Support e-mail et téléphone",
        text: "Un interlocuteur joignable par e-mail et par téléphone, en français. Réponse sous 48 h.",
      },
      {
        title: "🔋 Batteries & pièces détachées",
        text: "Batteries de remplacement, ventilateurs, câbles et chargeurs disponibles séparément — pour prolonger la vie de votre équipement au lieu de le remplacer.",
      },
    ],
    cgvNote:
      "Conditions détaillées (CGV) en cours de finalisation — publiées avec le catalogue définitif.",
    careTitle: "Fiches d'entretien par produit",
    careIntro:
      "Lavage, charge, stockage de la batterie : chaque produit aura sa fiche d'entretien détaillée, publiée avec le catalogue définitif.",
    care: [
      {
        titre: "Lavage du textile chauffant",
        resume: "Batterie retirée, cycle délicat, séchage à plat : les bons gestes par produit.",
      },
      {
        titre: "Charge et autonomie",
        resume: "Chargeurs compatibles, cycles de charge et gestes qui préservent la batterie.",
      },
      {
        titre: "Stockage de la batterie",
        resume: "Niveau de charge idéal, température et précautions pour l'entre-saison.",
      },
    ],
    careSoon: "Fiche à venir",
    takebackTitle: "Reprise gratuite des appareils usagés",
    takebackText:
      "♻️ Conformément à la loi suisse (OREA), nous reprenons gratuitement vos anciens appareils électriques du même type. Contactez-nous ou déposez-les dans un point de collecte SENS/Swico proche de chez vous.",
    processTitle: "Comment ça se passe ?",
    process: [
      "Contactez-nous via le formulaire (sujet « Service après-vente ») ou par téléphone en décrivant le problème.",
      "Nous répondons sous 48 h avec un diagnostic ou une demande de précisions.",
      "Selon le cas : envoi d'une pièce, étiquette de retour pour réparation, ou échange.",
      "Suivi jusqu'à la résolution — vous avez un interlocuteur, pas un ticket anonyme.",
    ],
    ctaTitle: "Un problème avec un produit ?",
    ctaButton: "Contacter le SAV",
  },

  guideTailles: {
    eyebrow: "Guide des tailles",
    title: "Trouver la bonne taille du premier coup",
    subtitle:
      "Un vêtement chauffant doit être près du corps pour que les zones de chauffe touchent le buste, sans comprimer. Mesurez-vous une fois, commandez tranquille.",
    exampleStrong: "Valeurs d'exemple.",
    exampleText:
      "Les tableaux ci-dessous illustrent la structure du guide définitif. Les mesures réelles seront relevées sur chaque modèle retenu, après réception et test des échantillons — les tailles annoncées par les fabricants ne correspondent pas toujours aux standards européens.",
    topsTitle: "Vestes et gilets chauffants",
    topsIntro:
      "Coupe unisexe. Entre deux tailles, prenez la plus grande si vous comptez porter une couche épaisse dessous, la plus petite pour un gilet à porter sous une veste.",
    colSize: "Taille",
    colChest: "Tour de poitrine (cm)",
    colWaist: "Tour de taille (cm)",
    colHeight: "Hauteur (cm)",
    glovesTitle: "Gants chauffants",
    glovesIntro:
      "Un gant trop grand chauffe mal : l'air circule entre la main et les fils chauffants. Privilégiez l'ajusté.",
    colHand: "Tour de main (cm)",
    insolesTitle: "Semelles chauffantes",
    insolesText:
      "Les semelles se commandent en pointure européenne (36 à 46) et se découpent au besoin : suivez le tracé imprimé correspondant à votre pointure, puis coupez avec des ciseaux — sans jamais entamer la zone du câblage chauffant, matérialisée sur la semelle.",
    measureTitle: "Comment vous mesurer",
    measures: [
      {
        titre: "Tour de poitrine",
        texte:
          "Mètre ruban à l'horizontale, sur la partie la plus large de la poitrine, bras le long du corps. Ne serrez pas.",
      },
      {
        titre: "Tour de taille",
        texte: "À l'endroit le plus étroit du buste, généralement juste au-dessus du nombril.",
      },
      {
        titre: "Tour de main",
        texte:
          "Autour de la paume, juste sous les doigts, sans inclure le pouce. Mesurez votre main dominante.",
      },
    ],
    doubtTitle: "Un doute sur votre taille ?",
    doubtText:
      "Envoyez-nous vos mesures et l'usage prévu : nous vous répondons avec une recommandation, plutôt que de vous laisser deviner.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre besoin",
    subtitle:
      "Question produit, demande de devis, SAV ou projet d'entreprise : nous répondons sous 2 jours ouvrés.",
    form: {
      name: "Nom",
      email: "E-mail",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer via mon e-mail",
      subjects: {
        devis: "Demande de devis (panier)",
        question: "Question sur un produit",
        sav: "Service après-vente",
        b2b: "Demande entreprise / B2B",
        autre: "Autre",
      },
      cartRecap: "Produits du panier :",
      mailSubject: "Demande via le site",
      sentBefore:
        "Votre client e-mail vient de s'ouvrir avec le message pré-rempli — il ne reste qu'à l'envoyer. Si rien ne s'est ouvert, écrivez-nous directement à ",
      v1Note:
        "V1 : l'envoi passe par votre logiciel d'e-mail. Un formulaire direct sera mis en place avec la version finale du site.",
    },
  },

  panier: {
    title: "Votre panier",
    empty: "Votre panier est vide.",
    goHiver: "Univers Hiver",
    goEte: "Univers Été",
    perPiece: "/ pièce",
    quantityAria: "Quantité pour",
    removeAria: "Retirer du panier",
    clear: "Vider le panier",
    total: "Total indicatif :",
    vatIncluded: "TVA incluse",
    noPaymentNote:
      "Le paiement en ligne (TWINT, carte, PostFinance) sera activé avec le catalogue définitif. En attendant, validez votre sélection en demande de devis : nous vous confirmons prix, disponibilité et délais par e-mail.",
    validate: "Valider en demande de devis →",
  },

  aPropos: {
    eyebrow: "Qui sommes-nous",
    title: "Une boutique suisse qui s'engage sur ses produits",
    subtitle:
      "Notre conviction : les équipements thermiques à batterie méritent un vrai commerçant — qui stocke, qui teste et qui répond.",
    approachTitle: "Notre approche",
    approachIntro:
      "Nous construisons Thermovia autour d'un principe simple : ne proposer que des produits que nous connaissons, issus de fournisseurs sélectionnés et de confiance, et les accompagner d'un service après-vente basé en Suisse romande — garantie réelle, pièces de rechange, interlocuteur joignable.",
    approachItems: [
      {
        strong: "Stock en Suisse romande",
        text: "les produits clés sont stockés localement pour une livraison rapide et une disponibilité vérifiée.",
      },
      {
        strong: "Vrai service après-vente",
        text: "garantie assumée, batteries et pièces détachées disponibles à l'unité, interlocuteur joignable.",
      },
      {
        strong: "Sélection restreinte et testée",
        text: "plutôt qu'un catalogue infini, une gamme courte de produits que nous connaissons et pouvons défendre.",
      },
    ],
    savLink: "Voir notre SAV",
    sourcingTitle: "Un sourcing exigeant, Europe et Asie",
    sourcingP1:
      "Nous sommes en cours de sélection de nos fournisseurs, en Europe et en Asie. Nos critères : qualité de fabrication constante, sécurité des batteries (certifications), batterie remplaçable sans outil spécifique, disponibilité des pièces détachées dans la durée et conditions de production responsables. Nous préférons retarder l'ouverture du catalogue final plutôt que de vendre des produits que nous n'assumerions pas.",
    sourcingP2Before: "C'est pourquoi les produits actuellement affichés sont des ",
    sourcingP2Strong: "exemples représentatifs",
    sourcingP2After: " de la gamme cible, clairement identifiés comme tels.",
    commitmentsTitle: "Nos engagements",
    commitments: [
      {
        title: "Transparence",
        text: "Prix en CHF TVA incluse, origine des produits indiquée, pas de fausse urgence ni de faux rabais.",
      },
      {
        title: "Durabilité",
        text: "Produits réparables, batteries remplaçables, conseils d'entretien pour prolonger la durée de vie.",
      },
      {
        title: "Proximité",
        text: "Interlocuteur en Suisse romande, réponse dans votre langue, retours simplifiés.",
      },
      {
        title: "Honnêteté produit",
        text: "Autonomies et performances annoncées telles que mesurées, pas telles qu'imprimées sur la boîte.",
      },
    ],
  },

  footer: {
    brandText:
      "Équipements chauffants sélectionnés et testés en Suisse romande. Stock et expédition depuis la région de Vevey.",
    shopAria: "Liens boutique",
    serviceAria: "Liens service",
    shopTitle: "BOUTIQUE",
    serviceTitle: "SERVICE",
    legalTitle: "LÉGAL",
    shop: {
      hiver: "Hiver",
      ete: "Été — bientôt",
      sport: "Sport",
      travail: "Travail extérieur",
      entreprises: "Entreprises",
    },
    service: {
      guideTailles: "Guide des tailles",
      sav: "Garantie & SAV",
      aPropos: "Qui sommes-nous",
      contact: "Contact",
    },
    vat: "Prix en CHF, TVA suisse incluse",
    cgv: "CGV — en rédaction",
  },
};

/**
 * Forme du dictionnaire, dérivée du français.
 * Les autres langues doivent la satisfaire intégralement.
 */
export type Dictionary = typeof fr;

export default fr;
