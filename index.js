//Getting computer random choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

//Variable for score, result of one round game and DOM
let playerScore = 0;
let computerScore = 0;
let message = '';

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const msg = document.querySelector('.message');
const playScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const winner = document.querySelector('.winner');

//Main gameplay and scorring
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if(playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        message = 'Draw!';
    }

    if((playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'paper' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        message = 'You win!';
    }

    if((computerSelection == 'rock' && playerSelection == 'scissors')
    || (computerSelection == 'paper' && playerSelection == 'rock')
    || (computerSelection == 'scissors' && playerSelection == 'paper')) {
        computerScore++;
        message = 'You lose!';
    }

    msg.innerText = message;

    playScore.innerText = playerScore;
    compScore.innerText = computerScore;

    //Final result
    if(playerScore === 5) {
        winner.innerText = "Congratulation! You win the game!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if(computerScore === 5) {
        winner.innerText = "Sorry, you lose! Try again!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    };
}

//Run a game
rock.addEventListener('click', () => {
    playRound(rock.value);
});
paper.addEventListener('click', () => {
    playRound(paper.value);
});
scissors.addEventListener('click', () => {
    playRound(scissors.value);
});