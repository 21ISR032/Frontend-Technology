"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Move;
(function (Move) {
    Move["Rock"] = "rock";
    Move["Paper"] = "paper";
    Move["Scissors"] = "scissors";
})(Move || (Move = {}));
var Result;
(function (Result) {
    Result[Result["PlayerWin"] = 0] = "PlayerWin";
    Result[Result["ComputerWin"] = 1] = "ComputerWin";
    Result[Result["Draw"] = 2] = "Draw";
})(Result || (Result = {}));
var RockPaperScissors = /** @class */ (function () {
    function RockPaperScissors() {
        this.playerMove = Move.Rock;
    }
    RockPaperScissors.prototype.setPlayerMove = function (move) {
        this.playerMove = move;
    };
    RockPaperScissors.prototype.generateComputerMove = function () {
        var moves = [Move.Rock, Move.Paper, Move.Scissors];
        var randomIndex = Math.floor(Math.random() * moves.length);
        return moves[randomIndex];
    };
    RockPaperScissors.prototype.play = function () {
        var computerMove = this.generateComputerMove();
        if (this.playerMove === computerMove) {
            return Result.Draw;
        }
        else if ((this.playerMove === Move.Rock && computerMove === Move.Scissors) ||
            (this.playerMove === Move.Paper && computerMove === Move.Rock) ||
            (this.playerMove === Move.Scissors && computerMove === Move.Paper)) {
            return Result.PlayerWin;
        }
        else {
            return Result.ComputerWin;
        }
    };
    return RockPaperScissors;
}());
$(document).ready(function () {
    $(".choice").hover(function () {
        $(this).css("filter", "brightness(1.2)");
    }, function () {
        $(this).css("filter", "brightness(1)");
    });
    $(".choice").click(function () {
        var playerChoice = $(this).data("choice");
        var game = new RockPaperScissors();
        game.setPlayerMove(playerChoice);
        var result = game.play();
        switch (result) {
            case Result.PlayerWin:
                $("#result").html("You win!").fadeIn("slow").delay(1000).fadeOut("slow");
                break;
            case Result.ComputerWin:
                $("#result").html("Computer wins!").fadeIn("slow").delay(1000).fadeOut("slow");
                break;
            case Result.Draw:
                $("#result").html("It's a draw!").fadeIn("slow").delay(1000).fadeOut("slow");
                break;
        }
    });
});
