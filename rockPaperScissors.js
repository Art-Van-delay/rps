function getComputerChoice() {
    let numericalValue = Math.floor(Math.random() * 3);
    let computerChoice;
    //console.log(numericalValue);
    if (numericalValue == 0) {
        computerChoice = 'rock';
    } else if (numericalValue == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice
}

const buttons = document.querySelectorAll('button');
// Varaible set up
let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


// DOM set up
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);

const pScore = document.createElement('p');
pScore.textContent = `Player score: ${playerScore}`;
container.append(pScore);

const cScore = document.createElement('p');
cScore.textContent = `Computer score: ${computerScore}`;
container.append(cScore);

const tScore = document.createElement('p');
tScore.textContent = `Tie score: ${tieScore}`;
container.append(tScore);




// Event listener
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id.toString();
        console.log(`Player selection: ${playerSelection}`)
        console.log(`Computer selection: ${getComputerChoice()}`)
        playRound(playerSelection, getComputerChoice());

    });
});

// Play round logic
function playRound(playerSelection, computerSelection) {
    if (playerScore <= 5 || computerScore <= 5 || tieScore <= 5) {
        console.log(`Player selection ${playerSelection}, Computer selection ${computerSelection}`)
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            content.textContent = `${playerSelection} vs ${computerSelection}`;
            console.log(`Player score: ${playerScore}`);
            pScore.textContent = `Player score: ${playerScore}`;
            return `Player wins.`;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            content.textContent = `${playerSelection} vs ${computerSelection}`;
            console.log(`Player score: ${playerScore}`);
            pScore.textContent = `Player score: ${playerScore}`;
            return `Player wins.`;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            content.textContent = `Player: ${playerSelection} vs Computer: ${computerSelection}`;
            console.log(`Player score: ${playerScore}`);
            pScore.textContent = `Player score: ${playerScore}`;
            return `Player wins.`;
        } else if (playerSelection === computerSelection) {
            tieScore++;
            content.textContent = `${playerSelection} vs ${computerSelection}`;
            console.log(`Tie score: ${tieScore}`);
            tScore.textContent = `Tie score: ${tieScore}`;
            return 'Tie!'
        } else {
            computerScore++;
            content.textContent = `Player: ${playerSelection} vs Computer: ${computerSelection}`;
            cScore.textContent
            console.log(`Computer score: ${computerScore}`);
            cScore.textContent = `Computer score: ${computerScore}`;
            return `Computer wins.`;
        }


    }
}


