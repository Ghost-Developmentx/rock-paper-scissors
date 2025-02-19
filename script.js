let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]

    return choice[Math.floor(Math.random()*choice.length)]
}