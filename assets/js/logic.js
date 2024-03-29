//Main javascript
//const for each id
const time = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const start =  document.getElementById("start");
const questions = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");

var questionIndex = 0;
var timeLeft = 60;
//Sound effects
const correctTune = new Audio("./assets/sfx/correct.wav");
const incorrectTune = new Audio("./assets/sfx/incorrect.wav");
//console.log(correctTune)
//console.log(incorrectTune)

start.addEventListener("click", startQuiz);
submit.addEventListener("click", saveScore);
60000;

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
        if (timeLeft === 0 || questionIndex === questions.length) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}
function getQuestion() {
    var currentQuestion = quizQuestions[questionIndex];
    questionTitle.textContent = currentQuestion.title;
    choices.innerHTML = "";
    for(var i = 0; i < currentQuestion.options.length; i++) {
        var choiceNode = document.createElement("button");
        var choice = currentQuestion.options[i];
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;
        choiceNode.onclick = questionClick;
        choices.appendChild(choiceNode);
    };
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
    var userInitials = initials.value.trim();
    if (userInitials !== "") {
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: timeLeft,
            initials: userInitials
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscores.html";
    }
}

