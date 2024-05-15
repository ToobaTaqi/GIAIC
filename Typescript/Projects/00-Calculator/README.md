import inquirer from "inquirer";

console.log("This is a simple calculator:");

async function calculator() {
  let n = await inquirer.prompt([
    {
      type: "number",
      name: "FirstNum",
      message: "Enter First Number",
      validate: (ans) => {
        if (!ans) {
          return "Please enter a number";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "operator",
      message: "Select the operation you want to perform",
      choices: ["+", "-", "x", "/"],
      default: "+",
    },
    {
      type: "number",
      name: "SecondNum",
      message: "Enter Second Number",
      validate: (ans) => {
        if (!ans) {
          return "Please enter a number";
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

  console.log("Result:", calculation());

  let options = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "Do you want another calculation?",
    choices: ["yes", "no"],
    default: "no",
  });

  if (options.option === "yes") {
    await calculator(); // Call calculator again for another calculation
  } else {
    console.log("Calculations ended.");
  }
}

calculator(); // Start the calculator
