/**
 * Dictionnaire allemand (Schweizer Hochdeutsch).
 *
 * Conventions suisses appliquées volontairement :
 * - jamais de « ß » : toujours « ss » (Grösse, gross, dass) ;
 * - vocabulaire commercial suisse : « Offerte » plutôt que « Angebot »
 *   pour un devis, « innert » plutôt que « innerhalb » pour un délai.
 *
 * Le type `Dictionary` vient du français : si une clé manque ici, le build
 * échoue. Voir lib/i18n/fr.ts.
 */
import type { Dictionary } from "./fr";

const de: Dictionary = {
  meta: {
    layout: {
      titleDefault: "Thermovia — Beheizte und kühlende Ausrüstung in der Schweiz",
      description:
        "Beheizte Jacken, Westen und Handschuhe: Ausrüstung zur Körpertemperatur-Regulierung, Lager und Versand aus der Westschweiz, Ersatzteile einzeln erhältlich.",
    },
    home: {
      title: "Thermovia — Beheizte Jacken, Westen und Handschuhe in der Schweiz",
      description:
        "Beheizte Jacken, Westen und Handschuhe, ausgewählt und in der Westschweiz getestet: Lager und Versand ab der Region Vevey, Ersatzteile einzeln. Die Sommerlinie folgt im Frühling.",
    },
    hiver: {
      title: "Winter — beheizte Jacken, Westen und Handschuhe",
      description:
        "Winterkatalog: beheizte Jacken, Westen, Handschuhe und Zubehör. Lager in der Schweiz, Garantie und Kundendienst vor Ort.",
    },
    ete: {
      title: "Sommer — die kühlende Linie kommt",
      description:
        "Ventilierte Westen, PCM-Westen sowie Nacken- und Taschenventilatoren: die Sommerlinie von Thermovia ist in Vorbereitung. Hinterlassen Sie Ihre E-Mail-Adresse für den Start.",
    },
    sport: {
      title: "Sport — Temperaturregulierung für Laufen, Velofahren und Outdoor",
      description:
        "Beheizte Handschuhe und Westen für den Winter, kühlende Westen für den Sommer: trainieren Sie das ganze Jahr, bei jedem Wetter.",
    },
    travail: {
      title: "Arbeit im Freien — thermische Ausrüstung für Bau, Landwirtschaft, Logistik",
      description:
        "Beheizte Jacken und Handschuhe für den Winter, ventilierte Westen gegen die Hitze: draussen arbeiten unter guten Bedingungen, das ganze Jahr. Mit PSA kombinierbar.",
    },
    entreprises: {
      title: "Firmen — Offerten und Mengenbestellungen, Logo-Veredelung",
      description:
        "Rüsten Sie Ihre Teams aus: Offertanfrage für Mengen, beheizte Warnschutzjacke für Bau und Logistik, Logo-Veredelung und eigener Kundendienst in der Westschweiz.",
    },
    sav: {
      title: "Kundendienst — Garantie, Umtausch, Pflege, Rücknahme",
      description:
        "Der Kundendienst von Thermovia: Herstellergarantie, Umtausch innert 30 Tagen bei Mängeln, Support per E-Mail und Telefon, Pflegehinweise und kostenlose Rücknahme von Altgeräten.",
    },
    guideTailles: {
      title: "Grössentabelle",
      description:
        "So wählen Sie die Grösse Ihrer beheizten Jacke, Weste oder Handschuhe: Umrechnungstabellen in Zentimetern und Messanleitung, damit die erste Bestellung passt.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Eine Frage zu einem Produkt, eine Offertanfrage oder ein Anliegen für den Kundendienst? Kontaktieren Sie Thermovia — Antwort innert 2 Arbeitstagen.",
    },
    panier: {
      title: "Warenkorb",
      description: "Ihre Auswahl bei Thermovia, als Offertanfrage abzuschliessen.",
    },
    aPropos: {
      title: "Über uns — unser Ansatz: Lager vor Ort und echter Kundendienst",
      description:
        "Thermovia: sorgfältig ausgewählte Lieferanten in Europa und Asien, Lager in der Westschweiz und ein echter Kundendienst.",
    },
    recherche: {
      title: "Suche",
      description: "Ein Produkt oder eine Kategorie im Thermovia-Katalog suchen.",
    },
  },

  common: {
    all: "Alle",
    seeSelection: "Zur Auswahl →",
    askAdvice: "Beratung anfragen",
    exampleProductsNote:
      "Beispielprodukte — der definitive Katalog wird gerade zusammengestellt.",
    emptyCategory:
      "Zurzeit kein Beispielprodukt in dieser Kategorie — der definitive Katalog wird gerade zusammengestellt.",
  },

  header: {
    banner: [
      "GRATIS LIEFERUNG AB CHF 80.–",
      "UMTAUSCH INNERT 30 TAGEN",
      "VERSAND AB DER REGION VEVEY",
    ],
    homeAria: "Startseite",
    mainNavAria: "Hauptnavigation",
    mobileNavAria: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schliessen",
    cart: "Warenkorb",
    cartAria: "Warenkorb",
    languageAria: "Sprache wählen",
    nav: {
      hiver: "Winter",
      ete: "Sommer",
      sport: "Sport",
      travail: "Arbeit im Freien",
      entreprises: "Firmen",
      sav: "Kundendienst",
      contact: "Kontakt",
    },
    megaMenu: {
      vestes: { label: "Jacken", sublabel: "Beruf & Sport" },
      gilets: { label: "Westen", sublabel: "dünn und leicht" },
      mainsPieds: { label: "Hände & Füsse", sublabel: "Handschuhe & Sohlen" },
      accessoires: { label: "Akkus & Zubehör", sublabel: "Teile einzeln" },
      all: "Ganze Winterwelt →",
    },
  },

  search: {
    placeholder: "Produkt suchen…",
    label: "Im Katalog suchen",
    open: "Suche öffnen",
    close: "Suche schliessen",
    groupProducts: "Produkte",
    groupCategories: "Kategorien",
    noResults: "Kein Ergebnis für",
    noResultsHint: "Versuchen Sie «Jacke», «Handschuhe», «Akku» oder «Weste».",
    seeAll: "Alle Ergebnisse anzeigen",
    resultsTitle: "Suchergebnisse",
    resultsFor: "Ergebnisse für",
    resultsCountOne: "Produkt gefunden",
    resultsCountMany: "Produkte gefunden",
    emptyQuery: "Geben Sie ein Stichwort ein, um die Suche zu starten.",
    suggestionsAria: "Suchvorschläge",
    inCategory: "in",
  },

  meteo: {
    source: "MESSWERT METEOSCHWEIZ",
    location: "LAUSANNE",
  },

  categories: {
    hiver: {
      vestes: "Jacken",
      gilets: "Westen",
      "mains-pieds": "Hände & Füsse",
      accessoires: "Akkus & Zubehör",
    },
    ete: {
      "gilet-ventile": "Ventilierte Westen",
      "gilet-pcm": "PCM-Westen",
      "ventilateur-cou": "Nackenventilatoren",
      "ventilateur-portable": "Taschenventilatoren",
      "ventilateur-table": "Tischventilatoren",
      "accessoire-rafraichissant": "Weiteres Zubehör",
    },
    filterAria: "Nach Produkttyp filtern",
    profileAria: "Nach Profil filtern",
    profileLabel: "PROFIL",
    profileAll: "Alle",
    profiles: {
      "travail-exterieur": "Beruf",
      sport: "Sport",
      particuliers: "Privat",
    },
  },

  product: {
    add: "Hinzufügen",
    added: "Hinzugefügt ✓",
    addAria: "In den Warenkorb legen",
    badgeSecondLife: "ZWEITES LEBEN",
    badgeBest: "BEST",
    photoAlt: "Produktfoto —",
  },

  home: {
    eyebrow: "Winterwelt — die Saison beginnt hier",
    heroLines: ["Kälte sollte nicht", "über Ihren Tag"],
    heroAccent: "entscheiden.",
    heroSubtitle:
      "Beheizte Jacken, Westen und Handschuhe für den Arbeitsweg, den Spaziergang, den Sport und die Arbeit im Freien. In der Westschweiz getestete Auswahl, Akkus und Ersatzteile während der ganzen Lebensdauer erhältlich.",
    ctaPrimary: "Winterwelt entdecken",
    ctaSecondary: "Meine Grösse finden",
    heroCaption: "Hero-Foto — beheizte Jacke bei Kälte im Freien, Hochformat 3:4",
    scaleTitle: "WAS DIE WINTERLINIE ABDECKT",
    scaleUsages: [
      "Beheizte Jacke + Handschuhe",
      "Beheizte Weste + Handschuhe",
      "Weste allein, unter der Jacke",
    ],
    args: [
      { title: "Lager in der Westschweiz", sub: "Versand ab der Region Vevey (VD)" },
      { title: "Herstellergarantie", sub: "12 bis 24 Monate je nach Produkt" },
      { title: "Teile einzeln", sub: "Akkus, Ladegeräte, Heizelemente" },
      { title: "Antwort innert 48 h", sub: "Per E-Mail oder Telefon" },
    ],
    productsEyebrow: "WINTERWELT",
    productsTitle: "Die Basics für den Winter",
    productsEmpty: "Zurzeit kein Beispielprodukt in dieser Kategorie.",
    teaserEyebrow: "Sommer — bald verfügbar",
    teaserTitle: "Die Sommerlinie entsteht für die warmen Tage",
    teaserText:
      "Ventilierte Westen, PCM-Westen und Nackenventilatoren: entdecken Sie, was kommt, und hinterlassen Sie Ihre E-Mail-Adresse für den Start.",
    teaserLink: "Sommer-Vorschau ansehen →",
    quickAccessAria: "Schnellzugriff",
    quickAccess: [
      {
        eyebrow: "Sport",
        title: "Hände und Füsse warm, die ganze Saison",
        text: "Dünne Handschuhe fürs Velo, leichte Westen vor dem Start: Wärme, die der Anstrengung folgt.",
      },
      {
        eyebrow: "Arbeit im Freien",
        title: "Den Tag draussen durchstehen, ohne zu erstarren",
        text: "Bau, Landwirtschaft, Logistik: Ausrüstung, die sich mit Ihrer PSA verträgt.",
      },
      {
        eyebrow: "Firmen",
        title: "Ein Team ausrüsten, von der Offerte bis zum Unterhalt",
        text: "Mengenbestellungen, Logo-Veredelung und bezifferte Offerte innert 2 Tagen.",
      },
    ],
    emailTitle: "Den definitiven Katalog nicht verpassen",
    emailText:
      "Eine Nachricht, sobald die Lieferanten bestätigt und die ersten Stücke am Lager sind. Kein wöchentlicher Newsletter.",
    emailPlaceholder: "ihre@email.ch",
    emailButton: "Benachrichtigen",
    emailAria: "Ihre E-Mail-Adresse",
    emailSent:
      "Ihr E-Mail-Programm hat sich geöffnet — senden Sie die Nachricht ab, um benachrichtigt zu werden.",
    emailSubject: "Benachrichtigung, sobald der definitive Katalog da ist",
    emailBody:
      "Guten Tag\n\nBitte benachrichtigen Sie mich, sobald der definitive Katalog verfügbar ist.\n",
  },

  hiver: {
    eyebrow: "Winterwelt",
    title: "Die Wärme, die Sie überallhin begleitet",
    subtitle:
      "Beheizte Jacken, Westen und Handschuhe mit Akku: leistungsfähig auf der Baustelle, im Training und im Alltag — auch bei -10 °C.",
    catalogueAria: "Produktkatalog",
  },

  ete: {
    eyebrow: "Sommerwelt — bald verfügbar",
    title: "Die Sommerlinie kommt mit den warmen Tagen",
    subtitle:
      "Wir bereiten die Auswahl gegen die Hitze vor: sie öffnet nach dem Winterstart, sobald die Muster unter realen Bedingungen getestet sind.",
    caption: "Vorschau-Foto — ventilierte Weste im Hochsommer, warmes Licht",
    programEyebrow: "Im Programm",
    programTitle: "Was die Sommerlinie bringt",
    program: [
      {
        label: "Ventilierte Westen",
        sublabel: "Konstanter Luftstrom für Baustelle, Logistik und Freizeit",
      },
      {
        label: "PCM-Westen",
        sublabel: "Konstante Kühlung ohne Akku, dank Phasenwechselmaterial",
      },
      {
        label: "Nacken- & Taschenventilatoren",
        sublabel: "Freihändig oder im Taschenformat, für unterwegs und ganze Tage draussen",
      },
    ],
    notifyTitle: "Zum Start benachrichtigt werden",
    notifyText: "Eine einzige Nachricht zur Eröffnung der Sommerlinie. Kein Newsletter.",
    notifyButton: "Zum Start benachrichtigen",
    notifyPlaceholder: "ihre@email.ch",
    notifyAria: "Ihre E-Mail-Adresse",
    notifySent:
      "Ihr E-Mail-Programm hat sich geöffnet — senden Sie die Nachricht ab, um benachrichtigt zu werden.",
    notifySubject: "Benachrichtigung zum Start der Sommerlinie",
    notifyBody:
      "Guten Tag\n\nBitte benachrichtigen Sie mich zum Start der Sommerlinie.\n",
  },

  sport: {
    eyebrow: "Sportlerinnen & Sportler",
    title: "Trainieren Sie das ganze Jahr, nicht nur in der Übergangszeit",
    subtitle:
      "Warme Extremitäten für Wintertouren, kühle Erholung nach der Anstrengung im Sommer: die beherrschte Temperatur gehört zur Leistung.",
    usagesTitle: "Konkrete Anwendungen",
    usages: [
      {
        title: "Laufen & Trail",
        text: "Leichte beheizte Weste vor dem Start im Winter, dünne Handschuhe während der Anstrengung und eine kühlende Weste für die Erholung im Sommer.",
      },
      {
        title: "Velofahren",
        text: "Dünne, winddichte beheizte Handschuhe für Winterausfahrten, wenn die Finger vor den Beinen aufgeben.",
      },
      {
        title: "Outdoor & Berg",
        text: "Wandern, Langlauf, Jagd oder Fischen: Zusatzwärme mit langer Laufzeit für ganze Tage draussen.",
      },
    ],
    productsTitle: "Auswahl für den Sport",
  },

  travail: {
    eyebrow: "Arbeit im Freien",
    title: "Draussen arbeiten, ohne das Wetter zu erleiden",
    subtitle:
      "Bau, Landwirtschaft, Logistik: wer seine Tage draussen verbringt, für den ist Kälte kein Detail. Rüsten Sie sich aus, um das ganze Jahr leistungsfähig und sicher zu bleiben.",
    whyTitle: "Warum ausrüsten?",
    why: [
      {
        title: "Ihre Sicherheit zuerst",
        text: "Taube Finger und nachlassende Geschicklichkeit im Winter, Hitzschlag im Sommer: reale Risiken der Arbeit im Freien, die gute Ausrüstung konkret senkt.",
      },
      {
        title: "Mit Ihrer PSA kombinierbar",
        text: "Wir wählen Modelle, die sich mit gängiger Schutzausrüstung tragen lassen: Warnweste, Gurtzeug, Sicherheitsschuhe.",
      },
      {
        title: "Den Tag durchhalten",
        text: "Bei richtiger Temperatur arbeitet man besser und ist am Abend weniger erschöpft: weniger Stunden im Frieren, weniger erzwungene Pausen.",
      },
    ],
    productsTitle: "Auswahl für die Arbeit im Freien",
    productsNote:
      "Beispielprodukte — der definitive Katalog entsteht gerade mit unseren Lieferanten.",
    b2bNoteBefore: "Möchten Sie mehrere Mitarbeitende ausrüsten? Dann besuchen Sie unseren ",
    b2bNoteLink: "Firmenbereich",
  },

  entreprises: {
    eyebrow: "Firmenbereich",
    title: "Rüsten Sie Ihre Mitarbeitenden einfach aus",
    subtitle:
      "Hier gibt es keinen Warenkorb: beschreiben Sie Ihren Bedarf, wir kommen mit einer klaren Offerte zurück — Produkte, Mengen, Logo-Veredelung und Fristen.",
    useCaseEyebrow: "Anwendungsfall",
    useCaseTitle: "Die beheizte Warnschutzjacke für Ihre Teams im Feld",
    useCaseText:
      "Bau, Logistik, Werkhof: eine einzige Jacke verbindet hohe Sichtbarkeit mit Akku-Heizung, damit Teams den ganzen Winter leistungsfähig bleiben. Mit Ihrem Logo veredelbar, mit Akkus geliefert, und die Verschleissteile bleiben einzeln bestellbar.",
    useCaseDelay:
      "⏱ Richtwert: 4 bis 6 Wochen für personalisierte Mengenbestellungen.",
    useCaseCaption:
      "Foto — beheizte Warnschutzjacke auf der Baustelle, Warnweste",
    offerTitle: "Was wir Firmen bieten",
    offer: [
      {
        title: "📄 Mengenofferten",
        text: "Gestaffelte Preise nach Menge, gemischte Grössen und Modelle, Antwort innert 2 Arbeitstagen.",
      },
      {
        title: "🎨 Logo-Veredelung",
        text: "Ihr Logo auf Jacken und Westen: Stickerei oder Druck, Freigabe am Muster vor der Produktion.",
      },
      {
        title: "🧾 Schweizer Rechnung",
        text: "Firmenrechnung mit MWST, Zahlung auf Rechnung (30 Tage) für Geschäftskunden.",
      },
      {
        title: "🔧 Eigener Kundendienst",
        text: "Betreuung Ihres Gerätebestands, Akkus und Ersatzteile, schneller Ersatz zur Vermeidung von Ausfällen.",
      },
    ],
    formTitle: "Offerte anfragen",
    formIntro:
      "Nennen Sie Produkt, Menge und Ihre Kontaktdaten: wir melden uns mit einer bezifferten Offerte und einer verbindlichen Frist.",
    form: {
      product: "Gewünschtes Produkt",
      products: [
        "Beheizte Warnschutzjacke",
        "Beheizte Jacke",
        "Beheizte Weste",
        "Beheizte Handschuhe",
        "Anderes / mehrere Produkte",
      ],
      quantity: "Geschätzte Menge",
      quantityPlaceholder: "z. B. 25",
      logo: "Veredelung mit dem Firmenlogo",
      company: "Firma",
      contact: "Kontaktperson",
      email: "E-Mail",
      phone: "Telefon",
      message: "Präzisierungen (Branche, Saison, Termin…)",
      submit: "Offerte anfragen",
      subject: "[Firmenofferte] Anfrage für eine Mengenbestellung",
      labelCompany: "Firma",
      labelContact: "Kontakt",
      labelQuantity: "Geschätzte Menge",
      labelLogo: "Logo-Veredelung",
      labelDetails: "Präzisierungen",
      yes: "ja",
      no: "nein",
      sentBefore:
        "Ihr E-Mail-Programm hat sich mit der vorausgefüllten Anfrage geöffnet — Sie müssen sie nur noch absenden. Falls sich nichts geöffnet hat, schreiben Sie uns direkt an ",
      v1Note:
        "V1: der Versand läuft über Ihr E-Mail-Programm. Ein direktes Formular kommt mit der finalen Version der Website.",
    },
  },

  sav: {
    eyebrow: "Kundendienst",
    title: "Ein Kundendienst, den es wirklich gibt",
    subtitle:
      "Ein Akku-Gerät ohne Kundendienst zu kaufen heisst, ein Wegwerfprodukt zu kaufen. Unserer steht im Zentrum unseres Modells.",
    commitmentsTitle: "Unsere Zusagen",
    commitments: [
      {
        title: "✅ Herstellergarantie 12–24 Monate",
        text: "Jedes Produkt hat eine Herstellergarantie von 12 bis 24 Monaten je nach Modell, Akkus gemäss Bedingungen inbegriffen. Die genaue Dauer steht auf jedem Produktblatt.",
      },
      {
        title: "🔁 Umtausch innert 30 Tagen",
        text: "Ein Mangel bei Erhalt festgestellt? Wir tauschen das Produkt innert 30 Tagen — ohne Hürdenlauf: melden Sie es, wir organisieren den Ersatz.",
      },
      {
        title: "📞 Support per E-Mail und Telefon",
        text: "Eine erreichbare Ansprechperson per E-Mail und Telefon. Antwort innert 48 h.",
      },
      {
        title: "🔋 Akkus & Ersatzteile",
        text: "Ersatzakkus, Ventilatoren, Kabel und Ladegeräte separat erhältlich — um die Lebensdauer Ihrer Ausrüstung zu verlängern, statt sie zu ersetzen.",
      },
    ],
    cgvNote:
      "Detaillierte Bedingungen (AGB) werden gerade finalisiert — Veröffentlichung mit dem definitiven Katalog.",
    careTitle: "Pflegehinweise pro Produkt",
    careIntro:
      "Waschen, Laden, Akku-Lagerung: jedes Produkt erhält sein detailliertes Pflegeblatt, veröffentlicht mit dem definitiven Katalog.",
    care: [
      {
        titre: "Waschen des beheizten Textils",
        resume: "Akku entfernt, Schonwaschgang, liegend trocknen: die richtigen Handgriffe pro Produkt.",
      },
      {
        titre: "Laden und Laufzeit",
        resume: "Passende Ladegeräte, Ladezyklen und Gewohnheiten, die den Akku schonen.",
      },
      {
        titre: "Akku-Lagerung",
        resume: "Idealer Ladestand, Temperatur und Vorsichtsmassnahmen für die Zwischensaison.",
      },
    ],
    careSoon: "Blatt folgt",
    takebackTitle: "Kostenlose Rücknahme von Altgeräten",
    takebackText:
      "♻️ Gemäss Schweizer Recht (VREG) nehmen wir Ihre alten Elektrogeräte gleicher Art kostenlos zurück. Kontaktieren Sie uns oder geben Sie sie bei einer SENS/Swico-Sammelstelle in Ihrer Nähe ab.",
    processTitle: "Wie läuft das ab?",
    process: [
      "Kontaktieren Sie uns über das Formular (Betreff «Kundendienst») oder per Telefon und beschreiben Sie das Problem.",
      "Wir antworten innert 48 h mit einer Einschätzung oder einer Rückfrage.",
      "Je nach Fall: Versand eines Ersatzteils, Rücksendeetikett zur Reparatur oder Umtausch.",
      "Begleitung bis zur Lösung — Sie haben eine Ansprechperson, kein anonymes Ticket.",
    ],
    ctaTitle: "Ein Problem mit einem Produkt?",
    ctaButton: "Kundendienst kontaktieren",
  },

  guideTailles: {
    eyebrow: "Grössentabelle",
    title: "Die richtige Grösse auf Anhieb finden",
    subtitle:
      "Ein beheiztes Kleidungsstück muss körpernah sitzen, damit die Heizzonen den Oberkörper berühren, ohne einzuengen. Einmal messen, entspannt bestellen.",
    exampleStrong: "Beispielwerte.",
    exampleText:
      "Die folgenden Tabellen zeigen den Aufbau der definitiven Anleitung. Die echten Masse werden an jedem gewählten Modell erhoben, nach Erhalt und Test der Muster — die von den Herstellern angegebenen Grössen entsprechen nicht immer den europäischen Standards.",
    topsTitle: "Beheizte Jacken und Westen",
    topsIntro:
      "Unisex-Schnitt. Zwischen zwei Grössen: die grössere, wenn Sie eine dicke Schicht darunter tragen; die kleinere für eine Weste unter der Jacke.",
    colSize: "Grösse",
    colChest: "Brustumfang (cm)",
    colWaist: "Taillenumfang (cm)",
    colHeight: "Körpergrösse (cm)",
    glovesTitle: "Beheizte Handschuhe",
    glovesIntro:
      "Ein zu grosser Handschuh wärmt schlecht: die Luft zirkuliert zwischen Hand und Heizdrähten. Wählen Sie eng anliegend.",
    colHand: "Handumfang (cm)",
    insolesTitle: "Beheizte Einlegesohlen",
    insolesText:
      "Die Sohlen werden in europäischer Schuhgrösse (36 bis 46) bestellt und bei Bedarf zugeschnitten: folgen Sie der aufgedruckten Linie Ihrer Grösse und schneiden Sie mit einer Schere — ohne je den auf der Sohle markierten Bereich der Heizverkabelung anzuschneiden.",
    measureTitle: "So messen Sie sich",
    measures: [
      {
        titre: "Brustumfang",
        texte:
          "Massband waagrecht an der breitesten Stelle der Brust, Arme seitlich am Körper. Nicht straff ziehen.",
      },
      {
        titre: "Taillenumfang",
        texte: "An der schmalsten Stelle des Oberkörpers, meist knapp oberhalb des Nabels.",
      },
      {
        titre: "Handumfang",
        texte:
          "Um die Handfläche, direkt unter den Fingern, ohne den Daumen. Messen Sie Ihre dominante Hand.",
      },
    ],
    doubtTitle: "Unsicher bei der Grösse?",
    doubtText:
      "Senden Sie uns Ihre Masse und den geplanten Einsatz: wir antworten mit einer Empfehlung, statt Sie raten zu lassen.",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen wir über Ihren Bedarf",
    subtitle:
      "Produktfrage, Offertanfrage, Kundendienst oder Firmenprojekt: wir antworten innert 2 Arbeitstagen.",
    form: {
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      submit: "Über mein E-Mail-Programm senden",
      subjects: {
        devis: "Offertanfrage (Warenkorb)",
        question: "Frage zu einem Produkt",
        sav: "Kundendienst",
        b2b: "Firmenanfrage / B2B",
        autre: "Anderes",
      },
      cartRecap: "Produkte im Warenkorb:",
      mailSubject: "Anfrage über die Website",
      sentBefore:
        "Ihr E-Mail-Programm hat sich mit der vorausgefüllten Nachricht geöffnet — Sie müssen sie nur noch absenden. Falls sich nichts geöffnet hat, schreiben Sie uns direkt an ",
      v1Note:
        "V1: der Versand läuft über Ihr E-Mail-Programm. Ein direktes Formular kommt mit der finalen Version der Website.",
    },
  },

  panier: {
    title: "Ihr Warenkorb",
    empty: "Ihr Warenkorb ist leer.",
    goHiver: "Winterwelt",
    goEte: "Sommerwelt",
    perPiece: "/ Stück",
    quantityAria: "Menge für",
    removeAria: "Aus dem Warenkorb entfernen",
    clear: "Warenkorb leeren",
    total: "Richtwert Total:",
    vatIncluded: "inkl. MWST",
    noPaymentNote:
      "Die Online-Zahlung (TWINT, Karte, PostFinance) wird mit dem definitiven Katalog aktiviert. Bis dahin schliessen Sie Ihre Auswahl als Offertanfrage ab: wir bestätigen Preis, Verfügbarkeit und Fristen per E-Mail.",
    validate: "Als Offertanfrage abschliessen →",
  },

  aPropos: {
    eyebrow: "Über uns",
    title: "Ein Schweizer Shop, der für seine Produkte einsteht",
    subtitle:
      "Unsere Überzeugung: thermische Akku-Ausrüstung verdient einen echten Händler — der lagert, testet und antwortet.",
    approachTitle: "Unser Ansatz",
    approachIntro:
      "Wir bauen Thermovia auf einem einfachen Grundsatz auf: nur Produkte anbieten, die wir kennen, von sorgfältig ausgewählten und vertrauenswürdigen Lieferanten, begleitet von einem Kundendienst in der Westschweiz — echte Garantie, Ersatzteile, erreichbare Ansprechperson.",
    approachItems: [
      {
        strong: "Lager in der Westschweiz",
        text: "die wichtigsten Produkte liegen lokal am Lager, für schnelle Lieferung und geprüfte Verfügbarkeit.",
      },
      {
        strong: "Echter Kundendienst",
        text: "übernommene Garantie, Akkus und Ersatzteile einzeln erhältlich, erreichbare Ansprechperson.",
      },
      {
        strong: "Kleine, getestete Auswahl",
        text: "statt eines endlosen Katalogs eine kurze Palette von Produkten, die wir kennen und vertreten können.",
      },
    ],
    savLink: "Unseren Kundendienst ansehen",
    sourcingTitle: "Anspruchsvolle Beschaffung, Europa und Asien",
    sourcingP1:
      "Wir sind daran, unsere Lieferanten in Europa und Asien auszuwählen. Unsere Kriterien: gleichbleibende Fertigungsqualität, Akku-Sicherheit (Zertifizierungen), ohne Spezialwerkzeug austauschbarer Akku, dauerhafte Verfügbarkeit von Ersatzteilen und verantwortungsvolle Produktionsbedingungen. Wir verschieben die Eröffnung des definitiven Katalogs lieber, als Produkte zu verkaufen, für die wir nicht einstehen.",
    sourcingP2Before: "Deshalb sind die aktuell gezeigten Produkte ",
    sourcingP2Strong: "repräsentative Beispiele",
    sourcingP2After: " der Zielpalette, klar als solche gekennzeichnet.",
    commitmentsTitle: "Unsere Zusagen",
    commitments: [
      {
        title: "Transparenz",
        text: "Preise in CHF inkl. MWST, Herkunft der Produkte angegeben, keine falsche Dringlichkeit und keine Schein-Rabatte.",
      },
      {
        title: "Langlebigkeit",
        text: "Reparierbare Produkte, austauschbare Akkus, Pflegehinweise zur Verlängerung der Lebensdauer.",
      },
      {
        title: "Nähe",
        text: "Ansprechperson in der Westschweiz, Antwort in Ihrer Sprache, einfache Rücksendungen.",
      },
      {
        title: "Ehrliche Produktangaben",
        text: "Laufzeiten und Leistungen so angegeben, wie sie gemessen wurden — nicht wie sie auf der Schachtel stehen.",
      },
    ],
  },

  footer: {
    brandText:
      "Beheizte Ausrüstung, ausgewählt und in der Westschweiz getestet. Lager und Versand ab der Region Vevey.",
    shopAria: "Shop-Links",
    serviceAria: "Service-Links",
    shopTitle: "SHOP",
    serviceTitle: "SERVICE",
    legalTitle: "RECHTLICHES",
    shop: {
      hiver: "Winter",
      ete: "Sommer — bald",
      sport: "Sport",
      travail: "Arbeit im Freien",
      entreprises: "Firmen",
    },
    service: {
      guideTailles: "Grössentabelle",
      sav: "Garantie & Kundendienst",
      aPropos: "Über uns",
      contact: "Kontakt",
    },
    vat: "Preise in CHF, inkl. Schweizer MWST",
    cgv: "AGB — in Ausarbeitung",
  },
};

export default de;
