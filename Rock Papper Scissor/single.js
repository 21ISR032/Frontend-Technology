"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import required dependencies
var angular = require("angular");
// Define the app module
var app = angular.module('rockPaperScissorsApp', []);
// Define the GameService class
var GameService = /** @class */ (function () {
    function GameService() {
        this.gameState = {
            playerMove: null,
            computerMove: null,
            result: null,
        };
        this.playerScore = 0;
        this.computerScore = 0;
    }
    // Set the player's move
    GameService.prototype.setPlayerMove = function (move) {
        this.gameState.playerMove = move;
    };
    // Generate the computer's move
    GameService.prototype.generateComputerMove = function () {
        var moves = ['rock', 'paper', 'scissors'];
        var randomIndex = Math.floor(Math.random() * moves.length);
        this.gameState.computerMove = moves[randomIndex];
        return this.gameState.computerMove;
    };
    // Determine the game result
    GameService.prototype.determineResult = function () {
        var _a = this.gameState, playerMove = _a.playerMove, computerMove = _a.computerMove;
        if (playerMove === computerMove) {
            this.gameState.result = 'draw';
        }
        else if ((playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'scissors' && computerMove === 'paper') ||
            (playerMove === 'paper' && computerMove === 'rock')) {
            this.gameState.result = 'playerWin';
            this.playerScore++;
        }
        else {
            this.gameState.result = 'computerWin';
            this.computerScore++;
        }
        return this.gameState.result;
    };
    // Get game state
    GameService.prototype.getGameState = function () {
        return this.gameState;
    };
    // Get player score
    GameService.prototype.getPlayerScore = function () {
        return this.playerScore;
    };
    // Get computer score
    GameService.prototype.getComputerScore = function () {
        return this.computerScore;
    };
    return GameService;
}());
// Register the GameService as a service in the AngularJS app
app.service('GameService', GameService);
// Define the GameController class
var GameController = /** @class */ (function () {
    function GameController(gameService) {
        this.gameService = gameService;
        // Initialize game state, player score, and computer score
        this.gameState = this.gameService.getGameState();
        this.playerScore = this.gameService.getPlayerScore();
        this.computerScore = this.gameService.getComputerScore();
        this.result = null;
    }
    // Method to handle player choice
    GameController.prototype.makeChoice = function (playerChoice) {
        // Set the player's move
        this.gameService.setPlayerMove(playerChoice);
        // Generate the computer's move
        this.gameService.generateComputerMove();
        // Determine the game result
        this.result = this.gameService.determineResult();
        // Play the appropriate sound based on the result
        var soundWin = document.getElementById('sound-win');
        var soundLose = document.getElementById('sound-lose');
        var soundDraw = document.getElementById('sound-draw');
        if (this.result === 'playerWin') {
            soundWin.play();
        }
        else if (this.result === 'computerWin') {
            soundLose.play();
        }
        else {
            soundDraw.play();
        }
        // Update the game state and scores
        this.gameState = this.gameService.getGameState();
        this.playerScore = this.gameService.getPlayerScore();
        this.computerScore = this.gameService.getComputerScore();
        // Check for a winner
        this.checkWinner();
    };
    // Function to check if there is a winner
    GameController.prototype.checkWinner = function () {
        if (this.playerScore >= 5) {
            alert('The winner is the Player!');
            // Perform any additional actions needed when the player wins
        }
        else if (this.computerScore >= 5) {
            alert('The winner is the Computer!');
            // Perform any additional actions needed when the computer wins
        }
    };
    return GameController;
}());
// Register the GameController as a controller in the AngularJS app
app.controller('GameController', ['GameService', GameController]);
