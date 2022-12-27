

let computerOptions = ["rock", "paper", "scissors"];

function getComputerChoice () {
     //randomly return either rock paper or scissors for the computer to use against you)
     let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
     return computerChoice;
}


/**
function singleroundofRPS (takes two parameters, playerSelection, computerSelection) {
    // output will return a string that declares the winner of the round like "You lose! Paper beats Rock"
    // playerSelection will be case-insensitive 
    //reurn the results of the function
    //console.log() the result of each round and the winner at the end
}

function game(let i = 0; i < 5; i++) {
    //loop the single round of rock paper scissors 
}

//use prompt to get input from the user
*/
