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


function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
};


function capitalise(str) {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

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

function playGame() {

    humanScore = 0;
    computerScore = 0;

    let humanPlay;
    let computerPlay;


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

const roundResult = document.querySelector("#round-result");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e) => {
    let target = e.target;
    let computerPlay = getComputerChoice();
    roundResult.textContent = playRound(target.textContent, computerPlay);
    playerScore.textContent = `Player's score: ${humanScore}`;
    compScore.textContent = `Computer's score: ${computerScore}`;
});