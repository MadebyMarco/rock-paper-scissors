

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
        playerScore++;
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors";
        computerScore++;
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock";
        playerScore++;
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats rock "; 
        computerScore++;
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper";
        playerScore++;
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper"; 
        computerScore++;
    }else if (playerSelection === computerSelection) {
        result = "Its a draw!";
    }else console.log("Enter a valid option.");
    
    return result;
    
    // output will return a string that declares the winner of the round like "You lose! Paper beats Rock"
    // playerSelection will be case-insensitive 
    //reurn the results of the function
    //console.log() the result of each round and the winner at the end
}






let playerScore = 0;
let computerScore = 0;
let gameScore = playerScore + computerScore;



function game() {
    for (let i = 0; i < 5; i++) {
            console.log("A new round has begun. Rock, paper, scissors, SHOOT!");
        //Fetching user input
        let userInput = prompt("Enter rock, paper, or scissors", "");
        let playerSelection = userInput.toLowerCase();
        //Fetching computer input
        let computerSelection = getComputerChoice();
        
            console.log(playRound(playerSelection, computerSelection));
        
         
    } 
    //loop the single round of rock paper scissors
    //keeps score
    //reports a winner or loser at the end

    /** What is happening:
         * The game prompts me to enter rps
         * The machine takes the player and the computer arguments and puts them into the function.
         * The function will set a variable to a string that matches the result and then will log that result. 
         * The result is then console.logged 5 times in a row.
         * Problem:
         * In the for loop, the SAME result is logged 5 times because the entire function is not restarting, the executables in the if loop, inside of the function, are repeating.
         * Question: How can we restart a function? or Why is my if loop inside my function repeating in my for loop? or How to escape if loops?
         * Asnwer: I need to keep track of player scores. I missed this in the prompt. 
         */
   
}

game();
//use prompt to get input from the user
