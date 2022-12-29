

let computerOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
     //randomly return either rock paper or scissors for the computer to use against you)
     let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
     return computerSelection;
}
let result;

let playerScore = 0;
let computerScore = 0;
let gameScore = 0;

function playRound(playerSelection, computerSelection) {
     
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = playerScore++, gameScore++;
        console.log("You win! Rock beats Scissors");
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = computerScore++, gameScore++;
        console.log("You lose! Rock beats Scissors");
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        result = playerScore++, gameScore++;
        console.log("You win! Paper beats rock"); 
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        result = computerScore++, gameScore++;
        console.log("You lose! Paper beats rock");     
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = playerScore++, gameScore++;
        console.log("You win! Scissors beats paper");      
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = computerScore++, gameScore++;
        console.log("You lose! Scissors beats paper");      
    }else if (playerSelection === computerSelection) {
        result = gameScore++;
        console.log("Its a draw!");
    }

    return result;
   
    
    // output will return a string that declares the winner of the round like "You lose! Paper beats Rock"
    // playerSelection will be case-insensitive 
    //reurn the results of the function
    //console.log() the result of each round and the winner at the end
}



function game() {
    for (let i = 0; i < 5; i++) {
            console.log("A new round has begun. Rock, paper, scissors, SHOOT!");
        //Fetching user input
        let userInput = prompt("Enter rock, paper, or scissors", "");
        let playerSelection = userInput.toLowerCase().trim();
        //Fetching computer input
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    } 

    if (gameScore === 5 && playerScore > computerScore) {
        console.log("You win! Refresh to play again");
    } else if (gameScore === 5 && playerScore < computerScore) {
        console.log("You lose! Refresh to try again");
    }
}   //use prompt to get input from the user
    //loop the single round of rock paper scissors
    //keeps score
    //reports a winner or loser at the end
game();

