// JAVASCRIPT FOR SCOREBOARD.HTML
// Use querySelector to create variables for html tags
var scoreboardElement = document.querySelector("#scoreboard");
var backElement = document.querySelector("#back-button");
var clearElement = document.querySelector("#clear-button");

// Create a variables that creates a ul tag in html
var ulElementHighscore = document.createElement("ul");

// append UlElementHighscore to scoreboardElement (html div)
scoreboardElement.appendChild(ulElementHighscore);

// Create variable called playerScore which will 
// Retrieve playerScore variable that is in local storage which was stored as a string and convert it back to object
var playerScore = JSON.parse(localStorage.getItem("playerScore"));

// Create variable called liElement which will grab the playerScore object (key and value) and add it as text in the li
var liElement = document.createElement("li");
liElement.textContent = playerScore.initials + ": score " + playerScore.score;

// append liElement with player initials and player score to UlElementHighscore (html tag)
ulElementHighscore.appendChild(liElement);

// Create event listener for backElement so back-button goes back to the start page (index.html)
backElement.addEventListener("click", function() {
    window.location = "index.html";
});

// Create event listener for clearElement so clear-button clears and reloads local storage
clearElement.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});