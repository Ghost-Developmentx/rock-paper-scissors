let humanScore = 0
let computerScore = 0

/**
 * Randomly selects and returns one of three possible choices: "rock", "paper", or "scissors"
 * @returns {string} A random choice between "rock", "paper", or "scissors"
 */
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]

    return choice[Math.floor(Math.random()*choice.length)]
}

/**
 * Prompts the user to input their choice of rock, paper, or scissors.
 * @returns {string} The user's choice in lowercase.
 */
function getHumanChoice() {
    return prompt("What do you choose?: Rock, Paper, Scissors").toLowerCase()
}

/**
 * Determines the winner of a rock-paper-scissors round
 * @param {string} humanChoice - The player's choice ('rock', 'paper', or 'scissors')
 * @param {string} computerChoice - The computer's choice ('rock', 'paper', or 'scissors')
 * @returns {string} The result of the round ('It's a tie!', 'Human Wins', or 'Computer Wins')
 */
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