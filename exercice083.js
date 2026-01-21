
// 1. Copier un tableau
let original = [1, 2, 3];
// Créer une copie indépendante

// 2. Fusionner des tableaux
let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];

original = [...original,...tableau1,...tableau2]
// Créer un tableau contenant tous les éléments
console.log(original)
// 3. Trouver le maximum
let nombres = [5, 10, 15, 3, 8];
console.log('Le maximum est' +Math.max(...nombres))
// Utiliser Math.max() avec spread