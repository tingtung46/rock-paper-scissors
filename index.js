function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

let playerSelection = 'Rock';
let computerSelection = getComputerChoice();

playerSelection = playerSelection.toLowerCase();

function playRound (playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Draw!";
    } else if(playerSelection == 'rock') {
        return (computerSelection == 'scissors') ? "You win!" : "You lose!";
    } else if(playerSelection == 'paper') {
        return (computerSelection == 'rock') ? "You win!" : "You lose!";
    } else if(playerSelection == 'scissors') {
        return (computerSelection == 'paper') ? "You win!" : "You lose!";
    }
}

console.log(playRound(playerSelection, computerSelection));