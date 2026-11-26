/*
 * Arbres de décision (un par fiche, même "id" que dans data/fiches.js).
 * "etapes" : questions posées dans l'ordre. "oui" ou "non" : résultat qui arrête l'arbre.
 *   Sans résultat pour la réponse donnée, on passe à la question suivante.
 * "fin" : soit un résultat, soit une dernière question { "q", "oui", "non" }.
 * Résultat : { "niveau": "urgence" | "pharmacien" | "conseil", "texte": "...", "lien": "id d'une fiche" (facultatif) }.
 * Tout le contenu est un brouillon à faire valider par la pharmacienne.
 */
window.GUIDE = window.GUIDE || {};
GUIDE.arbres = {
  "mal-de-gorge": {
    "etapes": [
      {
        "q": "Le patient a-t-il du mal à respirer, à avaler sa salive, ou une voix étouffée ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Risque d'obstruction des voies respiratoires."
        }
      },
      {
        "q": "Prend-il un traitement qui baisse les défenses (chimiothérapie, méthotrexate, carbimazole…) ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Mal de gorge sous ce type de traitement : risque d'infection grave."
        }
      },
      {
        "q": "Est-ce un enfant de moins de 6 ans, une femme enceinte ou qui allaite ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "A-t-il de la fièvre avec des ganglions douloureux, et pas de toux ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Le pharmacien évalue s'il faut faire un test rapide d'angine (TROD)."
        }
      },
      {
        "q": "Le mal de gorge dure-t-il depuis plusieurs jours, s'aggrave-t-il ou revient-il souvent ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Une évaluation par le pharmacien est nécessaire."
        }
      }
    ],
    "fin": {
      "q": "Le patient a-t-il mal quand il avale ?",
      "oui": {
        "niveau": "conseil",
        "texte": "Anesthésique local : Strepsils Lidocaïne, Lysopaïne Maux de gorge ou Colludol. Ne pas manger ni boire juste après. Paracétamol si besoin, en respectant les doses."
      },
      "non": {
        "niveau": "conseil",
        "texte": "Gorge qui gratte : adoucissant (spray à la propolis, sauf allergie aux produits de la ruche). Gêne modérée : antiseptique (Strepsils, Hexaspray). Boire, éviter le tabac."
      }
    }
  },
  "toux": {
    "etapes": [
      {
        "q": "Le patient a-t-il une gêne respiratoire, des sifflements, une douleur dans la poitrine ou des crachats avec du sang ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Signes de gravité respiratoire."
        }
      },
      {
        "q": "Est-ce un enfant de moins de 6 ans, un nourrisson, une femme enceinte ou qui allaite ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "Est-il asthmatique, insuffisant respiratoire (BPCO) ou cardiaque ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Toux chez un patient avec une maladie chronique."
        }
      },
      {
        "q": "Tousse-t-il depuis plus de 3 semaines, ou a-t-il une fièvre qui dure ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Une toux qui dure doit être évaluée."
        }
      },
      {
        "q": "Prend-il un traitement de la tension (ex : ramipril, périndopril) ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "La toux peut être un effet indésirable de ce traitement."
        }
      },
      {
        "q": "Demande-t-il un sirop à la codéine, au dextrométhorphane ou un autre opiacé ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces sirops ne sont délivrés que sur ordonnance."
        }
      }
    ],
    "fin": {
      "q": "La toux est-elle grasse (ça encombre, il crache) ?",
      "oui": {
        "niveau": "conseil",
        "texte": "Ne pas bloquer la toux. Mucolytique possible chez l'adulte (ex : carbocistéine), jamais avec un antitussif. Boire, humidifier l'air."
      },
      "non": {
        "niveau": "conseil",
        "texte": "Toux sèche gênante : antitussif non opiacé chez l'adulte, plutôt le soir, sur une courte durée. Prévenir du risque de somnolence avec les sirops antihistaminiques (conduite, alcool)."
      }
    }
  },
  "rhume": {
    "etapes": [
      {
        "q": "Est-ce un nourrisson, un enfant de moins de 6 ans, une femme enceinte ou qui allaite ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "A-t-il de la fièvre depuis plus de 3 jours, mal aux oreilles ou une douleur forte au visage ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Possible complication (otite, sinusite)."
        }
      },
      {
        "q": "Les symptômes durent-ils depuis plus de 10 jours, ou s'aggravent-ils après une amélioration ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Une évaluation est nécessaire."
        }
      },
      {
        "q": "Demande-t-il un médicament à base de pseudoéphédrine ou un spray vasoconstricteur ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces médicaments ne sont délivrés que sur ordonnance."
        }
      },
      {
        "q": "Est-il asthmatique ou atteint d'une maladie chronique (cœur, poumons, diabète, défenses diminuées) ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Patient à risque."
        }
      }
    ],
    "fin": {
      "q": "Les symptômes reviennent-ils à la même saison, avec les yeux qui piquent et sans fièvre ?",
      "oui": {
        "niveau": "conseil",
        "texte": "Cela ressemble plutôt à une allergie : voir la fiche Allergie saisonnière.",
        "lien": "allergie-saisonniere"
      },
      "non": {
        "niveau": "conseil",
        "texte": "Lavage du nez au sérum physiologique, paracétamol si fièvre ou douleur (vérifier qu'il n'en prend pas déjà dans un autre médicament). Le rhume guérit seul en 7 à 10 jours."
      }
    }
  },
  "douleur-fievre": {
    "etapes": [
      {
        "q": "Mal de tête brutal et très intense, raideur de la nuque, taches violacées sur la peau ou confusion ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Signes possibles d'une urgence grave (méningite, hémorragie)."
        }
      },
      {
        "q": "Douleur dans la poitrine, ou douleur du ventre très intense ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Douleur qui peut révéler une urgence."
        }
      },
      {
        "q": "Le patient pèse-t-il moins de 50 kg, est-ce un enfant, une femme enceinte ou qui allaite ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "La dose et le choix du médicament doivent être adaptés par le pharmacien."
        }
      },
      {
        "q": "Prend-il un anticoagulant, un traitement de la tension ou du cœur, ou a-t-il une maladie du foie, des reins, un ulcère, de l'asthme ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Risque d'interaction ou de contre-indication."
        }
      },
      {
        "q": "A-t-il de la fièvre depuis plus de 3 jours, ou une douleur depuis plus de 5 jours ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Au-delà, un avis médical est nécessaire."
        }
      },
      {
        "q": "Fait-il des demandes répétées ou de grandes quantités ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Risque de mésusage ou de surdosage."
        }
      }
    ],
    "fin": {
      "niveau": "conseil",
      "texte": "Paracétamol : 1 g par prise, 4 h minimum entre deux prises, 3 g par jour au maximum. Vérifier qu'aucun autre médicament qu'il prend n'en contient. L'ibuprofène n'est possible qu'en l'absence de contre-indication et d'infection : en cas de doute, demander au pharmacien."
    }
  },
  "diarrhee": {
    "etapes": [
      {
        "q": "A-t-il très soif, la bouche sèche, la tête qui tourne, urine-t-il peu, ou vomit-il au point de ne pas pouvoir boire ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Risque de déshydratation : le pharmacien doit le voir rapidement."
        }
      },
      {
        "q": "A-t-il de la fièvre, du sang ou des glaires dans les selles, ou des douleurs fortes ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Diarrhée qui peut être infectieuse : pas de lopéramide."
        }
      },
      {
        "q": "Est-ce un enfant, une personne âgée ou fragile, une femme enceinte ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "La diarrhée dure-t-elle depuis plus de 2 à 3 jours, revient-il de voyage ou a-t-il pris un antibiotique récemment ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Une évaluation est nécessaire."
        }
      },
      {
        "q": "Prend-elle une contraception orale, ou prend-il un traitement chronique important ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "La diarrhée peut diminuer l'efficacité de ces traitements."
        }
      }
    ],
    "fin": {
      "niveau": "conseil",
      "texte": "Boire souvent, par petites quantités (soluté de réhydratation si besoin). Antidiarrhéique possible chez l'adulte selon la notice (racécadotril, lopéramide). Alimentation : riz, pâtes, carottes cuites, banane."
    }
  },
  "brulures-estomac": {
    "etapes": [
      {
        "q": "La douleur dans la poitrine va-t-elle vers le bras, la mâchoire ou le dos, avec essoufflement ou sueurs ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Possible problème cardiaque."
        }
      },
      {
        "q": "A-t-il du mal à avaler, a-t-il maigri, vomi, du sang dans les vomissements ou des selles noires ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Signes d'alerte digestifs."
        }
      },
      {
        "q": "Les symptômes apparaissent-ils pour la première fois après 50 ans, ou persistent-ils malgré le traitement ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Une évaluation médicale est nécessaire."
        }
      },
      {
        "q": "Prend-il un anti-inflammatoire, un anticoagulant ou du clopidogrel ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Risque d'ulcère ou d'interaction."
        }
      },
      {
        "q": "Est-ce une femme enceinte ou qui allaite, ou un enfant ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      }
    ],
    "fin": {
      "q": "Les brûlures sont-elles occasionnelles ?",
      "oui": {
        "niveau": "conseil",
        "texte": "Antiacide ou alginate au moment des symptômes. 2 h d'écart avec les autres médicaments. Attention au sel en cas de régime sans sel."
      },
      "non": {
        "niveau": "conseil",
        "texte": "Brûlures fréquentes chez l'adulte : IPP 20 mg sans ordonnance, 14 jours maximum ; l'effet complet demande quelques jours. Repas plus légers, ne pas se coucher juste après manger."
      }
    }
  },
  "constipation": {
    "etapes": [
      {
        "q": "A-t-il des douleurs fortes, des vomissements, le ventre gonflé et dur, ou n'émet-il plus de gaz ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Possible occlusion intestinale."
        }
      },
      {
        "q": "A-t-il du sang dans les selles, a-t-il maigri, ou est-ce une constipation récente et inhabituelle après 50 ans ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Signes d'alerte."
        }
      },
      {
        "q": "Est-ce un enfant, un nourrisson, une femme enceinte ou qui allaite ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "Prend-il un antidouleur à base de codéine ou de morphine, ou un autre médicament qui constipe ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "La constipation peut venir de son traitement."
        }
      },
      {
        "q": "La constipation dure-t-elle depuis plus d'une à deux semaines malgré les conseils, ou prend-il des laxatifs depuis longtemps ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Une évaluation est nécessaire."
        }
      }
    ],
    "fin": {
      "niveau": "conseil",
      "texte": "D'abord les conseils : eau, fibres, activité physique. Laxatif osmotique (macrogol, lactulose) ou de lest avec un grand verre d'eau. Les laxatifs stimulants : seulement sur une courte durée."
    }
  },
  "allergie-saisonniere": {
    "etapes": [
      {
        "q": "A-t-il un gonflement du visage, des lèvres ou de la gorge ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Possible réaction allergique grave : appeler le 15."
        }
      },
      {
        "q": "A-t-il des sifflements, du mal à respirer, ou une toux la nuit ou à l'effort ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Possible asthme."
        }
      },
      {
        "q": "A-t-il un œil rouge et douloureux, une baisse de la vue ou une gêne à la lumière ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Atteinte de l'œil à évaluer."
        }
      },
      {
        "q": "A-t-il de la fièvre, ou un écoulement épais et coloré ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Plutôt une infection qu'une allergie."
        }
      },
      {
        "q": "Est-ce un enfant, une femme enceinte ou qui allaite ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      }
    ],
    "fin": {
      "niveau": "conseil",
      "texte": "Lavage du nez, antihistaminique sans ordonnance (cétirizine, loratadine) en prévenant du risque de somnolence, collyre antiallergique si les yeux piquent. Conseils anti-pollens."
    }
  },
  "piqures-insectes": {
    "etapes": [
      {
        "q": "A-t-il du mal à respirer, un gonflement du visage ou de la gorge, un malaise, ou des plaques qui grattent sur tout le corps ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Possible réaction allergique grave : appeler le 15."
        }
      },
      {
        "q": "La piqûre est-elle dans la bouche ou la gorge ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Risque de gonflement qui gêne la respiration."
        }
      },
      {
        "q": "A-t-il déjà fait une réaction grave, a-t-il été piqué plusieurs fois, ou est-ce un jeune enfant ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Patient à risque."
        }
      },
      {
        "q": "Le gonflement est-il très étendu, s'aggrave-t-il, ou y a-t-il des signes d'infection ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Réaction ou infection à évaluer."
        }
      },
      {
        "q": "Après une piqûre de tique : y a-t-il une plaque rouge qui s'agrandit, ou de la fièvre ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Possible maladie de Lyme : consultation."
        }
      }
    ],
    "fin": {
      "q": "Est-ce une tique encore accrochée ?",
      "oui": {
        "niveau": "conseil",
        "texte": "La retirer avec un tire-tique en tournant, sans mettre de produit avant ; désinfecter ; noter la date ; surveiller la peau pendant 30 jours."
      },
      "non": {
        "niveau": "conseil",
        "texte": "Abeille : retirer le dard en le grattant. Laver à l'eau et au savon, appliquer du froid, puis un soin apaisant. Antihistaminique par voie orale si les démangeaisons sont fortes (adulte)."
      }
    }
  },
  "brulures-peau": {
    "etapes": [
      {
        "q": "La brûlure est-elle électrique, chimique, ou y a-t-il eu de la fumée respirée ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Brûlure grave : appeler le 15."
        }
      },
      {
        "q": "La brûlure est-elle plus grande que la paume de sa main, avec des cloques étendues, ou profonde (peau blanche, cartonnée, noire ou insensible) ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Brûlure qui nécessite un avis médical."
        }
      },
      {
        "q": "Est-elle au visage, au cou, aux mains, aux pieds, dans les plis ou aux parties génitales ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Zone à risque."
        }
      },
      {
        "q": "Est-ce un nourrisson, un enfant ou une personne âgée ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "Pour un coup de soleil : a-t-il de la fièvre, des frissons, des vomissements ou un malaise ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Possible insolation."
        }
      },
      {
        "q": "Y a-t-il des signes d'infection (rougeur qui s'étend, pus, fièvre) ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Infection à évaluer."
        }
      }
    ],
    "fin": {
      "niveau": "conseil",
      "texte": "Refroidir 15 minutes sous l'eau tempérée. Brûlure légère : crème ou émulsion pour brûlures, ou pansement gras. Ne pas percer les cloques. Paracétamol si besoin. Vérifier que le vaccin contre le tétanos est à jour."
    }
  },
  "poux": {
    "etapes": [
      {
        "q": "A-t-on vu des poux vivants sur la tête ?",
        "non": {
          "niveau": "conseil",
          "texte": "Pas de traitement sans poux vivants. Vérifier la tête au peigne fin sur cheveux mouillés, et ne traiter que si on trouve des poux."
        }
      },
      {
        "q": "La personne est-elle plus jeune que l'âge minimum du produit, ou est-ce un nourrisson ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ces patients doivent être vus par le pharmacien."
        }
      },
      {
        "q": "Est-ce une femme enceinte ou qui allaite, une personne asthmatique ou allergique ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Le choix du produit demande l'avis du pharmacien."
        }
      },
      {
        "q": "Le cuir chevelu est-il irrité, avec des plaies ou des croûtes ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Possible infection."
        }
      },
      {
        "q": "Y a-t-il encore des poux après deux traitements bien faits ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Échec du traitement à évaluer."
        }
      }
    ],
    "fin": {
      "niveau": "conseil",
      "texte": "Produit à action mécanique (diméticone) selon la notice, puis peignage au peigne fin. 2e application après 7 à 10 jours. Vérifier toute la famille. Laver le linge à 60 °C."
    }
  },
  "cystite": {
    "etapes": [
      {
        "q": "A-t-elle de la fièvre, des frissons, une douleur dans le dos ou sur le côté, ou des vomissements ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Possible infection du rein : consultation le jour même."
        }
      },
      {
        "q": "Est-ce un homme, un enfant ou une femme enceinte ?",
        "oui": {
          "niveau": "pharmacien",
          "texte": "Ce n'est jamais une cystite simple : consultation médicale."
        }
      }
    ],
    "fin": {
      "niveau": "pharmacien",
      "texte": "Proposer un endroit discret et passer la main : le pharmacien peut réaliser une bandelette urinaire et, s'il est formé, délivrer un antibiotique. En attendant : boire au moins 1,5 L par jour."
    }
  },
  "contraception-urgence": {
    "etapes": [
      {
        "q": "La personne semble-t-elle en détresse, parle-t-elle de violences, ou est-ce une mineure en difficulté ?",
        "oui": {
          "niveau": "urgence",
          "texte": "Prévenir le pharmacien en priorité, avec discrétion."
        }
      }
    ],
    "fin": {
      "niveau": "pharmacien",
      "texte": "Appeler tout de suite le pharmacien, dans un endroit discret. Ne pas faire attendre : plus la contraception d'urgence est prise tôt, plus elle est efficace."
    }
  }
};
