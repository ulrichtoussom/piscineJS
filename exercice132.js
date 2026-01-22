const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0 
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    },
    {
        question: "Quel est le plus petit pays du monde ?",
        options: ["Monaco", "Malte", "Vatican", "Andorre"],
        reponse: 2
    }
];

let indexQuestionActuelle = 0;
let score = 0;

const questionElt = document.getElementById('question-texte');
const numElt = document.getElementById('num-question');
const optionsElt = document.getElementById('options');
const messageElt = document.getElementById('message');
const quizUI = document.getElementById('quiz-ui');
const resultatUI = document.getElementById('resultat-ui');
const scoreFinalElt = document.getElementById('score-final');

function chargerQuestion() {
    messageElt.textContent = "";
    optionsElt.innerHTML = "";
    
    const q = questions[indexQuestionActuelle];
    numElt.textContent = `Question ${indexQuestionActuelle + 1}/${questions.length}`;
    questionElt.textContent = q.question;

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => verifierReponse(index));
        optionsElt.appendChild(btn);
    });
}

function verifierReponse(indexChoisi) {
    const bonneReponse = questions[indexQuestionActuelle].reponse;
    
    if (indexChoisi === bonneReponse) {
        score++;
        messageElt.textContent = "Bonne réponse ! ✅";
        messageElt.style.color = "green";
    } else {
        messageElt.textContent = "Mauvaise réponse... ❌";
        messageElt.style.color = "red";
    }

    // On attend 1 seconde avant de passer à la suite pour laisser l'utilisateur lire le message
    setTimeout(() => {
        indexQuestionActuelle++;
        if (indexQuestionActuelle < questions.length) {
            chargerQuestion();
        } else {
            afficherResultats();
        }
    }, 1000);
}

function afficherResultats() {
    quizUI.classList.add('hidden');
    resultatUI.classList.remove('hidden');
    scoreFinalElt.textContent = `Votre score : ${score} / ${questions.length}`;
}

function recommencer() {
    score = 0;
    indexQuestionActuelle = 0;
    quizUI.classList.remove('hidden');
    resultatUI.classList.add('hidden');
    chargerQuestion();
}

// Lancement initial
chargerQuestion();