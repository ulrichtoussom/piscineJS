// 1. Sélection des éléments parents
const btnAjouter = document.querySelector('#ajouter');
const listeUl = document.querySelector('#liste');
let compteur = 1;

/**
 * ✅ Objectif : Ajouter des items dynamiquement
 */
btnAjouter.addEventListener('click', () => {
    const nouvelItem = document.createElement('li');
    nouvelItem.textContent = `Item n°${compteur}`;
    nouvelItem.classList.add('item');
    listeUl.appendChild(nouvelItem);
    compteur++;
});

/**
 * ✅ Objectif : Event Delegation
 * On écoute le clic sur le parent (ul) plutôt que sur chaque enfant (li)
 */
listeUl.addEventListener('click', (event) => {
    // On vérifie que l'élément cliqué est bien un item de la liste
    const cible = event.target;

    if (cible.classList.contains('item')) {
        
        // ✅ Objectif : Désélectionner les autres items
        const itemDejaSelectionne = listeUl.querySelector('.item.selected');
        if (itemDejaSelectionne) {
            itemDejaSelectionne.classList.remove('selected');
        }

        // ✅ Objectif : Sélectionner l'item cliqué
        cible.classList.add('selected');
    }
});