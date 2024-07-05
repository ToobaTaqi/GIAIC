#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

// structure of a quiz question
interface Question {
    question: string;
    choices: string[];
    correctAnswerIndex: number;
}

// quiz questions
const questions: Question[] = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswerIndex: 2,
    },
    {
        question: "What does HTML stand for?",
        choices: ["Hypertext Markup Language", "Hyperlink Text Management", "Home Tool Markup Language", "Hyper Text Mainframe Language"],
        correctAnswerIndex: 0,
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswerIndex: 2,
    },
];

// Function to start the quiz
async function startQuiz() {
    let score = 0;

    console.log(chalk.yellow.bold('Welcome to the Quiz!'));
    console.log(chalk.cyan('Answer the following questions:\n'));

    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: chalk.whiteBright(question.question),
                choices: question.choices.map(choice => ({
                    name: choice,
                    value: choice,
                })),
            },
        ]);

        const userAnswerIndex = question.choices.indexOf(answer.answer);
        if (userAnswerIndex === question.correctAnswerIndex) {
            console.log(chalk.green('Correct!\n'));
            score++;
        } else {
            console.log(chalk.red('Incorrect.\n'));
        }
    }

    console.log(chalk.yellow.bold('Quiz ended!'));
    console.log(chalk.cyan(`Your score: ${score} out of ${questions.length}\n`));
}

// Start the quiz when the script runs
startQuiz();
