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


let choices = ["Rock", "Paper", "Scissors"];

function game() {
    console.log("Game Beginning");
    let choice = prompt("Choose 1-Rock 2-Paper 3-Scissors ");
    choice = choice.trim();
    choice = +choice;
    if (choice === 1 || choice === 2 || choice === 3) {
        let humanChoice = choices[choice - 1]; 
        let computerChoice = computerPlay(choices);
        console.log(`you choose: ${humanChoice}`)
        console.log(`the computer choose: ${computerChoice}`)
        rules(humanChoice, computerChoice);
    } else {
        console.log("Choose a number (1, 2, 3)");
        game()
    }
}

const rules = (humanChoice, computerChoice) => {
    if (
        ((humanChoice === "Scissors") && (computerChoice === "Rock")) ||
        ((humanChoice === "Rock") && (computerChoice === "Paper")) ||
        ((humanChoice === "Paper") && (computerChoice === "Scissors"))
    ) {
        console.log("Computer wins");
    } else if (
        ((computerChoice === "Scissors") && (humanChoice === "Rock")) ||
        ((computerChoice === "Rock") && (humanChoice === "Paper")) ||
        ((computerChoice === "Paper") && (humanChoice === "Scissors"))
    ) {
        console.log("You win!");
    } else {
        console.log("It is a tie!");
    }
};

const computerPlay = (array) => {
    let index = Math.floor(Math.random() * array.length);
    let computerChoice = array[index];
    return computerChoice;
};

game();
