let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pairs = nombres
    .filter(n => n % 2 === 0)
let doubles = nombres
    .map(n => n * 2);

console.log(pairs);
console.log(doubles);