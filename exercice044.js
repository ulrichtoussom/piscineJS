
/**
 * 
 * @param {string} phrase 
 * @returns 
 */
function reverseString(phrase) {

    let phrases = phrase.split('')
    phrases = phrases.reverse()
    phrase = phrases.join('')

    console.groupCollapsed(phrase)

}

reverseString('ulrich')