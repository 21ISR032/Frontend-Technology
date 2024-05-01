enum Choice {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors"
}

enum Result {
    Win = "win",
    Lose = "lose",
    Tie = "tie"
}

class RockPaperScissors {
    private userChoice: Choice;
    private computerChoice: Choice;

    constructor(userChoice: Choice) {
        this.userChoice = userChoice;
        this.computerChoice = this.getRandomChoice();
    }

    private getRandomChoice(): Choice {
        const choices: Choice[] = [Choice.Rock, Choice.Paper, Choice.Scissors];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    private determineWinner(userChoice: Choice, computerChoice: Choice): Result {
        if (userChoice === computerChoice) {
            return Result.Tie;
        } else if (
            (userChoice === Choice.Rock && computerChoice === Choice.Scissors) ||
            (userChoice === Choice.Paper && computerChoice === Choice.Rock) ||
            (userChoice === Choice.Scissors && computerChoice === Choice.Paper)
        ) {
            return Result.Win;
        } else {
            return Result.Lose;
        }
    }

    public getComputerChoice(): Choice {
        return this.computerChoice;
    }

    public play(): Result {
        return this.determineWinner(this.userChoice, this.computerChoice);
    }
}

const userChoice: Choice = Choice.Rock;
const game = new RockPaperScissors(userChoice);
const result: Result = game.play();

console.log(`Your choice: ${userChoice}`);
console.log(`Computer's choice: ${game.getComputerChoice()}`);
console.log(`Result: ${result}`);
