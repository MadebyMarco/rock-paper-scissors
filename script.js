

let computerOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
     //randomly return either rock paper or scissors for the computer to use against you)
     let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
     return computerSelection;
}
let result;

let playerScore = 0;
let computerScore = 0;
let gameScore = playerScore + computerScore;

function playRound(playerSelection, computerSelection) {
     
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors";
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock"; 
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats rock ";     
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper";      
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper";      
    }else if (playerSelection === computerSelection) {
        result = "Its a draw!";
    }

    console.log(result);
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
}   //use prompt to get input from the user
    //loop the single round of rock paper scissors
    //keeps score
    //reports a winner or loser at the end
game();

