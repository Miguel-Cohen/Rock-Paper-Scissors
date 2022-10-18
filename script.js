// Game to be played with console only

// Initialize global variables
let computerChoice;
let compAssignedValue;
let playerSelection;
let i = 0;
let win = 0;
let loss = 0;

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
    playerSelection = playerInput.toUpperCase();
    console.log(`playerSelection = ${playerSelection}`);
}

// Make function to compare computer against user
// Increment loop iteration if round played out successfully
function compare(){
    // Make clearer in console's wall of text when new round is initiated
    console.log("NEW ROUND INITIATED")
    getComputerChoice();
    getPlayerSelection();
    if(compAssignedValue === playerSelection){
        console.log(`It's a tie! Please try again`);
    } else if(compAssignedValue === "ROCK" && playerSelection === "SCISSORS"){
        i++;
        loss++;
        console.log(`Oponent's rock beats your scissors! You lose this round.`);
    } else if(compAssignedValue === "PAPER" && playerSelection === "ROCK"){
        i++;
        loss++;
        console.log(`Oponent's paper beats your rock! You lose this round.`);
    } else if(compAssignedValue === "SCISSORS" && playerSelection === "PAPER"){
        i++;
        loss++;
        console.log(`Oponent's scissors beat your paper! You lose this round.`);
    } else if(compAssignedValue === "SCISSORS" && playerSelection === "ROCK"){
        i++;
        win++;
        console.log(`Your rock defeated your oponent's scissors! You win this round`);
    } else if(compAssignedValue === "ROCK" && playerSelection === "PAPER"){
        i++;
        win++;
        console.log(`Your paper defeated your oponent's rock! You win this round`);
    } else if(compAssignedValue === "PAPER" && playerSelection === "SCISSORS"){
        i++;
        win++;
        console.log(`Your scissors defeated your oponent's paper! You win this round`);
    }
    console.log(`i = ${i}`);
}

function game(){
    for(;i < 5;){
        compare();
        console.log(`${win} vs ${loss}`);
    }
    if(win > loss){console.log(`You win the game! Congratulations!`);} 
    else {console.log(`Unfortunately you lost. Maybe have another go?`)}
}

game();