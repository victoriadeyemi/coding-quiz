//Questions array and answer array
const quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },

    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },

    {
        question: "Arrays in JavaScript can be used to store ____.",
        options: ["numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"],
        answer: "all of the above",
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log",
    },
]

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questions.removeAttribute("class");
    timer();
    getQuestion();
}

startQuiz();