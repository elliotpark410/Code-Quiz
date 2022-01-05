// Use querySelector to create variables
var startQuiz = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer");
var questionElement = document.querySelector("#questions");
var container = document.querySelector(".container");


// Create a variable for unordered lists which will hold the multiple choices
var ulElement = document.createElement("ul");


// Create variables for questionIndex, correctAnswers, secondsLeft, and subtractTime
var questionIndex = 0;
var correctAnswers = 0;
var secondsLeft = 100;
var subtractTime = 10;


// Create questions variable with an array that includes an object for choices
var questions = [
    {
        content: "How does a WHILE loop start?",
        choices: ["while [i <=10]", "while (i <= 10)", "while (i <= 10; i++)", "while i = 1 to 10"],
        answer: "while (i <= 10)"
    },
    {
        content: "How do you round the number 7.25, to the nearest integer?",
        choices: ["Math.rnd(7.25)", "rnd(7.25)", "round(7.25)", "Math.round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        content: "How can you detect the client's browser name?",
        choices: ["client.navName", "browser.name", "navigator.appName", "local.appName"],
        answer: "navigator.appName"
    },
    {
        content: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the above"],
        answer: "pop()"
    },
    {
        content: "Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
        choices: ["indexOf()", "search()", "indexOf()", "lastIndexOf()"],
        answer: "lastIndexOf()"
    },
];
              

// When user clicks start button, the timer will begin
startQuiz.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = secondsLeft + " second(s) remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endOfQuiz();
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
    showQuestion(questionIndex);
});


// Create showQuestions function to display question and multiplce choices 
function showQuestion(questionIndex) {
    // Without clearing. The page will show all questions and multiple choices
    questionElement.innerHTML = "";
    ulElement.innerHTML = "";

    // Create a for loop to go through questions array
    for (var i = 0; i < questions.length; i++) {
        // Create a variable to append only the question and choice in a specific index
        var playerQuestion = questions[questionIndex].content;
        var playerChoices = questions[questionIndex].choices;
        questionElement.textContent = playerQuestion;
    }

    // Create a for each function so that the multiple choice answers in a specific index displays
    playerChoices.forEach(function (choiceContent) {
        //  Create a variable called multiple choice which will create a list item element (li)
        var multipleChoice = document.createElement("li");
        // the li will now have the correct multiple choice text content
        multipleChoice.textContent = choiceContent;

        // append to questionElement and ulElement 
        questionElement.appendChild(ulElement);
        ulElement.appendChild(multipleChoice);

        // create a "click" add event listener that will run a checkAnswer function
        multipleChoice.addEventListener("click", (checkAnswer));
    });
}


// Create a function to checkAnswer and see if multiple choice selection is correct
function checkAnswer(event) {
    // The target event property returns the element that triggered the event
    var playerChoiceElement = event.target;

    // if the player chooses one of the multiple choice li
    if (playerChoiceElement.matches("li")) {
        // then create a variable called answeResponse which will create a div element with an id of answerResponse for styling
        var answerResponse = document.createElement("div");
        answerResponse.setAttribute("id", "answerResponse");

        // if the player chooses the correct answer
        if (playerChoiceElement.textContent === questions[questionIndex].answer) {
            correctAnswers++;
            answerResponse.textContent = "Correct!";
          
        // if the player chooses the incorrect answer
        } else {
            secondsLeft -= subtractTime;
            answerResponse.textContent = "Incorrect. The answer is:  " + questions[questionIndex].answer;
        }
    }

    // Increment the questionsIndex to go to the next question
    questionIndex++;

    // If the number of questions is equal to question length then run endOfQuiz function and remove answer response text
    if (questionIndex === questions.length) {
        endOfQuiz();  
        answerResponse.textContent = ""; 
    } else {
        showQuestion(questionIndex);
    }

// append answerResponse to questionElement
questionElement.appendChild(answerResponse);
}


// Create a function that removes the questions + multipleChoices and timerElement
function endOfQuiz() {
    questionElement.innerHTML = "";
    secondsLeft = 0;
    timerElement.style.display = "none";

    // Create a header saying congratulations and how many questions player got correct
    var header1Element = document.createElement("h1");
    header1Element.setAttribute("id", "h1");
    header1Element.textContent = "Congratulation, you completed the quiz! Correct answer(s): " + correctAnswers + "/" + questions.length;

    // append header1Element to questionElement
    questionElement.appendChild(header1Element);

    // Create a variable called score which is correctAnswers x 10 
    var score = correctAnswers * 10;
    // Create a header with player correctAnswers
    var header2Element = document.createElement("h2");
    header2Element.setAttribute("id", "h2");
    header2Element.textContent = "Each correct answer is worth 10 points. Your score: " + score;

    // append header2Element to questionElement
    questionElement.appendChild(header2Element);

    // Create form element so player can input initials
    var formElement = document.createElement("form"); 
    formElement.setAttribute("id", "form");

    // append formElement to questionElement
    questionElement.appendChild(formElement);

    // Create label element so player can input initials
    var labelElement = document.createElement("label"); 
    labelElement.textContent = "Enter your initials: ";

    // append labelElement to questionElement
    questionElement.appendChild(labelElement);

    // Create label element so player can input initials
    var inputElement = document.createElement("input"); 
    inputElement.setAttribute("id", "initials");
    inputElement.setAttribute("type", "text");

    // append labelElement to questionElement
    questionElement.appendChild(inputElement);

    // Create submit element so player can enter score to View Highscores page
    var submitElement = document.createElement("button");
    submitElement.setAttribute("id", "submit-button");
    submitElement.setAttribute("type", "submit");
    submitElement.textContent = "Submit";

    // append submitElement to questionElement
    questionElement.appendChild(submitElement);

    // Create event listener for submit element to store initials and score to local storage
    submitElement.addEventListener("click", function () {
        // Create variable called initials to store initials entered in input
        var initials = inputElement.value;

        if (initials === "") {
            alert("Please enter your initials");
        } else {
            var playerScore = {
                initials: initials,
                score: score
            };
            console.log(playerScore);

            localStorage.setItem("playerScore", JSON.stringify(playerScore));
            window.location.replace("scoreboard.html");
        }
    });
}







// JAVASCRIPT FOR SCOREBOARD.HTML
// Use querySelector to create variables
var scoreboardElement = document.querySelector("#scoreboard");
var backElement = document.querySelector("#back-button");
var clearElement = document.querySelector("#clear-button");

var ulElementHighscore = document.createElement("ul");
scoreboardElement.appendChild(ulElementHighscore);

var lastScore = JSON.parse(localStorage.getItem("playerScore"));

if (lastScore !== null) {
var liElement = document.createElement("li");
liElement.textContent = lastScore.initials + " " + lastScore.score;
ulElementHighscore.appendChild(liElement);
}

// Create event listener for backElement so back-button goes back to the start page (index.html)
backElement.addEventListener("click", function() {
    window.location.replace(".index.html");
});



// Create event listener for clearElement so clear-button clears and reloads local storage
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});



