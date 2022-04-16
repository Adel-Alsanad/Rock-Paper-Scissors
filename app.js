const copmuterCoiceDisplay = document.getElementById("computer-choice");
const userCoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let copmuterCoice;
let result;

const ROCK_KEY = "rock";
const PAPER_KEY = "paper";
const SCISSORS_KEY = "scissors";

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userCoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can user possibleChoices.length

  if (randomNumber === 1) {
    copmuterCoice = ROCK_KEY;
  }
  if (randomNumber === 2) {
    copmuterCoice = PAPER_KEY;
  }
  if (randomNumber === 3) {
    copmuterCoice = SCISSORS_KEY;
  }
  copmuterCoiceDisplay.innerHTML = copmuterCoice;
}

function getResult() {
  if (copmuterCoice === userChoice) {
    result = "its a draw!";
  } else if (copmuterCoice === SCISSORS_KEY && userChoice === PAPER_KEY) {
    result = "you lose :( ";
  } else if (copmuterCoice === ROCK_KEY && userChoice === SCISSORS_KEY) {
    result = "you lose :( ";
  } else if (copmuterCoice === PAPER_KEY && userChoice === ROCK_KEY) {
    result = "you lose :( ";
  } else {
    result = "you win!";
  }
  resultDisplay.innerHTML = result;
}
