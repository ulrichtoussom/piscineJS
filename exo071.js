function isPalindrome(mot) {
    let reversed = "";

    for (let i = mot.length - 1; i >= 0; i--) {
        reversed += mot[i];
    }

    return mot === reversed;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("level"));
console.log(isPalindrome("noon"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("bonjour"));