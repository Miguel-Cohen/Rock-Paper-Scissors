// Game to be played with console only

// Initialize global variables
let computerChoice;
let compAssignedValue;

// Make function to get computer's random choice
function getComputerChoice(){
    // Math.floor rounds to LOWEST instead of NEAREST integer, 
    // which means we can eliminate the value 3 from popping up 
    // and adding 1 afterwards to get rid of 0.
    computerChoice = Math.floor((Math.random()*3))+1;
    console.log(`computerChoice = ${computerChoice}`);
    assignValues();
}

// Make function to assign an arbitrary value (either Rock, Paper or Scissors) 
// to the computer choice's number output
function assignValues(){
    if(computerChoice === 1){
        compAssignedValue = "ROCK";
    } else if(computerChoice === 2){
        compAssignedValue = "PAPER";        
    } else if(computerChoice === 3){
        compAssignedValue = "SCISSORS";
    }
    console.log(`compAssignedValue = ${compAssignedValue}`);
}

// Make function that captures user's input from on-screen dialogue
function getPlayerSelection(){
    const playerInput = prompt("Choose between rock, paper or scissors");
    // Bump all characters to uppercase, eliminating user based ambiguities on input
    const playerSelection = playerInput.toUpperCase();
    console.log(`playerSelection = ${playerSelection}`);
}


getComputerChoice();
getPlayerSelection();