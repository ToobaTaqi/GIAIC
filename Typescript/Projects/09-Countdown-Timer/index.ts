#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const date = await inquirer.prompt({
  name: "Date",
  message:
    "Enter date to start countdown " + chalk.gray.italic("Try 2024-12-31"),
  type: "input",
});
// console.log(chalk.gray.italic('Try 2024-12-31'))
function countdownTimer(targetDate: Date): void {
  const interval = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    if (timeDifference <= 0) {
      clearInterval(interval);
      console.log("Countdown is over!");
    } else {
      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      const formattedTime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      console.log(chalk.yellow.bold(formattedTime));
    }
  }, 1000);
}

const targetDate = new Date(date.Date); //Example: Enter '2024-12-31' to start timer or '2024-07-07T07:53:05'
countdownTimer(targetDate);
