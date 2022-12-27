

let computerOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
     //randomly return either rock paper or scissors for the computer to use against you)
     let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
     return computerSelection;
}
let result;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors";
        console.log;("You win.");
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors";
        console.log("You lose.");
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock";
        console.log("You win.");
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats rock "; 
        console.log("You lose.");
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper";
        console.log("You win.");
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper"; 
        console.log("You lose.");
    }else if (playerSelection === computerSelection) {
        result = "Its a draw!";
        console.log("Tie");
    }else result = null, console.log("Enter a valid option.") ;

    return result;
    // output will return a string that declares the winner of the round like "You lose! Paper beats Rock"
    // playerSelection will be case-insensitive 
    //reurn the results of the function
    //console.log() the result of each round and the winner at the end
}

let computerSelection = getComputerChoice();
console.log(computerSelection);
let userInput = prompt("Enter rock, paper, or scissors", "");
let playerSelection = userInput.toLowerCase();

console.log(playRound(playerSelection, computerSelection));



/**
function game(let i = 0; i < 5; i++) {
    //loop the single round of rock paper scissors 
}

//use prompt to get input from the user
*/
