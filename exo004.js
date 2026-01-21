function TVA(priceHT) {
    return priceHT * (1 + 20 / 100);
}
console.log(TVA(100)); // 120