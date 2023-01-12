let computerOptions = ["rock", "paper", "scissors"];


let computerSelection;

function getComputerChoice() {
     //randomly return either rock paper or scissors for the computer to use against you)
     computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
     
}

let result;
let playerScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector('.results');
let playerScoreDiv = document.querySelector('.playerScore');
let computerScoreDiv = document.querySelector('.computerScore');
let scoresDiv = document.querySelector('.scores');

function playRound(playerSelection, computerSelection) {
     //switch console.log to div.textContent or similar
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = playerScore++;
        resultDiv.textContent = "You win! Rock beats Scissors";
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = computerScore++;
        resultDiv.textContent = "You lose! Rock beats Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        result = playerScore++;
        resultDiv.textContent = "You win! Paper beats rock"; 
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        result = computerScore++;
        resultDiv.textContent = "You lose! Paper beats rock";     
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = playerScore++;
        resultDiv.textContent = "You win! Scissors beats paper";      
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = computerScore++;
        resultDiv.textContent = "You lose! Scissors beats paper";      
    }else if (playerSelection === computerSelection) {
        result = 0;
        resultDiv.textContent = "Its a draw!";
    }

    playerScoreDiv.textContent = `Your score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    return result;
   
    
    // output will return a string that declares the winner of the round like "You lose! Paper beats Rock"
    // playerSelection will be case-insensitive 
    //reurn the results of the function
    //console.log() the result of each round and the winner at the end
}
/**
 * 

function game() {
   // for (let i = 0; i < 5; i++) {
            console.log("A new round has begun. Rock, paper, scissors, SHOOT!"); //create in js
        //Fetching user input
        let userInput = prompt("Enter rock, paper, or scissors", ""); //create div in js 
        let playerSelection = userInput.toLowerCase().trim();
        //Fetching computer input
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
   // } 

    if (gameScore === 5 && playerScore > computerScore) {
        console.log("You win! Refresh to play again"); //create div in js 
    } else if (gameScore === 5 && playerScore < computerScore) {
        console.log("You lose! Refresh to try again");//create div in js 
    }
};   //use prompt to get input from the user
 */    //loop the single round of rock paper scissors
    //keeps score
    //reports a winner or loser at the end
let playerSelection;

function getPlayerChoice(e){
    playerSelection = e.target.getAttribute('data-name');
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    playerSelection = this.getAttribute('data-name')
    getComputerChoice();
    
    playRound(playerSelection, computerSelection);

    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultDiv.textContent = "Congratultions, you won! Click to play again!";
        
    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultDiv.textContent = "You lost! Click to try again!";
    };

}));
//playRound(playerSelection = button.getAttribute('data-name'), computerSelection)));


//Goal: Clicking on one button will set the player's choice to it. If I click on rock, playerSelection should = rock
//First I will need to know how to select all the buttons and put them into a variable
//Second I will 


//change all console.logs into dom methods
