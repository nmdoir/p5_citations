//Citations
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


var got1 = [
    "Quand on joue le jeu des trônes, on",
    "Un Lannister",
    "Elle n'est pas une princesse, elle",
    "Le chaos",
    "L'amour",
    "Le lion",
    "Le feu",
    "La peur",
    "La nuit",
    "Le loup solitaire",
    "Le bouclier",
    "Le nord"
];

var got2 = [
    " gagne",
    " paie toujours",
    " est",
    " n'écoute pas",
    " ne peut pas tuer",
    " tranche",
    " mord",
    " protège"
];

var got3 = [
    " tout.",
    " ses dettes.",
    " une Khaleesi.",
    " une échelle.",
    " un poison.",
    " ce que disent les moutons.",
    " un dragon.",
    " plus fort qu'une épée.",
    " plein de terreurs.",
    ", mais la meute survit.",
    " le royaume des hommes."
];


//Choix série
function choixSerie() {
    var serie = document.querySelector('input[name=serie]:checked') !== null ? document.querySelector('input[name=serie]:checked').value : null;
    if (serie === "friends") {
        return friends1[Math.floor(Math.random()*friends1.length)] + friends2[Math.floor(Math.random()*friends2.length)] + friends3[Math.floor(Math.random()*friends3.length)];
    }
    else {
        return got1[Math.floor(Math.random()*got1.length)] + got2[Math.floor(Math.random()*got2.length)] + got3[Math.floor(Math.random()*got3.length)];
    }
};

//Choix nombre de citations
function nombreCitations() {
  var nombre = document.querySelector('input[name=citations]:checked') !== null ? document.querySelector('input[name=citations]:checked').value : null;
  var serie = document.querySelector('input[name=serie]:checked') !== null ? document.querySelector('input[name=serie]:checked').value : null;
    if (!nombre || nombre === "" || !serie || serie === "") {
      alert("Veuillez choisir une série ainsi que le nombre de citations à générer.");
  }
  else {
      return nombre;
  };
};

//Générer citations
function generer() {
    var n = nombreCitations();
    var phrase = "";
    var bloc = document.getElementById("result");
    bloc.innerHTML = "";
    for (var i=0; i < n; i++) {
        bloc.setAttribute("class","card result-body");
        var p = document.createElement("p");
        phrase = choixSerie();
        p.innerHTML = phrase;
        bloc.appendChild(p);
    };
};

