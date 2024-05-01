import * as $ from 'jquery';
enum Move {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors"
}
enum Result {
    PlayerWin,
    ComputerWin,
    Draw
}
class RockPaperScissors {
    private playerMove: Move = Move.Rock;
    setPlayerMove(move: Move) {
        this.playerMove = move;
    }
    private generateComputerMove(): Move {
        const moves = [Move.Rock, Move.Paper, Move.Scissors];
        const randomIndex = Math.floor(Math.random() * moves.length);
        return moves[randomIndex];
    }
    play(): Result {
        const computerMove = this.generateComputerMove();
        if (this.playerMove === computerMove) {
            return Result.Draw;
        } else if (
            (this.playerMove === Move.Rock && computerMove === Move.Scissors) ||
            (this.playerMove === Move.Paper && computerMove === Move.Rock) ||
            (this.playerMove === Move.Scissors && computerMove === Move.Paper)
        ) {
            return Result.PlayerWin;
        } else {
            return Result.ComputerWin;
        }
    }
}
$(document).ready(function() {
    $(".choice").hover(
        function() {
            $(this).css("filter", "brightness(1.2)");
        },
        function() {
            $(this).css("filter", "brightness(1)");
        }
    );
     $(".choice").click(function() {
        const playerChoice = $(this).data("choice") as Move;
        const game = new RockPaperScissors();
        game.setPlayerMove(playerChoice);
        const result = game.play();
        
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
