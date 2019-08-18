// Clic sur la série choisie
var serieElts = document.getElementsByName("serie");
for (var i = 0; i < serieElts.length; i++) {
    serieElts[i].addEventListener("change", function (e) {
        var choix = + e.target.value;
    });
}

// Clic sur le nombre de citations choisies
var citationsElts = document.getElementsByName("citations");
for (var i = 0; i < citationsElts.length; i++) {
    citationsElts[i].addEventListener("change", function (e) {
        var nombre = + e.target.value;
    });
}


// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    switch (form.elements.serie.value) {
        case "got":
            console.log("Vous avez choisi got");
            break;
        case "friends":
            console.log("Vous avez choisi friends");
            break;
        default:
            console.log("Choisissez une série.");
    }
    switch (form.elements.citations.value) {
        case "1":
            console.log("Vous avez choisi 1 citation");
            break;
        case "2":
            console.log("Vous avez choisi 2 citations");
            break;
        case "3":
            console.log("Vous avez choisi 3 citations");
            break;
        case "4":
            console.log("Vous avez choisi 4 citations");
            break;
        default:
            console.log("Choisissez le nombre de citations que vous souhaitez générer.");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

