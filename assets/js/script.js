// Setting upp the const with dom for later useage
const buttons = document.getElementsByClassName("control-btn");
const playerPoints = document.getElementById("player-points");
const cpuPoints = document.getElementById("cpu-points");
const playerImage = document.getElementById("player-image");
const cpuImage = document.getElementById("cpu-image");
const message = document.getElementById("message");
const choices = ["rock", "paper", "scissors"];

// Setting up event listeners
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame("playerChoice");
    });
}

// 
function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let cpuChoice = Math.floor(Math.random() * choices.length);

    cpuImage.src = `assets/images/${choices[cpuChoice]}.png`;
    cpuImage.alt = choices[cpuChoice];

let result = checkWinner(choices[playerChoice], choices[cpuChoice]);

updatePoints(result);
}

playGame(playerChoice);
