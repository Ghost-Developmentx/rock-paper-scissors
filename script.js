let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]

    return choice[Math.floor(Math.random()*choice.length)]
}

function getHumanChoice() {
    let choice = prompt("What do you choose?: Rock, Paper, Scissors").toLowerCase()

    return choice
}

function playRound(humanChoice, computerChoice) {
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanChoice === computerChoice) {
        return "Its a tie!"
    } else if (winConditions[humanChoice] === computerChoice) {
        return "Human Wins"
    } else {
        return "Computer Wins"
    }
}