const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
console.log(highScore);
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScores = (e) => {
    console.log("Clicked the save button");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        username: username.value
    };
    highScore.push(score);
    console.log(highScore);

    highScore.sort( (a,b) => b.score - a.score);
    highScore.splice(5);

    localStorage.setItem('highScore', JSON.stringify(highScore));
    
    window.location.assign("/");

}