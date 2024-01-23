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

function timer() {
    var timeInterval = setInterval(function() {
        time.textContent = "Time: " + timeLeft;
        timeLeft--;
        if (timeLeft === 0 || questionIndex === quizQuestions.length) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function getQuestion() {
    var currentQuestion = quizQuestions[questionIndex];
    questionTitle.textContent = currentQuestion.question;
    choices.innerHTML = "";
    currentQuestion.options.forEach(function(option, i) {
        var optionNode = document.createElement("button");
        optionNode.setAttribute("class", "option");
        optionNode.setAttribute("value", option);
        optionNode.textContent = i + 1 + ". " + option;
        optionNode.onclick = questionClick;
        choices.appendChild(optionNode);
    });
}

function questionClick() {
    if (this.value !== quizQuestions[questionIndex].answer) {
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        time.textContent = timeLeft;
        feedback.textContent = "Incorrect";
        incorrectTune.play();
    } else {
        feedback.textContent = "Correct";
        correctTune.play();
    }
    feedback.setAttribute("class", "feedback");
    setTimeout(function() {
        feedback.setAttribute("class", "feedback hide");
    }, 1000);
    questionIndex++;
    if (questionIndex === quizQuestions.length) {
        endQuiz();
    } else {
        getQuestion();
    }
}

function endQuiz() {
    questions.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    finalScore.textContent = timeLeft;
}

function saveScore() {
    var initials = initials.value.trim();
    if (initials !== "") {
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: timeLeft,
            initials: initials
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscores.html";
    }
}

startButton.onclick = startQuiz;
submitScore.onclick = saveScore;

startQuiz();
startTimer();
getQuestion();
questionClick();
endQuiz();
saveScore();


