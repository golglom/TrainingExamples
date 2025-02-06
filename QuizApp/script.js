const questions = [
    {
        question: "Quelle est la capitale du Togo ?",
        answers: ["Lomé", "Kara", "Atakpamé", "Sokodé"],
        correct: 0,
    },
    {
        question: "Quelle est la langue officielle du Togo ?",
        answers: ["Ewé", "Kabyè", "Français", "Anglais"],
        correct: 2,
    },
    {
        question: "En quelle année le Togo a-t-il obtenu son indépendance ?",
        answers: ["1958", "1960", "1961", "1963"],
        correct: 1,
    },
    {
        question: "Qui fut le premier président du Togo ?",
        answers: ["Sylvanus Olympio", "Gnassingbé Eyadéma", "Faure Gnassingbé", "Edem Kodjo"],
        correct: 0,
    },
    {
        question: "Quelle est la monnaie utilisée au Togo ?",
        answers: ["Franc CFA", "Naira", "Dollar", "Euro"],
        correct: 0,
    },
    {
        question: "Quelle est la superficie approximative du Togo ?",
        answers: ["56,600 km²", "50,000 km²", "70,000 km²", "45,000 km²"],
        correct: 0,
    },
    {
        question: "Quel est l'emblème animalier du Togo ?",
        answers: ["Éléphant", "Lion", "Colombe", "Panthère"],
        correct: 1,
    },
    {
        question: "Combien de régions administratives compte le Togo ?",
        answers: ["3", "5", "7", "6"],
        correct: 1,
    },
    {
        question: "Quel fleuve traverse le Togo ?",
        answers: ["Mono", "Volta", "Niger", "Ogooué"],
        correct: 0,
    },
    {
        question: "Quelle est la danse traditionnelle des Ewé au Togo ?",
        answers: ["Agbadja", "Tchébé", "Kpanlogo", "Adowa"],
        correct: 0,
    },
    {
        question: "Quel est le port principal du Togo ?",
        answers: ["Port de Lomé", "Port de Kpémé", "Port de Kara", "Port de Sokodé"],
        correct: 0,
    },
    {
        question: "Quel est l'indicatif téléphonique du Togo ?",
        answers: ["+228", "+229", "+227", "+226"],
        correct: 0,
    },
    {
        question: "Quelle est la plus grande ville du Togo après Lomé ?",
        answers: ["Sokodé", "Kpalimé", "Kara", "Dapaong"],
        correct: 2,
    },
    {
        question: "Quel est le principal produit d'exportation du Togo ?",
        answers: ["Café", "Phosphates", "Cacao", "Coton"],
        correct: 1,
    },
    {
        question: "Quelle chaîne de montagnes traverse le Togo ?",
        answers: ["Monts du Togo", "Montagnes de l’Atacora", "Chaîne de l’Adamaoua", "Monts Mandara"],
        correct: 0,
    },
    {
        question: "Quel est le principal stade de football du Togo ?",
        answers: ["Stade de Kégué", "Stade municipal de Lomé", "Stade de Kara", "Stade de Sokodé"],
        correct: 0,
    },
    {
        question: "Quel est l'autre nom de la région des Plateaux au Togo ?",
        answers: ["Région des Cascades", "Région des Collines", "Région des Montagnes", "Région des Hauts Plateaux"],
        correct: 3,
    },
    {
        question: "Quel est le nom du parc national situé au nord du Togo ?",
        answers: ["Parc de Fazao-Malfakassa", "Parc de la Pendjari", "Parc national du W", "Parc de Kara"],
        correct: 0,
    },
    {
        question: "Quelle est la principale religion au Togo ?",
        answers: ["Christianisme", "Islam", "Animisme", "Hindouisme"],
        correct: 0,
    },
    {
        question: "Quel est le plat national du Togo ?",
        answers: ["Fufu", "Akpan", "Pâte avec sauce", "Tô"],
        correct: 2,
    },
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;

        
        button.addEventListener("click", () => {
            handleAnswer(index === currentQuestion.correct, button);
        });
        button.classList.remove("correct","wrong")
    });
    
}

function handleAnswer(isCorrect, button) {
    if (isCorrect) {
        button.classList.add("correct");
        button.classList.remove("wrong")
        score++;
    } else {
        button.classList.add("wrong");
        button.classList.remove("correct");

    }
    
    answerButtons.forEach((button) => {
        (button.disabled = true)
    });
    
    nextButton.style.display = "block";
    
}



function resetState() {
    nextButton.style.display = "none";
  
}

function showNextQuestion(button) {
  
  
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        resetState();
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    answerButtons.forEach((btn) => (btn.style.display = "none"));
    nextButton.textContent = "Restart";
    nextButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resetState();
    nextButton.textContent = "Next";
    answerButtons.forEach((btn) => (btn.style.display = "block"));
    loadQuestion();
}

loadQuestion();
nextButton.addEventListener("click", showNextQuestion);
resetState();


console.log(loadQuestion)