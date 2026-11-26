/*
 * Fiches par situation.
 * Une fiche = un bloc { ... } dans la liste. Séparez deux fiches par une virgule.
 * "id" : identifiant court, sans espace ni accent (sert dans l'adresse de la page et dans data/sources.js).
 * Chaque liste [ ... ] contient des phrases entre guillemets séparées par des virgules.
 * Tout texte contenant « À COMPLÉTER » est surligné en jaune sur le site.
 */
window.GUIDE = window.GUIDE || {};
GUIDE.fiches = [
  {
    "id": "mal-de-gorge",
    "titre": "Mal de gorge",
    "motif": "Le patient a mal à la gorge (douleur, irritation, gêne pour avaler) et demande des pastilles, un spray ou « quelque chose pour la gorge ».",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Depuis quand avez-vous mal ?",
      "Avez-vous de la fièvre ? L'avez-vous mesurée ?",
      "Avez-vous du mal à avaler, même votre salive, ou du mal à respirer ?",
      "Avez-vous aussi le nez qui coule ou de la toux ?",
      "Prenez-vous des médicaments en ce moment, en particulier un traitement qui fait baisser les défenses (chimiothérapie, méthotrexate, carbimazole, corticoïdes au long cours...) ?",
      "Êtes-vous enceinte ou allaitez-vous ?",
      "Êtes-vous allergique à un médicament ? Êtes-vous diabétique ?"
    ],
    "orientations": [
      "Mal de gorge simple, sans signe d'alerte, adulte ou enfant de plus de 6 ans : pastilles ou spray pour la gorge, choisis selon la gêne du patient (voir « Les produits pour la gorge » ci-dessous), en respectant l'âge minimum et la durée indiqués sur la notice.",
      "Si douleur ou fièvre gênante : paracétamol, en respectant les doses (voir fiche « Douleur et fièvre de l'adulte »). Éviter l'ibuprofène et l'aspirine en cas d'infection ORL.",
      "Conseils : boire régulièrement, boissons tièdes, éviter le tabac, aérer la pièce.",
      "Si fièvre, ganglions, absence de toux : proposer au patient d'en parler au pharmacien, qui peut évaluer l'intérêt d'un test rapide d'angine (TROD)."
    ],
    "vigilance": [
      "La plupart des pastilles sont déconseillées ou contre-indiquées avant 6 ans (risque de fausse route) : vérifier l'âge sur la notice.",
      "Les pastilles et sprays contenant un anesthésique local endorment la gorge : risque de fausse route si le patient mange ou boit juste après.",
      "Pastilles sucrées : proposer une forme sans sucre aux patients diabétiques.",
      "Certains sprays contiennent de l'alcool ou des dérivés terpéniques : vérifier la notice (enfants, femmes enceintes, antécédents de convulsions).",
      "Le mal de gorge est le plus souvent viral : l'antibiotique n'est utile que si l'angine est bactérienne, ce que seul le test permet d'orienter."
    ],
    "passerLaMain": [
      "Difficulté à respirer, à avaler sa salive, voix étouffée, impossibilité d'ouvrir la bouche.",
      "Mal de gorge avec fièvre chez un patient sous chimiothérapie, méthotrexate, carbimazole ou autre traitement qui diminue les défenses : risque d'infection grave, à traiter en urgence.",
      "Fièvre, ganglions douloureux, pas de toux : le pharmacien évalue s'il faut faire un TROD angine. Le test et la délivrance éventuelle d'un antibiotique relèvent du pharmacien formé, jamais de l'apprenti.",
      "Enfant de moins de 6 ans, femme enceinte ou qui allaite.",
      "Mal de gorge qui dure plus de quelques jours, qui revient souvent ou qui s'aggrave malgré le traitement.",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "produits": {
      "titre": "Les produits pour la gorge",
      "introduction": "Les pastilles et sprays agissent seulement sur place, dans la gorge : ils soulagent mais ne guérissent pas plus vite. Beaucoup associent deux actions (par exemple antiseptique + anesthésique) : lire la composition sur la boîte. Les exemples ci-dessous sont les produits en stock à l'officine.",
      "types": [
        {
          "nom": "Adoucissant",
          "cestQuoi": "Pastille ou spray sans principe actif fort (miel, glycérine, plantes) qui hydrate et calme la gorge irritée.",
          "exemples": [
            {
              "nom": "Spray gorge à la propolis",
              "forme": "spray",
              "detail": "Produit de la ruche"
            }
          ],
          "quand": "Gorge qui gratte, irritation légère, voix enrouée, air sec ou tabac, sans vraie douleur.",
          "attention": [
            "Propolis : jamais en cas d'allergie aux produits de la ruche (miel, pollen, piqûres d'abeille) ; prudence chez l'asthmatique.",
            "Sucre : proposer une forme sans sucre aux diabétiques.",
            "Vérifier la composition (huiles essentielles, plantes) chez l'enfant et la femme enceinte."
          ],
          "cle": "adoucissant"
        },
        {
          "nom": "Antiseptique",
          "cestQuoi": "Limite les microbes à la surface de la gorge. Le mal de gorge étant le plus souvent dû à un virus, l'effet reste modeste : il soulage surtout la gêne.",
          "exemples": [
            {
              "nom": "Strepsils",
              "forme": "pastille",
              "detail": "Amylmétacrésol + alcool dichlorobenzylique (miel-citron, fraise sans sucre…)"
            },
            {
              "nom": "Hexaspray",
              "forme": "spray",
              "detail": "Biclotymol"
            },
            {
              "nom": "Eludril",
              "forme": "bain-de-bouche",
              "detail": "Chlorhexidine (bain de bouche ou collutoire selon la présentation)"
            }
          ],
          "quand": "Mal de gorge débutant, gêne modérée, sans grosse douleur pour avaler.",
          "attention": [
            "Âge minimum souvent 6 ans pour les pastilles.",
            "Pas plus de quelques jours sans avis.",
            "Certains sprays contiennent de l'alcool."
          ],
          "cle": "antiseptique"
        },
        {
          "nom": "Anesthésique local",
          "cestQuoi": "« Endort » la gorge quelques minutes pour diminuer la douleur, surtout en avalant. Il est souvent associé à un antiseptique dans le même produit.",
          "exemples": [
            {
              "nom": "Strepsils Lidocaïne",
              "forme": "pastille",
              "detail": "Antiseptique + lidocaïne"
            },
            {
              "nom": "Lysopaïne Maux de gorge",
              "forme": "pastille",
              "detail": "Ambroxol"
            },
            {
              "nom": "Colludol",
              "forme": "spray",
              "detail": "À COMPLÉTER : recopier la composition depuis la boîte"
            }
          ],
          "quand": "Douleur quand le patient avale.",
          "attention": [
            "Risque de fausse route : ne pas manger ni boire juste après, et ne pas le prendre juste avant un repas.",
            "Déconseillé chez le jeune enfant (âge minimum sur la notice).",
            "Ne pas dépasser le nombre de pastilles par jour indiqué."
          ],
          "cle": "anesthesique"
        },
        {
          "nom": "Anti-inflammatoire local (AINS)",
          "cestQuoi": "Pastille contenant un anti-inflammatoire de la même famille que l'ibuprofène. Diminue l'inflammation et la douleur de la gorge.",
          "exemples": [
            {
              "nom": "Strefen",
              "forme": "pastille",
              "detail": "Flurbiprofène. Pas en stock à l'officine : si un patient le demande, voir le pharmacien.",
              "indisponible": true
            }
          ],
          "quand": "Douleur forte, gorge rouge et gonflée, chez un adulte sans contre-indication aux AINS.",
          "attention": [
            "Mêmes contre-indications que l'ibuprofène : grossesse à partir du 6e mois, ulcère, asthme déclenché par les AINS, anticoagulant, autre AINS en cours.",
            "Âge minimum sur la notice (en général pas chez l'enfant).",
            "Durée courte : quelques jours au maximum."
          ],
          "cle": "ains"
        }
      ],
      "choix": {
        "id": "choix-gorge",
        "titre": "Quel produit pour quelle gêne ?",
        "colonnes": [
          "Le patient décrit…",
          "Proposer"
        ],
        "lignes": [
          [
            "« Ça gratte », voix enrouée, pas de vraie douleur",
            "Adoucissant : spray à la propolis (sauf allergie aux produits de la ruche)"
          ],
          [
            "Mal de gorge qui commence, gêne modérée",
            "Antiseptique : Strepsils, Hexaspray"
          ],
          [
            "« J'ai mal quand j'avale »",
            "Anesthésique : Strepsils Lidocaïne, Lysopaïne Maux de gorge ou Colludol"
          ],
          [
            "Douleur forte, gorge très enflammée, adulte",
            "Pharmacien (anti-inflammatoire local non stocké, contre-indications des AINS à vérifier)"
          ],
          [
            "Fièvre, ganglions, pas de toux ; femme enceinte ; enfant de moins de 6 ans ; traitement qui baisse les défenses",
            "Pharmacien"
          ]
        ],
        "note": "Dans tous les cas : paracétamol possible si la douleur ou la fièvre est gênante. Si le mal de gorge dure plus de quelques jours ou s'aggrave, le patient doit être revu par le pharmacien."
      }
    }
  },
  {
    "id": "toux",
    "titre": "Toux",
    "motif": "Le patient tousse et demande un sirop ou un médicament contre la toux.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "La toux est-elle sèche (gorge qui gratte, rien ne remonte) ou grasse (vous crachez ou ça « encombre ») ?",
      "Depuis quand toussez-vous ?",
      "Avez-vous de la fièvre, du mal à respirer, des sifflements ou une douleur dans la poitrine ?",
      "Crachez-vous du sang ou des crachats colorés ?",
      "Êtes-vous asthmatique, avez-vous une maladie des poumons ou du cœur ? Fumez-vous ?",
      "Quels médicaments prenez-vous ? (certains traitements de la tension, comme le ramipril ou le périndopril, peuvent faire tousser)",
      "Êtes-vous enceinte ou allaitez-vous ? Conduisez-vous ?"
    ],
    "orientations": [
      "Toux sèche gênante, sans signe d'alerte, chez l'adulte : antitussif non opiacé disponible sans ordonnance, de préférence le soir si la toux empêche de dormir, pour une durée courte.",
      "Toux grasse : la toux aide à éliminer les sécrétions, il ne faut pas la bloquer. Un mucolytique peut être proposé chez l'adulte, selon la notice.",
      "Conseils : boire suffisamment, humidifier l'air, éviter le tabac, miel possible chez l'adulte et l'enfant de plus d'un an.",
      "Les antitussifs contenant de la codéine, du dextrométhorphane, de l'éthylmorphine ou de la noscapine ne sont délivrés que sur ordonnance : si le patient en demande un, passer la main."
    ],
    "vigilance": [
      "Ne jamais associer un antitussif (qui bloque la toux) et un mucolytique (qui fluidifie les sécrétions) : les sécrétions resteraient bloquées dans les bronches.",
      "Les mucolytiques (carbocistéine, acétylcystéine) sont contre-indiqués avant 2 ans.",
      "Les antihistaminiques présents dans certains sirops (ex : oxomémazine) font dormir : danger pour la conduite, à éviter avec l'alcool, et précautions en cas de glaucome ou de problème de prostate.",
      "Une toux sèche qui dure chez un patient sous traitement de la tension (IEC) peut être un effet indésirable de ce traitement.",
      "Vérifier les sucres et l'alcool des sirops (diabète, enfants, femmes enceintes)."
    ],
    "passerLaMain": [
      "Enfant de moins de 6 ans, nourrisson, femme enceinte ou qui allaite.",
      "Toux avec gêne respiratoire, sifflements, douleur thoracique, crachats sanglants ou fièvre qui dure.",
      "Patient asthmatique, insuffisant respiratoire (BPCO) ou cardiaque.",
      "Toux qui dure plus de deux à trois semaines, ou toux chez un fumeur qui a changé récemment.",
      "Toux sèche chez un patient sous traitement de la tension.",
      "Demande d'un sirop contenant de la codéine, du dextrométhorphane ou un autre opiacé.",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    }
  },
  {
    "id": "rhume",
    "titre": "Rhume et nez bouché",
    "motif": "Le patient a le nez qui coule ou bouché, éternue, et demande un médicament contre le rhume.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Depuis quand ?",
      "Avez-vous de la fièvre, mal aux oreilles, une douleur forte au visage ou aux dents du haut ?",
      "Les écoulements sont-ils clairs ou épais et colorés, d'un seul côté ?",
      "Est-ce que ça revient à la même saison, avec les yeux qui piquent et sans fièvre ? (pensez à une allergie)",
      "Avez-vous de l'hypertension, un problème de cœur, un glaucome, un problème de prostate ?",
      "Quels médicaments prenez-vous déjà, y compris contre le rhume ou la douleur ?",
      "Êtes-vous enceinte ou allaitez-vous ?"
    ],
    "orientations": [
      "Lavage du nez au sérum physiologique ou à l'eau de mer, plusieurs fois par jour, et mouchage régulier.",
      "Si fièvre ou douleurs : paracétamol en respectant les doses, en vérifiant qu'il n'est pas déjà pris dans un autre médicament.",
      "Conseils : boire, dormir la tête un peu surélevée, aérer, se laver les mains. Le rhume guérit seul en 7 à 10 jours.",
      "Si cela ressemble à une allergie (saisonnier, éternuements, yeux qui piquent, pas de fièvre) : en parler au pharmacien, un antihistaminique peut être proposé."
    ],
    "vigilance": [
      "Depuis le 11 décembre 2024, les médicaments du rhume par voie orale contenant de la pseudoéphédrine (ex : Actifed Rhume, Dolirhume, Humex Rhume, Nurofen Rhume, Rhinadvil Rhume) ne sont délivrés que sur ordonnance.",
      "Les vasoconstricteurs en spray nasal sont eux aussi uniquement sur ordonnance.",
      "Beaucoup de médicaments « rhume » ou « état grippal » contiennent déjà du paracétamol : risque de surdosage si le patient en prend aussi à côté.",
      "Les antihistaminiques peuvent donner de la somnolence (conduite, alcool)."
    ],
    "passerLaMain": [
      "Demande d'un médicament à base de pseudoéphédrine ou d'un spray vasoconstricteur.",
      "Nourrisson ou enfant de moins de 6 ans, femme enceinte ou qui allaite.",
      "Fièvre qui dure plus de 3 jours, douleur d'oreille, douleur forte du visage, écoulement épais d'un seul côté.",
      "Symptômes qui durent plus de 10 jours ou qui s'aggravent après une amélioration.",
      "Patient asthmatique ou avec une maladie chronique (cœur, poumons, diabète, défenses diminuées).",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    }
  },
  {
    "id": "douleur-fievre",
    "titre": "Douleur et fièvre de l'adulte",
    "motif": "Un adulte demande un médicament contre la douleur (tête, dos, règles, dents, courbatures) ou la fièvre, souvent du paracétamol ou de l'ibuprofène.",
    "questions": [
      "Pour qui est-ce ? Quel âge ? Pèse-t-il plus ou moins de 50 kg ?",
      "Quelle douleur, où, depuis quand ? Est-elle inhabituelle ?",
      "Avez-vous de la fièvre ? Depuis combien de jours ?",
      "Avez-vous déjà pris quelque chose aujourd'hui ? Quoi et à quelle heure ?",
      "Quels médicaments prenez-vous en ce moment ? (anticoagulant, traitement de la tension, du cœur, autres médicaments contenant du paracétamol)",
      "Avez-vous déjà eu un ulcère, une maladie du foie ou des reins, de l'asthme ? Buvez-vous de l'alcool régulièrement ?",
      "Êtes-vous enceinte ou allaitez-vous ?",
      "Avez-vous en ce moment une infection, la varicelle ?"
    ],
    "orientations": [
      "En première intention : paracétamol. Adulte de plus de 50 kg : 1 g par prise, au moins 4 heures entre deux prises, 3 g par jour au maximum sans avis médical.",
      "Ibuprofène possible chez l'adulte sans contre-indication : 200 à 400 mg par prise, au moins 6 heures entre deux prises, 1 200 mg par jour au maximum en automédication, à la dose la plus faible et pendant la durée la plus courte.",
      "Durée maximale sans avis médical : 3 jours en cas de fièvre, 5 jours en cas de douleur.",
      "Toujours rappeler la dose, l'intervalle et le maximum par jour au moment de la délivrance."
    ],
    "vigilance": [
      "Le paracétamol, l'ibuprofène et l'aspirine ne sont plus en libre accès depuis janvier 2020 : ils sont derrière le comptoir et leur délivrance s'accompagne d'un conseil.",
      "Paracétamol : un surdosage peut détruire le foie. Vérifier tous les médicaments du patient qui en contiennent (rhume, état grippal, associations avec d'autres antalgiques).",
      "Ibuprofène et aspirine (AINS) : contre-indiqués à partir du début du 6e mois de grossesse, à éviter pendant toute la grossesse sans avis. Risque d'ulcère et de saignement digestif, d'atteinte des reins, d'aggravation des infections et de la varicelle, de crise chez certains asthmatiques.",
      "AINS + anticoagulant = risque de saignement. AINS + traitement de la tension ou diurétique = risque pour les reins.",
      "Ne jamais associer deux AINS (ex : ibuprofène + aspirine)."
    ],
    "passerLaMain": [
      "Enfant ou adulte de moins de 50 kg : la dose doit être adaptée au poids.",
      "Femme enceinte ou qui allaite.",
      "Patient sous anticoagulant, sous traitement de la tension ou du cœur, ou avec une maladie du foie, des reins, un ulcère, de l'asthme.",
      "Mal de tête brutal, très intense ou inhabituel, avec raideur de la nuque, fièvre, vomissements, troubles de la vue ou de la parole : urgence.",
      "Fièvre avec taches rouges ou violacées sur la peau qui ne s'effacent pas à la pression : urgence.",
      "Fièvre de plus de 3 jours, douleur de plus de 5 jours, douleur thoracique ou abdominale intense.",
      "Demandes répétées ou de grandes quantités (risque de mésusage ou de surdosage).",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    }
  },
  {
    "id": "diarrhee",
    "titre": "Diarrhée aiguë de l'adulte",
    "motif": "Un adulte a la diarrhée depuis peu (selles liquides et fréquentes) et demande un médicament pour l'arrêter.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Depuis quand ? Combien de selles par jour ?",
      "Avez-vous de la fièvre ? Du sang ou des glaires dans les selles ?",
      "Vomissez-vous ? Arrivez-vous à boire ?",
      "Avez-vous très soif, la bouche sèche, la tête qui tourne, urinez-vous moins ?",
      "Revenez-vous d'un voyage ? Avez-vous pris un antibiotique récemment ?",
      "D'autres personnes autour de vous sont-elles malades ?",
      "Quels médicaments prenez-vous ? Êtes-vous enceinte ou allaitez-vous ?"
    ],
    "orientations": [
      "Priorité : éviter la déshydratation. Boire souvent, par petites quantités. Soluté de réhydratation orale pour les personnes fragiles (âgées notamment).",
      "Chez l'adulte sans signe d'alerte, un antidiarrhéique disponible sans ordonnance peut être proposé selon la notice (ex : racécadotril, lopéramide), sur une durée courte.",
      "Alimentation : riz, pâtes, carottes cuites, banane, compote ; éviter les aliments gras, les crudités et le lait en grande quantité au début.",
      "Hygiène : lavage des mains, surtout après les toilettes et avant de préparer les repas."
    ],
    "vigilance": [
      "Lopéramide : ne pas l'utiliser en cas de fièvre ou de sang dans les selles (risque de garder l'infection dans l'intestin). Respecter l'âge minimum de la notice.",
      "Diosmectite (ex : Smecta) : n'est plus recommandée chez l'enfant de moins de 2 ans ni chez la femme enceinte ou qui allaite. Elle doit être prise à distance (2 heures) des autres médicaments.",
      "Un antidiarrhéique ne remplace pas la réhydratation.",
      "La diarrhée peut diminuer l'efficacité de certains traitements (contraception orale, traitements chroniques) : le signaler au pharmacien."
    ],
    "passerLaMain": [
      "Enfant, nourrisson, personne âgée ou fragile, femme enceinte.",
      "Fièvre, sang ou glaires dans les selles, douleurs abdominales fortes.",
      "Signes de déshydratation, vomissements qui empêchent de boire.",
      "Diarrhée qui dure plus de 2 à 3 jours, retour de voyage, diarrhée après un antibiotique.",
      "Patiente sous contraception orale, patient avec un traitement chronique important.",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    }
  },
  {
    "id": "brulures-estomac",
    "titre": "Brûlures d'estomac et remontées acides",
    "motif": "Le patient a des brûlures qui remontent derrière le sternum ou des remontées acides, souvent après les repas ou en position allongée.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Depuis quand ? Est-ce occasionnel ou fréquent ?",
      "Où exactement ? La douleur va-t-elle vers le bras, la mâchoire ou le dos ? Êtes-vous essoufflé ?",
      "Avez-vous du mal à avaler, perdu du poids sans raison, vomi, des selles noires ?",
      "Prenez-vous de l'ibuprofène, de l'aspirine ou un autre anti-inflammatoire ?",
      "Quels autres médicaments prenez-vous ? (ex : clopidogrel, anticoagulant)",
      "Suivez-vous un régime pauvre en sel ?",
      "Êtes-vous enceinte ou allaitez-vous ?"
    ],
    "orientations": [
      "Brûlures occasionnelles, sans signe d'alerte : antiacide ou alginate, pour un soulagement rapide, après les repas ou au moment des symptômes, selon la notice.",
      "Brûlures plus fréquentes chez l'adulte : un inhibiteur de la pompe à protons (IPP) dosé à 20 mg existe sans ordonnance, pour une durée courte (14 jours au maximum) ; l'effet complet demande quelques jours.",
      "Conseils : repas moins copieux et moins gras, ne pas se coucher juste après le repas, surélever la tête du lit, limiter alcool, café et tabac."
    ],
    "vigilance": [
      "Une douleur dans la poitrine peut venir du cœur et non de l'estomac : en cas de doute, c'est une urgence.",
      "Les antiacides et alginates gênent l'absorption des autres médicaments : les prendre à 2 heures d'intervalle.",
      "Certains alginates contiennent beaucoup de sodium : attention aux régimes sans sel (hypertension, insuffisance cardiaque).",
      "Les anti-inflammatoires (ibuprofène, aspirine) peuvent provoquer ces brûlures ou un ulcère.",
      "Certains IPP (oméprazole, ésoméprazole) interagissent avec le clopidogrel."
    ],
    "passerLaMain": [
      "Douleur dans la poitrine, surtout si elle va vers le bras, la mâchoire ou le dos, avec essoufflement ou sueurs : urgence.",
      "Difficulté à avaler, amaigrissement, vomissements, sang dans les vomissements ou selles noires.",
      "Premiers symptômes après 50 ans, ou symptômes qui persistent malgré le traitement ou reviennent souvent.",
      "Patient qui prend un anti-inflammatoire, un anticoagulant ou du clopidogrel.",
      "Femme enceinte ou qui allaite, enfant.",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    }
  }
];
