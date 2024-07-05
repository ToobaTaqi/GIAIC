#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const user: { id: string; pin: number; balance: number } = {
  id: "tooba",
  pin: 1234,
  balance: Math.round(Math.random() * 100000),
};
// console.log(user.balance);

console.log(chalk.bgCyan("Hi, This is your ATM Machine!!"));
console.log(chalk.italic.gray('Example: use ID="tooba" and pin="1234'))

const login = await inquirer.prompt([
  { type: "input", name: "userID", message: "Enter Your ID : " },
  { type: "number", name: "userPin", message: "Enter Your pin : " },
]);

if (login.userID === user.id && login.userPin === user.pin) {
  console.log(
    chalk.greenBright(
      `Successfully Loggedin!\nCurrent Account balance : ${user.balance} $`
    )
  );
  const functionalities = await inquirer.prompt({
    type: "list",
    name: "atmFuncs",
    message: "Select an operation : ",
    choices: ["Withdraw Cash", "Check balance"],
  });
  if (functionalities.atmFuncs === "Withdraw Cash") {
    const withdraw = await inquirer.prompt({
      type: "number",
      name: "withdrawAmount",
      message: "Enter Amount to withdraw",
    });

    if (
      withdraw.withdrawAmount === user.balance ||
      withdraw.withdrawAmount <= user.balance
    ) {
      user.balance = user.balance - withdraw.withdrawAmount;

      console.log(
        chalk.greenBright(
          `Amount Withdrawn ${withdraw.withdrawAmount}\nRemaining Balance ${user.balance}`
        )
      );
    } else {
      console.log(chalk.redBright("Low Balance!!!"));
    }
  }
  if (functionalities.atmFuncs === "Check balance") {
    console.log(chalk.yellowBright(`Current Balance : ${user.balance} $`));
  }
} else {
  console.log(chalk.redBright("Wrong Pin or ID, Login failed!"));
}
