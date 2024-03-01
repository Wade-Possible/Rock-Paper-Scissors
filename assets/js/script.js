// Setting upp the const with dom for later useage
const buttons = document.getElementsByClassName("control-btn");
const playerPoints = document.getElementById("player-points");
const cpuPoints = document.getElementById("cpu-points");
const playerImage = document.getElementById("player-image");
const cpuImage = document.getElementById("cpu-image");
const gameResult = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let cpuScore = 0;

// Setting up event listeners
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

