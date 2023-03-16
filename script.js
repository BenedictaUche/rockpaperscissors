
const icons = document.querySelectorAll('.icons button');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('.text-area');
const tryAgainBtn = document.querySelector('.try-button');
const displayText = document.querySelector('.display-text');

let humanScore = 0;
let computerScore = 0;

// Computer choice generator function
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// Play round function
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        displayText.textContent = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        displayText.textContent = 'You win! ' + humanChoice + ' beats ' + computerChoice;
    } else {
        computerScore++;
        displayText.textContent = 'You lose! ' + computerChoice + ' beats ' + humanChoice;
    }
}

// Display the winner and the scores
function displayResult() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    if (humanScore >= 5) {
        resultDisplay.textContent = 'Game over! You won the game!';
        disableButtons();
    } else if (computerScore >= 5) {
        resultDisplay.textContent = 'Game over! Computer won the game!';
        disableButtons();
    } else {
        resultDisplay.textContent = '';
    }
}

// Disable the buttons after the game ends
function disableButtons() {
    icons.forEach((icon) => {
        icon.disabled = true;
    });
}

// Reset the game when try again button is clicked
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    displayText.textContent = '';
    icons.forEach((icon) => {
        icon.disabled = false;
    });
}

// Play game when the icon buttons are clicked
icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const computerChoice = computerPlay();
        const humanChoice = icon.id;
        resultDisplay.textContent = playRound(humanChoice, computerChoice);
        displayResult();
    });
});

// Reset game when try again button is clicked
tryAgainBtn.addEventListener('click', resetGame);



