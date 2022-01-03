const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const questionContainerElement = document.getElementById('question-container');

const questionResponseElement = document.querySelectorAll('.question-response');

var timeElement = document.querySelector('.time');
var secondsLeft = 180;

function startGame() {
    console.log('started game');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setTime();
}



function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = secondsLeft + " second(s) remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            scoreBoard();
        }
    }, 1000);
}



function setNextQuestion() {

}

function selectAnswer() {

}

function scoreBoard() {

}

;
const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '8', correct: false},
            {text: '0', correct: false}
        ]
    }
]