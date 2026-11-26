/*
 * Tableau « Types de médicaments ».
 * Une ligne du tableau = un bloc { ... }. "exemples" et "vigilance" sont des listes.
 */
window.GUIDE = window.GUIDE || {};
GUIDE.medicaments = {
  "introduction": "Repères pour le comptoir. Les noms commerciaux sont des exemples : vérifier le stock de l'officine et toujours lire la notice. Les médicaments marqués « sur ordonnance » ne se délivrent jamais en conseil.",
  "validation": {
    "par": "À COMPLÉTER",
    "le": "À COMPLÉTER"
  },
  "lignes": [
    {
      "classe": "Antalgiques et antipyrétiques",
      "role": "Calmer la douleur et faire baisser la fièvre.",
      "exemples": [
        "Paracétamol (ex : Doliprane, Dafalgan, Efferalgan)"
      ],
      "vigilance": [
        "Adulte de plus de 50 kg : 1 g par prise, 4 h minimum entre deux prises, 3 g par jour maximum sans avis médical. Enfant et insuffisance rénale : 6 h minimum (8 h si insuffisance rénale sévère).",
        "Toxique pour le foie en cas de surdosage : chercher le paracétamol caché dans les autres médicaments.",
        "Hors libre accès depuis 2020."
      ]
    },
    {
      "classe": "Anti-inflammatoires non stéroïdiens (AINS)",
      "role": "Calmer la douleur, la fièvre et l'inflammation.",
      "exemples": [
        "Ibuprofène (ex : Advil, Nurofen, Spedifen)",
        "Aspirine (ex : Aspégic, Aspirine du Rhône)"
      ],
      "vigilance": [
        "Contre-indiqués à partir du 6e mois de grossesse, à éviter pendant toute la grossesse sans avis.",
        "Ulcère, saignement digestif, atteinte des reins, aggravation des infections et de la varicelle.",
        "Pas avec un anticoagulant ni un autre AINS.",
        "Ibuprofène : 1 200 mg par jour maximum en automédication."
      ]
    },
    {
      "classe": "Produits locaux pour la gorge",
      "role": "Soulager sur place le mal de gorge : adoucir, limiter les microbes (antiseptique), endormir la douleur (anesthésique) ou calmer l'inflammation (AINS local).",
      "exemples": [
        "Antiseptique : Strepsils, Hexaspray, Eludril",
        "Antiseptique + anesthésique : Strepsils Lidocaïne, Colludol",
        "Anesthésique : Lysopaïne Maux de gorge (ambroxol)",
        "Adoucissant : spray à la propolis",
        "AINS local : flurbiprofène (Strefen), non stocké"
      ],
      "vigilance": [
        "Âge minimum souvent 6 ans (fausse route).",
        "Anesthésique : ne pas manger ni boire juste après.",
        "AINS local : mêmes contre-indications que l'ibuprofène.",
        "Sucre : forme sans sucre pour les diabétiques.",
        "Propolis : jamais en cas d'allergie aux produits de la ruche."
      ]
    },
    {
      "classe": "Antitussifs (toux sèche)",
      "role": "Calmer une toux sèche gênante.",
      "exemples": [
        "Hélicidine (ex : Hélicidine)",
        "Oxomémazine, antihistaminique (ex : Toplexil)",
        "Sur ordonnance : codéine, dextrométhorphane, éthylmorphine, noscapine"
      ],
      "vigilance": [
        "Jamais en cas de toux grasse ni avec un mucolytique.",
        "Oxomémazine : somnolence, conduite, alcool, glaucome, prostate.",
        "Vérifier l'âge minimum sur la notice."
      ]
    },
    {
      "classe": "Mucolytiques (toux grasse)",
      "role": "Fluidifier les sécrétions bronchiques.",
      "exemples": [
        "Carbocistéine (ex : Bronchokod)",
        "Acétylcystéine (ex : Mucomyst, Exomuc)"
      ],
      "vigilance": [
        "Contre-indiqués avant 2 ans.",
        "Jamais avec un antitussif.",
        "Prudence en cas d'ulcère de l'estomac."
      ]
    },
    {
      "classe": "Antihistaminiques H1 (allergie)",
      "role": "Soulager les symptômes de l'allergie : éternuements, nez qui coule, yeux qui piquent.",
      "exemples": [
        "Cétirizine (ex : Zyrtecset)",
        "Loratadine"
      ],
      "vigilance": [
        "Somnolence possible : conduite, alcool.",
        "Distinguer une allergie (saisonnière, sans fièvre) d'un rhume."
      ]
    },
    {
      "classe": "Antidiarrhéiques",
      "role": "Réduire la fréquence des selles en cas de diarrhée aiguë.",
      "exemples": [
        "Racécadotril (ex : Tiorfast)",
        "Lopéramide (ex : Imodium)",
        "Diosmectite (ex : Smecta)"
      ],
      "vigilance": [
        "Lopéramide : jamais en cas de fièvre ou de sang dans les selles.",
        "Diosmectite : plus recommandée avant 2 ans ni pendant la grossesse ou l'allaitement ; 2 h d'écart avec les autres médicaments.",
        "Ne remplacent pas la réhydratation."
      ]
    },
    {
      "classe": "Solutés de réhydratation orale (SRO)",
      "role": "Compenser les pertes d'eau et de sels minéraux en cas de diarrhée.",
      "exemples": [
        "Ex : Adiaril"
      ],
      "vigilance": [
        "Respecter exactement le volume d'eau indiqué pour la préparation.",
        "Prioritaires chez le nourrisson et la personne âgée (qui doivent être vus par le pharmacien)."
      ]
    },
    {
      "classe": "Antiacides et alginates",
      "role": "Neutraliser l'acidité ou former une barrière contre les remontées acides ; soulagement rapide.",
      "exemples": [
        "Alginate (ex : Gaviscon)",
        "Antiacide (ex : Maalox)"
      ],
      "vigilance": [
        "2 h d'écart avec les autres médicaments.",
        "Certains contiennent beaucoup de sodium (régime sans sel)."
      ]
    },
    {
      "classe": "Inhibiteurs de la pompe à protons (IPP)",
      "role": "Diminuer la production d'acide par l'estomac.",
      "exemples": [
        "Oméprazole 20 mg (ex : Mopralpro)",
        "Ésoméprazole 20 mg (ex : Nexium Control)",
        "Pantoprazole 20 mg (ex : Ipraalox)"
      ],
      "vigilance": [
        "Sans ordonnance : adulte, 14 jours maximum.",
        "Effet complet en quelques jours, pas de soulagement immédiat.",
        "Oméprazole et ésoméprazole : interaction avec le clopidogrel."
      ]
    },
    {
      "classe": "Anticoagulants (à repérer, jamais en conseil)",
      "role": "Fluidifier le sang pour éviter les caillots. Sur ordonnance uniquement.",
      "exemples": [
        "Antivitamines K : warfarine (ex : Coumadine), fluindione (ex : Préviscan)",
        "Anticoagulants oraux directs : apixaban (ex : Eliquis), rivaroxaban (ex : Xarelto), dabigatran (ex : Pradaxa)"
      ],
      "vigilance": [
        "Aucun AINS ni aspirine en conseil chez ces patients.",
        "Saignement inhabituel (gencives, urines, selles noires, bleus) : pharmacien immédiatement.",
        "Toujours demander au patient s'il en prend avant tout conseil."
      ]
    },
    {
      "classe": "Traitements de la tension : IEC (à repérer)",
      "role": "Faire baisser la tension, protéger le cœur et les reins. Sur ordonnance uniquement.",
      "exemples": [
        "Ramipril (ex : Triatec)",
        "Périndopril (ex : Coversyl)",
        "Énalapril (ex : Renitec)"
      ],
      "vigilance": [
        "Peuvent provoquer une toux sèche persistante.",
        "Avec un AINS (et surtout avec un diurétique en plus) : risque pour les reins."
      ]
    }
  ],
  "comparaisons": [
    {
      "id": "ains-ipp",
      "titre": "Ne pas confondre : AINS et IPP",
      "introduction": "Les deux noms se ressemblent et concernent tous les deux l'estomac, mais ils font presque l'inverse. Moyen de s'en souvenir : IPP, « P » comme « Protège l'estomac » ; AINS, calme la douleur mais peut abîmer l'estomac.",
      "colonnes": [
        "",
        "AINS",
        "IPP"
      ],
      "lignes": [
        [
          "Nom complet",
          "Anti-inflammatoire non stéroïdien",
          "Inhibiteur de la pompe à protons"
        ],
        [
          "À quoi ça sert",
          "Calmer la douleur, la fièvre et l'inflammation.",
          "Diminuer l'acidité de l'estomac : brûlures, remontées acides, protection de l'estomac."
        ],
        [
          "Exemples",
          "Ibuprofène (Advil, Nurofen), aspirine (Aspégic), kétoprofène.",
          "Oméprazole (Mopral, Mopralpro), ésoméprazole (Inexium, Nexium Control), pantoprazole (Ipraalox), lansoprazole."
        ],
        [
          "Où ça agit",
          "Partout où il y a douleur ou inflammation : bloque les enzymes COX, donc moins de prostaglandines.",
          "Dans les cellules de l'estomac qui fabriquent l'acide : bloque la « pompe à protons »."
        ],
        [
          "Effet sur l'estomac",
          "Peut l'abîmer : brûlures, ulcère, saignement.",
          "Le protège : moins d'acide."
        ],
        [
          "Délai d'action",
          "Rapide, en général dans l'heure.",
          "Effet complet en quelques jours, pas de soulagement immédiat."
        ],
        [
          "Comment le prendre",
          "Au cours d'un repas.",
          "Avant un repas, souvent le matin, avalé entier sans croquer."
        ],
        [
          "Sans ordonnance",
          "Ibuprofène : 1 200 mg par jour maximum chez l'adulte, 3 jours pour la fièvre, 5 jours pour la douleur.",
          "Dosage 20 mg, adulte, 14 jours maximum."
        ],
        [
          "Principaux risques",
          "Estomac, reins, grossesse (contre-indiqué à partir du 6e mois), anticoagulants, aggravation des infections.",
          "Interactions (oméprazole et ésoméprazole avec le clopidogrel) ; pris longtemps sans avis, peut masquer une maladie plus grave."
        ]
      ],
      "note": "Les deux sont souvent associés sur une ordonnance : le médecin prescrit un IPP pour protéger l'estomac d'un patient qui doit prendre un AINS. Un patient qui prend déjà un IPP ne doit pas pour autant recevoir un AINS en conseil : passer la main au pharmacien."
    }
  ]
};
