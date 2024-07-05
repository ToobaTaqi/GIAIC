#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk'

let rate: any = {
  USD: 1, //United States Dollar - base
  PKR: 278.41, // Pakistani Rupee
  EUR: 0.92, // Euro
  JPY: 156.7, // Japanese Yen
  GBP: 0.79, // British Pound Sterling
  CHF: 0.91, // Swiss Franc
};

const inp = await inquirer.prompt([
  {
    name: "from",
    message: chalk.blue('Select a currency to change from '),
    type: "list",
    // choices: Object.keys(rate)
    choices: ["USD", "PKR", "EUR", "JPY", "GBP", "CHF"],
  },
  {
    name: "to",
    message: chalk.blue('Select a currency to change into '),
    type: "list",
    choices: ["USD", "PKR", "EUR", "JPY", "GBP", "CHF"],
  },
  {
    name: "amount",
    message: chalk.blue("enter amount "),
    type: "number",
  },
]);

const from = rate[inp.from];
// console.log(fromAmount)
const to = rate[inp.to];
const amount = inp.amount;

const conversion = (amount / from) * to; //formula of conversion
console.log(chalk.green(`Converted amount: ${conversion.toFixed(4)}`));