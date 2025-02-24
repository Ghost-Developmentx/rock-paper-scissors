let humanScore = 0;
let computerScore = 0;

const WINNING_SCORE = 5;

/**
 * Randomly selects and returns one of three possible choices: "rock", "paper", or "scissors"
 * @returns {string} A random choice between "rock", "paper", or "scissors"
 */
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];

  return choice[Math.floor(Math.random() * choice.length)];
}

/**
 * Determines the winner of a rock-paper-scissors round
 * @param {string} humanChoice - The player's choice ('rock', 'paper', or 'scissors')
 * @param {string} computerChoice - The computer's choice ('rock', 'paper', or 'scissors')
 * @returns {string} The result of the round ('It's a tie!', 'Human Wins', or 'Computer Wins')
 */
function playRound(humanChoice, computerChoice) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    console.log("Tie");
    return "Its a tie!";
  } else if (winConditions[humanChoice] === computerChoice) {
    console.log("Human Wins");
    return "Human Wins";
  } else {
    console.log("Computer Wins");
    return "Computer Wins";
  }
}

const playerButtons = document.querySelectorAll(".playerButton");

const humanScoreDisplay = document.getElementById("humanScore");

const computerScoreDisplay = document.getElementById("computerScore");

const computerPlay = document.getElementById("computerChoice");

const playerPlay = document.getElementById("humanChoice");

/**
 * Updates the score display for both human and computer players.
 * Reflects the current scores onto their respective display elements.
 *
 * @return {void} This function does not return a value.
 */
function updateScoreDisplay() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

/**
 * Resets the game state by clearing the scores, resetting displayed moves, and updating the score display.
 *
 * @param {string} message - A message to show the user as an alert during the reset process.
 * @return {void} This method does not return a value.
 */
function resetGame(message) {
  alert(message);
  humanScore = 0;
  computerScore = 0;
  computerPlay.textContent = "";
  playerPlay.textContent = "";
  updateScoreDisplay();
}

/**
 * Updates the displayed choices for the player and computer, as well as their respective colors to indicate the outcome of the game.
 *
 * @param {string} playerSelection - The choice made by the player.
 * @param {string} computerSelection - The choice made by the computer.
 * @param {boolean|null} playerWon - The outcome of the game. True if the player won, false if the computer won, or null for a tie.
 * @return {void} This function does not return a value.
 */
function updateChoices(playerSelection, computerSelection, playerWon) {
  playerPlay.textContent = playerSelection;
  computerPlay.textContent = computerSelection;

  if (playerWon === true) {
    playerPlay.style.color = "green";
    computerPlay.style.color = "red";
  } else if (playerWon === false) {
    playerPlay.style.color = "red";
    computerPlay.style.color = "green";
  } else {
    playerPlay.textContent = "It's a tie!";
    computerPlay.textContent = "It's a tie!";
    playerPlay.style.color = "black";
    computerPlay.style.color = "black";
  }
}

/**
 * Handles the game round by updating the scores and triggering game state changes based on the result of the round.
 *
 * @param {string} result - The outcome of the round. Expected values are "Human Wins", "Computer Wins", or "Draw".
 * @param {string} computerSelection - The choice made by the computer in the round.
 * @param {string} playerSelection - The choice made by the player in the round.
 * @return {void} This function does not return a value.
 */
function handleRound(result, computerSelection, playerSelection) {
  if (result === "Human Wins") {
    humanScore++;
    updateChoices(playerSelection, computerSelection, true);
  } else if (result === "Computer Wins") {
    computerScore++;
    updateChoices(playerSelection, computerSelection, false);
  } else {
    updateChoices(playerSelection, computerSelection, null);
  }
  updateScoreDisplay();

  if (humanScore === WINNING_SCORE) {
    resetGame("YOU WIN THE GAME!!");
  } else if (computerScore === WINNING_SCORE) {
    resetGame("YOU LOSE THE GAME!!");
  }
}

for (let button of playerButtons) {
  button.addEventListener("click", function (e) {
    let playerSelection = e.target.value;
    let computerChoice = getComputerChoice();

    const result = playRound(playerSelection, computerChoice);

    handleRound(result, computerChoice, playerSelection);
  });
}
