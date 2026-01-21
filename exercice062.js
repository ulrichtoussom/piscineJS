function reverseArray(tab) {
    let inverse = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        inverse.push(tab[i]);
    }
    return inverse;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]