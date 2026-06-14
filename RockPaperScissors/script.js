const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const messageEl = document.getElementById("message");
const playerScoreEl = document.getElementById("scoreH");
const computerScoreEl = document.getElementById("scoreC");

let computerChoice = () => parseInt(Math.random()*3);
// 0-Rock 1-Paper 2-Scissors

let playerScore = 0;
let computerScore = 0;

function getName(choice) {
    if (choice == 0)
        return "rock";
    if (choice == 1)
        return "paper";
    if (choice == 2)
        return "scissors";
}

function getResult(playerC, computerC) {
    if (playerC == computerC)
        messageEl.innerHTML = "It's a tie!";
    else if ((playerC == 0 && computerC == 2) ||
            (playerC == 1 && computerC == 0) ||
            (playerC == 2 && computerC == 1)) {
        messageEl.innerHTML = `You win! ${getName(playerC)} beats ${getName(computerC)}`;
        playerScoreEl.innerHTML = ++playerScore;
    }
    else {
        messageEl.innerHTML = `You lose! ${getName(computerC)} beats ${getName(playerC)}`;
        computerScoreEl.innerHTML = ++computerScore;
    }
}

rockEl.addEventListener("click", () => {
    getResult(0, computerChoice());
})

paperEl.addEventListener("click", () => {
    getResult(1, computerChoice());
})

scissorsEl.addEventListener("click", () => {
    getResult(2, computerChoice());
})