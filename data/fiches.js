/*
 * Fiches par situation.
 * Une fiche = un bloc { ... } dans la liste. Séparez deux fiches par une virgule.
 * "id" : identifiant court, sans espace ni accent (sert dans l'adresse de la page et dans data/sources.js).
 * Chaque liste [ ... ] contient des phrases entre guillemets séparées par des virgules.
 * Tout texte contenant « À COMPLÉTER » est signalé sur le site (souligné orange, badge « à valider »).
 * "chiffres" : repères chiffrés affichés en grand ({ "valeur", "texte" }).
 * "aDire" : phrases simples à dire au patient.
 * "icone" : dessin de la fiche. Choix : gorge, toux, goutte, thermo, intestin, flamme, sablier,
 *   fleur, insecte, soleil, peigne, urine, horloge, pill, fiches.
 */
window.GUIDE = window.GUIDE || {};
GUIDE.fiches = [
  {
    "id": "ordonnance",
    "titre": "Délivrer une ordonnance",
    "icone": "rx",
    "motif": "Un patient présente une ordonnance (papier, électronique ou issue d'une téléconsultation) pour obtenir ses médicaments.",
    "resume": {
      "souvent": "Vérifier l'ordonnance et le patient, contrôler le dossier dans Winpharma, préparer et expliquer chaque médicament, puis faire valider par le pharmacien.",
      "regle": "Ordonnance incomplète ou douteuse, alerte du logiciel ou médicament à risque : on ne délivre jamais seul.",
      "alerte": "Stupéfiant, ordonnance qui paraît falsifiée, interaction signalée, femme enceinte, enfant, posologie inhabituelle, « non substituable »."
    },
    "chiffres": [
      {
        "valeur": "3 mois",
        "texte": "pour présenter une ordonnance de liste I ou II (1re délivrance)"
      },
      {
        "valeur": "1 mois",
        "texte": "de traitement délivré à la fois, en règle générale"
      },
      {
        "valeur": "12 mois",
        "texte": "durée maximale d'une prescription de liste I ou II"
      },
      {
        "valeur": "28 jours",
        "texte": "durée maximale de prescription d'un stupéfiant (souvent moins)"
      }
    ],
    "titreQuestions": "Ce qu'il faut vérifier",
    "questions": [
      "Le prescripteur : nom, qualité, identifiant (RPPS), adresse, signature et date.",
      "Le patient : nom, prénom, sexe et âge ; le poids pour un enfant ou quand le médicament le demande.",
      "Chaque médicament : nom, dosage, forme, posologie et durée du traitement (ou nombre de boîtes).",
      "La date : pour une première délivrance, une ordonnance de médicaments sur liste I ou II doit dater de moins de 3 mois.",
      "Le renouvellement : liste I, seulement si l'ordonnance indique « à renouveler » ; liste II, renouvelable sauf si le médecin l'interdit.",
      "Les mentions particulières : « non substituable » (avec MTE, EFG ou CIF), ordonnance sécurisée, ordonnance bizone (ALD), médicament d'exception.",
      "Le dossier du patient dans Winpharma et le Dossier Pharmaceutique : traitements en cours, allergies, interactions, délivrances récentes (doublon ou chevauchement).",
      "La carte Vitale et la mutuelle, pour le tiers payant."
    ],
    "orientations": [
      "Ordonnance complète et sans alerte : préparer les médicaments, proposer le générique quand la substitution est possible, puis faire valider la délivrance par le pharmacien avant de la remettre.",
      "Délivrer en règle générale un mois de traitement à la fois (trois mois pour les grands conditionnements et certains traitements, comme les contraceptifs).",
      "Expliquer chaque médicament : à quoi il sert, quand et comment le prendre, pendant combien de temps ; écrire la posologie sur chaque boîte.",
      "Générique : expliquer qu'il contient le même principe actif, avec la même efficacité. Si le patient refuse sans mention « non substituable » valable, passer la main au pharmacien pour expliquer le remboursement.",
      "Noter ce qui n'a pas pu être délivré (manquant, promis) et le dire clairement au patient."
    ],
    "aDire": [
      "Je fais vérifier votre ordonnance par le pharmacien, ça ne prend qu'un instant.",
      "Voici le générique de votre médicament : c'est le même principe actif, avec la même efficacité.",
      "Je vous note la posologie sur chaque boîte."
    ],
    "vigilance": [
      "Stupéfiants (ex : morphine, oxycodone, fentanyl, méthylphénidate) : ordonnance sécurisée, quantités écrites en toutes lettres, durée limitée (28 jours au maximum, moins pour certains), délivrance souvent fractionnée.",
      "Stupéfiants : l'ordonnance doit être présentée dans les 3 jours suivant sa rédaction ; au-delà, on ne délivre que la durée qui reste. Pas de chevauchement avec une ordonnance précédente, sauf mention du médecin.",
      "Ordonnance qui paraît modifiée, photocopiée, d'un médecin inconnu ou avec des quantités inhabituelles : risque de falsification. Ne rien dire au patient et prévenir discrètement le pharmacien.",
      "Posologie qui paraît anormale (dose très élevée, dose d'enfant pour un adulte ou l'inverse) : ne jamais corriger soi-même.",
      "Alerte d'interaction ou d'allergie dans Winpharma ou dans le Dossier Pharmaceutique : ne jamais l'ignorer.",
      "Confidentialité : parler à voix basse et ne pas énoncer les médicaments devant les autres clients."
    ],
    "passerLaMain": [
      "Toute ordonnance de stupéfiant ou d'assimilé stupéfiant.",
      "Ordonnance incomplète, illisible, trop ancienne ou qui paraît falsifiée.",
      "Alerte d'interaction, allergie, doublon ou chevauchement de traitement.",
      "Mention « non substituable », refus du générique ou question sur le remboursement.",
      "Femme enceinte ou qui allaite, nourrisson ou enfant, posologie qui paraît anormale.",
      "Traitement habituel dont l'ordonnance est expirée (dépannage) ou médicament en rupture.",
      "Toute question du patient à laquelle vous ne savez pas répondre."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    }
  },
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
      "introduction": "Les pastilles et sprays agissent seulement sur place, dans la gorge : ils soulagent mais ne guérissent pas plus vite. Beaucoup associent deux actions (antiseptique + anesthésique) : lire la composition sur la boîte. Les produits ci-dessous sont ceux du rayon de l'officine (photos du rayon). Âges et compositions recopiés depuis les boîtes : toujours vérifier la notice.",
      "types": [
        {
          "nom": "Adoucissants et produits aux plantes",
          "cestQuoi": "Pastilles, gommes, sprays ou sirops sans médicament fort (plantes, miel, propolis, ectoïne). Ce sont des dispositifs médicaux ou des compléments alimentaires : ils hydratent et calment une gorge irritée.",
          "exemples": [
            {
              "nom": "Phytoxil Mal de gorge",
              "forme": "pastille",
              "detail": "Dispositif médical à l'ectoïne, sans sucre",
              "pictos": [
                "age:Dès 6 ans"
              ],
              "photo": "assets/produits/phytoxil-gorge.jpg"
            },
            {
              "nom": "Efirub Gommes gorge irritée",
              "forme": "pastille",
              "detail": "5 plantes + papaïne, sans sucre",
              "photo": "assets/produits/efirub-gommes.jpg"
            },
            {
              "nom": "HerbalGem Gommes chantres",
              "forme": "pastille",
              "detail": "Voix enrouée ; existe aussi en sirop",
              "photo": "assets/produits/herbalgem-gommes.jpg"
            },
            {
              "nom": "Stodal Plantes",
              "forme": "pastille",
              "detail": "Boiron : nez, gorge, bronches",
              "pictos": [
                "age:Dès 12 ans"
              ],
              "photo": "assets/produits/stodal.jpg"
            },
            {
              "nom": "Azéol Gorge",
              "forme": "pastille",
              "detail": "Sauge, sureau, miel, zinc ; existe aussi en spray",
              "photo": "assets/produits/azeol-gorge.jpg"
            },
            {
              "nom": "Pharmactiv Pastilles pour la gorge",
              "forme": "pastille",
              "detail": "Propolis, vitamine C, menthe poivrée",
              "pictos": [
                "age:Dès 12 ans",
                "ruche"
              ],
              "photo": "assets/produits/pharmactiv-pastilles.jpg"
            },
            {
              "nom": "3 Chênes Propolis spray",
              "forme": "spray",
              "detail": "Spray buccal propolis, thym, menthe",
              "pictos": [
                "ruche"
              ],
              "photo": "assets/produits/propolis-spray.jpg"
            }
          ],
          "quand": "Gorge qui gratte, irritation légère, voix enrouée, air sec ou tabac, sans vraie douleur.",
          "attention": [
            "Propolis et miel : jamais en cas d'allergie aux produits de la ruche ; prudence chez l'asthmatique.",
            "Huiles essentielles (certains sprays et pastilles) : déconseillées chez l'enfant, la femme enceinte et en cas d'épilepsie : lire la notice.",
            "Sucre : proposer une forme sans sucre aux diabétiques."
          ],
          "cle": "adoucissant"
        },
        {
          "nom": "Antiseptique",
          "cestQuoi": "Limite les microbes à la surface de la gorge. Le mal de gorge étant le plus souvent dû à un virus, l'effet reste modeste : il soulage surtout la gêne.",
          "exemples": [
            {
              "nom": "Strepsils Citron sans sucre",
              "forme": "pastille",
              "detail": "Amylmétacrésol + alcool 2,4-dichlorobenzylique",
              "pictos": [
                "age:Dès 6 ans"
              ],
              "photo": "assets/produits/strepsils-citron.jpg"
            },
            {
              "nom": "Strepsils Miel Citron",
              "forme": "pastille",
              "detail": "Amylmétacrésol + alcool 2,4-dichlorobenzylique",
              "pictos": [
                "age:Dès 6 ans",
                "sucre"
              ],
              "photo": "assets/produits/strepsils-miel-citron.jpg"
            },
            {
              "nom": "Lysopaïne Maux de gorge (miel citron, menthe, citron gingembre)",
              "forme": "pastille",
              "detail": "Cétylpyridinium + lysozyme, sans sucre",
              "pictos": [
                "age:Dès 6 ans"
              ]
            },
            {
              "nom": "Hexaspray",
              "forme": "spray",
              "detail": "Biclotymol, collutoire",
              "pictos": [
                "age:Dès 30 mois"
              ],
              "photo": "assets/produits/hexaspray.jpg"
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
          "nom": "Antiseptique + anesthésique local",
          "cestQuoi": "« Endort » la gorge quelques minutes pour diminuer la douleur, surtout en avalant. Presque toujours associé à un antiseptique dans le même produit.",
          "exemples": [
            {
              "nom": "Drill (miel citron sans sucre)",
              "forme": "pastille",
              "detail": "Chlorhexidine 3 mg + tétracaïne 0,2 mg",
              "pictos": [
                "age:Dès 6 ans",
                "fausseroute"
              ]
            },
            {
              "nom": "Strepsils Lidocaïne",
              "forme": "pastille",
              "detail": "Lidocaïne + amylmétacrésol + alcool dichlorobenzylique",
              "pictos": [
                "age:Dès 12 ans",
                "fausseroute"
              ],
              "photo": "assets/produits/strepsils-lidocaine.jpg"
            },
            {
              "nom": "StrepsilSpray Lidocaïne",
              "forme": "spray",
              "detail": "Lidocaïne + amylmétacrésol + alcool dichlorobenzylique",
              "pictos": [
                "age:Dès 12 ans",
                "fausseroute"
              ]
            },
            {
              "nom": "Colludol",
              "forme": "spray",
              "detail": "Lidocaïne + hexamidine",
              "pictos": [
                "age:Dès 6 ans",
                "fausseroute"
              ],
              "photo": "assets/produits/colludol.jpg"
            },
            {
              "nom": "Vocadys Irritations de la gorge",
              "forme": "pastille",
              "detail": "Lidocaïne + énoxolone + érysimum (pâtes à sucer)",
              "pictos": [
                "age:Dès 6 ans",
                "fausseroute"
              ],
              "photo": "assets/produits/vocadys.jpg"
            },
            {
              "nom": "Lysopaïne Maux de gorge aigus",
              "forme": "pastille",
              "detail": "Ambroxol 20 mg (anesthésique), citron sans sucre",
              "pictos": [
                "age:Dès 12 ans",
                "fausseroute"
              ],
              "photo": "assets/produits/lysopaine-ambroxol.jpg"
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
          "nom": "Anti-inflammatoires",
          "cestQuoi": "Diminuent l'inflammation de la gorge. L'alpha-amylase (Maxilase) est une enzyme ; le flurbiprofène (Strefen) est un AINS, de la famille de l'ibuprofène.",
          "exemples": [
            {
              "nom": "Maxilase Maux de gorge sirop",
              "forme": "sirop",
              "detail": "Alpha-amylase 200 U.CEIP/ml",
              "pictos": [
                "age:Dès 6 mois"
              ],
              "photo": "assets/produits/maxilase.jpg"
            },
            {
              "nom": "Alfa-Amylase Biogaran conseil",
              "forme": "sirop",
              "detail": "Alpha-amylase, sirop (dès 6 mois) ou comprimés 3000 U (adultes)",
              "pictos": [
                "age:Sirop dès 6 mois"
              ]
            },
            {
              "nom": "Strefen",
              "forme": "pastille",
              "detail": "Flurbiprofène (AINS). Pas vu au rayon : si un patient le demande, voir le pharmacien.",
              "pictos": [
                "grossesse:Contre-indiqué dès le 6e mois de grossesse",
                "anticoag"
              ]
            }
          ],
          "quand": "Gorge douloureuse et enflammée, sans signe d'alerte.",
          "attention": [
            "L'alpha-amylase n'est plus en libre accès depuis janvier 2020 : elle se délivre derrière le comptoir, avec un conseil.",
            "Alpha-amylase : rares réactions allergiques (peau) ; arrêter et consulter si éruption.",
            "Flurbiprofène : mêmes contre-indications que l'ibuprofène (grossesse dès le 6e mois, ulcère, anticoagulant, autre AINS)."
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
            "Adoucissant : Phytoxil Mal de gorge, Efirub Gommes, HerbalGem Gommes chantres (voix)"
          ],
          [
            "Mal de gorge qui commence, gêne modérée",
            "Antiseptique : Strepsils, Lysopaïne (cétylpyridinium), Hexaspray (dès 30 mois)"
          ],
          [
            "« J'ai mal quand j'avale »",
            "Antiseptique + anesthésique : Drill, Colludol, Vocadys (dès 6 ans) ; Strepsils Lidocaïne, Lysopaïne ambroxol (dès 12 ans)"
          ],
          [
            "Gorge très enflammée",
            "Maxilase ou Alfa-Amylase (dès 6 mois), après accord du pharmacien"
          ],
          [
            "Fièvre, ganglions, pas de toux ; femme enceinte ; enfant de moins de 6 ans ; traitement qui baisse les défenses",
            "Pharmacien"
          ]
        ],
        "note": "Dans tous les cas : paracétamol possible si la douleur ou la fièvre est gênante. Si le mal de gorge dure plus de quelques jours ou s'aggrave, le patient doit être revu par le pharmacien."
      }
    },
    "resume": {
      "souvent": "Pastilles ou spray adaptés à la gêne (adoucissant, antiseptique, anesthésique) + paracétamol si besoin.",
      "regle": "Vérifier l'âge sur la boîte : souvent dès 6 ans, mais dès 12 ans pour Strepsils Lidocaïne et Lysopaïne ambroxol ; pas d'ibuprofène ni d'aspirine en cas d'infection ORL.",
      "alerte": "Gêne pour respirer ou avaler sa salive, fièvre sous traitement qui baisse les défenses, femme enceinte, enfant de moins de 6 ans."
    },
    "icone": "gorge",
    "chiffres": [
      {
        "valeur": "6 ans",
        "texte": "âge minimum habituel des pastilles"
      },
      {
        "valeur": "3 g",
        "texte": "de paracétamol par jour au maximum (adulte)"
      },
      {
        "valeur": "3 jours",
        "texte": "de fièvre : au-delà, avis médical"
      }
    ],
    "aDire": [
      "Laissez fondre la pastille sans la croquer, et attendez un peu avant de manger ou de boire.",
      "Si vous avez du mal à avaler votre salive ou si la fièvre dure, il faut consulter."
    ]
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
    },
    "resume": {
      "souvent": "Toux sèche : antitussif non opiacé chez l'adulte. Toux grasse : on laisse tousser, mucolytique possible chez l'adulte.",
      "regle": "Jamais un antitussif avec un mucolytique ; mucolytiques contre-indiqués avant 2 ans.",
      "alerte": "Gêne respiratoire, sifflements, sang dans les crachats, toux de plus de 3 semaines, patient sous traitement de la tension."
    },
    "icone": "toux",
    "chiffres": [
      {
        "valeur": "2 ans",
        "texte": "mucolytiques contre-indiqués avant cet âge"
      },
      {
        "valeur": "3 semaines",
        "texte": "de toux : au-delà, consulter"
      }
    ],
    "aDire": [
      "Ce sirop peut faire dormir : évitez de conduire après l'avoir pris.",
      "Si la toux dure plus de trois semaines ou si vous avez du mal à respirer, consultez un médecin."
    ],
    "produits": {
      "titre": "Les produits contre la toux",
      "introduction": "Première question : la toux est-elle sèche ou grasse ? Les produits ci-dessous sont ceux du rayon de l'officine (photos du rayon). Âges et compositions recopiés depuis les boîtes : toujours vérifier la notice.",
      "types": [
        {
          "nom": "Toux sèche : antitussifs",
          "cle": "antiseptique",
          "cestQuoi": "Calment le réflexe de toux. Uniquement pour une toux sèche qui gêne, surtout la nuit.",
          "exemples": [
            {
              "nom": "Clarix Oxomémazine 0,33 mg/ml",
              "forme": "sirop",
              "detail": "Antihistaminique qui calme la toux et fait dormir",
              "pictos": [
                "conduite",
                "alcool",
                "age:Pas avant 2 ans"
              ]
            },
            {
              "nom": "Clarix Pentoxyvérine 0,15 %",
              "forme": "sirop",
              "detail": "Antitussif non opiacé",
              "pictos": [
                "age:Âge minimum : voir la notice"
              ]
            }
          ],
          "quand": "Toux sèche, sans signe d'alerte, chez l'adulte (ou l'enfant selon la notice).",
          "attention": [
            "Jamais en cas de toux grasse, ni avec un mucolytique.",
            "Oxomémazine : somnolence (conduite, alcool), et précautions en cas de glaucome ou de problème de prostate.",
            "Les sirops à la codéine ou au dextrométhorphane sont sur ordonnance."
          ]
        },
        {
          "nom": "Toux grasse : mucolytiques",
          "cle": "anesthesique",
          "cestQuoi": "Fluidifient les sécrétions pour les faire remonter plus facilement. On ne bloque pas une toux grasse.",
          "exemples": [
            {
              "nom": "Clarix Carbocistéine 5 % ou 750 mg/10 ml",
              "forme": "sirop",
              "detail": "Carbocistéine, solution buvable ou unidoses, sans sucre",
              "pictos": [
                "age:Dès 15 ans"
              ],
              "photo": "assets/produits/clarix-carbocisteine.jpg"
            },
            {
              "nom": "Fluimucil 600 mg",
              "forme": "comprime",
              "detail": "Acétylcystéine, granulés en sachet, 1 par jour",
              "pictos": [
                "age:Adultes"
              ]
            },
            {
              "nom": "Acétylcystéine Biogaran 200 mg",
              "forme": "comprime",
              "detail": "Acétylcystéine, sachets, sans sucre",
              "pictos": [
                "age:Dès 2 ans"
              ]
            },
            {
              "nom": "Ambroxol Biogaran conseil 30 mg",
              "forme": "comprime",
              "detail": "Ambroxol, comprimés sécables",
              "pictos": [
                "age:Adultes"
              ]
            },
            {
              "nom": "Lierre grimpant Biogaran conseil",
              "forme": "sirop",
              "detail": "Extrait de lierre, sans sucre",
              "pictos": [
                "age:Dès 2 ans"
              ],
              "photo": "assets/produits/lierre-grimpant.jpg"
            }
          ],
          "quand": "Toux grasse qui encombre, chez l'adulte ou l'enfant de plus de 2 ans selon le produit.",
          "attention": [
            "Contre-indiqués avant 2 ans (risque d'encombrement).",
            "Jamais avec un antitussif.",
            "Prudence en cas d'ulcère de l'estomac."
          ]
        },
        {
          "nom": "Sirops aux plantes (dispositifs médicaux)",
          "cle": "adoucissant",
          "cestQuoi": "Sirops qui forment un film protecteur sur la gorge ; ils conviennent à la toux sèche comme grasse.",
          "exemples": [
            {
              "nom": "Phytoxil Toux sans sucre",
              "forme": "sirop",
              "detail": "Mauve blanche + plantain",
              "pictos": [
                "age:Dès 2 ans"
              ],
              "photo": "assets/produits/phytoxil-toux.jpg"
            },
            {
              "nom": "Phytoxil Toux & Gorge",
              "forme": "sirop",
              "detail": "Mauve blanche + miel",
              "pictos": [
                "age:Dès 2 ans",
                "ruche"
              ]
            },
            {
              "nom": "Phytoxil Toux & Gorge Junior",
              "forme": "sirop",
              "detail": "Mauve blanche, miel, lierre ; fraise-framboise",
              "pictos": [
                "age:Dès 2 ans",
                "ruche"
              ],
              "photo": "assets/produits/phytoxil-junior.jpg"
            },
            {
              "nom": "HerbalGem Sirop Respiration",
              "forme": "sirop",
              "detail": "Bourgeons, sureau, marrube, miel (bio)",
              "pictos": [
                "ruche"
              ]
            }
          ],
          "quand": "Toux légère, enfant de plus de 2 ans, patient qui préfère un produit sans médicament.",
          "attention": [
            "Contiennent souvent du miel : pas avant 1 an et pas en cas d'allergie aux produits de la ruche.",
            "Version avec sucre : proposer « sans sucre » aux diabétiques."
          ]
        }
      ],
      "choix": {
        "id": "choix-toux",
        "titre": "Quel produit pour quelle toux ?",
        "colonnes": [
          "Le patient décrit…",
          "Proposer"
        ],
        "lignes": [
          [
            "Toux sèche qui gratte et l'empêche de dormir (adulte)",
            "Antitussif : Clarix Pentoxyvérine, ou Clarix Oxomémazine le soir (somnolence)"
          ],
          [
            "Toux grasse, il crache ou ça encombre (adulte)",
            "Mucolytique : Clarix Carbocistéine, Fluimucil, Ambroxol Biogaran"
          ],
          [
            "Toux grasse chez un enfant de plus de 2 ans",
            "Acétylcystéine Biogaran 200 mg ou Lierre grimpant Biogaran"
          ],
          [
            "Toux légère, enfant de plus de 2 ans",
            "Phytoxil Junior ou Phytoxil Toux"
          ],
          [
            "Enfant de moins de 2 ans, gêne respiratoire, toux de plus de 3 semaines, patient sous traitement de la tension",
            "Pharmacien"
          ]
        ],
        "note": "Un antitussif et un mucolytique ne se donnent jamais ensemble."
      }
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
    },
    "resume": {
      "souvent": "Lavage du nez au sérum physiologique + paracétamol si fièvre ou douleur.",
      "regle": "Pseudoéphédrine par voie orale et sprays vasoconstricteurs : uniquement sur ordonnance.",
      "alerte": "Fièvre de plus de 3 jours, douleur d'oreille ou du visage, nourrisson, symptômes de plus de 10 jours."
    },
    "icone": "goutte",
    "chiffres": [
      {
        "valeur": "7 à 10 j",
        "texte": "durée habituelle d'un rhume"
      },
      {
        "valeur": "3 jours",
        "texte": "de fièvre : au-delà, consulter"
      }
    ],
    "aDire": [
      "Lavez-vous le nez plusieurs fois par jour avec du sérum physiologique.",
      "Le rhume guérit tout seul en une semaine environ ; revenez si la fièvre dure ou si vous avez mal aux oreilles."
    ],
    "produits": {
      "titre": "Les produits pour le nez",
      "introduction": "Le lavage du nez est la base de tout conseil. Les produits ci-dessous sont ceux du rayon de l'officine (photos du rayon). Âges et compositions recopiés depuis les boîtes : toujours vérifier la notice.",
      "types": [
        {
          "nom": "Lavage du nez (eau de mer isotonique)",
          "cle": "adoucissant",
          "cestQuoi": "Eau de mer à la même salinité que le corps : nettoie le nez en douceur, utilisable tous les jours.",
          "exemples": [
            {
              "nom": "Stérimar Hygiène du nez",
              "forme": "spray",
              "detail": "Eau de mer physiologique",
              "pictos": [
                "age:Adultes et enfants"
              ]
            },
            {
              "nom": "Physiomer Jet dynamique",
              "forme": "spray",
              "detail": "Eau de mer 100 % naturelle",
              "pictos": [
                "age:Dès 6 ans"
              ]
            },
            {
              "nom": "Pharmactiv Le spray nasal isotonique",
              "forme": "spray",
              "detail": "Hygiène nasale quotidienne",
              "pictos": [
                "age:Adultes, enfants et nourrissons"
              ]
            },
            {
              "nom": "ProRhinel Spray nourrissons et jeunes enfants",
              "forme": "spray",
              "detail": "Lavage nasal doux",
              "pictos": [
                "age:Nourrissons"
              ],
              "photo": "assets/produits/prorhinel-nourrisson.jpg"
            }
          ],
          "quand": "Rhume, nez qui coule, chez tout le monde, nourrissons compris (formes adaptées).",
          "attention": [
            "Nourrisson : lavage avec des unidoses de sérum physiologique ou un spray adapté, tête sur le côté."
          ]
        },
        {
          "nom": "Nez bouché (eau de mer hypertonique)",
          "cle": "antiseptique",
          "cestQuoi": "Eau de mer plus salée : aide à déboucher le nez sans médicament vasoconstricteur.",
          "exemples": [
            {
              "nom": "Stérimar Nez bouché (cuivre)",
              "forme": "spray",
              "detail": "Hypertonique, débouche jusqu'à 6 h",
              "photo": "assets/produits/sterimar-nez-bouche.jpg"
            },
            {
              "nom": "Pharmactiv Le spray nasal hypertonique",
              "forme": "spray",
              "detail": "Spécial nez bouché",
              "pictos": [
                "age:Dès 6 mois"
              ]
            },
            {
              "nom": "ProRhinel Extra eucalyptus",
              "forme": "spray",
              "detail": "Nez congestionné, avec eucalyptus",
              "pictos": [
                "age:Âge minimum : voir la notice"
              ]
            }
          ],
          "quand": "Nez bouché gênant, en complément du lavage.",
          "attention": [
            "Peut piquer un peu.",
            "Les sprays vasoconstricteurs (qui « débouchent » avec un médicament) sont sur ordonnance."
          ]
        },
        {
          "nom": "Sprays et produits aux huiles essentielles ou aux plantes",
          "cle": "anesthesique",
          "cestQuoi": "Dispositifs médicaux ou compléments contenant des huiles essentielles ou des plantes.",
          "exemples": [
            {
              "nom": "Efirub Spray nasal Nez bouché",
              "forme": "spray",
              "detail": "Action 4 en 1",
              "pictos": [
                "age:Dès 2 ans"
              ],
              "photo": "assets/produits/efirub-spray-nasal.jpg"
            },
            {
              "nom": "Azéol DM Rhume Rhinite",
              "forme": "spray",
              "detail": "Spray nasal",
              "pictos": [
                "age:Dès 18 ans"
              ]
            },
            {
              "nom": "Pharmactiv Spray nasal fort",
              "forme": "spray",
              "detail": "Huiles essentielles (ravintsara, eucalyptus, géranium), propolis",
              "pictos": [
                "ruche"
              ]
            },
            {
              "nom": "Efirub Coups de froid, Sinuxin, Pranarôm Aromaforce, Activox Flash'Rub",
              "forme": "comprime",
              "detail": "Compléments aux plantes ou huiles essentielles",
              "pictos": [
                "age:Adultes"
              ]
            }
          ],
          "quand": "Adulte qui souhaite un produit naturel, en plus du lavage du nez.",
          "attention": [
            "Huiles essentielles : déconseillées chez l'enfant, la femme enceinte ou qui allaite, et en cas d'épilepsie ou d'asthme : lire la notice.",
            "Ce sont surtout des compléments : ils ne remplacent pas un avis si les symptômes durent."
          ]
        }
      ],
      "choix": {
        "id": "choix-rhume",
        "titre": "Quel produit pour quel nez ?",
        "colonnes": [
          "Le patient décrit…",
          "Proposer"
        ],
        "lignes": [
          [
            "Nez qui coule",
            "Lavage isotonique : Stérimar Hygiène, Physiomer, Pharmactiv isotonique"
          ],
          [
            "Nez bouché",
            "Lavage hypertonique : Stérimar Nez bouché, Pharmactiv hypertonique"
          ],
          [
            "Nourrisson enrhumé",
            "ProRhinel nourrissons ou sérum physiologique, et en parler au pharmacien"
          ],
          [
            "Adulte qui veut un produit naturel",
            "Efirub spray nasal, Azéol DM (dès 18 ans), en plus du lavage"
          ],
          [
            "Demande d'Actifed Rhume, Dolirhume ou d'un spray vasoconstricteur",
            "Pharmacien (sur ordonnance)"
          ]
        ],
        "note": "Fièvre, douleur ou fatigue : paracétamol si besoin (voir fiche Douleur et fièvre)."
      }
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
      "En première intention : paracétamol. Adulte de plus de 50 kg : 1 g par prise, au moins 4 heures entre deux prises, 3 g par jour au maximum sans avis médical. En pratique, cela fait 3 prises par jour au plus.",
      "Intervalle plus long entre deux prises de paracétamol : 6 heures minimum chez l'enfant (dose adaptée au poids) et en cas d'insuffisance rénale (8 heures si elle est sévère).",
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
    },
    "resume": {
      "souvent": "Paracétamol : 1 g par prise, 4 h minimum entre deux prises, 3 g par jour maximum (adulte de plus de 50 kg).",
      "regle": "Pas d'AINS chez la femme enceinte (contre-indiqués à partir du 6e mois), sous anticoagulant ou en cas d'infection.",
      "alerte": "Mal de tête brutal avec raideur de la nuque, taches violacées sur la peau, fièvre de plus de 3 jours."
    },
    "icone": "thermo",
    "chiffres": [
      {
        "valeur": "1 g",
        "texte": "de paracétamol par prise"
      },
      {
        "valeur": "4 h",
        "texte": "minimum entre deux prises"
      },
      {
        "valeur": "3 g",
        "texte": "par jour au maximum sans avis médical"
      }
    ],
    "aDire": [
      "Ne prenez pas en même temps un autre médicament qui contient du paracétamol.",
      "Sans avis médical : pas plus de 3 jours pour la fièvre, 5 jours pour la douleur."
    ],
    "produits": {
      "titre": "Les produits contre la douleur et la fièvre",
      "introduction": "Tous ces produits sont derrière le comptoir (pas en libre accès). Les produits ci-dessous sont ceux du rayon de l'officine (photos du rayon). Âges et compositions recopiés depuis les boîtes : toujours vérifier la notice.",
      "types": [
        {
          "nom": "Paracétamol",
          "cle": "antiseptique",
          "cestQuoi": "Premier choix contre la douleur et la fièvre. Peu d'effets indésirables, mais dangereux pour le foie en cas de surdosage.",
          "exemples": [
            {
              "nom": "Doliprane 1000 mg",
              "forme": "comprime",
              "detail": "Comprimés, gélules ou comprimés effervescents (arôme cassis)",
              "pictos": [
                "age:Adulte de plus de 50 kg"
              ],
              "photo": "assets/produits/doliprane.jpg"
            },
            {
              "nom": "Dafalgan 500 mg et 1000 mg",
              "forme": "comprime",
              "detail": "Gélules ou comprimés"
            },
            {
              "nom": "Efferalgan 500 mg et Efferalgan Vitamine C",
              "forme": "comprime",
              "detail": "Comprimés effervescents ; la version vitamine C contient 200 mg de vitamine C"
            }
          ],
          "quand": "Douleur ou fièvre de l'adulte, en première intention.",
          "attention": [
            "1 g par prise, 4 h minimum entre deux prises, 3 g par jour au maximum (adulte de plus de 50 kg).",
            "« Surdosage = danger » est écrit sur chaque boîte : vérifier les autres médicaments qui contiennent du paracétamol.",
            "Les formes effervescentes contiennent du sel : attention au régime sans sel."
          ]
        },
        {
          "nom": "Ibuprofène (AINS)",
          "cle": "ains",
          "cestQuoi": "Anti-inflammatoire : douleur, fièvre, inflammation (dents, règles, courbatures). Plus de contre-indications que le paracétamol.",
          "exemples": [
            {
              "nom": "Ibuprofène Biogaran conseil 200 mg et 400 mg",
              "forme": "comprime",
              "detail": "Comprimés",
              "pictos": [
                "grossesse:Contre-indiqué dès le 6e mois de grossesse",
                "anticoag"
              ]
            },
            {
              "nom": "Nurofen 200 mg et Nurofen Flash 400 mg",
              "forme": "comprime",
              "detail": "Comprimés",
              "pictos": [
                "grossesse:Contre-indiqué dès le 6e mois de grossesse",
                "anticoag"
              ]
            },
            {
              "nom": "Spedifen 400 mg",
              "forme": "comprime",
              "detail": "Ibuprofène, comprimés",
              "pictos": [
                "grossesse:Contre-indiqué dès le 6e mois de grossesse",
                "anticoag"
              ]
            }
          ],
          "quand": "Douleur avec inflammation chez l'adulte, sans contre-indication et sans infection.",
          "attention": [
            "1 200 mg par jour au maximum en automédication.",
            "Jamais pendant la grossesse sans avis, ni avec un anticoagulant ou un autre AINS.",
            "À éviter en cas d'infection (gorge, peau, varicelle)."
          ]
        }
      ],
      "choix": {
        "id": "choix-douleur",
        "titre": "Paracétamol ou ibuprofène ?",
        "colonnes": [
          "Situation",
          "Proposer"
        ],
        "lignes": [
          [
            "Fièvre, mal de tête, douleur simple",
            "Paracétamol (Doliprane, Dafalgan, Efferalgan)"
          ],
          [
            "Douleur avec inflammation (dents, règles, entorse), adulte sans contre-indication",
            "Ibuprofène, après les questions sur la grossesse, l'estomac et les traitements"
          ],
          [
            "Femme enceinte, patient sous anticoagulant, infection en cours",
            "Paracétamol, et en parler au pharmacien"
          ],
          [
            "Enfant, adulte de moins de 50 kg",
            "Pharmacien (dose adaptée au poids)"
          ]
        ]
      }
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
    },
    "resume": {
      "souvent": "Boire souvent par petites quantités ; soluté de réhydratation pour les personnes fragiles.",
      "regle": "Pas de lopéramide en cas de fièvre ou de sang dans les selles.",
      "alerte": "Enfant, personne âgée, déshydratation, fièvre, sang dans les selles, plus de 2 à 3 jours."
    },
    "icone": "intestin",
    "chiffres": [
      {
        "valeur": "2 à 3 j",
        "texte": "au-delà, avis nécessaire"
      }
    ],
    "aDire": [
      "Buvez souvent, par petites gorgées, même si vous n'avez pas soif.",
      "Lavez-vous bien les mains après être allé aux toilettes."
    ]
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
    },
    "resume": {
      "souvent": "Antiacide ou alginate pour un soulagement rapide ; IPP 20 mg chez l'adulte si c'est fréquent (14 jours maximum).",
      "regle": "Espacer de 2 h les antiacides et alginates des autres médicaments.",
      "alerte": "Douleur dans la poitrine vers le bras ou la mâchoire (urgence), difficulté à avaler, sang, amaigrissement."
    },
    "icone": "flamme",
    "chiffres": [
      {
        "valeur": "2 h",
        "texte": "d'écart avec les autres médicaments"
      },
      {
        "valeur": "14 jours",
        "texte": "maximum pour un IPP sans ordonnance"
      }
    ],
    "aDire": [
      "Prenez ce produit à distance de vos autres médicaments, environ deux heures.",
      "Évitez de vous allonger juste après le repas."
    ]
  },
  {
    "id": "constipation",
    "titre": "Constipation de l'adulte",
    "resume": {
      "souvent": "Conseils d'hygiène de vie + laxatif doux (osmotique comme le macrogol, ou de lest).",
      "regle": "Les laxatifs stimulants ne se prennent que sur une courte durée, jamais en première intention.",
      "alerte": "Sang dans les selles, douleurs fortes, vomissements, plus de gaz, amaigrissement, constipation inhabituelle après 50 ans."
    },
    "motif": "Un adulte va moins souvent à la selle que d'habitude, avec des selles dures ou difficiles à évacuer, et demande un laxatif.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Depuis quand ? Est-ce inhabituel pour vous ?",
      "Avez-vous mal au ventre, le ventre gonflé, des vomissements ? Arrivez-vous encore à émettre des gaz ?",
      "Avez-vous vu du sang dans les selles ? Avez-vous perdu du poids sans raison ?",
      "Avez-vous changé récemment votre alimentation, votre activité, vos habitudes (voyage, alitement) ?",
      "Quels médicaments prenez-vous ? (certains constipent : antidouleurs à base de codéine ou de morphine, fer, certains antiacides, antidépresseurs…)",
      "Prenez-vous déjà un laxatif ? Depuis combien de temps ?",
      "Êtes-vous enceinte ou allaitez-vous ?"
    ],
    "orientations": [
      "Conseils en premier : boire environ 1,5 L d'eau par jour, manger plus de fibres (fruits, légumes, céréales complètes), bouger, aller aux toilettes dès que l'envie se présente et à heures régulières.",
      "Laxatif osmotique (ex : macrogol, lactulose) : doux, bien toléré, il agit en 1 à 2 jours.",
      "Laxatif de lest (ex : ispaghul) : à prendre avec un grand verre d'eau.",
      "Laxatif par voie rectale (ex : suppositoire à la glycérine, microlavement) : pour un effet rapide et ponctuel.",
      "Laxatif lubrifiant (huile de paraffine) : pas au coucher, et à distance des repas."
    ],
    "vigilance": [
      "Laxatifs stimulants (ex : bisacodyl, séné) : seulement sur une courte durée ; pris longtemps, ils irritent l'intestin et font baisser le potassium.",
      "Huile de paraffine : à prendre à distance des autres médicaments et des repas ; risque de fausse route chez la personne âgée ou alitée.",
      "Lactulose : peut donner des ballonnements au début.",
      "Laxatif de lest sans eau suffisante : risque de bouchon dans l'intestin.",
      "Une constipation peut être un effet indésirable d'un médicament : le signaler au pharmacien."
    ],
    "passerLaMain": [
      "Sang dans les selles, douleurs abdominales fortes, vomissements, ventre gonflé et dur, plus de gaz : urgence possible.",
      "Amaigrissement, fatigue inhabituelle, constipation récente et inhabituelle après 50 ans, alternance diarrhée et constipation.",
      "Constipation qui dure plus d'une à deux semaines malgré les conseils, ou utilisation de laxatifs depuis longtemps.",
      "Patient sous antidouleur à base de morphine ou de codéine, ou autre traitement qui constipe.",
      "Enfant, nourrisson, femme enceinte ou qui allaite.",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "sablier",
    "chiffres": [
      {
        "valeur": "1,5 L",
        "texte": "d'eau par jour environ"
      }
    ],
    "aDire": [
      "Buvez environ un litre et demi d'eau par jour, mangez des fruits et des légumes, et bougez.",
      "Allez aux toilettes dès que l'envie se présente, sans vous retenir."
    ]
  },
  {
    "id": "allergie-saisonniere",
    "titre": "Allergie saisonnière (rhume des foins)",
    "resume": {
      "souvent": "Lavage du nez + antihistaminique sans ordonnance (ex : cétirizine, loratadine), collyre antiallergique si les yeux piquent.",
      "regle": "Prévenir du risque de somnolence (conduite, alcool), surtout avec la cétirizine.",
      "alerte": "Sifflements, gêne pour respirer, toux la nuit (asthme), œil rouge et douloureux, fièvre."
    },
    "motif": "Le patient éternue, a le nez qui coule (écoulement clair) et les yeux qui piquent, souvent à la même saison chaque année, et demande un traitement contre l'allergie.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Quels sont les symptômes : éternuements, nez qui coule ou bouché, yeux rouges qui piquent, démangeaisons ?",
      "Est-ce que ça revient à la même saison ? Avez-vous déjà eu un diagnostic d'allergie ?",
      "Avez-vous de la fièvre ? (plutôt un rhume ou une infection)",
      "Avez-vous du mal à respirer, des sifflements, une toux la nuit ? Êtes-vous asthmatique ?",
      "Avez-vous mal à l'œil, une baisse de la vue ou une gêne à la lumière ?",
      "Conduisez-vous ? Travaillez-vous sur des machines ?",
      "Êtes-vous enceinte ou allaitez-vous ? Quels médicaments prenez-vous ?"
    ],
    "orientations": [
      "Lavage du nez au sérum physiologique ou à l'eau de mer, pour éliminer les pollens.",
      "Antihistaminique par voie orale disponible sans ordonnance chez l'adulte (ex : cétirizine, loratadine), une prise par jour, selon la notice.",
      "Si les yeux piquent : collyre antiallergique (ex : AllergiFlash, lévocabastine 0,05 %) ou lavage des yeux au sérum physiologique.",
      "Conseils : aérer tôt le matin ou tard le soir, garder les fenêtres fermées en voiture, se rincer les cheveux le soir, ne pas faire sécher le linge dehors pendant la saison des pollens."
    ],
    "vigilance": [
      "Les antihistaminiques peuvent faire dormir (surtout la cétirizine) : prudence pour la conduite, pas d'alcool.",
      "Vérifier l'âge minimum sur la notice.",
      "Collyre : ne pas toucher l'œil avec l'embout ; les porteurs de lentilles doivent vérifier la notice.",
      "Une allergie qui touche les bronches (asthme) ne se traite pas au comptoir."
    ],
    "passerLaMain": [
      "Sifflements, gêne respiratoire, toux la nuit ou à l'effort : possible asthme.",
      "Œil rouge et douloureux, baisse de la vue, gêne à la lumière, écoulement purulent.",
      "Fièvre, écoulement épais et coloré, douleur du visage.",
      "Enfant, femme enceinte ou qui allaite.",
      "Symptômes toute l'année, ou pas d'amélioration après quelques jours de traitement.",
      "Gonflement du visage, des lèvres ou de la gorge : urgence (15)."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "fleur",
    "chiffres": [
      {
        "valeur": "1 prise",
        "texte": "par jour pour la plupart des antihistaminiques"
      }
    ],
    "aDire": [
      "Ce médicament peut faire dormir : prudence au volant.",
      "Pendant la saison des pollens, rincez-vous les cheveux le soir et aérez tôt le matin."
    ]
  },
  {
    "id": "piqures-insectes",
    "titre": "Piqûres d'insectes et de tiques",
    "resume": {
      "souvent": "Nettoyer, appliquer du froid, puis un soin apaisant ; retirer le dard d'abeille ou la tique correctement.",
      "regle": "Tique : la retirer avec un tire-tique, désinfecter et surveiller la peau pendant un mois.",
      "alerte": "Gêne pour respirer, gonflement du visage ou de la gorge, malaise, urticaire sur tout le corps : appeler le 15."
    },
    "motif": "Le patient a été piqué (moustique, guêpe, abeille, tique…) et demande quelque chose pour calmer la douleur ou les démangeaisons.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Quel insecte ? Quand ? Combien de piqûres ?",
      "Où se trouve la piqûre ? (bouche, gorge, visage, œil)",
      "La zone est-elle très gonflée, rouge et chaude, est-ce que ça s'étend ?",
      "Avez-vous du mal à respirer, un gonflement des lèvres ou du visage, des plaques qui grattent sur tout le corps, un malaise ?",
      "Avez-vous déjà fait une réaction grave à une piqûre ? Avez-vous un stylo d'adrénaline ?",
      "Pour une tique : depuis combien de temps était-elle accrochée ? Y a-t-il une plaque rouge qui s'agrandit autour ?",
      "Quels médicaments prenez-vous ? Êtes-vous enceinte ?"
    ],
    "orientations": [
      "Abeille : retirer le dard en le grattant avec l'ongle ou une carte, sans le pincer (pour ne pas injecter plus de venin).",
      "Laver à l'eau et au savon, puis appliquer un antiseptique.",
      "Appliquer du froid (glaçon dans un linge, quelques minutes) pour calmer la douleur et le gonflement.",
      "Soin apaisant ou crème contre les démangeaisons selon la notice ; antihistaminique par voie orale si les démangeaisons sont fortes (adulte).",
      "Tique : la retirer avec un tire-tique en tournant, sans l'écraser ni mettre de produit avant ; désinfecter ; noter la date ; surveiller la peau pendant 30 jours."
    ],
    "vigilance": [
      "Certaines crèmes antihistaminiques rendent la peau sensible au soleil : ne pas s'exposer après application.",
      "Ne pas gratter : risque d'infection.",
      "Pour une tique, ne jamais l'endormir avec de l'éther ou de l'alcool avant de la retirer.",
      "Vérifier l'âge minimum des produits chez l'enfant."
    ],
    "passerLaMain": [
      "Gêne pour respirer, gonflement du visage, des lèvres ou de la gorge, malaise, urticaire étendue, vomissements : urgence, appeler le 15.",
      "Piqûre dans la bouche ou la gorge.",
      "Piqûres multiples (plusieurs guêpes ou abeilles), enfant en bas âge.",
      "Antécédent de réaction grave à une piqûre.",
      "Gonflement très étendu, qui s'aggrave, ou signes d'infection (chaleur, pus, fièvre).",
      "Après une piqûre de tique : plaque rouge qui s'agrandit, fièvre ou douleurs dans les jours ou semaines qui suivent."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "insecte",
    "chiffres": [
      {
        "valeur": "30 jours",
        "texte": "de surveillance après une piqûre de tique"
      }
    ],
    "aDire": [
      "Surveillez la peau pendant un mois : si une plaque rouge s'agrandit, consultez.",
      "Si vous avez du mal à respirer ou si votre visage gonfle, appelez le 15."
    ]
  },
  {
    "id": "brulures-peau",
    "titre": "Petites brûlures et coups de soleil",
    "resume": {
      "souvent": "Refroidir 15 minutes sous l'eau tempérée, puis crème ou pansement adapté aux brûlures légères.",
      "regle": "Ni glace, ni beurre, ni dentifrice ; ne jamais percer les cloques.",
      "alerte": "Brûlure plus grande que la paume de la main, profonde, au visage, aux mains, aux pieds, aux parties génitales, électrique ou chimique."
    },
    "motif": "Le patient s'est brûlé (eau chaude, four, fer à repasser, soleil…) et demande comment le soigner.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Comment est-ce arrivé ? (liquide chaud, flamme, électricité, produit chimique, soleil)",
      "Quand ? La brûlure a-t-elle été refroidie à l'eau ?",
      "Quelle taille fait-elle ? Plus ou moins que la paume de la main de la personne ?",
      "Où ? (visage, mains, pieds, plis, parties génitales)",
      "Y a-t-il des cloques ? La peau est-elle blanche, cartonnée, noire ou insensible ?",
      "Avez-vous de la fièvre, des frissons, un malaise ? (coup de soleil étendu)",
      "Votre vaccin contre le tétanos est-il à jour ?"
    ],
    "orientations": [
      "Refroidir immédiatement sous l'eau tempérée pendant environ 15 minutes ; retirer bagues et bracelets avant que ça gonfle.",
      "Petite brûlure superficielle (rougeur sans cloque) : crème ou émulsion pour brûlures légères, ou pansement gras stérile.",
      "Petite cloque intacte : la laisser intacte et la protéger avec un pansement adapté (ex : hydrocolloïde).",
      "Paracétamol si la douleur est gênante.",
      "Coup de soleil : se mettre à l'ombre, boire, appliquer une émulsion apaisante ; ne plus s'exposer pendant quelques jours."
    ],
    "vigilance": [
      "Pas de glace directement sur la peau, pas de beurre, d'huile ou de dentifrice.",
      "Ne jamais percer ni arracher les cloques.",
      "Ne pas mettre de produit coloré qui masquerait l'aspect de la brûlure.",
      "Vérifier que la vaccination contre le tétanos est à jour."
    ],
    "passerLaMain": [
      "Brûlure plus grande que la paume de la main, ou cloques étendues.",
      "Brûlure profonde : peau blanche, cartonnée, noire ou insensible.",
      "Brûlure du visage, du cou, des mains, des pieds, des plis ou des parties génitales.",
      "Brûlure électrique ou chimique, ou brûlure par inhalation de fumée : urgence.",
      "Nourrisson, enfant, personne âgée ou fragile.",
      "Coup de soleil avec fièvre, frissons, maux de tête, vomissements ou malaise.",
      "Signes d'infection : rougeur qui s'étend, pus, fièvre."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "soleil",
    "chiffres": [
      {
        "valeur": "15 min",
        "texte": "sous l'eau tempérée"
      }
    ],
    "aDire": [
      "Ne percez pas les cloques et ne mettez ni glace, ni beurre, ni dentifrice.",
      "Si la brûlure est grande, profonde ou sur le visage, il faut consulter."
    ]
  },
  {
    "id": "poux",
    "titre": "Poux",
    "resume": {
      "souvent": "Produit anti-poux (de préférence à action mécanique, ex : diméticone) + peignage soigneux au peigne fin, puis 2e application selon la notice.",
      "regle": "On ne traite que les personnes qui ont des poux vivants, jamais en prévention.",
      "alerte": "Nourrisson, femme enceinte ou qui allaite, personne asthmatique, cuir chevelu irrité ou infecté, échec après deux traitements bien faits."
    },
    "motif": "Des poux ont été trouvés (souvent chez un enfant) et la famille demande un traitement.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Avez-vous vu des poux vivants, ou seulement des lentes ? Les lentes sont-elles collées près de la racine ?",
      "Avez-vous déjà fait un traitement ? Lequel, quand, et a-t-il été renouvelé ?",
      "La personne est-elle asthmatique ? A-t-elle des allergies ?",
      "Le cuir chevelu est-il abîmé, avec des croûtes ou des plaies ?",
      "Êtes-vous enceinte ou allaitez-vous ? (si c'est pour vous)"
    ],
    "orientations": [
      "Produit à action mécanique, qui étouffe les poux (ex : à base de diméticone) : à appliquer selon la notice (durée de pose, rinçage).",
      "Peigner ensuite mèche par mèche avec un peigne fin, sur cheveux mouillés, puis tous les 2 à 3 jours pendant 2 semaines.",
      "Refaire une application après 7 à 10 jours selon la notice, pour tuer les poux sortis des lentes.",
      "Vérifier la tête de toute la famille et ne traiter que les personnes qui ont des poux.",
      "Laver à 60 °C le linge en contact avec la tête (taies, bonnets, écharpes) ; enfermer dans un sac fermé pendant quelques jours ce qui ne se lave pas."
    ],
    "vigilance": [
      "Certains produits sont inflammables : pas de cigarette, de flamme ni de sèche-cheveux pendant l'application.",
      "Respecter l'âge minimum indiqué sur la notice.",
      "Les produits insecticides et les sprays demandent des précautions chez l'asthmatique et le jeune enfant.",
      "Pas de traitement préventif : il n'empêche pas les poux et favorise les résistances."
    ],
    "passerLaMain": [
      "Nourrisson ou enfant plus jeune que l'âge minimum du produit.",
      "Femme enceinte ou qui allaite, personne asthmatique ou allergique.",
      "Cuir chevelu irrité, avec des plaies ou des croûtes infectées.",
      "Poux toujours présents après deux traitements bien réalisés."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "peigne",
    "chiffres": [
      {
        "valeur": "7 à 10 j",
        "texte": "avant la deuxième application"
      },
      {
        "valeur": "60 °C",
        "texte": "pour laver le linge"
      }
    ],
    "aDire": [
      "Refaites une application 7 à 10 jours plus tard, et peignez au peigne fin tous les 2 à 3 jours.",
      "On ne traite que les personnes qui ont des poux, pas toute la famille par précaution."
    ]
  },
  {
    "id": "cystite",
    "titre": "Brûlures urinaires (cystite)",
    "resume": {
      "souvent": "Accueillir discrètement, poser les questions, puis passer la main : la prise en charge relève du pharmacien ou du médecin.",
      "regle": "Le test urinaire (bandelette) et l'antibiotique éventuel sont réservés au pharmacien formé.",
      "alerte": "Fièvre, frissons, douleur dans le dos ou sur le côté, vomissements, homme, femme enceinte : consultation médicale rapide."
    },
    "motif": "Une patiente a des brûlures en urinant et des envies d'uriner fréquentes, et demande un traitement.",
    "questions": [
      "Pour qui est-ce ? Quel âge ?",
      "Depuis quand ? Brûlures en urinant, envies fréquentes, sang dans les urines ?",
      "Avez-vous de la fièvre, des frissons, une douleur dans le bas du dos ou sur le côté ?",
      "Avez-vous des pertes inhabituelles ou des démangeaisons ?",
      "Avez-vous déjà eu ces symptômes ? Combien de fois cette année ?",
      "Êtes-vous enceinte ? Êtes-vous diabétique ou sous traitement qui baisse les défenses ?",
      "Quels médicaments prenez-vous ?"
    ],
    "orientations": [
      "Proposer un endroit discret pour parler, puis passer la main au pharmacien : il peut, sous conditions, réaliser une bandelette urinaire et délivrer un antibiotique sans ordonnance s'il est formé.",
      "Conseils en attendant : boire au moins 1,5 L d'eau par jour, uriner souvent sans se retenir, uriner après les rapports sexuels.",
      "Paracétamol possible si la douleur est gênante."
    ],
    "vigilance": [
      "Ne jamais conseiller un antibiotique au comptoir : c'est le rôle du pharmacien formé ou du médecin.",
      "Une cystite chez l'homme, la femme enceinte ou l'enfant n'est jamais simple : consultation.",
      "Les produits à base de canneberge ne traitent pas une cystite déclarée."
    ],
    "passerLaMain": [
      "Toujours : la prise en charge relève du pharmacien ou du médecin.",
      "Fièvre, frissons, douleur dans le dos ou sur le côté, vomissements : possible infection du rein, consultation le jour même.",
      "Homme, enfant, femme enceinte, personne âgée ou fragile.",
      "Sang important dans les urines, cystites à répétition (plusieurs fois par an), symptômes qui durent.",
      "Signes de gravité (gêne respiratoire, malaise, douleur thoracique, confusion, somnolence anormale) : prévenir immédiatement le pharmacien, qui oriente si besoin vers le 15."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "urine",
    "chiffres": [
      {
        "valeur": "1,5 L",
        "texte": "d'eau par jour au minimum"
      }
    ],
    "aDire": [
      "Je vais demander au pharmacien de vous recevoir dans un endroit plus discret.",
      "En attendant, buvez beaucoup d'eau."
    ]
  },
  {
    "id": "contraception-urgence",
    "titre": "Contraception d'urgence",
    "resume": {
      "souvent": "Passer la main au pharmacien tout de suite, avec discrétion et sans jugement.",
      "regle": "Plus elle est prise tôt, plus elle est efficace : ne jamais faire attendre la personne.",
      "alerte": "Retard de règles, douleur dans le bas du ventre, saignements inhabituels après la prise : consulter."
    },
    "motif": "Une personne demande la « pilule du lendemain » après un rapport non protégé ou un oubli de contraception.",
    "questions": [
      "Ne pas faire l'entretien au comptoir : proposer tout de suite un endroit discret et appeler le pharmacien.",
      "Si la personne en parle d'elle-même, noter seulement depuis combien de temps a eu lieu le rapport : cela aide le pharmacien à choisir."
    ],
    "orientations": [
      "Le pharmacien délivre la contraception d'urgence après un court entretien. Elle est délivrée sans ordonnance, gratuitement, à toutes les femmes, mineures comprises, et de façon anonyme pour les mineures qui le souhaitent.",
      "Deux médicaments existent : le lévonorgestrel (à prendre dans les 72 heures, ex : Norlevo) et l'ulipristal (dans les 120 heures, ex : EllaOne). Le choix revient au pharmacien.",
      "Le stérilet au cuivre posé par un médecin ou une sage-femme dans les 5 jours est la méthode la plus efficace : le pharmacien peut en parler."
    ],
    "vigilance": [
      "Confidentialité absolue : ne pas en parler à voix haute ni devant d'autres clients.",
      "Aucun jugement, aucune remarque.",
      "Certains médicaments (par exemple certains traitements de l'épilepsie, la rifampicine, le millepertuis) diminuent l'efficacité : c'est au pharmacien de le vérifier.",
      "Après la prise : utiliser des préservatifs jusqu'aux règles suivantes ; faire un test de grossesse en cas de retard de règles.",
      "Un rapport non protégé expose aussi aux infections sexuellement transmissibles : le pharmacien peut orienter vers un dépistage."
    ],
    "passerLaMain": [
      "Toujours, immédiatement : c'est le pharmacien qui délivre la contraception d'urgence.",
      "Si la personne semble en détresse, mineure en difficulté, ou parle de violences : prévenir le pharmacien en priorité."
    ],
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "icone": "horloge",
    "chiffres": [
      {
        "valeur": "72 h",
        "texte": "délai du lévonorgestrel"
      },
      {
        "valeur": "120 h",
        "texte": "délai de l'ulipristal"
      }
    ],
    "aDire": [
      "Je vais chercher le pharmacien, il va vous recevoir tout de suite.",
      "C'est confidentiel : nous allons dans un endroit plus calme."
    ]
  }
];
