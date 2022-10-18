// Game to be played with console only

// Initialize global variables
let computerChoice;

// Make function to get computer's random choice
function getComputerChoice(){
    computerChoice = Math.floor((Math.random()*3))+1;
    console.log(computerChoice);
}

getComputerChoice();