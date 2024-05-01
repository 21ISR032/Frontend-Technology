"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
var initialState = {
    player1Score: 0,
    player2Score: 0,
    maxScore: 5,
};
var playerChoices = {
    player1Choice: null,
    player2Choice: null,
};
function handleChoiceClick(playerChoice) {
    var currentPlayer = (0, jquery_1.default)("#player-turn-header").text().trim();
    var nextPlayer = currentPlayer === "Player 1's Turn" ? "Player 2's Turn" : "Player 1's Turn";
    (0, jquery_1.default)("#player-turn-header").text(nextPlayer);
    if (currentPlayer === "Player 1's Turn") {
        localStorage.setItem("player1Choice", playerChoice);
    }
    else {
        localStorage.setItem("player2Choice", playerChoice);
        evaluateResult();
    }
}
function evaluateResult() {
    playerChoices.player1Choice = localStorage.getItem("player1Choice");
    playerChoices.player2Choice = localStorage.getItem("player2Choice");
    if (!playerChoices.player1Choice || !playerChoices.player2Choice)
        return;
    if (playerChoices.player1Choice === playerChoices.player2Choice) {
        displayResult("It's a draw!");
    }
    else if ((playerChoices.player1Choice === "rock" && playerChoices.player2Choice === "scissors") ||
        (playerChoices.player1Choice === "paper" && playerChoices.player2Choice === "rock") ||
        (playerChoices.player1Choice === "scissors" && playerChoices.player2Choice === "paper")) {
        incrementScore("player1Score");
        displayResult("Player 1 wins!");
    }
    else {
        incrementScore("player2Score");
        displayResult("Player 2 wins!");
    }
    if (initialState.player1Score === initialState.maxScore || initialState.player2Score === initialState.maxScore) {
        displayGameOverVideo();
    }
    localStorage.removeItem("player1Choice");
    localStorage.removeItem("player2Choice");
}
function displayResult(result) {
    (0, jquery_1.default)("#result").text(result).fadeIn("slow").delay(1000).fadeOut("slow");
    playSound(result.includes("draw") ? "sound-draw" : (result.includes("Player 1") ? "sound-win" : "sound-lose"));
}
function incrementScore(player) {
    initialState[player]++;
}
function displayGameOverVideo() {
    (0, jquery_1.default)("#game-end-video").show();
    (0, jquery_1.default)("#game-end-video")[0].play();
    (0, jquery_1.default)("#game-end-video").on('ended', function () {
        alert("Game Over! Thank you for playing.");
        window.location.reload();
    });
}
function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    }
}
(0, jquery_1.default)(document).ready(function () {
    (0, jquery_1.default)(".choice").click(function () {
        var playerChoice = (0, jquery_1.default)(this).data("choice");
        handleChoiceClick(playerChoice);
    });
});
