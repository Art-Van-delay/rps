console.log("Source test");

function getComputerChoice() {
    let numericalValue = Math.floor(Math.random() * 3);
    let computerChoice;
    console.log(numericalValue);
    if (numericalValue == 0) {
        computerChoice = 'rock';
    } else if (numericalValue == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log(computerChoice);
    return computerChoice
}

//const playerSelection = prompt("rock? paper? scissors?");
//console.log(playerSelection);

function playerSelect() {
    const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase()
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `Player wins. ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `Player wins. ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `Player wins. ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        return 'Tie!'
    } else {
        return `Computer wins. ${computerSelection} beats ${playerSelection}`;
    }
}

//getComputerChoice();

playRound(playerSelect, getComputerChoice);
