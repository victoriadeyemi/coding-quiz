
function getScores() {
    var scores = [];
    var score = localStorage.getItem("score");
    if (score !== null) {
        scores = JSON.parse(score);
    }
    return scores;
}

getScores();