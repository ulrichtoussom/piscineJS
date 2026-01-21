function filterEven(tab) {
    let nombre = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            nombre.push(tab[i]);
        }
    }
    return nombre;
}
console.log(filterEven([1, 2, 3, 4, 5, 6]))
console.log(filterEven([10, 15, 20, 25, 30]))
console.log(filterEven([7, 9, 11]))