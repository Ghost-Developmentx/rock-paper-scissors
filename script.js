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