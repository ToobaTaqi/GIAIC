import inquirer from "inquirer";
import chalk from "chalk";

// Person class
class Person {
  private personality: string;

  constructor() {
    this.personality = "mystery";
  }

  public askQuestion(answer: number) {
    if (answer === 1) {
      this.personality = "extrovert";
    } else {
      this.personality = "introvert";
    }
  }

  public getPersonality(): string {
    return this.personality;
  }
}

// Student class extending Person
class Student extends Person {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

// main function

async function main() {
  const questions = [
    {
      type: "list",
      name: "answer",
      message: "Do you like to talk to others or keep to yourself?",
      choices: [
        { name: "Talk to others", value: 1 },
        { name: "Keep to yourself", value: 2 },
      ],
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ];

  const answers = await inquirer.prompt(questions);

  const myStudent = new Student(answers.name);
  myStudent.askQuestion(answers.answer); //

  console.log(chalk.green(`Hello, ${answers.name}!`));
  console.log(
    chalk.cyan(`Your personality type is: ${myStudent.getPersonality()}`)
  );
}

main(); //calling main func to run the code
