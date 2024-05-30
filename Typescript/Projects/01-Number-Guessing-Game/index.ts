import inquirer from "inquirer";
import chalk from "chalk";

let score: number = 0;
let round:number=0

async function Game() {
  const n: number = Math.floor(Math.random() * 10);

  let Guess = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the random number",
  });

  if (Guess.userGuess === n) {
    console.log(chalk.greenBright("Congratulations!! you Guessed it Right"));
    score = score + 1;
  } else {
    console.log(chalk.redBright("Opss!! Wrong Guess"));
  }
  return score;
}

async function playAgain() {
  let ask = await inquirer.prompt({
    type: "list",
    name: "ask",
    message: "Do you want to try again?",
    choices: ["Yes", "No"],
  });

  return ask.ask === "Yes";
}

async function startGame() {
  let play: boolean = true;
  while (play) {
    round=round+1
    await Game();
    play = await playAgain();
  }
  
  console.log(chalk.bgGreenBright(`Total Score: ${score} / ${round}`));
}

startGame();
