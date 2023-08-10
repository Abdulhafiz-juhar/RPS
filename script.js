let getComputerChoice = () => {
    let rand1to3 = Math.floor(Math.random() * 3) + 1;
    let computerGuess;

    if (rand1to3 === 1) {
        computerGuess = 'rock';
    }
    else if (rand1to3 === 2) {
        computerGuess = 'paper';
    }
    else if (rand1to3 ===3) {
        computerGuess = 'scissor';
    }

    return computerGuess;
}

let getPlayerChoice = () => {
    let playerGuess;
    let playerGuessInitial = 
    prompt('Please enter your choice (i.e. It must be either rock, paper, or scissor)');
    if(playerGuessInitial) {
        playerGuess = playerGuessInitial.toLowerCase();
    }
    else {
        return 'No input entered';
    }

    if (playerGuess === 'rock' || playerGuess === 'paper' || playerGuess === 'scissor') {
        return playerGuess;
    }
    else {
        return 'wrong input';
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log("It's a Draw");
            return 'draw';
        }
        else if (computerSelection === 'paper') {
            console.log("You Lose! Paper beats Rock");
            return 'computer';
        }
        else if (computerSelection === 'scissor') {
            console.log("You Win! rock beats scissor");
            return 'player';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("You Win! paper beats rock");
            return 'player';
        }
        else if (computerSelection === 'paper') {
            console.log("It's a Draw");
            return 'draw';
        }
        else if (computerSelection === 'scissor') {
            console.log("You Lose! scissor beats paper");
            return 'computer';
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            console.log("You Lose! rock beats scissor");
            return 'computer';
        }
        else if (computerSelection === 'paper') {
            console.log("You Win! scissor beats paper");
            return 'player';
        }
        else if (computerSelection === 'scissor') {
            console.log("It's a Draw");
            return 'draw';
        }
    }
}