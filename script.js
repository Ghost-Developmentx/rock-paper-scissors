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

/**
 * Executes a 5-round game of Rock Paper Scissors between a human player and the computer.
 * Keeps track of the score and announces the winner of each round and the final game.
 * The game continues for exactly five rounds, regardless of the score.
 * After each round (except the last), announce the next round.
 * In the end, declares the overall winner based on the total score.
 * 
 * @function playGame
 * @returns {void}
 * 
 * @global {number} humanScore - Tracks the human player's score
 * @global {number} computerScore - Tracks the computer's score
 * 
 * @requires getHumanChoice
 * @requires getComputerChoice
 * @requires playRound
 */
function playGame() {
    humanScore = 0
    computerScore = 0

    for (let round = 1; round <= 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice()
        let result = playRound(humanChoice, computerChoice)

        if (result === "Human Wins") {
            humanScore++
            console.log(`Human Wins Round ${round}! Score: ${humanScore}-${computerScore}`)
        } else if (result === "Computer Wins") {
            computerScore++
            console.log(`Computer Wins Round ${round}! Score: ${humanScore}-${computerScore}`)
        } else {
            console.log(`Round ${round} is a tie! Score: ${humanScore}-${computerScore}`)
        }

        if (round < 5) {
            console.log(`Get Ready for Round ${round + 1}`)
        }
    }

    if (humanScore > computerScore) {
        console.log(`Human Wins Game! Score: ${humanScore}-${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`Computer Wins Game! Score: ${humanScore}-${computerScore}`)
    } else {
        console.log(`The game is a tie! Score: ${humanScore}-${computerScore}`)
    }
    
}

playGame()