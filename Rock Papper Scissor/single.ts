// Import required dependencies
import * as angular from 'angular';
import * as $ from 'jquery';

// Define the app module
const app = angular.module('rockPaperScissorsApp', []);

// Define an interface for the game state
interface GameState {
  playerMove: string | null;
  computerMove: string | null;
  result: 'draw' | 'playerWin' | 'computerWin' | null;
}

// Define the GameService class
class GameService {
  private gameState: GameState;
  private playerScore: number;
  private computerScore: number;

  constructor() {
    this.gameState = {
      playerMove: null,
      computerMove: null,
      result: null,
    };
    this.playerScore = 0;
    this.computerScore = 0;
  }

  // Set the player's move
  setPlayerMove(move: string): void {
    this.gameState.playerMove = move;
  }

  // Generate the computer's move
  generateComputerMove(): string {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    this.gameState.computerMove = moves[randomIndex];
    return this.gameState.computerMove;
  }

  // Determine the game result
  determineResult(): GameState['result'] {
    const { playerMove, computerMove } = this.gameState;

    if (playerMove === computerMove) {
      this.gameState.result = 'draw';
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'scissors' && computerMove === 'paper') ||
      (playerMove === 'paper' && computerMove === 'rock')
    ) {
      this.gameState.result = 'playerWin';
      this.playerScore++;
    } else {
      this.gameState.result = 'computerWin';
      this.computerScore++;
    }

    return this.gameState.result;
  }

  // Get game state
  getGameState(): GameState {
    return this.gameState;
  }

  // Get player score
  getPlayerScore(): number {
    return this.playerScore;
  }

  // Get computer score
  getComputerScore(): number {
    return this.computerScore;
  }
}

// Register the GameService as a service in the AngularJS app
app.service('GameService', GameService);

// Define the GameController class
class GameController {
  gameState: GameState | null;
  playerScore: number;
  computerScore: number;
  result: 'draw' | 'playerWin' | 'computerWin' | null;

  constructor(private gameService: GameService) {
    // Initialize game state, player score, and computer score
    this.gameState = this.gameService.getGameState();
    this.playerScore = this.gameService.getPlayerScore();
    this.computerScore = this.gameService.getComputerScore();
    this.result = null;
  }

  // Method to handle player choice
  makeChoice(playerChoice: string): void {
    // Set the player's move
    this.gameService.setPlayerMove(playerChoice);

    // Generate the computer's move
    this.gameService.generateComputerMove();

    // Determine the game result
    this.result = this.gameService.determineResult();

    // Play the appropriate sound based on the result
    const soundWin = document.getElementById('sound-win') as HTMLAudioElement;
    const soundLose = document.getElementById('sound-lose') as HTMLAudioElement;
    const soundDraw = document.getElementById('sound-draw') as HTMLAudioElement;

    if (this.result === 'playerWin') {
      soundWin.play();
    } else if (this.result === 'computerWin') {
      soundLose.play();
    } else {
      soundDraw.play();
    }

    // Update the game state and scores
    this.gameState = this.gameService.getGameState();
    this.playerScore = this.gameService.getPlayerScore();
    this.computerScore = this.gameService.getComputerScore();

    // Check for a winner
    this.checkWinner();
  }

  // Function to check if there is a winner
  private checkWinner(): void {
    if (this.playerScore >= 5) {
      alert('The winner is the Player!');
      // Perform any additional actions needed when the player wins
    } else if (this.computerScore >= 5) {
      alert('The winner is the Computer!');
      // Perform any additional actions needed when the computer wins
    }
  }
}

// Register the GameController as a controller in the AngularJS app
app.controller('GameController', ['GameService', GameController]);
