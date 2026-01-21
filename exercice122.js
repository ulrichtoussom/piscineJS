// Sélection des éléments du DOM
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

// Fonction principale de mise à jour de l'affichage
const updateDisplay = () => {
    display.value = currentInput;
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // 1. Gestion du bouton d'effacement (C)
        if (button.id === 'clear') {
            currentInput = '0';
            previousInput = '';
            operator = null;
            updateDisplay();
            return;
        }

        // 2. Gestion du bouton égal (=)
        if (button.classList.contains('equal')) {
            if (operator && previousInput !== '') {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = null;
                previousInput = '';
                shouldResetDisplay = true;
                updateDisplay();
            }
            return;
        }

        // 3. Gestion des opérateurs (+, -, ×, ÷)
        if (button.classList.contains('operator')) {
            if (operator !== null) {
                // Permet de chaîner les opérations (ex: 5 + 5 + 5)
                previousInput = calculate(previousInput, currentInput, operator);
            } else {
                previousInput = currentInput;
            }
            operator = value;
            shouldResetDisplay = true;
            return;
        }

        // 4. Gestion des nombres
        if (button.classList.contains('number')) {
            if (currentInput === '0' || shouldResetDisplay) {
                currentInput = value;
                shouldResetDisplay = false;
            } else {
                currentInput += value;
            }
            updateDisplay();
        }
    });
});

/**
 * Fonction de calcul
 * @param {string} a - Premier nombre
 * @param {string} b - Deuxième nombre
 * @param {string} op - Opérateur
 * @returns {string} - Résultat formaté
 */
function calculate(a, b, op) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    let result = 0;

    switch (op) {
        case '+': result = numA + numB; break;
        case '-': result = numA - numB; break;
        case '×': result = numA * numB; break;
        case '÷': 
            result = numB !== 0 ? numA / numB : "Erreur"; 
            break;
        default: return b;
    }
    
    // On limite les chiffres après la virgule pour ne pas déborder
    return result.toString().length > 10 ? result.toPrecision(8) : result.toString();
}