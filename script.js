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