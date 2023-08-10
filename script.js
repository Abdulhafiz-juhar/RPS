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
