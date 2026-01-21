const produitsDiv = document.getElementById("produits");

const paragraphe = document.createElement("p");
paragraphe.textContent = "Bienvenue dans notre boutique en ligne !";


document.body.appendChild(paragraphe);

const liste = document.createElement("ul");

const items = ["Livraison rapide", "Paiement sécurisé", "Service client 24/7"];

items.forEach(texte => {
    const li = document.createElement("li");
    li.textContent = texte;
    liste.appendChild(li);
});

const titre = document.getElementById("titre");
titre.insertAdjacentElement("afterend", liste);


const produit = document.createElement("div");
produit.classList.add("produit");

const nomProduit = document.createElement("h2");
nomProduit.textContent = "Ordinateur Portable";

const description = document.createElement("p");
description.textContent = "Un ordinateur puissant pour le travail et le loisir.";

const prix = document.createElement("p");
prix.textContent = "899 €";
prix.classList.add("prix");

produit.appendChild(nomProduit);
produit.appendChild(description);
produit.appendChild(prix);

produitsDiv.appendChild(produit); // ajout à la fin du conteneur
setTimeout(() => {
    paragraphe.remove(); // ou document.body.removeChild(paragraphe);
}, 3000);