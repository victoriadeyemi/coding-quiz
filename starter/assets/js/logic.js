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

//Sound effects
const correctTune = new Audio("./assets/sfx/correct.wav");
const incorrectTune = new Audio("./assets/sfx/incorrect.wav");
//console.log(correctTune)
console.log(incorrectTune)



//When answer is clicked, the next question appears- use const questions, questiontitle, choices
//If the answer clicked was incorrect then subtract time from the clock
//run a timer function
