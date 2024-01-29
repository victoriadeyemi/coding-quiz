
function getScores() {
    var scores = [];
    var highscores = localStorage.getItem("highscores");
    if (highscores !== null) {
        scores = JSON.parse(highscores);
    }
    for(var i =0; i < scores.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = scores[i].initials + " - " + scores[i].score;
        var highscoresList = document.getElementById("highscores")
        highscoresList.appendChild(liEl);
    }
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

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
var clearHighscores = document.getElementById("clear");
clearHighscores.onclick = function() {
    localStorage.clear();
    location.reload();
}

getScores();
