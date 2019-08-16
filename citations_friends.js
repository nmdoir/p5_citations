var friends1 = [
    "Si j'ai bien entendu,",
    "C'est un mirage auditif,",
    "Ma femme est lesbienne,",
    "Et moi,",
    "M. Luther King a dit,",
    "On dirait que",
    "J'ai un but dans la vie,",
    "C'est pas de ma faute,",
    "Je ne sais pas combien de temps on va rester coincés ici,",
    "Je suis nul pour donner des conseils,",
    "J'ai besoin d'un café,"
];

var friends2 = [
    " je vais me suicider",
    " je répond au téléphone",
    " je trouve ça tellement bon",
    " j'insiste",
    " j'aimerais vous aider",
    " j'ai fait un rêve",
    " je fais 5kg de plus",
    " je voudrais mettre mon peignoir",
    " j'ai divorcé",
    " j'étais célibataire",
    " je suis doué",
    " je disais ça"
];

var friends3 = [
    " avec des yaourts périmés.",
    " en partageant mon repas.",
    " alors je vais manger sur le balcon.",
    " dans l'autre sens.",
    " mais j'ai pas envie d'en parler",
    " à cause de la caméra.",
    " en mangeant des pistaches.",
    " à trois reprises.",
    " pour faire des commentaires sarcastiques.",
    " par politesse.",
    " car j'ai trop de temps libre."
];

var friends1_alea = friends1[Math.floor(Math.random()*12)];
var friends2_alea = friends2[Math.floor(Math.random()*8)];
var friends3_alea = friends3[Math.floor(Math.random()*11)];

var citationFriends = "";
console.log(citationFriends.concat(friends1_alea, friends2_alea, friends3_alea));