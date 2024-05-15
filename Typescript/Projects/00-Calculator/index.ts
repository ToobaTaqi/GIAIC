import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("This is a simple calculator:"));

async function calculator() {
  let n: any = await inquirer.prompt([
    {
      type: "number",
      name: "FirstNum",
      message: "Enter First Number",
      validate: (ans) => {
        if (!ans) {
          return (n.FirstNum = 0);
        }
        return true;
      },
    },
    {
      type: "list",
      name: "operator",
      message: "Select the operation you wanna perform",
      choices: ["+", "-", "x", "/"],
      default: "+",
    },
    {
      type: "number",
      name: "SecondNum",
      message: "Enter Second Number",
      validate: (ans) => {
        if (!ans) {
          return (n.SecondNum = 0);
        }
        return true;
      },
    },
  ]);

  let FN: number = n.FirstNum;
  let SN: number = n.SecondNum;
  let result: number;

  const calculation = () => {
    if (n.operator === "+") {
      result = FN + SN;
    } else if (n.operator === "-") {
      result = FN - SN;
    } else if (n.operator === "x") {
      result = FN * SN;
    } else if (n.operator === "/") {
      result = FN / SN;
    } else {
      return "Error";
    }
    return result;
  };

  console.log(chalk.yellowBright(`Results : ${FN} ${n.operator} ${SN} = ${calculation()}`));

  let options = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "You want another calculation?",
    choices: ["yes", "no"],
    default: "no",
  });
  if (options.option === "yes") {
    await calculator();
  }
  if (options.option === "no") {
    console.log(chalk.bgRed("calculations Ended!!"));
  }
}

calculator();
