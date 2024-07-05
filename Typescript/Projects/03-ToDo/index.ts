#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold("Console ToDo App\n"));
let tasks: string[] = [];
let i: number;

async function ToDoAsk() {
  const task = await inquirer.prompt({
    type: "list",
    name: "task",
    message: chalk.yellow("Choose an Option: "),
    choices: [
      "Add Task",
      "Delete Task",
      "Update Task",
      "View ToDo List",
      "Exit",
    ],
  });

  if (task.task === "Add Task") {
    const add = await inquirer.prompt({
      type: "input",
      name: "addmore",
      message: chalk.blue("Enter Your Task: "),
    });
    tasks.push(add.addmore);
    console.log(chalk.green("Task Added"));
    await ToDoAsk();
  } else if (task.task === "Delete Task") {
    // for(i=0;i<tasks.length;i++){
    //     console.log(`${i} - ${tasks[i]}`)
    // }
    // const dlt = await inquirer.prompt({
    //   type: "number",
    //   name: "dltTask",
    //   message: "Enter the index of task you wanna remove: ",
    // });
    // if (dlt.dltTask < tasks.length && dlt.dltTask >= 0) {
    //   tasks.splice(dlt.dltTask, 1);
    //   console.log("Task Removed");
    // } else {
    //   console.log("Task Not Found");
    // }
    if (tasks.length > 0) {
      const dlt = await inquirer.prompt({
        type: "list",
        name: "dltTask",
        message: chalk.blue("Select a task to delete"),
        choices: tasks,
      });
      const d = tasks.indexOf(dlt.dltTask);
      if (d !== -1) {
        tasks.splice(d, 1);
        console.log(chalk.green("Task Removed"));
      } else {
        console.log(chalk.red("Task not found"));
      }
    } else {
      console.log(chalk.red("No tasks available to delete"));
    }
    await ToDoAsk();
  }
  else if (task.task === "Update Task") {
    if (tasks.length > 0) {
      const updt = await inquirer.prompt({
        type: "list",
        name: "update",
        message:chalk.blue("Choose a task you want to update: "),
        choices: tasks,
      });
      const updtTask = await inquirer.prompt({
        type: "input",
        name: "updatTask",
        message:  chalk.blue("Rewrite Your Task: "),
      });
      const u = tasks.indexOf(updt.update);
      tasks[u] = updtTask.updatTask;
      console.log(chalk.green("Task Updated"));
    } else {
      console.log(chalk.red("No tasks available to update"));
    }
    await ToDoAsk();
  }
  else if (task.task === "View ToDo List") {
    if (tasks.length > 0) {
      console.log(chalk.yellow("To-Do List:"));
      for (i = 0; i < tasks.length; i++) {
        console.log(chalk.cyan(`${i+1} - ${tasks[i]}`));
      }
    } else {
      console.log(chalk.red("No tasks found"));
    }
    await ToDoAsk();
  }
  else if (task.task === "Exit") {
    console.clear()
    console.log(chalk.blue("Exiting..."));
    console.log("-");
    
    process.exit();
   
  }
}

await ToDoAsk()