function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  switch (randomNum) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;
  }

  return computerChoice
}

function getPlayerChoice() {
  let userChoice = prompt("choose your weapon : rock , paper , scissors").toLowerCase();
  while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("invalid input: choose your weapon : rock , paper , scissors")
  }
  return userChoice
}

function oneRound (){
 const computerChoice = getComputerChoice();
 const userChoice = getPlayerChoice();

  if (userChoice === "rock" && computerChoice === "paper") {
    console.log("Paper beats rock. You lose.");
    return "computer";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("Paper beats rock. You win.");
    return "user";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("Scissors beat paper. You win.");
    return "user";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("Scissors beat paper. You lose.");
    return "computer";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("Rock beats scissors. You win.");
    return "user";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("Rock beats scissors. You lose.");
    return "computer";
  } else {
    console.log("It's a draw.");
    return "draw";
  }
}

function game() {
  let userPoints = 0;
  let computerPoints = 0;
  let round;

  for (let i = 0; i < 5; i++) {
    round = oneRound();
    if (round === "user") {
      userPoints++;
    } else if (round === "computer") {
      computerPoints++;
    }
  }

  if (userPoints > computerPoints) {
    console.log(`You won ${userPoints} to ${computerPoints}!`);
  } else if (userPoints < computerPoints) {
    console.log(`You lost ${userPoints} to ${computerPoints}.`);
  } else {
    console.log(`It's a draw, ${userPoints} to ${computerPoints}.`);
  }
}
 
game();
