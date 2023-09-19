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

//Main gameplay and scorring
function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Your choice (Rock, Paper, or Scissors):", '');
    playerSelection = playerSelection.toLowerCase();

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
}

//Run a game for 5 rounds and show the final result
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if(playerScore > computerScore) {
        console.log("Congratulation! You win the game!");
    } else if(playerScore < computerScore) {
        console.log("Sorry, you lose! Try again!");
    }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

game();