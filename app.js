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
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can user possibleChoices.length

  if (randomNumber === 1) {
    copmuterCoice = "rock";
  }
  if (randomNumber === 2) {
    copmuterCoice = "paper";
  }
  if (randomNumber === 3) {
    copmuterCoice = "scissors";
  }
  copmuterCoiceDisplay.innerHTML = copmuterCoice;
}

function getResult() {
  if (copmuterCoice === userChoice) {
    result = "its a draw!";
  }
  if (copmuterCoice === ROCK_KEY && userChoice === PAPER_KEY) {
    result = "you win!";
  }
  if (copmuterCoice === ROCK_KEY && userChoice === SCISSORS_KEY) {
    result = "you lose :( ";
  }
}
