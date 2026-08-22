/**
 * Dictionnaire italien (italien de Suisse).
 *
 * Vocabulaire suisse retenu : « preventivo » pour un devis, « IVA » pour la
 * TVA, « ORSAE » pour l'ordonnance fédérale sur la reprise des appareils
 * électriques (équivalent italien de l'OREA / VREG).
 *
 * Le type `Dictionary` vient du français : si une clé manque ici, le build
 * échoue. Voir lib/i18n/fr.ts.
 */
import type { Dictionary } from "./fr";

const it: Dictionary = {
  meta: {
    layout: {
      titleDefault: "Thermovia — Abbigliamento riscaldato e rinfrescante in Svizzera",
      description:
        "Giacche, gilet e guanti riscaldati: attrezzatura per la regolazione termica corporea, magazzino e spedizione dalla Svizzera romanda, pezzi di ricambio disponibili singolarmente.",
    },
    home: {
      title: "Thermovia — Giacche, gilet e guanti riscaldati in Svizzera",
      description:
        "Giacche, gilet e guanti riscaldati selezionati e testati nella Svizzera romanda: magazzino e spedizione dalla regione di Vevey, ricambi singoli. La linea estiva arriva in primavera.",
    },
    hiver: {
      title: "Inverno — giacche, gilet e guanti riscaldati",
      description:
        "Catalogo invernale: giacche riscaldate, gilet riscaldati, guanti riscaldati e accessori. Magazzino in Svizzera, garanzia e assistenza locale.",
    },
    ete: {
      title: "Estate — la linea rinfrescante sta arrivando",
      description:
        "Gilet ventilati, gilet PCM e ventilatori da collo e portatili: la linea estiva Thermovia è in preparazione. Lasciate la vostra e-mail per essere avvisati al lancio.",
    },
    sport: {
      title: "Sport — regolazione termica per corsa, ciclismo e outdoor",
      description:
        "Guanti e gilet riscaldati per l'inverno, gilet rinfrescanti per l'estate: allenatevi tutto l'anno, con qualsiasi tempo.",
    },
    travail: {
      title: "Lavoro all'aperto — attrezzatura termica per edilizia, agricoltura, logistica",
      description:
        "Giacche e guanti riscaldati per l'inverno, gilet ventilati contro la canicola: lavorate all'aperto in buone condizioni, tutto l'anno. Selezione compatibile con i DPI.",
    },
    entreprises: {
      title: "Aziende — preventivi e ordini in volume, personalizzazione con logo",
      description:
        "Equipaggiate le vostre squadre sul campo: richiesta di preventivo per volumi, giacca riscaldata ad alta visibilità per edilizia e logistica, personalizzazione con logo e assistenza dedicata.",
    },
    sav: {
      title: "Servizio clienti — garanzia, cambio, manutenzione, ritiro",
      description:
        "Il servizio clienti Thermovia: garanzia del fabbricante, cambio entro 30 giorni in caso di difetto, supporto via e-mail e telefono, schede di manutenzione e ritiro gratuito degli apparecchi usati.",
    },
    guideTailles: {
      title: "Guida alle taglie",
      description:
        "Come scegliere la taglia della vostra giacca, gilet o guanti riscaldati: tabelle di corrispondenza in centimetri e metodo di misurazione, per ordinare giusto al primo colpo.",
    },
    contact: {
      title: "Contatto",
      description:
        "Una domanda su un prodotto, una richiesta di preventivo o un'esigenza di assistenza? Contattate Thermovia — risposta entro 2 giorni lavorativi.",
    },
    panier: {
      title: "Carrello",
      description: "La vostra selezione Thermovia, da confermare come richiesta di preventivo.",
    },
    aPropos: {
      title: "Chi siamo — il nostro approccio: magazzino locale e vera assistenza",
      description:
        "Thermovia: fornitori affidabili selezionati in Europa e in Asia, magazzino nella Svizzera romanda e un vero servizio clienti.",
    },
    recherche: {
      title: "Ricerca",
      description: "Cercare un prodotto o una categoria nel catalogo Thermovia.",
    },
  },

  common: {
    all: "Tutto",
    seeSelection: "Vedi la selezione →",
    askAdvice: "Chiedere consiglio",
    exampleProductsNote:
      "Prodotti di esempio — il catalogo definitivo è in fase di composizione.",
    emptyCategory:
      "Nessun prodotto di esempio in questa categoria per ora — il catalogo definitivo è in fase di composizione.",
  },

  header: {
    banner: [
      "CONSEGNA GRATUITA DA CHF 80.–",
      "CAMBIO ENTRO 30 GIORNI",
      "SPEDITO DALLA REGIONE DI VEVEY",
    ],
    homeAria: "pagina iniziale",
    mainNavAria: "Navigazione principale",
    mobileNavAria: "Navigazione mobile",
    openMenu: "Aprire il menu",
    closeMenu: "Chiudere il menu",
    cart: "Carrello",
    cartAria: "Carrello",
    languageAria: "Scegliere la lingua",
    nav: {
      hiver: "Inverno",
      ete: "Estate",
      sport: "Sport",
      travail: "Lavoro all'aperto",
      entreprises: "Aziende",
      sav: "Assistenza",
      contact: "Contatto",
    },
    megaMenu: {
      vestes: { label: "Giacche", sublabel: "lavoro & sport" },
      gilets: { label: "Gilet", sublabel: "sottili e leggeri" },
      mainsPieds: { label: "Mani & piedi", sublabel: "guanti & solette" },
      accessoires: { label: "Batterie & accessori", sublabel: "pezzi singoli" },
      all: "Tutto il mondo inverno →",
    },
  },

  search: {
    placeholder: "Cercare un prodotto…",
    label: "Cercare nel catalogo",
    open: "Aprire la ricerca",
    close: "Chiudere la ricerca",
    groupProducts: "Prodotti",
    groupCategories: "Categorie",
    noResults: "Nessun risultato per",
    noResultsHint: "Provate «giacca», «guanti», «batteria» o «gilet».",
    seeAll: "Vedere tutti i risultati",
    resultsTitle: "Risultati della ricerca",
    resultsFor: "Risultati per",
    resultsCountOne: "prodotto trovato",
    resultsCountMany: "prodotti trovati",
    emptyQuery: "Inserite una parola chiave per avviare la ricerca.",
    suggestionsAria: "Suggerimenti di ricerca",
    inCategory: "in",
  },

  meteo: {
    source: "MISURA METEOSVIZZERA",
    location: "LOSANNA",
  },

  categories: {
    hiver: {
      vestes: "Giacche",
      gilets: "Gilet",
      "mains-pieds": "Mani & piedi",
      accessoires: "Batterie & accessori",
    },
    ete: {
      "gilet-ventile": "Gilet ventilati",
      "gilet-pcm": "Gilet PCM",
      "ventilateur-cou": "Ventilatori da collo",
      "ventilateur-portable": "Ventilatori portatili",
      "ventilateur-table": "Ventilatori da tavolo",
      "accessoire-rafraichissant": "Altri accessori",
    },
    filterAria: "Filtrare per tipo di prodotto",
    profileAria: "Filtrare per profilo",
    profileLabel: "PROFILO",
    profileAll: "Tutti",
    profiles: {
      "travail-exterieur": "Lavoro",
      sport: "Sport",
      particuliers: "Privati",
    },
  },

  product: {
    add: "Aggiungere",
    added: "Aggiunto ✓",
    addAria: "Aggiungere al carrello",
    badgeSecondLife: "SECONDA VITA",
    badgeBest: "BEST",
    photoAlt: "foto prodotto —",
  },

  home: {
    eyebrow: "Mondo inverno — la stagione comincia qui",
    heroLines: ["Il freddo non dovrebbe", "decidere della"],
    heroAccent: "vostra giornata.",
    heroSubtitle:
      "Giacche, gilet e guanti riscaldati per gli spostamenti, le passeggiate, lo sport e il lavoro all'aperto. Selezione testata nella Svizzera romanda, batterie e ricambi disponibili per tutta la vita del prodotto.",
    ctaPrimary: "Scoprire il mondo Inverno",
    ctaSecondary: "Trovare la mia taglia",
    heroCaption: "foto hero — giacca riscaldata indossata al freddo, formato verticale 3:4",
    scaleTitle: "COSA COPRE LA LINEA INVERNO",
    scaleUsages: [
      "Giacca riscaldata + guanti",
      "Gilet riscaldato + guanti",
      "Gilet da solo, sotto la giacca",
    ],
    args: [
      { title: "Magazzino in Svizzera romanda", sub: "Spedito dalla regione di Vevey (VD)" },
      { title: "Garanzia del fabbricante", sub: "da 12 a 24 mesi secondo il prodotto" },
      { title: "Pezzi singoli", sub: "Batterie, caricabatterie, elementi riscaldanti" },
      { title: "Risposta entro 48 h", sub: "Via e-mail o telefono" },
    ],
    productsEyebrow: "MONDO INVERNO",
    productsTitle: "Gli essenziali dell'inverno",
    productsEmpty: "Nessun prodotto di esempio in questa categoria per ora.",
    teaserEyebrow: "Estate — presto disponibile",
    teaserTitle: "La linea estiva si prepara per le belle giornate",
    teaserText:
      "Gilet ventilati, gilet PCM e ventilatori da collo: scoprite cosa arriva e lasciate la vostra e-mail per essere avvisati al lancio.",
    teaserLink: "Scoprire l'anteprima estate →",
    quickAccessAria: "Accessi rapidi",
    quickAccess: [
      {
        eyebrow: "Sport",
        title: "Mani e piedi al caldo, tutta la stagione",
        text: "Guanti sottili per la bici, gilet leggeri prima della partenza: il calore che segue lo sforzo.",
      },
      {
        eyebrow: "Lavoro all'aperto",
        title: "Reggere la giornata fuori, senza irrigidirsi",
        text: "Edilizia, agricoltura, logistica: attrezzatura compatibile con i vostri DPI.",
      },
      {
        eyebrow: "Aziende",
        title: "Equipaggiare una squadra, dal preventivo alla manutenzione",
        text: "Ordini in volume, personalizzazione con logo e preventivo cifrato entro 2 giorni.",
      },
    ],
    emailTitle: "Ricevere l'arrivo del catalogo definitivo",
    emailText:
      "Un messaggio quando i fornitori saranno confermati e i primi pezzi in magazzino. Nessuna newsletter settimanale.",
    emailPlaceholder: "vostra@email.ch",
    emailButton: "Avvisatemi",
    emailAria: "Il vostro indirizzo e-mail",
    emailSent:
      "Il vostro programma di posta si è aperto — inviate il messaggio per essere avvisati.",
    emailSubject: "Avvisatemi all'arrivo del catalogo definitivo",
    emailBody:
      "Buongiorno,\n\nVi prego di avvisarmi quando il catalogo definitivo sarà disponibile.\n",
  },

  hiver: {
    eyebrow: "Mondo inverno",
    title: "Il calore che vi segue ovunque",
    subtitle:
      "Giacche, gilet e guanti riscaldati a batteria: restate efficaci in cantiere, performanti in allenamento e a vostro agio ogni giorno, anche a -10 °C.",
    catalogueAria: "Catalogo dei prodotti",
  },

  ete: {
    eyebrow: "Mondo estate — presto disponibile",
    title: "La linea estiva arriva con le belle giornate",
    subtitle:
      "Stiamo preparando la selezione anti-canicola: aprirà dopo il lancio dell'inverno, una volta testati i campioni in condizioni reali.",
    caption: "foto anteprima — gilet ventilato in piena estate, luce calda",
    programEyebrow: "In programma",
    programTitle: "Cosa vi riserva la linea estiva",
    program: [
      {
        label: "Gilet ventilati",
        sublabel: "Flusso d'aria continuo per cantiere, logistica e tempo libero",
      },
      {
        label: "Gilet PCM",
        sublabel: "Freschezza costante senza batteria, con materiale a cambiamento di fase",
      },
      {
        label: "Ventilatori da collo e portatili",
        sublabel: "A mani libere o formato tascabile, per gli spostamenti e le giornate fuori",
      },
    ],
    notifyTitle: "Essere avvisati al lancio",
    notifyText: "Un solo messaggio all'apertura della linea estiva. Nessuna newsletter.",
    notifyButton: "Avvisatemi al lancio",
    notifyPlaceholder: "vostra@email.ch",
    notifyAria: "Il vostro indirizzo e-mail",
    notifySent:
      "Il vostro programma di posta si è aperto — inviate il messaggio per essere avvisati.",
    notifySubject: "Avvisatemi al lancio della linea estiva",
    notifyBody: "Buongiorno,\n\nVi prego di avvisarmi al lancio della linea estiva.\n",
  },

  sport: {
    eyebrow: "Sportive & sportivi",
    title: "Allenatevi tutto l'anno, non solo a mezza stagione",
    subtitle:
      "Estremità al caldo per le uscite invernali, recupero al fresco dopo lo sforzo estivo: la temperatura controllata fa parte della prestazione.",
    usagesTitle: "Usi concreti",
    usages: [
      {
        title: "Corsa & trail",
        text: "Gilet riscaldato leggero prima della partenza invernale, guanti sottili durante lo sforzo e gilet rinfrescante per il recupero in estate.",
      },
      {
        title: "Ciclismo",
        text: "Guanti riscaldati sottili e antivento per le uscite invernali, quando le dita cedono prima delle gambe.",
      },
      {
        title: "Outdoor & montagna",
        text: "Escursioni, sci di fondo, caccia o pesca: calore d'appoggio a lunga autonomia per intere giornate all'aperto.",
      },
    ],
    productsTitle: "Selezione sport",
  },

  travail: {
    eyebrow: "Lavoro all'aperto",
    title: "Lavorate fuori senza subire il tempo",
    subtitle:
      "Edilizia, agricoltura, logistica: quando si passano le giornate all'aperto, il freddo non è un dettaglio. Equipaggiatevi per restare efficaci e sicuri, tutto l'anno.",
    whyTitle: "Perché equipaggiarsi?",
    why: [
      {
        title: "La vostra sicurezza prima di tutto",
        text: "Intorpidimento e perdita di destrezza in inverno, colpo di calore in estate: rischi reali del lavoro all'aperto, che la buona attrezzatura riduce concretamente.",
      },
      {
        title: "Compatibile con i vostri DPI",
        text: "Selezioniamo modelli che si indossano con i dispositivi di protezione abituali: gilet ad alta visibilità, imbracatura, scarpe antinfortunistiche.",
      },
      {
        title: "Reggere la giornata",
        text: "Alla giusta temperatura si lavora meglio e si finisce la giornata meno sfiniti: meno ore a tremare, meno pause forzate.",
      },
    ],
    productsTitle: "Selezione per il lavoro all'aperto",
    productsNote:
      "Prodotti di esempio — il catalogo definitivo è in fase di composizione con i nostri fornitori.",
    b2bNoteBefore: "Cercate di equipaggiare più collaboratori? Visitate il nostro ",
    b2bNoteLink: "spazio aziende",
  },

  entreprises: {
    eyebrow: "Spazio aziende",
    title: "Equipaggiate i vostri collaboratori, semplicemente",
    subtitle:
      "Qui non c'è carrello: descrivete il vostro bisogno, torniamo con un preventivo chiaro — prodotti, quantità, personalizzazione con logo e tempi.",
    useCaseEyebrow: "Caso d'uso",
    useCaseTitle: "La giacca riscaldata ad alta visibilità per le vostre squadre sul campo",
    useCaseText:
      "Edilizia, logistica, servizi urbani: una sola giacca unisce alta visibilità e riscaldamento a batteria, per squadre che restano efficaci tutto l'inverno. Personalizzabile con il vostro logo, consegnata con le batterie, e i cui pezzi d'usura restano ordinabili singolarmente.",
    useCaseDelay:
      "⏱ Tempo indicativo: da 4 a 6 settimane per gli ordini personalizzati in volume.",
    useCaseCaption:
      "foto — giacca riscaldata ad alta visibilità indossata in cantiere",
    offerTitle: "Cosa proponiamo alle aziende",
    offer: [
      {
        title: "📄 Preventivi per volumi",
        text: "Prezzi decrescenti secondo le quantità, assortimento di taglie e modelli, risposta entro 2 giorni lavorativi.",
      },
      {
        title: "🎨 Personalizzazione con logo",
        text: "Marcatura del vostro logo su giacche e gilet: ricamo o stampa, approvazione su bozza prima della produzione.",
      },
      {
        title: "🧾 Fatturazione svizzera",
        text: "Fattura aziendale svizzera con IVA, pagamento su fattura (30 giorni) per i clienti professionali.",
      },
      {
        title: "🔧 Assistenza dedicata",
        text: "Monitoraggio del vostro parco attrezzature, batterie e pezzi di ricambio, sostituzione rapida per limitare i fermi.",
      },
    ],
    formTitle: "Richiedere un preventivo",
    formIntro:
      "Indicate il prodotto, la quantità e i vostri contatti: torniamo da voi con una proposta cifrata e un termine fermo.",
    form: {
      product: "Prodotto desiderato",
      products: [
        "Giacca riscaldata ad alta visibilità",
        "Giacca riscaldata",
        "Gilet riscaldato",
        "Guanti riscaldati",
        "Altro / più prodotti",
      ],
      quantity: "Quantità stimata",
      quantityPlaceholder: "es. 25",
      logo: "Personalizzazione con il logo aziendale",
      company: "Azienda",
      contact: "Persona di contatto",
      email: "E-mail",
      phone: "Telefono",
      message: "Precisazioni (settore, stagione, scadenza…)",
      submit: "Richiedere un preventivo",
      subject: "[Preventivo aziende] Richiesta di ordine in volume",
      labelCompany: "Azienda",
      labelContact: "Contatto",
      labelQuantity: "Quantità stimata",
      labelLogo: "Personalizzazione con logo",
      labelDetails: "Precisazioni",
      yes: "sì",
      no: "no",
      sentBefore:
        "Il vostro programma di posta si è aperto con la richiesta precompilata — resta solo da inviarla. Se non si è aperto nulla, scriveteci direttamente a ",
      v1Note:
        "V1: l'invio passa dal vostro programma di posta. Un modulo diretto sarà attivato con la versione finale del sito.",
    },
  },

  sav: {
    eyebrow: "Servizio clienti",
    title: "Un'assistenza che esiste davvero",
    subtitle:
      "Comprare un'attrezzatura a batteria senza assistenza significa comprare un prodotto usa e getta. La nostra è al centro del nostro modello.",
    commitmentsTitle: "I nostri impegni",
    commitments: [
      {
        title: "✅ Garanzia del fabbricante 12–24 mesi",
        text: "Ogni prodotto è coperto da una garanzia del fabbricante da 12 a 24 mesi secondo il modello, batterie comprese secondo condizioni. La durata esatta è indicata su ogni scheda prodotto.",
      },
      {
        title: "🔁 Cambio entro 30 giorni",
        text: "Un difetto constatato alla ricezione? Cambiamo il prodotto entro 30 giorni, senza percorsi a ostacoli: segnalatecelo, organizziamo la sostituzione.",
      },
      {
        title: "📞 Supporto e-mail e telefono",
        text: "Un interlocutore raggiungibile via e-mail e telefono. Risposta entro 48 h.",
      },
      {
        title: "🔋 Batterie & pezzi di ricambio",
        text: "Batterie di ricambio, ventilatori, cavi e caricabatterie disponibili separatamente — per prolungare la vita della vostra attrezzatura invece di sostituirla.",
      },
    ],
    cgvNote:
      "Condizioni dettagliate (CG) in fase di finalizzazione — pubblicate con il catalogo definitivo.",
    careTitle: "Schede di manutenzione per prodotto",
    careIntro:
      "Lavaggio, ricarica, conservazione della batteria: ogni prodotto avrà la sua scheda di manutenzione dettagliata, pubblicata con il catalogo definitivo.",
    care: [
      {
        titre: "Lavaggio del tessuto riscaldante",
        resume: "Batteria rimossa, ciclo delicato, asciugatura in piano: i gesti giusti per prodotto.",
      },
      {
        titre: "Ricarica e autonomia",
        resume: "Caricabatterie compatibili, cicli di ricarica e abitudini che preservano la batteria.",
      },
      {
        titre: "Conservazione della batteria",
        resume: "Livello di carica ideale, temperatura e precauzioni per la mezza stagione.",
      },
    ],
    careSoon: "Scheda in arrivo",
    takebackTitle: "Ritiro gratuito degli apparecchi usati",
    takebackText:
      "♻️ Conformemente alla legge svizzera (ORSAE), ritiriamo gratuitamente i vostri vecchi apparecchi elettrici dello stesso tipo. Contattateci o depositateli in un punto di raccolta SENS/Swico vicino a voi.",
    processTitle: "Come funziona?",
    process: [
      "Contattateci tramite il modulo (oggetto «Servizio clienti») o per telefono descrivendo il problema.",
      "Rispondiamo entro 48 h con una diagnosi o una richiesta di precisazioni.",
      "A seconda del caso: invio di un pezzo, etichetta di reso per riparazione, o cambio.",
      "Seguito fino alla risoluzione — avete un interlocutore, non un ticket anonimo.",
    ],
    ctaTitle: "Un problema con un prodotto?",
    ctaButton: "Contattare l'assistenza",
  },

  guideTailles: {
    eyebrow: "Guida alle taglie",
    title: "Trovare la taglia giusta al primo colpo",
    subtitle:
      "Un capo riscaldato deve stare vicino al corpo perché le zone riscaldanti tocchino il busto, senza comprimere. Misuratevi una volta, ordinate tranquilli.",
    exampleStrong: "Valori di esempio.",
    exampleText:
      "Le tabelle qui sotto illustrano la struttura della guida definitiva. Le misure reali saranno rilevate su ogni modello scelto, dopo la ricezione e il test dei campioni — le taglie annunciate dai fabbricanti non corrispondono sempre agli standard europei.",
    topsTitle: "Giacche e gilet riscaldati",
    topsIntro:
      "Taglio unisex. Tra due taglie, prendete la più grande se prevedete uno strato spesso sotto, la più piccola per un gilet da portare sotto la giacca.",
    colSize: "Taglia",
    colChest: "Circonferenza torace (cm)",
    colWaist: "Circonferenza vita (cm)",
    colHeight: "Altezza (cm)",
    glovesTitle: "Guanti riscaldati",
    glovesIntro:
      "Un guanto troppo grande riscalda male: l'aria circola tra la mano e i fili riscaldanti. Preferite l'aderente.",
    colHand: "Circonferenza mano (cm)",
    insolesTitle: "Solette riscaldate",
    insolesText:
      "Le solette si ordinano in numero di scarpa europeo (dal 36 al 46) e si ritagliano se necessario: seguite il tracciato stampato corrispondente al vostro numero, poi tagliate con le forbici — senza mai intaccare la zona del cablaggio riscaldante, indicata sulla soletta.",
    measureTitle: "Come misurarvi",
    measures: [
      {
        titre: "Circonferenza torace",
        texte:
          "Metro a nastro in orizzontale, sulla parte più larga del torace, braccia lungo il corpo. Non stringete.",
      },
      {
        titre: "Circonferenza vita",
        texte: "Nel punto più stretto del busto, generalmente appena sopra l'ombelico.",
      },
      {
        titre: "Circonferenza mano",
        texte:
          "Attorno al palmo, appena sotto le dita, senza includere il pollice. Misurate la mano dominante.",
      },
    ],
    doubtTitle: "Un dubbio sulla vostra taglia?",
    doubtText:
      "Inviateci le vostre misure e l'uso previsto: vi rispondiamo con una raccomandazione, invece di lasciarvi indovinare.",
  },

  contact: {
    eyebrow: "Contatto",
    title: "Parliamo del vostro bisogno",
    subtitle:
      "Domanda su un prodotto, richiesta di preventivo, assistenza o progetto aziendale: rispondiamo entro 2 giorni lavorativi.",
    form: {
      name: "Nome",
      email: "E-mail",
      subject: "Oggetto",
      message: "Messaggio",
      submit: "Inviare dal mio programma di posta",
      subjects: {
        devis: "Richiesta di preventivo (carrello)",
        question: "Domanda su un prodotto",
        sav: "Servizio clienti",
        b2b: "Richiesta aziendale / B2B",
        autre: "Altro",
      },
      cartRecap: "Prodotti nel carrello:",
      mailSubject: "Richiesta tramite il sito",
      sentBefore:
        "Il vostro programma di posta si è aperto con il messaggio precompilato — resta solo da inviarlo. Se non si è aperto nulla, scriveteci direttamente a ",
      v1Note:
        "V1: l'invio passa dal vostro programma di posta. Un modulo diretto sarà attivato con la versione finale del sito.",
    },
  },

  panier: {
    title: "Il vostro carrello",
    empty: "Il vostro carrello è vuoto.",
    goHiver: "Mondo Inverno",
    goEte: "Mondo Estate",
    perPiece: "/ pezzo",
    quantityAria: "Quantità per",
    removeAria: "Togliere dal carrello",
    clear: "Svuotare il carrello",
    total: "Totale indicativo:",
    vatIncluded: "IVA inclusa",
    noPaymentNote:
      "Il pagamento online (TWINT, carta, PostFinance) sarà attivato con il catalogo definitivo. Nel frattempo, confermate la vostra selezione come richiesta di preventivo: vi confermiamo prezzo, disponibilità e tempi via e-mail.",
    validate: "Confermare come richiesta di preventivo →",
  },

  aPropos: {
    eyebrow: "Chi siamo",
    title: "Un negozio svizzero che risponde dei suoi prodotti",
    subtitle:
      "La nostra convinzione: l'attrezzatura termica a batteria merita un vero commerciante — che tiene a magazzino, che testa e che risponde.",
    approachTitle: "Il nostro approccio",
    approachIntro:
      "Costruiamo Thermovia attorno a un principio semplice: proporre solo prodotti che conosciamo, provenienti da fornitori selezionati e affidabili, e accompagnarli con un servizio clienti basato nella Svizzera romanda — garanzia reale, pezzi di ricambio, interlocutore raggiungibile.",
    approachItems: [
      {
        strong: "Magazzino nella Svizzera romanda",
        text: "i prodotti chiave sono stoccati localmente per una consegna rapida e una disponibilità verificata.",
      },
      {
        strong: "Vero servizio clienti",
        text: "garanzia assunta, batterie e pezzi di ricambio disponibili singolarmente, interlocutore raggiungibile.",
      },
      {
        strong: "Selezione ristretta e testata",
        text: "invece di un catalogo infinito, una gamma corta di prodotti che conosciamo e possiamo difendere.",
      },
    ],
    savLink: "Vedere la nostra assistenza",
    sourcingTitle: "Un approvvigionamento esigente, Europa e Asia",
    sourcingP1:
      "Stiamo selezionando i nostri fornitori, in Europa e in Asia. I nostri criteri: qualità di fabbricazione costante, sicurezza delle batterie (certificazioni), batteria sostituibile senza attrezzi specifici, disponibilità dei pezzi di ricambio nel tempo e condizioni di produzione responsabili. Preferiamo ritardare l'apertura del catalogo definitivo piuttosto che vendere prodotti di cui non risponderemmo.",
    sourcingP2Before: "Per questo i prodotti attualmente esposti sono ",
    sourcingP2Strong: "esempi rappresentativi",
    sourcingP2After: " della gamma obiettivo, chiaramente identificati come tali.",
    commitmentsTitle: "I nostri impegni",
    commitments: [
      {
        title: "Trasparenza",
        text: "Prezzi in CHF IVA inclusa, origine dei prodotti indicata, nessuna falsa urgenza né falsi sconti.",
      },
      {
        title: "Durabilità",
        text: "Prodotti riparabili, batterie sostituibili, consigli di manutenzione per prolungare la durata di vita.",
      },
      {
        title: "Prossimità",
        text: "Interlocutore nella Svizzera romanda, risposta nella vostra lingua, resi semplificati.",
      },
      {
        title: "Onestà sui prodotti",
        text: "Autonomie e prestazioni annunciate come sono state misurate, non come sono stampate sulla scatola.",
      },
    ],
  },

  footer: {
    brandText:
      "Attrezzatura riscaldata selezionata e testata nella Svizzera romanda. Magazzino e spedizione dalla regione di Vevey.",
    shopAria: "Link negozio",
    serviceAria: "Link servizio",
    shopTitle: "NEGOZIO",
    serviceTitle: "SERVIZIO",
    legalTitle: "LEGALE",
    shop: {
      hiver: "Inverno",
      ete: "Estate — presto",
      sport: "Sport",
      travail: "Lavoro all'aperto",
      entreprises: "Aziende",
    },
    service: {
      guideTailles: "Guida alle taglie",
      sav: "Garanzia & assistenza",
      aPropos: "Chi siamo",
      contact: "Contatto",
    },
    vat: "Prezzi in CHF, IVA svizzera inclusa",
    cgv: "CG — in redazione",
  },
};

export default it;
