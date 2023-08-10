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
let computerSelection = getComputerChoice();


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
let playerSelection = getPlayerChoice();