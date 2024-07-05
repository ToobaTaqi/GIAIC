import inquirer, { Answers } from "inquirer";
import chalk from "chalk";

// Customer class
class Customer {
  private name: string;
  private bankAccount: BankAccount;

  constructor(name: string, bankAccount: BankAccount) {
    this.name = name;
    this.bankAccount = bankAccount;
  }

  public getName(): string {
    return this.name;
  }

  public getBankAccount(): BankAccount {
    return this.bankAccount;
  }
}

// BankAccount interface
interface BankAccount {
  debit(amount: number): void;
  credit(amount: number): void;
  getBalance(): number;
}

// BankAccount class implementing BankAccount interface
class MyBankAccount implements BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public debit(amount: number): void {
    if (amount > this.balance) {
      console.log(chalk.red("Insufficient funds for this transaction."));
    } else {
      this.balance -= amount;
      console.log(
        chalk.green(`Debited: $${amount}. New balance: $${this.balance}`)
      );
    }
  }

  public credit(amount: number): void {
    this.balance += amount;
    console.log(
      chalk.green(`Credited: $${amount}. New balance: $${this.balance}`)
    );
  }

  public getBalance(): number {
    return this.balance;
  }
}

async function main() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "number",
      name: "initialBalance",
      message: "Enter the initial balance for your account:",
    },
    {
      type: "list",
      name: "transactionType",
      message: "What would you like to do?",
      choices: [
        { name: "Check balance", value: "checkBalance" },
        { name: "Debit money", value: "debit" },
        { name: "Credit money", value: "credit" },
      ],
    },
    {
      type: "number",
      name: "amount",
      message: "Enter the amount:",
      when: (answers: Answers) => answers.transactionType !== "checkBalance",
    },
  ];

  const answers = await inquirer.prompt(questions);

  const myAccount = new MyBankAccount(answers.initialBalance);
  const myCustomer = new Customer(answers.name, myAccount);

  console.log(chalk.green(`Hello, ${myCustomer.getName()}!`));

  switch (answers.transactionType) {
    case "checkBalance":
      console.log(
        chalk.cyan(
          `Your account balance is: $${myCustomer
            .getBankAccount()
            .getBalance()}`
        )
      );
      break;
    case "debit":
      myCustomer.getBankAccount().debit(answers.amount);
      break;
    case "credit":
      myCustomer.getBankAccount().credit(answers.amount);
      break;
  }
}

main();
