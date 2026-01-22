//synchrone
console.log("1. Début");
console.log("2. Milieu");
console.log("3. Fin");

//asynchrone
setTimeout(() => {
    console.log("1. Début (après 2 secondes)");
}, 2000);
setTimeout(() => {
    console.log("2. Milieu (après 4 secondes)");
}, 4000);

setTimeout(() => {
    console.log("3. Fin (après 6 secondes)");
}, 6000);