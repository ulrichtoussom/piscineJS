let personne = { nom: "Dupont", age: 30 };
let copiePersonne = {...personne };
console.log(copiePersonne);

let infos = { nom: "Martin", age: 25 };
let contact = { email: "martin@email.com", tel: "0612345678" };
let utilisateur = {...infos, ...contact };
console.log(utilisateur);

let user = { nom: "Dupont", age: 30, ville: "Paris" };
let userMisAJour = {...user, age: 31 };
console.log(userMisAJour);