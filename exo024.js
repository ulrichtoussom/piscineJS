function isLeapYear(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));