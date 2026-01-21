function calculer(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Opérateur invalide";
    }
}
console.log(calculer(5, "+", 3));
console.log(calculer(10, "-", 4));
console.log(calculer(6, "*", 2));
console.log(calculer(8, "/", 2));
console.log(calculer(5, "%", 2));