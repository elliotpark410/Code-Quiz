const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const questionContainerElement = document.getElementById('question-container');

const questionResponseElement = document.querySelectorAll('.question-response');

var timeElement = document.querySelector('.time');
var secondsLeft = 180;


var currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


function startGame() {
    console.log('started game');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    setTime();
    setNextQuestion();
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
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const answerButton = document.createElement('answerButton');
        answerButton.innerText = answer.text;
        answerButton.classList.add('button');
        if (answer.correct) {
            answerButton.dataset.correct = answer.correct   
        }
        startButton.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(answerButton);
    })
}

function selectAnswer(e) {
    
}




function scoreBoard() {

}


const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '8', correct: false},
            {text: '0', correct: false}
        ],
        question: 'What is 4 x 5?',
        answers: [
            {text: '9', correct: false},
            {text: '20', correct: true},
            {text: '-1', correct: false},
            {text: '45', correct: false}
        ]
    }
]