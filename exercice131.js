// 1. Sélection des éléments
const btnGenerer = document.querySelector('#generer');
const texteCouleur = document.querySelector('#couleur');
const body = document.body;

/**
 * Génère une couleur hexadécimale aléatoire
 * @returns {string} - Ex: "#3A7BD5"
 */
const genererHex = () => {
    const caracteres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += caracteres[Math.floor(Math.random() * 16)];
    }
    return couleur;
};

/**
 * Calcule la luminosité d'une couleur pour adapter le contraste
 * Formule basée sur les poids des couleurs primaires (YIQ)
 * @param {string} hex - Couleur format #RRGGBB
 * @returns {string} - "black" ou "white"
 */
const obtenirCouleurContraste = (hex) => {
    // Conversion Hex vers RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    
    // Calcul de la luminosité (formule standard)
    // On multiplie chaque canal par son impact sur l'oeil humain
    const luminosite = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Si la luminosité est > 128 (milieu entre 0 et 255), la couleur est claire
    return luminosite > 128 ? 'black' : 'white';
};

// 2. Gestion de l'événement clic
btnGenerer.addEventListener('click', () => {
    const nouvelleCouleur = genererHex();
    const couleurContraste = obtenirCouleurContraste(nouvelleCouleur);

    // ✅ Appliquer la couleur de fond
    body.style.backgroundColor = nouvelleCouleur;

    // ✅ Afficher le texte du code couleur
    texteCouleur.textContent = nouvelleCouleur;

    // ✅ Adapter la couleur du texte pour le contraste
    body.style.color = couleurContraste;
    texteCouleur.style.color = couleurContraste === 'white' ? 'black' : 'white'; // Inversion pour la lisibilité du cadre
});