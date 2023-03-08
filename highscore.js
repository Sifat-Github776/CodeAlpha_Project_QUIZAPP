const highScoresList = document.getElementById("highScoresList");
const highScore = JSON.parse(localStorage.getItem("highscore") || []);

highScoresList.innerHTML = highScore.map(score => {
    return `<li> class="high-score"${score.name}~${score.score}</li>`;
}).join("")
