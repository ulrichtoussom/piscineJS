const input = document.getElementById("monInput");
const resultat = document.getElementById("resultat");
const longueur = document.getElementById("longueur");

input.addEventListener("input", (event) => {
    const texte = event.target.value;
    resultat.textContent = texte;
    longueur.textContent = texte.length;

    if (texte.length === 0) {
        resultat.textContent = "—";
    }
});