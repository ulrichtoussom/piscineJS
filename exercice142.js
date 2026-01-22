/**
 * Fonction qui simule une tâche asynchrone (ex: chargement de données)
 * @param {number} delai - Temps d'attente en millisecondes
 * @param {boolean} simulerErreur - Force l'échec pour tester le .catch()
 * @returns {Promise}
 */
function attendre(delai, simulerErreur = false) {
    return new Promise((resolve, reject) => {
        console.log(`⏳ Tâche démarrée (délai: ${delai}ms)...`);

        setTimeout(() => {
            if (simulerErreur) {
                // ✅ Objectif : Utiliser reject() pour l'erreur
                reject("Erreur : La tâche a échoué ! ❌");
            } else {
                // ✅ Objectif : Utiliser resolve() pour le succès
                resolve("Succès : La tâche est terminée ! ✅");
            }
        }, delai);
    });
}

// --- ✅ Objectif : Consommer la Promesse ---

// 1. Cas de succès
attendre(2000)
    .then((message) => {
        console.log(message); // Affiche le message de succès après 2s
    })
    .catch((erreur) => {
        console.error(erreur);
    })
    .finally(() => {
        console.log("Opération terminée (Succès ou Échec).");
    });

// 2. Cas d'erreur (pour tester)
attendre(1000, true)
    .then((message) => {
        console.log(message);
    })
    .catch((erreur) => {
        console.error(erreur); // Affichera l'erreur après 1s
    });