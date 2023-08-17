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
const resultsContainer = document.querySelector('.results');



function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            const results = document.createElement('p');
            results.textContent = "It's a Draw";
            resultsContainer.appendChild(results);
            console.log("It's a Draw");
            return 'draw';
        }
        else if (computerSelection === 'paper') {
            const results = document.createElement('p');
            results.textContent = "You Lose! Paper beats Rock";
            resultsContainer.appendChild(results);
            console.log("You Lose! Paper beats Rock");
            return 'computer';
        }
        else if (computerSelection === 'scissor') {
            const results = document.createElement('p');
            results.textContent = "You Win! rock beats scissor";
            resultsContainer.appendChild(results);
            console.log("You Win! rock beats scissor");
            return 'player';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            const results = document.createElement('p');
            results.textContent = "You Win! paper beats rock";
            resultsContainer.appendChild(results);
            console.log("You Win! paper beats rock");
            return 'player';
        }
        else if (computerSelection === 'paper') {
            const results = document.createElement('p');
            results.textContent = "It's a Draw";
            resultsContainer.appendChild(results);
            console.log("It's a Draw");
            return 'draw';
        }
        else if (computerSelection === 'scissor') {
            const results = document.createElement('p');
            results.textContent = "You Lose! scissor beats paper";
            resultsContainer.appendChild(results);
            console.log("You Lose! scissor beats paper");
            return 'computer';
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            const results = document.createElement('p');
            results.textContent = "You Lose! rock beats scissor";
            resultsContainer.appendChild(results);
            console.log("You Lose! rock beats scissor");
            return 'computer';
        }
        else if (computerSelection === 'paper') {
            const results = document.createElement('p');
            results.textContent = "You Win! scissor beats paper";
            resultsContainer.appendChild(results);
            console.log("You Win! scissor beats paper");
            return 'player';
        }
        else if (computerSelection === 'scissor') {
            const results = document.createElement('p');
            results.textContent = "It's a Draw";
            resultsContainer.appendChild(results);
            console.log("It's a Draw");
            return 'draw';
        }
    }
}

//three buttons for selection
// const container = document.querySelector('.container');

// const rock = document.createElement('button');
// rock.textContent = 'Rock';
// container.appendChild(rock);

// const paper = document.createElement('button');
// paper.textContent = 'Paper';
// container.appendChild(paper);

// const scissor = document.createElement('button');
// scissor.textContent = 'scissor';
// container.appendChild(scissor);

function userInput(e) {
    let playerSelect = this.textContent.toLowerCase();
    console.log(playRound(playerSelect, getComputerChoice()));
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', userInput))




// let game = (playRound, getPlayerChoice, getComputerChoice) => {

//     let computerScoreCount = 0, playerScoreCount = 0;
//     let roundWinner;
//     for(let i = 1; i <= 5; i++) {
//         console.log('Round ' + i)
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         roundWinner = playRound(playerSelection, computerSelection);
//         if (roundWinner === 'player') {
//             ++playerScoreCount;
//         }
//         else if (roundWinner === 'computer') {
//             ++computerScoreCount;
//         }
//         console.log('Player: ' + playerScoreCount);
//         console.log('Computer: ' + computerScoreCount);
//     }

//     if(computerScoreCount > playerScoreCount) {
//         return 'Game Over, You Lost!';
//     }
//     else if (computerScoreCount < playerScoreCount) {
//         return 'Congratulations, You Won!'
//     }
//     else if (computerScoreCount === playerScoreCount) {
//         return 'Its a Tie!';
//     }
//   }
// console.log(game(playRound,getPlayerChoice,getComputerChoice));