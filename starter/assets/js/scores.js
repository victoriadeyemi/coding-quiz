
function getScores() {
    var scores = [];
    var score = localStorage.getItem("score");
    if (score !== null) {
        scores = JSON.parse(score);
    }
    return scores;
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
getScores();