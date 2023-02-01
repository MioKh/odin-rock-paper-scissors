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
  let userchoice = prompt("choose your weapon : rock , paper , scissors").toLowerCase();
  while (userchoice !== "rock" && userchoice !== "paper" && userchoice !== "scissors") {
    userchoice = prompt("invalid input: choose your weapon : rock , paper , scissors")
  }
  return userchoice
}