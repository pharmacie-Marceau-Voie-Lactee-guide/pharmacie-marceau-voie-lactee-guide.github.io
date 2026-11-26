/*
 * Pages libres (non médicales ou validées) : organisation, contacts, procédures...
 * Une page = un bloc { ... }. Elle est accessible à l'adresse index.html#/page/<id>.
 * "menu": true l'ajoute au menu principal ; false la laisse accessible par lien seulement.
 * Chaque section peut avoir : "paragraphes" (textes), "etapes" (liste numérotée),
 *   "liste" (liste à puces), "attention" (encadré orange). Tous sont facultatifs.
 * Champs facultatifs de la page : "resume" (texte de la carte sur l'accueil), "introduction",
 *   "validation": { "par": "...", "le": "..." }.
 */
window.GUIDE = window.GUIDE || {};
GUIDE.pages = [
  {
    "id": "urgences",
    "titre": "Urgences et numéros utiles",
    "menu": true,
    "sections": [
      {
        "titre": "En cas d'urgence au comptoir",
        "paragraphes": [
          "Si un patient présente un signe de gravité (malaise, gêne respiratoire, douleur thoracique, confusion, saignement important), prévenez immédiatement le pharmacien. Ne laissez pas le patient seul."
        ],
        "liste": [
          "15 : SAMU, urgence médicale",
          "112 : numéro d'urgence européen",
          "114 : urgences pour les personnes sourdes, malentendantes ou ayant des difficultés à parler (SMS, visio, tchat)",
          "18 : pompiers",
          "3237 : trouver la pharmacie de garde"
        ]
      },
      {
        "titre": "Numéros de l'officine",
        "paragraphes": [],
        "liste": [
          "Centre antipoison de la région : À COMPLÉTER",
          "Médecins du secteur : À COMPLÉTER",
          "Grossiste-répartiteur : À COMPLÉTER",
          "Téléphone du pharmacien d'astreinte : À COMPLÉTER"
        ]
      }
    ],
    "resume": "Numéros d'urgence et contacts de l'officine."
  },
  {
    "id": "reception-commandes",
    "titre": "Réception des commandes",
    "menu": true,
    "resume": "La procédure du matin, étape par étape : caisse de froid, réception dans Winpharma, contrôle des quantités et des prix, saisie de la facture.",
    "introduction": "Chaque matin, à l'arrivée de la livraison, suivez ces étapes dans l'ordre.",
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "sections": [
      {
        "titre": "Les deux types de commandes",
        "liste": [
          "La commande OCP. Elle contient en général les « promis » et les produits qui ne sont pas fabriqués par le laboratoire Biogaran.",
          "Un « promis » est un médicament commandé spécialement pour un patient, parce qu'il n'était pas en stock le jour de son passage. Le patient revient le chercher le lendemain.",
          "La commande GMAX, passée par Etradi ou par Virtuose. À COMPLÉTER : préciser ce que contient cette commande et la différence entre Etradi et Virtuose."
        ]
      },
      {
        "titre": "Étape 1 : commencer par la caisse de froid",
        "etapes": [
          "Ouvrir la caisse de froid avant toutes les autres.",
          "Ranger les produits au réfrigérateur, dans la zone de quarantaine.",
          "Retourner la caisse de froid pour récupérer le bon de livraison qui se trouve dessous."
        ],
        "attention": [
          "La caisse de froid passe toujours en premier : les produits ne doivent pas rester hors du réfrigérateur.",
          "À COMPLÉTER : préciser quand et par qui les produits sortent de la quarantaine pour être rangés."
        ]
      },
      {
        "titre": "Étape 2 : déballer la commande OCP",
        "etapes": [
          "Sortir les médicaments OCP et les placer dans les caisses.",
          "À COMPLÉTER : préciser où mettre les promis et comment les identifier au nom du patient."
        ]
      },
      {
        "titre": "Étape 3 : réceptionner et fusionner les commandes dans Winpharma",
        "etapes": [
          "Dans Winpharma, ouvrir le menu Achats > À COMPLÉTER (préciser le chemin exact jusqu'à l'écran de réception).",
          "Repérer les commandes OCP à fusionner.",
          "Sélectionner les commandes une par une en maintenant la touche Ctrl enfoncée.",
          "Faire un clic droit, puis choisir « Fusionner »."
        ],
        "attention": [
          "On ne fusionne que des commandes du même fournisseur : OCP avec OCP, Virtuose avec Virtuose. Jamais une commande OCP avec une commande Virtuose."
        ]
      },
      {
        "titre": "Étape 4 : contrôler les quantités reçues",
        "etapes": [
          "Pour chaque produit, vérifier que la quantité reçue correspond à la quantité indiquée à l'écran.",
          "À COMPLÉTER : préciser la marche à suivre en cas d'écart (produit manquant, en trop ou abîmé)."
        ]
      },
      {
        "titre": "Étape 5 : contrôler les prix et la marge",
        "etapes": [
          "Une fois les quantités vérifiées, passer au contrôle des prix.",
          "Ne regarder que les lignes en gras : ce sont les produits effectivement reçus.",
          "Dans la colonne des prix, vérifier que la marge est d'au moins 30 %.",
          "Si la marge est inférieure à 30 % : appuyer sur Ctrl + Entrée sur la ligne pour ouvrir le détail de l'achat, puis vérifier si le produit a un prix LPP.",
          "Si ce n'est pas un prix LPP : appeler la pharmacienne pour lui demander une explication."
        ],
        "attention": [
          "Le prix d'un produit LPP (par exemple un dispositif médical remboursé) est fixé par la réglementation : une marge plus faible peut donc être normale. À COMPLÉTER : faire confirmer cette explication par la pharmacienne.",
          "Ne jamais modifier un prix sans l'accord de la pharmacienne."
        ]
      },
      {
        "titre": "Étape 6 : saisir la facture (e-document)",
        "etapes": [
          "Une fois tout vérifié, ouvrir Chrome, aller sur e-document, puis dans la rubrique « Documents reçus ».",
          "Ouvrir la facture de la commande et la parcourir page par page.",
          "Copier le contenu de la facture.",
          "Dans Winpharma, cliquer sur le « + » en haut à droite, puis sur « Commande » et « Coller ».",
          "Si les prix correspondent, cliquer sur « Clôture commande prix ».",
          "Appuyer sur la touche C pour revenir en arrière, puis cliquer sur « Validation sans contrôle »."
        ],
        "attention": [
          "À COMPLÉTER : préciser la marche à suivre si les prix de la facture ne correspondent pas."
        ]
      },
      {
        "titre": "Points à faire préciser par la pharmacienne",
        "liste": [
          "Le contenu de la commande GMAX et la différence entre Etradi et Virtuose.",
          "Le chemin exact jusqu'à l'écran de réception dans Winpharma (« Achats > … »).",
          "Ce qu'on fait des promis à la réception.",
          "Quand et par qui les produits sortent de la quarantaine du réfrigérateur.",
          "La marche à suivre en cas d'écart de quantité ou de prix.",
          "La confirmation du raccourci Ctrl + Entrée pour ouvrir le détail de l'achat."
        ]
      }
    ]
  },
  {
    "id": "modele",
    "titre": "Modèle de page",
    "menu": false,
    "sections": [
      {
        "titre": "Titre de section : À COMPLÉTER",
        "paragraphes": [
          "À COMPLÉTER"
        ],
        "liste": [
          "À COMPLÉTER",
          "À COMPLÉTER"
        ]
      }
    ]
  }
];
