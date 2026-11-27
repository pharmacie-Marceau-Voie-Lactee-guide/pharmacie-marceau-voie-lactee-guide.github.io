/*
 * Quiz. Chaque quiz contient une liste de questions.
 * "choix" : 2 à 6 réponses possibles.
 * "bonneReponse" : position de la bonne réponse dans "choix", EN COMPTANT À PARTIR DE 0
 *   (0 = première réponse, 1 = deuxième, 2 = troisième, 3 = quatrième).
 * "tirage" (facultatif) : nombre de questions tirées au hasard à chaque essai (quiz « Entraînement »).
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
  },
  {
    "id": "entrainement",
    "titre": "Entraînement",
    "description": "10 questions tirées au hasard parmi toute la banque : ordonnance, fiches, produits du rayon, glossaire et commandes. Une série différente à chaque essai.",
    "tirage": 10,
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
      },
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
      },
      {
        "question": "Pour une première délivrance, une ordonnance de médicaments sur liste I doit dater de moins de :",
        "choix": [
          "1 semaine",
          "1 mois",
          "3 mois",
          "1 an"
        ],
        "bonneReponse": 2,
        "explication": "Pour une première délivrance de médicaments des listes I et II, l'ordonnance doit dater de moins de 3 mois."
      },
      {
        "question": "Un médicament de la liste I peut être renouvelé :",
        "choix": [
          "Toujours, pendant un an",
          "Seulement si l'ordonnance indique « à renouveler »",
          "Jamais",
          "Seulement le week-end"
        ],
        "bonneReponse": 1,
        "explication": "Liste I : renouvellement uniquement si le médecin l'écrit. Liste II : renouvelable sauf si le médecin l'interdit."
      },
      {
        "question": "Un médicament de la liste II peut être renouvelé :",
        "choix": [
          "Jamais",
          "Seulement avec « à renouveler »",
          "Sauf si le médecin l'interdit",
          "Uniquement par le médecin"
        ],
        "bonneReponse": 2,
        "explication": "Pour la liste II, la délivrance peut être renouvelée si la prescription ne l'exclut pas."
      },
      {
        "question": "Quelle est la durée maximale de prescription d'un stupéfiant ?",
        "choix": [
          "7 jours",
          "28 jours",
          "3 mois",
          "12 mois"
        ],
        "bonneReponse": 1,
        "explication": "28 jours au maximum, et moins pour certains stupéfiants."
      },
      {
        "question": "Une ordonnance de stupéfiant est présentée 6 jours après sa rédaction. Que fait-on ?",
        "choix": [
          "On délivre tout",
          "On refuse",
          "On ne délivre que la durée de traitement qui reste, et c'est le pharmacien qui s'en occupe",
          "On délivre le double"
        ],
        "bonneReponse": 2,
        "explication": "Au-delà de 3 jours, on ne délivre que la durée qui reste à couvrir. Toute ordonnance de stupéfiant est gérée par le pharmacien."
      },
      {
        "question": "Une ordonnance vous paraît modifiée ou photocopiée. Que faites-vous ?",
        "choix": [
          "Je délivre quand même",
          "Je dis au patient qu'elle est fausse",
          "Je préviens discrètement le pharmacien",
          "Je la déchire"
        ],
        "bonneReponse": 2,
        "explication": "Risque de falsification : ne rien dire au patient et prévenir discrètement le pharmacien."
      },
      {
        "question": "Le logiciel affiche une alerte d'interaction entre deux médicaments de l'ordonnance. Que faites-vous ?",
        "choix": [
          "Je la ferme et je continue",
          "Je montre l'alerte au pharmacien",
          "Je retire un des médicaments",
          "Je demande au patient lequel il préfère"
        ],
        "bonneReponse": 1,
        "explication": "On n'ignore jamais une alerte : c'est le pharmacien qui décide."
      },
      {
        "question": "Une ordonnance indique « Inexium 20 mg » sans mention « non substituable ». Que peut-on délivrer ?",
        "choix": [
          "Uniquement Inexium",
          "Le générique (ésoméprazole)",
          "Un autre IPP au choix",
          "Rien"
        ],
        "bonneReponse": 1,
        "explication": "Sans mention « non substituable » valable, la pharmacie peut délivrer le générique."
      },
      {
        "question": "Quelle est la DCI d'Inexium ?",
        "choix": [
          "Oméprazole",
          "Ésoméprazole",
          "Pantoprazole",
          "Ibuprofène"
        ],
        "bonneReponse": 1,
        "explication": "La DCI est le nom de la molécule : ésoméprazole. Inexium est le nom du princeps."
      },
      {
        "question": "Que signifie « MTE » à côté de la mention « non substituable » ?",
        "choix": [
          "Médicament très efficace",
          "Médicament à marge thérapeutique étroite",
          "Médicament toujours en stock",
          "Médecin traitant enregistré"
        ],
        "bonneReponse": 1,
        "explication": "MTE : marge thérapeutique étroite. Avec EFG et CIF, c'est l'une des trois justifications valables."
      },
      {
        "question": "En règle générale, combien de traitement délivre-t-on à la fois ?",
        "choix": [
          "1 semaine",
          "1 mois",
          "6 mois",
          "1 an"
        ],
        "bonneReponse": 1,
        "explication": "En règle générale un mois, sauf grands conditionnements et certains traitements comme les contraceptifs."
      },
      {
        "question": "Pour un enfant, quelle information est souvent indispensable sur l'ordonnance ?",
        "choix": [
          "Sa taille",
          "Son poids",
          "Son école",
          "Sa date de vaccin"
        ],
        "bonneReponse": 1,
        "explication": "Le poids permet de vérifier que la dose est adaptée."
      },
      {
        "question": "Un patient demande Strepsils pour son enfant de 4 ans. Que faites-vous ?",
        "choix": [
          "Je délivre",
          "Je délivre la moitié de la dose",
          "Je passe la main : les pastilles sont en général déconseillées avant 6 ans",
          "Je propose un sirop pour la toux"
        ],
        "bonneReponse": 2,
        "explication": "Avant 6 ans, risque de fausse route : enfant de moins de 6 ans, on passe la main."
      },
      {
        "question": "Après une pastille contenant un anesthésique local, il faut :",
        "choix": [
          "Boire tout de suite un grand verre d'eau",
          "Éviter de manger ou boire juste après",
          "Prendre un antitussif",
          "S'allonger"
        ],
        "bonneReponse": 1,
        "explication": "L'anesthésique endort la gorge : risque de fausse route si on mange ou boit tout de suite."
      },
      {
        "question": "Le spray à la propolis est à éviter en cas de :",
        "choix": [
          "Diabète",
          "Allergie aux produits de la ruche",
          "Hypertension",
          "Toux grasse"
        ],
        "bonneReponse": 1,
        "explication": "La propolis est un produit de la ruche : jamais en cas d'allergie au miel, au pollen ou aux piqûres d'abeille."
      },
      {
        "question": "Depuis décembre 2024, Actifed Rhume (pseudoéphédrine) est :",
        "choix": [
          "En libre accès",
          "Sur ordonnance uniquement",
          "Retiré du marché",
          "Réservé aux enfants"
        ],
        "bonneReponse": 1,
        "explication": "Les médicaments du rhume oraux à base de pseudoéphédrine sont sur ordonnance depuis le 11 décembre 2024."
      },
      {
        "question": "Une personne a été piquée et a les lèvres et le visage qui gonflent. Que faites-vous ?",
        "choix": [
          "Je propose une crème apaisante",
          "Je préviens immédiatement le pharmacien : appel du 15",
          "Je propose un antihistaminique et je la laisse partir",
          "Je lui dis de revenir demain"
        ],
        "bonneReponse": 1,
        "explication": "Gonflement du visage ou des lèvres : réaction allergique grave possible, c'est une urgence."
      },
      {
        "question": "Comment retirer une tique ?",
        "choix": [
          "L'endormir avec de l'éther puis tirer",
          "Avec un tire-tique en tournant, sans produit avant",
          "L'écraser avec les doigts",
          "La brûler"
        ],
        "bonneReponse": 1,
        "explication": "Tire-tique en tournant, sans produit avant ; désinfecter et surveiller la peau 30 jours."
      },
      {
        "question": "Combien de temps faut-il refroidir une petite brûlure sous l'eau tempérée ?",
        "choix": [
          "10 secondes",
          "1 minute",
          "Environ 15 minutes",
          "1 heure"
        ],
        "bonneReponse": 2,
        "explication": "Environ 15 minutes, sous l'eau tempérée, pas glacée."
      },
      {
        "question": "Sur une brûlure avec une cloque, il faut :",
        "choix": [
          "Percer la cloque",
          "Mettre du beurre",
          "Laisser la cloque intacte et la protéger",
          "Mettre un glaçon directement"
        ],
        "bonneReponse": 2,
        "explication": "On ne perce jamais une cloque, et on ne met ni beurre, ni glace, ni dentifrice."
      },
      {
        "question": "Pour les poux, on traite :",
        "choix": [
          "Toute la famille par précaution",
          "Seulement les personnes qui ont des poux vivants",
          "Seulement les enfants",
          "Toute la classe"
        ],
        "bonneReponse": 1,
        "explication": "Pas de traitement préventif : on ne traite que les personnes qui ont des poux vivants."
      },
      {
        "question": "Après un premier traitement anti-poux, quand refaire une application ?",
        "choix": [
          "Le lendemain",
          "7 à 10 jours plus tard, selon la notice",
          "Jamais",
          "Un mois plus tard"
        ],
        "bonneReponse": 1,
        "explication": "Une 2e application 7 à 10 jours après tue les poux sortis des lentes."
      },
      {
        "question": "Une patiente a des brûlures urinaires avec fièvre et douleur dans le dos. C'est :",
        "choix": [
          "Une cystite simple",
          "Une possible infection du rein : consultation le jour même",
          "Un problème de peau",
          "Une allergie"
        ],
        "bonneReponse": 1,
        "explication": "Fièvre et douleur dans le dos ou sur le côté : possible infection du rein."
      },
      {
        "question": "Une personne demande la « pilule du lendemain ». Que faites-vous ?",
        "choix": [
          "Je lui pose toutes les questions au comptoir",
          "Je l'emmène dans un endroit discret et j'appelle le pharmacien tout de suite",
          "Je lui dis de revenir plus tard",
          "Je lui donne un test de grossesse"
        ],
        "bonneReponse": 1,
        "explication": "Discrétion et rapidité : plus la contraception d'urgence est prise tôt, plus elle est efficace."
      },
      {
        "question": "Quel conseil donner en premier pour une constipation ?",
        "choix": [
          "Un laxatif stimulant tous les jours",
          "Boire, manger des fibres, bouger",
          "Arrêter de manger",
          "Prendre de l'ibuprofène"
        ],
        "bonneReponse": 1,
        "explication": "D'abord l'hygiène de vie ; les laxatifs stimulants seulement sur une courte durée."
      },
      {
        "question": "Un antihistaminique contre l'allergie peut :",
        "choix": [
          "Donner de la fièvre",
          "Faire dormir",
          "Provoquer une toux grasse",
          "Faire monter la tension"
        ],
        "bonneReponse": 1,
        "explication": "Somnolence possible, surtout avec la cétirizine : prudence au volant et pas d'alcool."
      },
      {
        "question": "Le lopéramide est à éviter en cas de :",
        "choix": [
          "Diarrhée sans fièvre chez l'adulte",
          "Fièvre ou sang dans les selles",
          "Voyage",
          "Soif"
        ],
        "bonneReponse": 1,
        "explication": "Fièvre ou sang dans les selles : pas de lopéramide, et on passe la main."
      },
      {
        "question": "Un adulte prend un IPP sans ordonnance. Pendant combien de temps au maximum ?",
        "choix": [
          "3 jours",
          "14 jours",
          "2 mois",
          "Sans limite"
        ],
        "bonneReponse": 1,
        "explication": "14 jours au maximum sans avis médical."
      },
      {
        "question": "Que veut dire « promis » à l'officine ?",
        "choix": [
          "Un produit en promotion",
          "Un médicament commandé spécialement pour un patient",
          "Un médicament périmé",
          "Un échantillon gratuit"
        ],
        "bonneReponse": 1,
        "explication": "Un promis est commandé pour un patient parce qu'il n'était pas en stock ; il revient le chercher."
      },
      {
        "question": "Quand on reçoit la livraison, que range-t-on en premier ?",
        "choix": [
          "Les produits OCP",
          "La parapharmacie",
          "La caisse de froid",
          "Les promis"
        ],
        "bonneReponse": 2,
        "explication": "La caisse de froid passe toujours en premier : les produits ne doivent pas rester hors du réfrigérateur."
      },
      {
        "question": "Quelle est la température de la chaîne du froid ?",
        "choix": [
          "Entre -18 et 0 °C",
          "Entre +2 et +8 °C",
          "Entre +15 et +25 °C",
          "Moins de 30 °C"
        ],
        "bonneReponse": 1,
        "explication": "Les produits du froid se conservent entre +2 °C et +8 °C."
      },
      {
        "question": "Peut-on fusionner une commande OCP avec une commande Virtuose ?",
        "choix": [
          "Oui, toujours",
          "Non, seulement des commandes du même fournisseur",
          "Oui, le lundi",
          "Seulement avec l'accord du patient"
        ],
        "bonneReponse": 1,
        "explication": "On ne fusionne que des commandes du même fournisseur : OCP avec OCP, Virtuose avec Virtuose."
      },
      {
        "question": "Que signifie « LPP » ?",
        "choix": [
          "Liste des produits et prestations remboursables",
          "Laboratoire de production pharmaceutique",
          "Liste des prix publics",
          "Livraison prioritaire"
        ],
        "bonneReponse": 0,
        "explication": "Les produits LPP ont un prix encadré : une marge plus faible peut être normale."
      },
      {
        "question": "Qu'est-ce qu'un générique ?",
        "choix": [
          "Un médicament moins efficace",
          "Une copie du princeps avec la même molécule et le même dosage",
          "Un médicament sans principe actif",
          "Un complément alimentaire"
        ],
        "bonneReponse": 1,
        "explication": "Même principe actif (même DCI), même dosage, même efficacité ; seuls les excipients peuvent changer."
      },
      {
        "question": "Qu'est-ce qu'un excipient ?",
        "choix": [
          "Le principe actif",
          "Un ingrédient sans effet sur la maladie (sucre, arôme, enrobage…)",
          "Un effet indésirable",
          "Une contre-indication"
        ],
        "bonneReponse": 1,
        "explication": "Les excipients n'agissent pas sur la maladie, mais peuvent poser problème (sucre, allergie)."
      },
      {
        "question": "Quel numéro permet de trouver la pharmacie de garde ?",
        "choix": [
          "15",
          "18",
          "3237",
          "114"
        ],
        "bonneReponse": 2,
        "explication": "Le 3237 donne la pharmacie de garde la plus proche."
      },
      {
        "question": "Quel numéro d'urgence peut utiliser une personne sourde ou malentendante ?",
        "choix": [
          "15",
          "112",
          "114",
          "3237"
        ],
        "bonneReponse": 2,
        "explication": "Le 114 est le numéro d'urgence accessible par SMS, visio ou tchat."
      },
      {
        "question": "Que signifie TROD ?",
        "choix": [
          "Traitement rapide d'origine douteuse",
          "Test rapide d'orientation diagnostique",
          "Tarif réduit d'ordonnance",
          "Transport réfrigéré"
        ],
        "bonneReponse": 1,
        "explication": "Test réalisé par le pharmacien formé, par exemple pour l'angine."
      },
      {
        "question": "Les mucolytiques sont contre-indiqués avant :",
        "choix": [
          "6 mois",
          "2 ans",
          "6 ans",
          "12 ans"
        ],
        "bonneReponse": 1,
        "explication": "Risque d'aggravation de l'encombrement bronchique chez le nourrisson."
      },
      {
        "question": "Un AINS fragilise l'estomac parce qu'il :",
        "choix": [
          "Augmente le sucre",
          "Diminue les prostaglandines qui protègent la paroi de l'estomac",
          "Bloque la pompe à protons",
          "Tue les bactéries"
        ],
        "bonneReponse": 1,
        "explication": "En bloquant les COX, l'AINS diminue aussi les prostaglandines protectrices de l'estomac."
      },
      {
        "question": "Une maman demande un spray pour la gorge de son enfant de 3 ans. Lequel est autorisé à cet âge ?",
        "choix": [
          "Colludol",
          "Hexaspray",
          "StrepsilSpray Lidocaïne",
          "Strepsils Lidocaïne"
        ],
        "bonneReponse": 1,
        "explication": "Hexaspray (biclotymol) est autorisé dès 30 mois. Colludol dès 6 ans, StrepsilSpray et Strepsils Lidocaïne dès 12 ans. Enfant de moins de 6 ans : on en parle au pharmacien."
      },
      {
        "question": "À partir de quel âge peut-on donner Strepsils Lidocaïne ?",
        "choix": [
          "Dès 30 mois",
          "Dès 6 ans",
          "Dès 12 ans",
          "Dès 18 ans"
        ],
        "bonneReponse": 2,
        "explication": "C'est écrit sur la boîte : à partir de 12 ans. Les Strepsils Citron et Miel Citron, eux, sont dès 6 ans."
      },
      {
        "question": "Un enfant de 9 ans a mal quand il avale. Quelles pastilles avec anesthésique peut-on proposer ?",
        "choix": [
          "Strepsils Lidocaïne",
          "Lysopaïne Maux de gorge aigus (ambroxol)",
          "Vocadys",
          "Aucune, jamais d'anesthésique"
        ],
        "bonneReponse": 2,
        "explication": "Vocadys est autorisé dès 6 ans. Strepsils Lidocaïne et Lysopaïne ambroxol sont réservés aux plus de 12 ans."
      },
      {
        "question": "Que contient Colludol ?",
        "choix": [
          "Lidocaïne + hexamidine",
          "Biclotymol",
          "Alpha-amylase",
          "Ambroxol"
        ],
        "bonneReponse": 0,
        "explication": "Colludol associe un anesthésique (lidocaïne) et un antiseptique (hexamidine)."
      },
      {
        "question": "Colludol chez l'adulte : quelle est la posologie maximale ?",
        "choix": [
          "1 pulvérisation par jour",
          "2 pulvérisations par prise, 3 prises par jour",
          "5 pulvérisations à chaque fois",
          "Autant que nécessaire"
        ],
        "bonneReponse": 1,
        "explication": "Adulte : 1 à 2 pulvérisations, 3 fois par jour au maximum, 4 h entre deux prises, 5 jours maximum sans avis médical."
      },
      {
        "question": "Combien de temps peut-on utiliser Colludol sans avis médical ?",
        "choix": [
          "2 jours",
          "5 jours",
          "15 jours",
          "1 mois"
        ],
        "bonneReponse": 1,
        "explication": "Le traitement ne doit pas dépasser 5 jours sans avis médical (écrit au dos de la boîte)."
      },
      {
        "question": "Maxilase sirop peut être donné à partir de :",
        "choix": [
          "6 mois",
          "6 ans",
          "12 ans",
          "18 ans"
        ],
        "bonneReponse": 0,
        "explication": "Maxilase (alpha-amylase) est indiqué à partir de 6 mois. Il n'est plus en libre accès : il se délivre derrière le comptoir."
      },
      {
        "question": "Phytoxil Mal de gorge, c'est :",
        "choix": [
          "Un antibiotique",
          "Un dispositif médical à l'ectoïne qui hydrate la gorge",
          "Un anti-inflammatoire",
          "Un anesthésique"
        ],
        "bonneReponse": 1,
        "explication": "Dispositif médical à l'ectoïne, sans sucre, dès 6 ans : il hydrate les muqueuses sèches et irritées."
      },
      {
        "question": "Le spray propolis 3 Chênes est à éviter chez une personne :",
        "choix": [
          "Diabétique",
          "Allergique aux produits de la ruche",
          "Qui a de la tension",
          "Qui tousse"
        ],
        "bonneReponse": 1,
        "explication": "La propolis est un produit de la ruche : jamais en cas d'allergie au miel, au pollen ou aux piqûres d'abeille."
      },
      {
        "question": "Stodal Plantes (pastilles Boiron) est réservé à partir de :",
        "choix": [
          "2 ans",
          "6 ans",
          "12 ans",
          "18 ans"
        ],
        "bonneReponse": 2,
        "explication": "Adultes et adolescents dès 12 ans (écrit sur la boîte)."
      },
      {
        "question": "Un adulte a une toux grasse et crache. Quel produit du rayon ?",
        "choix": [
          "Clarix Oxomémazine",
          "Clarix Carbocistéine",
          "Hexaspray",
          "Maxilase"
        ],
        "bonneReponse": 1,
        "explication": "Toux grasse : un mucolytique comme la carbocistéine. L'oxomémazine est pour la toux sèche."
      },
      {
        "question": "Quel effet faut-il signaler avec Clarix Oxomémazine ?",
        "choix": [
          "Il donne faim",
          "Il fait dormir",
          "Il colore les urines",
          "Il donne de la fièvre"
        ],
        "bonneReponse": 1,
        "explication": "L'oxomémazine est un antihistaminique : somnolence, prudence au volant, pas d'alcool. Plutôt le soir."
      },
      {
        "question": "Ibuprofène Biogaran conseil 400 mg est indiqué chez :",
        "choix": [
          "Tous les enfants",
          "Les adultes et enfants de plus de 30 kg",
          "Les nourrissons",
          "Uniquement les plus de 65 ans"
        ],
        "bonneReponse": 1,
        "explication": "C'est écrit sur la boîte : adultes et enfants de plus de 30 kg."
      },
      {
        "question": "Un patient a le nez bouché et ne veut pas de médicament. Que proposer ?",
        "choix": [
          "Actifed Rhume",
          "Un spray vasoconstricteur",
          "Stérimar Nez bouché (eau de mer hypertonique)",
          "Doliprane"
        ],
        "bonneReponse": 2,
        "explication": "L'eau de mer hypertonique aide à déboucher le nez sans médicament. Actifed Rhume et les vasoconstricteurs sont sur ordonnance."
      },
      {
        "question": "Pour l'hygiène du nez d'un nourrisson, quel produit du rayon est adapté ?",
        "choix": [
          "Azéol DM (dès 18 ans)",
          "ProRhinel spray nourrissons et jeunes enfants",
          "Efirub spray nasal",
          "Stérimar Nez bouché"
        ],
        "bonneReponse": 1,
        "explication": "ProRhinel nourrissons, ou le spray Pharmactiv isotonique (adultes, enfants et nourrissons). Un nourrisson enrhumé doit être vu par le pharmacien."
      }
    ]
  },
  {
    "id": "rayon",
    "titre": "Produits du rayon",
    "description": "10 questions au hasard sur les produits vendus à l'officine : âges, compositions, posologies, et quel produit pour quel patient.",
    "tirage": 10,
    "questions": [
      {
        "question": "Une maman demande un spray pour la gorge de son enfant de 3 ans. Lequel est autorisé à cet âge ?",
        "choix": [
          "Colludol",
          "Hexaspray",
          "StrepsilSpray Lidocaïne",
          "Strepsils Lidocaïne"
        ],
        "bonneReponse": 1,
        "explication": "Hexaspray (biclotymol) est autorisé dès 30 mois. Colludol dès 6 ans, StrepsilSpray et Strepsils Lidocaïne dès 12 ans. Enfant de moins de 6 ans : on en parle au pharmacien."
      },
      {
        "question": "À partir de quel âge peut-on donner Strepsils Lidocaïne ?",
        "choix": [
          "Dès 30 mois",
          "Dès 6 ans",
          "Dès 12 ans",
          "Dès 18 ans"
        ],
        "bonneReponse": 2,
        "explication": "C'est écrit sur la boîte : à partir de 12 ans. Les Strepsils Citron et Miel Citron, eux, sont dès 6 ans."
      },
      {
        "question": "Un enfant de 9 ans a mal quand il avale. Quelles pastilles avec anesthésique peut-on proposer ?",
        "choix": [
          "Strepsils Lidocaïne",
          "Lysopaïne Maux de gorge aigus (ambroxol)",
          "Vocadys",
          "Aucune, jamais d'anesthésique"
        ],
        "bonneReponse": 2,
        "explication": "Vocadys est autorisé dès 6 ans. Strepsils Lidocaïne et Lysopaïne ambroxol sont réservés aux plus de 12 ans."
      },
      {
        "question": "Que contient Colludol ?",
        "choix": [
          "Lidocaïne + hexamidine",
          "Biclotymol",
          "Alpha-amylase",
          "Ambroxol"
        ],
        "bonneReponse": 0,
        "explication": "Colludol associe un anesthésique (lidocaïne) et un antiseptique (hexamidine)."
      },
      {
        "question": "Colludol chez l'adulte : quelle est la posologie maximale ?",
        "choix": [
          "1 pulvérisation par jour",
          "2 pulvérisations par prise, 3 prises par jour",
          "5 pulvérisations à chaque fois",
          "Autant que nécessaire"
        ],
        "bonneReponse": 1,
        "explication": "Adulte : 1 à 2 pulvérisations, 3 fois par jour au maximum, 4 h entre deux prises, 5 jours maximum sans avis médical."
      },
      {
        "question": "Combien de temps peut-on utiliser Colludol sans avis médical ?",
        "choix": [
          "2 jours",
          "5 jours",
          "15 jours",
          "1 mois"
        ],
        "bonneReponse": 1,
        "explication": "Le traitement ne doit pas dépasser 5 jours sans avis médical (écrit au dos de la boîte)."
      },
      {
        "question": "Maxilase sirop peut être donné à partir de :",
        "choix": [
          "6 mois",
          "6 ans",
          "12 ans",
          "18 ans"
        ],
        "bonneReponse": 0,
        "explication": "Maxilase (alpha-amylase) est indiqué à partir de 6 mois. Il n'est plus en libre accès : il se délivre derrière le comptoir."
      },
      {
        "question": "Phytoxil Mal de gorge, c'est :",
        "choix": [
          "Un antibiotique",
          "Un dispositif médical à l'ectoïne qui hydrate la gorge",
          "Un anti-inflammatoire",
          "Un anesthésique"
        ],
        "bonneReponse": 1,
        "explication": "Dispositif médical à l'ectoïne, sans sucre, dès 6 ans : il hydrate les muqueuses sèches et irritées."
      },
      {
        "question": "Le spray propolis 3 Chênes est à éviter chez une personne :",
        "choix": [
          "Diabétique",
          "Allergique aux produits de la ruche",
          "Qui a de la tension",
          "Qui tousse"
        ],
        "bonneReponse": 1,
        "explication": "La propolis est un produit de la ruche : jamais en cas d'allergie au miel, au pollen ou aux piqûres d'abeille."
      },
      {
        "question": "Stodal Plantes (pastilles Boiron) est réservé à partir de :",
        "choix": [
          "2 ans",
          "6 ans",
          "12 ans",
          "18 ans"
        ],
        "bonneReponse": 2,
        "explication": "Adultes et adolescents dès 12 ans (écrit sur la boîte)."
      },
      {
        "question": "Un adulte a une toux grasse et crache. Quel produit du rayon ?",
        "choix": [
          "Clarix Oxomémazine",
          "Clarix Carbocistéine",
          "Hexaspray",
          "Maxilase"
        ],
        "bonneReponse": 1,
        "explication": "Toux grasse : un mucolytique comme la carbocistéine. L'oxomémazine est pour la toux sèche."
      },
      {
        "question": "Quel effet faut-il signaler avec Clarix Oxomémazine ?",
        "choix": [
          "Il donne faim",
          "Il fait dormir",
          "Il colore les urines",
          "Il donne de la fièvre"
        ],
        "bonneReponse": 1,
        "explication": "L'oxomémazine est un antihistaminique : somnolence, prudence au volant, pas d'alcool. Plutôt le soir."
      },
      {
        "question": "Ibuprofène Biogaran conseil 400 mg est indiqué chez :",
        "choix": [
          "Tous les enfants",
          "Les adultes et enfants de plus de 30 kg",
          "Les nourrissons",
          "Uniquement les plus de 65 ans"
        ],
        "bonneReponse": 1,
        "explication": "C'est écrit sur la boîte : adultes et enfants de plus de 30 kg."
      },
      {
        "question": "Un patient a le nez bouché et ne veut pas de médicament. Que proposer ?",
        "choix": [
          "Actifed Rhume",
          "Un spray vasoconstricteur",
          "Stérimar Nez bouché (eau de mer hypertonique)",
          "Doliprane"
        ],
        "bonneReponse": 2,
        "explication": "L'eau de mer hypertonique aide à déboucher le nez sans médicament. Actifed Rhume et les vasoconstricteurs sont sur ordonnance."
      },
      {
        "question": "Pour l'hygiène du nez d'un nourrisson, quel produit du rayon est adapté ?",
        "choix": [
          "Azéol DM (dès 18 ans)",
          "ProRhinel spray nourrissons et jeunes enfants",
          "Efirub spray nasal",
          "Stérimar Nez bouché"
        ],
        "bonneReponse": 1,
        "explication": "ProRhinel nourrissons, ou le spray Pharmactiv isotonique (adultes, enfants et nourrissons). Un nourrisson enrhumé doit être vu par le pharmacien."
      }
    ]
  }
];
