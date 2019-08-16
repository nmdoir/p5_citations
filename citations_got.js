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

var got1_alea = got1[Math.floor(Math.random()*12)];
var got2_alea = got2[Math.floor(Math.random()*8)];
var got3_alea = got3[Math.floor(Math.random()*11)];

var citationGot = "";
console.log(citationGot.concat(got1_alea, got2_alea, got3_alea));




