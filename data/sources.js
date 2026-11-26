/*
 * Sources : notices, bases officielles, documents de référence.
 * "generales" : sources valables pour tout le guide.
 * "parFiche" : sources par contenu. La clé (ex. "situation-1") doit être l'"id" d'une fiche
 *   ou d'une animation, ou "medicaments", "quiz-j0", "quiz-j30".
 * "type" : par exemple notice, base officielle, recommandation, document interne.
 * "lien" : adresse web commençant par https:// (laisser "" si aucune).
 * "verification" : qui a relu l'ensemble des sources et quand (une seule date pour tout le guide).
 * "consulteLe" (facultatif) : date de consultation d'une source précise, par exemple "2026-11-26".
 */
window.GUIDE = window.GUIDE || {};
GUIDE.sources = {
  "generales": [
    {
      "titre": "Base de données publique des médicaments (notices et RCP)",
      "type": "Base officielle",
      "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
    },
    {
      "titre": "ANSM – Agence nationale de sécurité du médicament",
      "type": "Base officielle",
      "lien": "https://ansm.sante.fr/"
    },
    {
      "titre": "HAS – Haute Autorité de santé (recommandations)",
      "type": "Recommandation",
      "lien": "https://www.has-sante.fr/"
    },
    {
      "titre": "Cespharm – Comité d'éducation sanitaire et sociale de la pharmacie française",
      "type": "Document de référence",
      "lien": "https://www.cespharm.fr/"
    },
    {
      "titre": "Meddispar – Médicaments à dispensation particulière",
      "type": "Base officielle",
      "lien": "https://www.meddispar.fr/"
    },
    {
      "titre": "Ordre national des pharmaciens",
      "type": "Document de référence",
      "lien": "https://www.ordre.pharmacien.fr/"
    }
  ],
  "parFiche": {
    "mal-de-gorge": [
      {
        "titre": "Notices des médicaments cités dans la fiche (pastilles et sprays pour la gorge, paracétamol)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Ordre national des pharmaciens – Délivrance sans ordonnance d'antibiotiques suite à un test positif",
        "type": "Document de référence",
        "lien": "https://www.ordre.pharmacien.fr/les-communications/focus-sur/les-actualites/delivrance-sans-ordonnance-d-antibiotiques-suite-a-un-test-positif-par-les-pharmaciens-d-officine-publication-des-textes"
      },
      {
        "titre": "Ordre national des pharmaciens – Dispensation de médicaments suite à un TROD : évolution des modalités",
        "type": "Document de référence",
        "lien": "https://www.ordre.pharmacien.fr/les-communications/focus-sur/les-actualites/dispensation-de-medicaments-suite-a-un-trod-a-l-officine-evolution-des-modalites-de-prise-en-charge-et-de-formation"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ],
    "toux": [
      {
        "titre": "Notices des médicaments cités dans la fiche (antitussifs, mucolytiques)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Vidal – Codéine, dextrométhorphane, éthylmorphine et noscapine : prescription médicale obligatoire (arrêté du 12 juillet 2017)",
        "type": "Document de référence",
        "lien": "https://www.vidal.fr/actualites/21716-codeine-dextrometorphane-ethylmorphine-et-noscapine-prescription-medicale-obligatoire-liste-des-produits-concernes.html"
      },
      {
        "titre": "Afssaps (ANSM) – Lettre aux professionnels de santé : mucolytiques contre-indiqués chez le nourrisson de moins de 2 ans (avril 2010)",
        "type": "Base officielle",
        "lien": "https://archive.ansm.sante.fr/content/download/25633/339709/version/2/file/lp-100429-MucolytiquesM%C3%A9decins.pdf"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ],
    "rhume": [
      {
        "titre": "ANSM – Rhume : ordonnance obligatoire pour toute dispensation de médicament à base de pseudoéphédrine (10/12/2024)",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/rhume-ordonnance-obligatoire-pour-toute-dispensation-de-medicament-a-base-de-pseudoephedrine"
      },
      {
        "titre": "Notices des médicaments cités dans la fiche (sérum physiologique, paracétamol, antihistaminiques)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ],
    "douleur-fievre": [
      {
        "titre": "ANSM – Dossier thématique : le paracétamol",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/dossiers-thematiques/le-paracetamol"
      },
      {
        "titre": "ANSM – Paracétamol, AINS et alpha-amylase accessibles uniquement sur demande aux pharmaciens à compter du 15 janvier 2020",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/paracetamol-anti-inflammatoires-non-steroidiens-ains-et-alpha-amylase-accessibles-uniquement-sur-demande-aux-pharmaciens-a-compter-du-15-janvier-2020"
      },
      {
        "titre": "ANSM – AINS chez les femmes enceintes : améliorer l'information sur les risques (contre-indication à partir du 6e mois)",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/anti-inflammatoires-non-steroidiens-ains-chez-les-femmes-enceintes-ameliorer-linformation-sur-les-risques-pour-un-meilleur-usage"
      },
      {
        "titre": "ANSM – Anti-inflammatoires non stéroïdiens (AINS) et complications infectieuses graves (18/04/2019)",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/anti-inflammatoires-non-steroidiens-ains-et-complications-infectieuses-graves"
      },
      {
        "titre": "Notices des médicaments cités dans la fiche (paracétamol, ibuprofène, aspirine)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ],
    "diarrhee": [
      {
        "titre": "Notices des médicaments cités dans la fiche (lopéramide, racécadotril, diosmectite, SRO)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "ANSM – Médicaments à base d'argile dans le traitement symptomatique de la diarrhée aiguë chez l'enfant (diosmectite)",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/medicaments-a-base-dargile-dans-le-traitement-symptomatique-de-la-diarrhee-aigue-chez-lenfant"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ],
    "brulures-estomac": [
      {
        "titre": "Notices des médicaments cités dans la fiche (alginates, antiacides, IPP 20 mg)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "HAS – Haute Autorité de santé (recommandations)",
        "type": "Recommandation",
        "lien": "https://www.has-sante.fr/"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ],
    "medicaments": [
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Meddispar – Médicaments à dispensation particulière",
        "type": "Base officielle",
        "lien": "https://www.meddispar.fr/"
      },
      {
        "titre": "ANSM – Dossier thématique : le paracétamol",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/dossiers-thematiques/le-paracetamol"
      },
      {
        "titre": "ANSM – Rhume : ordonnance obligatoire pour toute dispensation de médicament à base de pseudoéphédrine (10/12/2024)",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/rhume-ordonnance-obligatoire-pour-toute-dispensation-de-medicament-a-base-de-pseudoephedrine"
      }
    ],
    "ains": [
      {
        "titre": "Notices des médicaments cités dans la fiche (ibuprofène)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Illustration de l'appareil digestif sans légendes : Mariana Ruiz Villarreal (LadyofHats), Wikimedia Commons",
        "type": "Illustration (À COMPLÉTER : confirmer « domaine public » sur la page du fichier)",
        "lien": "https://commons.wikimedia.org/"
      }
    ],
    "ipp": [
      {
        "titre": "Notices des médicaments cités dans la fiche (oméprazole)",
        "type": "Notice",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Base de données publique des médicaments (notices et RCP)",
        "type": "Base officielle",
        "lien": "https://base-donnees-publique.medicaments.gouv.fr/"
      },
      {
        "titre": "Illustration de l'appareil digestif sans légendes : Mariana Ruiz Villarreal (LadyofHats), Wikimedia Commons",
        "type": "Illustration (À COMPLÉTER : confirmer « domaine public » sur la page du fichier)",
        "lien": "https://commons.wikimedia.org/"
      }
    ],
    "quiz-j0": [
      {
        "titre": "Fiches du guide : douleur et fièvre, toux, diarrhée, brûlures d'estomac, mal de gorge",
        "type": "Document interne",
        "lien": ""
      },
      {
        "titre": "ANSM – Dossier thématique : le paracétamol",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/dossiers-thematiques/le-paracetamol"
      },
      {
        "titre": "Ordre national des pharmaciens – Délivrance sans ordonnance d'antibiotiques suite à un test positif",
        "type": "Document de référence",
        "lien": "https://www.ordre.pharmacien.fr/les-communications/focus-sur/les-actualites/delivrance-sans-ordonnance-d-antibiotiques-suite-a-un-test-positif-par-les-pharmaciens-d-officine-publication-des-textes"
      }
    ],
    "quiz-j30": [
      {
        "titre": "Fiches du guide, tableau des médicaments et animations",
        "type": "Document interne",
        "lien": ""
      },
      {
        "titre": "ANSM – Rhume : ordonnance obligatoire pour toute dispensation de médicament à base de pseudoéphédrine (10/12/2024)",
        "type": "Base officielle",
        "lien": "https://ansm.sante.fr/actualites/rhume-ordonnance-obligatoire-pour-toute-dispensation-de-medicament-a-base-de-pseudoephedrine"
      }
    ]
  },
  "verification": {
    "par": "À COMPLÉTER",
    "le": "À COMPLÉTER"
  }
};
