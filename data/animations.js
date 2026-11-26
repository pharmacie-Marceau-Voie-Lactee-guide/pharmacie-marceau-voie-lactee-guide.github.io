/*
 * Animations « Comment agit une classe de médicaments ».
 * Une animation = un bloc { ... } ; elle s'affiche seule sur sa propre page.
 * Chaque étape met en surbrillance une zone du schéma. Zones disponibles :
 *   "bouche", "estomac", "intestin", "foie", "sang", "coeur", "poumons", "cible", "rein"
 * "temps" : repère de durée affiché dans la chronologie (facultatif).
 * "cibleLabel" : nom affiché pour la zone "cible" (ex : "Zone douloureuse (ex : épaule)").
 * Une même zone peut servir à plusieurs étapes (ex : "estomac" au début et à la fin pour les IPP).
 */
window.GUIDE = window.GUIDE || {};
GUIDE.animations = [
  {
    "id": "ains",
    "titre": "Comment agit un anti-inflammatoire (AINS), exemple de l'ibuprofène",
    "classe": "Anti-inflammatoires non stéroïdiens (AINS)",
    "introduction": "Cette animation suit un comprimé d'ibuprofène depuis la prise jusqu'à l'élimination. Elle montre aussi d'où viennent les principaux risques des AINS, utiles à connaître au comptoir.",
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "etapes": [
      {
        "zone": "bouche",
        "titre": "Étape 1 : la prise",
        "texte": "Le comprimé est avalé avec un verre d'eau, de préférence pendant un repas pour limiter l'irritation de l'estomac. Il passe par le pharynx puis descend dans l'œsophage.",
        "temps": "0 min : la prise"
      },
      {
        "zone": "estomac",
        "titre": "Étape 2 : l'estomac, premier point de vigilance",
        "texte": "Les prostaglandines protègent normalement la paroi de l'estomac. En les diminuant partout dans le corps, les AINS fragilisent cette protection : c'est l'origine du risque de brûlures, d'ulcère et de saignement digestif.",
        "temps": "Quelques minutes à 1 h (plus long si pris pendant un repas)"
      },
      {
        "zone": "intestin",
        "titre": "Étape 3 : l'absorption",
        "texte": "L'estomac se vide dans le duodénum, puis le médicament avance dans l'intestin grêle. C'est là qu'il traverse la paroi et passe dans le sang.",
        "temps": "Environ 30 min à 1 h après la prise"
      },
      {
        "zone": "sang",
        "titre": "Étape 4 : le transport",
        "texte": "Le sang de l'intestin part d'abord vers le foie par la veine porte, puis rejoint le cœur par la veine cave. Le cœur l'envoie aux poumons et le récupère, puis l'aorte le distribue dans tout le corps. Le médicament ne va donc pas seulement là où on a mal : c'est pour cela qu'un AINS peut agir sur l'estomac et les reins, même si la douleur est à l'épaule.",
        "temps": "Pic dans le sang environ 1 à 2 h après la prise"
      },
      {
        "zone": "cible",
        "titre": "Étape 5 : l'action sur la zone douloureuse",
        "texte": "Par l'aorte puis l'artère qui va vers le bras, le médicament arrive à l'épaule douloureuse. Là, des enzymes appelées COX fabriquent des prostaglandines, qui entretiennent la douleur, l'inflammation et la fièvre. L'AINS bloque les COX : moins de prostaglandines, donc moins de douleur, d'inflammation et de fièvre.",
        "temps": "Soulagement en général 30 min à 1 h après la prise ; effet pendant 4 à 6 h"
      },
      {
        "zone": "rein",
        "titre": "Étape 6 : l'élimination, second point de vigilance",
        "texte": "Le sang revient au cœur, repart par l'aorte et arrive aux reins par les artères rénales. Le médicament, transformé par le foie, est éliminé dans les urines. Les prostaglandines aident aussi les reins à bien fonctionner : en cas de déshydratation, de maladie des reins ou d'association avec certains traitements de la tension ou diurétiques, l'AINS peut abîmer les reins.",
        "temps": "Éliminé en grande partie dans les 24 h"
      }
    ],
    "cibleLabel": "Zone douloureuse (ex : épaule)"
  },
  {
    "id": "ipp",
    "titre": "Comment agit un inhibiteur de la pompe à protons (IPP)",
    "classe": "Inhibiteurs de la pompe à protons (IPP)",
    "introduction": "Cette animation explique pourquoi un IPP ne soulage pas tout de suite et pourquoi il se prend avant un repas. Exemple : oméprazole.",
    "validation": {
      "par": "À COMPLÉTER",
      "le": "À COMPLÉTER"
    },
    "etapes": [
      {
        "zone": "bouche",
        "titre": "Étape 1 : la prise",
        "texte": "La gélule ou le comprimé est avalé entier, sans le croquer ni l'écraser, avant un repas (souvent le matin).",
        "temps": "0 min : la prise, avant le repas"
      },
      {
        "zone": "estomac",
        "titre": "Étape 2 : traverser l'estomac sans être détruit",
        "texte": "Le médicament est fragile dans l'acide. Son enrobage gastro-résistant le protège pendant la traversée de l'estomac : c'est pourquoi il ne faut pas le croquer.",
        "temps": "Quelques minutes"
      },
      {
        "zone": "intestin",
        "titre": "Étape 3 : l'absorption",
        "texte": "L'estomac se vide dans le duodénum. L'enrobage se dissout dans l'intestin grêle, moins acide, et le médicament passe dans le sang.",
        "temps": "Absorption dans l'heure qui suit"
      },
      {
        "zone": "foie",
        "titre": "Étape 4 : le foie",
        "texte": "Le sang de l'intestin arrive au foie par la veine porte. Le foie transforme le médicament grâce à des enzymes ; ces mêmes enzymes servent à d'autres médicaments, ce qui explique certaines interactions, par exemple entre l'oméprazole et le clopidogrel.",
        "temps": "Juste après l'absorption"
      },
      {
        "zone": "sang",
        "titre": "Étape 5 : le transport",
        "texte": "Du foie, le sang rejoint le cœur par la veine cave, passe par les poumons, revient au cœur, puis l'aorte l'envoie vers les artères de l'estomac, jusqu'aux cellules qui fabriquent l'acide.",
        "temps": "Pic dans le sang environ 1 à 2 h après la prise"
      },
      {
        "zone": "estomac",
        "titre": "Étape 6 : l'action sur les pompes à acide",
        "texte": "Ces cellules libèrent l'acide grâce à des « pompes à protons », activées par les repas. L'IPP bloque les pompes actives : moins d'acide, donc moins de brûlures. Toutes les pompes ne sont pas actives en même temps, d'où un effet complet après quelques jours. Pour un soulagement immédiat, un antiacide ou un alginate est plus adapté.",
        "temps": "Bloque les pompes environ 24 h ; effet complet en 3 à 5 jours"
      }
    ]
  }
];
