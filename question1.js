/*
Objective: Create a two-player Rock Paper Scissors game in JavaScript, with one player being the user and the other being the computer.
 
Requirements:
 
Functionality:
 
User selects their choice (rock, paper, or scissors) through buttons or user input.
Computer randomly chooses its move (0-0.33 rock, 0.34-0.66 paper, 0.67-1 scissors).
Winner is determined based on standard rock paper scissors rules.
Display the result (win, lose, tie) and user/computer choices on the screen.
Consider adding scorekeeping and a winner declaration for multiple rounds (optional).
Code Structure:
 
Use at least one function declaration.
Use at least one function expression.
Use at least one arrow function.
Use at least one anonymous function.
Use a ternary operator for a concise outcome display 
Utilize default parameters in a function
 
Cheat Mode:
 
Design a "cheat mode" feature that alters the computer's choice in some way (optional).
Come up with one specific implementation of cheat mode (e.g., computer always chooses scissors).

*/

const Scissors = "Scissors"
const Paper = "Paper"
const Rock = "Rock"


let choices = [Rock, Paper,Scissors ];

function game() {
    console.log("Game  has Begun");
    let humanChoice =  humanPlay()
    let computerChoice = computerPlay(choices);
    console.log(`you choose: ${humanChoice}`)
    console.log(`the computer chooses: ${computerChoice}`)
    rules(humanChoice, computerChoice);
    
}

const rules = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice){
        console.log("Its a tie")

    }else if(
        ((humanChoice === Scissors) && (computerChoice === Rock)) ||
        ((humanChoice === Rock) && (computerChoice === Paper)) ||
        ((humanChoice === Paper) && (computerChoice === Scissors))) {

        console.log("Computer wins");
    } else{
        console.log("You win")
    }
};

const computerPlay = (array) => {
    let probability =  Math.random()
    if(probability <=0.33){
        console.log()
        let computerChoice = array[0];
        return computerChoice;

    }else if( probability <= 0.66){
        let computerChoice = array[1];
        return computerChoice;

    }else{
        let computerChoice = array[2];
        return computerChoice;
    }
   
};

function humanPlay(){
    let choice = prompt("Choose6 1-Rock 2-Paper 3-Scissors ");
    choice = choice.trim();
    choice = +choice;
    if (choice === 1 || choice === 2 || choice === 3) {
        let humanChoice = choices[choice - 1]; 
        return humanChoice
    } else {
        console.log("Choose a number  between 1- 3)");
        game()
    }
}


game();
