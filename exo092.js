const titre = document.getElementById("titre");
const description = document.getElementById("description");
const bouton = document.getElementById("monBouton");
const contenu = document.getElementById("contenu");

titre.textContent = "Titre modifié avec javascript";
contenu.innerHTML = "<p> <strong>Contenu ajouté</strong> via innerHTML</p>";

description.classList.add("highlight");
description.classList.remove("normal");
titre.classList.toggle("large");

bouton.style.backgroundColor = "blue";
bouton.style.color = "white";
bouton.style.padding = "10px";

bouton.setAttribute("title", "Clique ici");
console.log(bouton.getAttribute("title"));
bouton.removeAttribute("title");