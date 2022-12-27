

let computerOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
     //randomly return either rock paper or scissors for the computer to use against you)
     let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
     return computerSelection;
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

let playerSelection = prompt("Enter rock, paper, or scissors", "");
//make case insensitive 

playRound();

function playRound(playerSelection, computerSelection) {
    
    // output will return a string that declares the winner of the round like "You lose! Paper beats Rock"
    // playerSelection will be case-insensitive 
    //reurn the results of the function
    //console.log() the result of each round and the winner at the end
}



/**
function game(let i = 0; i < 5; i++) {
    //loop the single round of rock paper scissors 
}

//use prompt to get input from the user
*/
