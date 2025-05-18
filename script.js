//Create a function 'getComputerChoice' to return the computer's RPS choice

function getComputerChoice() {
let randNum = Math.random() * 3;
if (randNum < 1){
    return "Rock"
} else if (randNum <2){
    return "Paper"
} else {
    return "Scissors"
}
};

//Create a function 'getHumanChoice' to receive the player's input for RPS

function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
};

//Create a function 'capitalise' to capitalise first letter of input

function capitalise(str) {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
};

//Create a function 'playGame' start a game of 5 rounds.

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let humanPlay;
    let computerPlay;


    function playRound(humanChoice, computerChoice) {
    humanChoice = capitalise(humanChoice);

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")) {
            result = "win";
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Rock")) {
            result = "lose";
        } else {
            result = "draw";
        };

    if (result === "win") {
        humanScore += 1;
        return ("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else if (result === "lose") {
        computerScore += 1;
        return ("You lose! " + computerChoice + " beats " + humanChoice + ".");
    } else if (result === "draw") {
        return ("It was a draw! You both picked " + humanChoice + ".");
    };

};


    for (let i = 0; i<5; i++) {
        humanPlay = getHumanChoice();
        computerPlay = getComputerChoice();
        console.log(playRound(humanPlay, computerPlay));
        console.log("Human: " + humanScore +", Computer: " + computerScore)
    };
 
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose...");
    } else {
        console.log("It was a draw.")
    };
};

// playGame();