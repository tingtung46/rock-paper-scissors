//Getting computer random choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

//Variable for score and result of winner and loser
let playerScore = 0;
let computerScore = 0;
let message = '';

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

    console.log(message);

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if(playerScore === 5) {
        console.log("Congratulation! You win the game!");
    } else if(computerScore === 5) {
        console.log("Sorry, you lose! Try again!");
    };
}

//Run a game for 5 rounds and show the final result
rock.addEventListener('click', () => {
    playRound(rock.value);
});
paper.addEventListener('click', () => {
    playRound(paper.value);
});
scissors.addEventListener('click', () => {
    playRound(scissors.value);
});