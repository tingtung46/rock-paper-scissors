function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

console.log(getComputerChoice());