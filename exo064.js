function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;

}
console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([0, 15, 25, 35]));
console.log(calculateAverage([1, 2, 3, 6, 9]));