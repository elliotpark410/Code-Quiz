// JAVASCRIPT FOR SCOREBOARD.HTML
// Use querySelector to create variables
var scoreboardElement = document.querySelector("#scoreboard");
var backElement = document.querySelector("#back-button");
var clearElement = document.querySelector("#clear-button");

var ulElementHighscore = document.createElement("ul");
console.log(scoreboardElement);
scoreboardElement.appendChild(ulElementHighscore);


var lastScore = JSON.parse(localStorage.getItem("playerScore"));

if (lastScore) {
    console.log("testhighscore")
    var liElement = document.createElement("li");
    liElement.textContent = lastScore.initials + " " + lastScore.score;
    ulElementHighscore.appendChild(liElement);
}

// Create event listener for backElement so back-button goes back to the start page (index.html)
backElement.addEventListener("click", function() {
    window.location = "index.html";
});



// Create event listener for clearElement so clear-button clears and reloads local storage
clearElement.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});



