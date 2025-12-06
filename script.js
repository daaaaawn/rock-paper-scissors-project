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
    let humanChoice = prompt("Pick between rock, paper, scissors.").toLowerCase();
    
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

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            return `Both players chose ${computerChoice}! It's a tie!`;
        } else if (humanChoice === "paper") {
            humanScore++;
            return `Human player wins!`;
        } else if (humanChoice === "scissors") {
            computerScore++;
            return `Computer player wins!`;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            return `Computer player wins!`;
        } else if (humanChoice === "paper") {
            return `Both players chose ${computerChoice}! It's a tie!`
        } else if (humanChoice === "scissors") {
            humanScore++;
            return `Human player wins!`;
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            return `Human player wins!`;
        } else if (humanChoice === "paper") {
            computerScore++;
            return `Computer player wins!`;
        } else if (humanChoice === "scissors") {
            return `Both players chose ${computerChoice}! It's a tie!`;
        }
    }
}

function playGame() {
    playRound();
}

