const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const questionContainerElement = document.getElementById('question-container');
const questionResponseElement = document.querySelectorAll('question-response');

function startGame() {
    console.log('started game');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}