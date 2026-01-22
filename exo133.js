// Sélection des éléments
const input = document.getElementById("proposition");
const btnVerifier = document.getElementById("verifier");
const btnNouvellePartie = document.getElementById("nouvelle-partie");
const message = document.getElementById("message");
const tentativesSpan = document.getElementById("tentatives");
const recordSpan = document.getElementById("record");
const historiqueDiv = document.getElementById("historique");

let nombreSecret;
let tentatives;
let historique = [];

// le meilleur score
let record = localStorage.getItem("meilleurScore");
recordSpan.textContent = record ? record : "-";

// nombre aléatoire entre 1 et 100
function genererNombre() {
    return Math.floor(Math.random() * 100) + 1;
}

function nouvellePartie() {
    nombreSecret = genererNombre();
    tentatives = 0;
    historique = [];

    message.textContent = "";
    tentativesSpan.textContent = "0";
    historiqueDiv.innerHTML = "";
    input.value = "";
}

nouvellePartie();

// la proposition qui sera vérifiée
btnVerifier.addEventListener("click", () => {
    const valeur = Number(input.value);

    if (!valeur || valeur < 1 || valeur > 100) {
        message.textContent = "⛔ Entrez un nombre entre 1 et 100";
        return;
    }

    tentatives++;
    tentativesSpan.textContent = tentatives;
    historique.push(valeur);

    // l'historique
    historiqueDiv.innerHTML = `<strong>Historique :</strong> ${historique.join(", ")}`;

    if (valeur < nombreSecret) {
        message.textContent = "📈 C'est plus !";
    } else if (valeur > nombreSecret) {
        message.textContent = "📉 C'est moins !";
    } else {
        message.textContent = `🎉 Bravo ! C'était bien ${nombreSecret} ! Gagné en ${tentatives} tentatives.`;

        // Le meilleur score
        if (!record || tentatives < record) {
            record = tentatives;
            localStorage.setItem("meilleurScore", record);
            recordSpan.textContent = record;
        }
    }
    input.value = "";
    input.focus();
});
btnNouvellePartie.addEventListener("click", nouvellePartie);