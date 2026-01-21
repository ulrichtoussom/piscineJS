function sumUpTo(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
console.log(sumUpTo(5));
console.log(sumUpTo(10));
console.log(sumUpTo(100));
console.log(sumUpTo(2000));