//Getting computer random choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

//Player and computer selection and score data
let playerSelection = 'Rock';
let computerSelection = getComputerChoice();
let playerScore;
let computerScore;

playerSelection = playerSelection.toLowerCase();

//Main gameplay and scorring
function playRound (playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Draw!";
    } else if(playerSelection == 'rock') {
        if(computerSelection == 'scissors') {
            return "You win!"
            playerScore++
        } else {
            return "You lose!"
            computerScore++
        }
    } else if(playerSelection == 'paper') {
        if(computerSelection == 'rock') {
            return "You win!"
            playerScore++
        } else {
            return "You lose!"
            computerScore++
        }
    } else if(playerSelection == 'scissors') {
        if(computerSelection == 'paper') {
            return "You win!"
            playerScore++
        } else {
            return "You lose!"
            computerScore++
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

