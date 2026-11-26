/*
 * Quiz. Chaque quiz contient une liste de questions.
 * "choix" : 2 à 6 réponses possibles.
 * "bonneReponse" : position de la bonne réponse dans "choix", EN COMPTANT À PARTIR DE 0
 *   (0 = première réponse, 1 = deuxième, 2 = troisième, 3 = quatrième).
 * "explication" : affichée après la réponse, qu'elle soit juste ou fausse.
 * Les réponses sont mélangées à l'affichage ; "bonneReponse" suit l'ordre écrit ici.
 */
window.GUIDE = window.GUIDE || {};
GUIDE.quiz = [
  {
    "id": "j0",
    "titre": "Quiz J0",
    "description": "Les règles de base du comptoir, à faire le premier jour après lecture des fiches.",
    "questions": [
      {
        "question": "Quelle est la dose maximale de paracétamol par jour pour un adulte de plus de 50 kg, sans avis médical ?",
        "choix": [
          "1 g",
          "3 g",
          "6 g",
          "Il n'y a pas de maximum"
        ],
        "bonneReponse": 1,
        "explication": "1 g par prise, 3 g par jour au maximum sans avis médical. Une dose de 4 g ne s'envisage que sur avis médical."
      },
      {
        "question": "Quel délai minimum faut-il respecter entre deux prises de paracétamol chez l'adulte ?",
        "choix": [
          "1 heure",
          "2 heures",
          "4 heures",
          "12 heures"
        ],
        "bonneReponse": 2,
        "explication": "Au moins 4 heures entre deux prises."
      },
      {
        "question": "Depuis janvier 2020, où se trouvent le paracétamol, l'ibuprofène et l'aspirine à la pharmacie ?",
        "choix": [
          "En libre accès dans les rayons",
          "Derrière le comptoir",
          "Uniquement en réserve, sur ordonnance",
          "En parapharmacie"
        ],
        "bonneReponse": 1,
        "explication": "Ils ne sont plus en libre accès : ils sont derrière le comptoir pour que chaque délivrance s'accompagne d'un conseil."
      },
      {
        "question": "Une femme enceinte de 7 mois demande de l'ibuprofène pour un mal de dos. Que faites-vous ?",
        "choix": [
          "Je délivre la plus petite dose",
          "Je délivre en conseillant de le prendre au repas",
          "Je passe la main au pharmacien : les AINS sont contre-indiqués à partir du 6e mois",
          "Je propose de l'aspirine à la place"
        ],
        "bonneReponse": 2,
        "explication": "Ibuprofène et aspirine sont contre-indiqués à partir du début du 6e mois de grossesse. Toute femme enceinte doit être vue par le pharmacien."
      },
      {
        "question": "Un patient a une toux grasse et demande en plus un sirop contre la toux sèche. Que répondez-vous ?",
        "choix": [
          "Je donne les deux, c'est plus efficace",
          "Je n'associe pas un antitussif et un mucolytique",
          "Je donne seulement le sirop contre la toux sèche",
          "Je conseille de doubler la dose de mucolytique"
        ],
        "bonneReponse": 1,
        "explication": "L'antitussif bloque la toux, alors que la toux grasse sert à évacuer les sécrétions fluidifiées par le mucolytique : les associer bloque les sécrétions dans les bronches."
      },
      {
        "question": "Un adulte a une diarrhée avec de la fièvre et du sang dans les selles. Que faites-vous ?",
        "choix": [
          "Je délivre du lopéramide",
          "Je délivre de la diosmectite",
          "Je passe la main au pharmacien",
          "Je conseille de ne plus boire pour limiter les selles"
        ],
        "bonneReponse": 2,
        "explication": "Fièvre et sang dans les selles sont des signes d'alerte. Le lopéramide est contre-indiqué dans ce cas."
      },
      {
        "question": "Un homme de 60 ans demande « quelque chose pour l'estomac » : brûlure dans la poitrine qui va vers le bras gauche, il transpire. Que faites-vous ?",
        "choix": [
          "Je délivre un alginate",
          "Je délivre un IPP",
          "Je préviens immédiatement le pharmacien : possible urgence cardiaque",
          "Je lui conseille de revenir s'il n'est pas soulagé demain"
        ],
        "bonneReponse": 2,
        "explication": "Une douleur thoracique qui irradie vers le bras, avec sueurs, peut être un infarctus : c'est une urgence."
      },
      {
        "question": "Un patient prend un alginate pour ses brûlures d'estomac et un autre traitement le matin. Quel conseil donner ?",
        "choix": [
          "Les prendre en même temps",
          "Espacer les prises d'environ 2 heures",
          "Arrêter son autre traitement",
          "Prendre l'alginate à jeun uniquement"
        ],
        "bonneReponse": 1,
        "explication": "Les antiacides et alginates gênent l'absorption des autres médicaments : 2 heures d'écart."
      },
      {
        "question": "Après un test rapide d'angine (TROD) positif, qui peut délivrer un antibiotique sans ordonnance ?",
        "choix": [
          "L'apprenti préparateur",
          "Le préparateur",
          "Le pharmacien formé à cette procédure",
          "Personne, il faut toujours une ordonnance"
        ],
        "bonneReponse": 2,
        "explication": "Le TROD et la délivrance d'un antibiotique sans ordonnance relèvent du pharmacien formé, selon des conditions précises."
      },
      {
        "question": "Quelle question devez-vous poser avant presque tout conseil ?",
        "choix": [
          "Quel est votre numéro de sécurité sociale ?",
          "Prenez-vous d'autres médicaments en ce moment ?",
          "Quelle marque préférez-vous ?",
          "Avez-vous une mutuelle ?"
        ],
        "bonneReponse": 1,
        "explication": "Les autres médicaments (anticoagulant, paracétamol caché, traitement de la tension...) changent souvent le conseil."
      }
    ]
  },
  {
    "id": "j30",
    "titre": "Quiz J30",
    "description": "Approfondissement après un mois au comptoir : vigilance, interactions et mécanismes.",
    "questions": [
      {
        "question": "À partir de quel âge les mucolytiques (carbocistéine, acétylcystéine) peuvent-ils être utilisés ?",
        "choix": [
          "Dès la naissance",
          "À partir de 6 mois",
          "Ils sont contre-indiqués avant 2 ans",
          "À partir de 18 ans seulement"
        ],
        "bonneReponse": 2,
        "explication": "Les mucolytiques sont contre-indiqués chez l'enfant de moins de 2 ans."
      },
      {
        "question": "La diosmectite (ex : Smecta) n'est plus recommandée chez :",
        "choix": [
          "L'adulte de plus de 65 ans",
          "L'enfant de moins de 2 ans et la femme enceinte ou qui allaite",
          "Les sportifs",
          "Les patients diabétiques"
        ],
        "bonneReponse": 1,
        "explication": "Elle n'est plus recommandée chez l'enfant de moins de 2 ans ni chez la femme enceinte ou allaitante."
      },
      {
        "question": "Pendant combien de temps au maximum un IPP sans ordonnance peut-il être pris ?",
        "choix": [
          "3 jours",
          "14 jours",
          "3 mois",
          "Sans limite"
        ],
        "bonneReponse": 1,
        "explication": "14 jours au maximum. Au-delà, ou sans amélioration, le patient doit consulter."
      },
      {
        "question": "Un patient sous apixaban (Eliquis) demande de l'ibuprofène. Quel est le risque principal ?",
        "choix": [
          "Somnolence",
          "Saignement",
          "Constipation",
          "Aucun risque"
        ],
        "bonneReponse": 1,
        "explication": "AINS + anticoagulant = risque hémorragique. Pas d'AINS en conseil chez ces patients : passer la main."
      },
      {
        "question": "Quelle est la dose maximale d'ibuprofène par jour en automédication chez l'adulte ?",
        "choix": [
          "400 mg",
          "1 200 mg",
          "2 400 mg",
          "3 g"
        ],
        "bonneReponse": 1,
        "explication": "1 200 mg par jour au maximum en automédication, à la dose la plus faible et pendant la durée la plus courte."
      },
      {
        "question": "Une patiente sous ramipril se plaint d'une toux sèche qui dure depuis des semaines. Que faites-vous ?",
        "choix": [
          "Je délivre un antitussif",
          "Je délivre un mucolytique",
          "Je passe la main : cette toux peut être un effet du ramipril",
          "Je lui conseille d'arrêter le ramipril"
        ],
        "bonneReponse": 2,
        "explication": "Les IEC (ramipril, périndopril...) peuvent provoquer une toux sèche. Le patient ne doit jamais arrêter son traitement de lui-même : le pharmacien évalue."
      },
      {
        "question": "Pourquoi faut-il éviter l'ibuprofène chez un enfant qui a la varicelle ?",
        "choix": [
          "Il est inefficace sur la fièvre",
          "Il augmente le risque de complications infectieuses graves de la peau",
          "Il fait trop dormir",
          "Il donne des diarrhées"
        ],
        "bonneReponse": 1,
        "explication": "Les AINS sont associés à des complications infectieuses graves de la peau en cas de varicelle : préférer le paracétamol et passer la main pour un enfant."
      },
      {
        "question": "Comment agissent les AINS sur la douleur et l'inflammation ?",
        "choix": [
          "Ils endorment les nerfs",
          "Ils bloquent les enzymes COX qui fabriquent les prostaglandines",
          "Ils tuent les bactéries",
          "Ils diluent le sang"
        ],
        "bonneReponse": 1,
        "explication": "En bloquant les COX, ils réduisent les prostaglandines, qui entretiennent douleur, inflammation et fièvre. C'est aussi ce qui fragilise l'estomac et les reins."
      },
      {
        "question": "Un patient sous IPP depuis hier dit que « ça ne marche pas ». Quelle explication donner ?",
        "choix": [
          "Le médicament est périmé",
          "L'effet complet d'un IPP demande quelques jours",
          "Il faut croquer la gélule",
          "Il faut doubler la dose"
        ],
        "bonneReponse": 1,
        "explication": "L'IPP bloque les pompes à acide actives ; toutes ne le sont pas en même temps, d'où un effet complet en quelques jours. Pour un soulagement immédiat : antiacide ou alginate."
      },
      {
        "question": "Un patient demande Actifed Rhume (pseudoéphédrine) sans ordonnance. Que répondez-vous ?",
        "choix": [
          "Je le délivre, c'est un médicament de conseil",
          "Je le délivre avec un conseil sur la durée",
          "Depuis décembre 2024 il faut une ordonnance : je propose un lavage de nez et je passe la main si besoin",
          "Je propose un spray vasoconstricteur à la place"
        ],
        "bonneReponse": 2,
        "explication": "Depuis le 11 décembre 2024, les médicaments oraux à base de pseudoéphédrine sont uniquement sur ordonnance. Les sprays vasoconstricteurs aussi."
      }
    ]
  }
];
