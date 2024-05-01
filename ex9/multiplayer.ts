"use strict";

import * as $ from "jquery";

interface InitialState {
    player1Score: number;
    player2Score: number;
    maxScore: number;
}

interface PlayerChoices {
    player1Choice: string | null;
    player2Choice: string | null;
}

const initialState: InitialState = {
    player1Score: 0,
    player2Score: 0,
    maxScore: 5,
};

const playerChoices: PlayerChoices = {
    player1Choice: null,
    player2Choice: null,
};

function handleChoiceClick(playerChoice: string) {
    const currentPlayer = $("#player-turn-header").text().trim();
    const nextPlayer = currentPlayer === "Player 1's Turn" ? "Player 2's Turn" : "Player 1's Turn";
    $("#player-turn-header").text(nextPlayer);
    if (currentPlayer === "Player 1's Turn") {
        localStorage.setItem("player1Choice", playerChoice);
    } else {
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
    } else if (
        (playerChoices.player1Choice === "rock" && playerChoices.player2Choice === "scissors") ||
        (playerChoices.player1Choice === "paper" && playerChoices.player2Choice === "rock") ||
        (playerChoices.player1Choice === "scissors" && playerChoices.player2Choice === "paper")
    ) {
        incrementScore("player1Score");
        displayResult("Player 1 wins!");
    } else {
        incrementScore("player2Score");
        displayResult("Player 2 wins!");
    }
    if (initialState.player1Score === initialState.maxScore || initialState.player2Score === initialState.maxScore) {
        // displayGameOverVideo();
    }
    localStorage.removeItem("player1Choice");
    localStorage.removeItem("player2Choice");
}

function displayResult(result: string) {
    $("#result").text(result).fadeIn("slow").delay(1000).fadeOut("slow");
    playSound(result.includes("draw") ? "sound-draw" : (result.includes("Player 1") ? "sound-win" : "sound-lose"));
}

function incrementScore(player: keyof InitialState) {
    initialState[player]++;
}

// function displayGameOverVideo() {
//     $("#game-end-video").show();
//     $("#game-end-video")[0].play();
//     $("#game-end-video").on('ended', function () {
//         alert("Game Over! Thank you for playing.");
//         window.location.reload();
//     });
// }

function playSound(soundId: string) {
    const sound = document.getElementById(soundId) as HTMLAudioElement | null;
    if (sound) {
        sound.play();
    }
}

$(document).ready(function () {
    $(".choice").click(function () {
        const playerChoice = $(this).data("choice") as string;
        handleChoiceClick(playerChoice);
    });
});
