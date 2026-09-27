console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}
console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    const choice = humanChoice.toLowerCase() + computerChoice.toLowerCase();
    let result;
    if (choice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (choice === "rock" && computerChoice === "scissors") ||
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${choice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${choice}.`;
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return result;
}

