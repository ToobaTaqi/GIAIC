#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Game variables
const enemies: string[] = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth: number = 75;
let enemyAttackDamage: number = 25;

// Player variables
let health: number = 100;
let attackDamage: number = 50;
let numHealthPotions: number = 3;
let healthPotionHealAmount: number = 30;
let healthPotionDropChance: number = 50; // Percentage

let running: boolean = true;

console.log(chalk.yellow("Welcome to the Adventure game!\n"));

async function main() {
  while (running) {
    console.log("-----------------------------------------");

    let enemyHealth: number = Math.floor(Math.random() * maxEnemyHealth);
    let enemy: string = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(chalk.red(`# ${enemy} has appeared! #\n`));

    while (enemyHealth > 0) {
      console.log(chalk.blue(`Your HP: ${health}`));
      console.log(chalk.red(`${enemy}'s HP: ${enemyHealth}`));
      console.log("\nWhat would you like to do?");

      const answer = await inquirer.prompt([
        {
          type: "list",
          name: "action",
          message: "Choose your action:",
          choices: [
            { name: "Attack", value: "attack" },
            { name: "Drink health potion", value: "drink" },
            { name: "Run!", value: "run" },
          ],
        },
      ]);

      if (answer.action === "attack") {
        const damageDealt: number = Math.floor(Math.random() * attackDamage);
        const damageTaken: number = Math.floor(
          Math.random() * enemyAttackDamage
        );

        enemyHealth -= damageDealt;
        health -= damageTaken;

        console.log(
          chalk.green(`> You strike the ${enemy} for ${damageDealt} damage.`)
        );
        console.log(
          chalk.red(`> You receive ${damageTaken} in retaliation!\n`)
        );

        if (health < 1) {
          console.log(
            chalk.red(
              "> You have taken too much damage, you are too weak to go on!"
            )
          );
          break;
        }
      } else if (answer.action === "drink") {
        if (numHealthPotions > 0) {
          health += healthPotionHealAmount;
          numHealthPotions--;
          console.log(
            chalk.green(
              `> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`
            )
          );
          console.log(chalk.blue(`> You now have ${health} HP.`));
          console.log(
            chalk.blue(`> You have ${numHealthPotions} health potions left.\n`)
          );
        } else {
          console.log(
            chalk.yellow(
              "> You have no health potions left! Defeat enemies for a chance to get one!\n"
            )
          );
        }
      } else if (answer.action === "run") {
        console.log(chalk.yellow(`> You run away from the ${enemy}!\n`));
        continue;
      }
    }

    if (health < 1) {
      console.log(chalk.red("You limp out of the game, weak from battle."));
      break;
    }

    console.log("-----------------------------------------");
    console.log(chalk.red(`# ${enemy} was defeated! #`));
    console.log(chalk.blue(`# You have ${health} HP left. #`));

    if (Math.random() * 100 < healthPotionDropChance) {
      numHealthPotions++;
      console.log(chalk.green(`# The ${enemy} dropped a health potion! #`));
      console.log(
        chalk.blue(`# You now have ${numHealthPotions} health potion(s). #\n`)
      );
    }

    console.log("-----------------------------------------");
    const response = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do now?",
        choices: [
          { name: "Continue fighting", value: "continue" },
          { name: "Exit game", value: "exit" },
        ],
      },
    ]);

    if (response.action === "continue") {
      console.log(chalk.green("You continue on your adventure!\n"));
    } else if (response.action === "exit") {
      console.log(
        chalk.yellow("You exit the Adventure game, successful from your adventures!\n")
      );
      break;
    }
  }

  console.log(chalk.yellow("#########################################"));
  console.log(chalk.yellow("# Thanks for playing! #"));
  console.log(chalk.yellow("#########################################"));
}

main();
