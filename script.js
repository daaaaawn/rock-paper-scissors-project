let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Pick between rock, paper, and scissors.").toLowerCase();
    
    if (humanChoice === "rock") {
        return humanChoice;
    } else if (humanChoice === "paper") {
        return humanChoice;
    } else if (humanChoice === "scissors") {
        return humanChoice;
    } else {
        return "Invalid choice!";
    }
}

function playRound(computerChoice, humanChoice) {
    const tieMessage = `Both players chose ${computerChoice}! It's a tie!`;
    const computerWins = `Computer chose ${computerChoice} while Player chose ${humanChoice}. Computer wins!`;
    const playerWins = `Computer chose ${computerChoice} while Player chose ${humanChoice}. Player wins!`;

    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            return tieMessage;
        } else if (humanChoice === "paper") {
            humanScore++;
            return playerWins;
        } else if (humanChoice === "scissors") {
            computerScore++;
            return computerWins;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            return computerWins;
        } else if (humanChoice === "paper") {
            return tieMessage;
        } else if (humanChoice === "scissors") {
            humanScore++;
            return playerWins;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            return playerWins;
        } else if (humanChoice === "paper") {
            computerScore++;
            return computerWins;
        } else if (humanChoice === "scissors") {
            return tieMessage;
        }
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        const result = playRound(computerChoice, humanChoice);
        console.log(`Round ${i} result: ${result}`);
        console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
    }
}

playGame();