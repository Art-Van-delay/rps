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
    // console.log(computerChoice);
    return computerChoice
}

//const playerSelection = prompt("rock? paper? scissors?");
//console.log(playerSelection);

// const playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase()

function playRound(playerSelection, computerSelection) {
    //console.log(`Player selection ${playerSelection}, Computer selection ${computerSelection}`)
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `Player wins.`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `Player wins.`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `Player wins.`;
    } else if (playerSelection == computerSelection) {
        return 'Tie!'
    } else {
        return `Computer wins.`;
    }
}


function game() {
    let playerScore = 0, computerScore = 0, tieScore = 0;
    for (let i = 0; i < 2; i++) {
        const playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase()
        let result = playRound(playerChoice, getComputerChoice());
        if (result === `Player wins.`) {
            playerScore++;
        } else if (result === `Computer wins.`) {
            computerScore++;
        } else {
            tieScore++;
        }
    }
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}\nTie score: ${tieScore}`);
}
//playRound(playerChoice, getComputerChoice());

game();

