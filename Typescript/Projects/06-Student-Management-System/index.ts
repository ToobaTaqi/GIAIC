#! /usr/bin/env node

import inquirer from "inquirer";

// Student Class
export class Student {
  private static idCounter = 0;
  public id: string;
  public name: string;
  public courses: string[];
  public balance: number;

  constructor(name: string) {
    this.name = name;
    this.id = this.generateStudentId();
    this.courses = [];
    this.balance = 0;
  }

  private generateStudentId(): string {
    Student.idCounter += 1;
    return Student.idCounter.toString().padStart(5, "0");
  }

  enroll(course: string) {
    this.courses.push(course);
  }

  viewBalance() {
    console.log(`Balance for ${this.name} (ID: ${this.id}): $${this.balance}`);
  }

  payTuition(amount: number) {
    this.balance -= amount;
    console.log(`${this.name} paid $${amount}. New balance: $${this.balance}`);
  }

  showStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Class ends here

let allStudents: Student[] = [];

async function std() {
  const ask = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "Choose an action:",
    choices: [
      "Add student",
      "Show all students",
      "Enroll in course",
      "View balance",
      "Pay tuition fees",
      "Show status",
    ],
  });

  switch (ask.action) {
    case "Add student":
      const addStudent = await inquirer.prompt({
        name: "studentName",
        type: "input",
        message: "Enter student name:",
      });
      const newStudent = new Student(addStudent.studentName);
      allStudents.push(newStudent);
      console.log(
        `Added student: ${newStudent.name} with ID: ${newStudent.id}`
      );
      break;

    case "Show all students":
      console.table(
        allStudents.map((student) => ({
          ID: student.id,
          Name: student.name,
          Courses: student.courses.join(", "),
          Balance: student.balance,
        }))
      );
      break;

    case "Enroll in course":
      const enrollDetails = await inquirer.prompt([
        {
          name: "studentId",
          type: "input",
          message: "Enter student ID:",
        },
        {
          name: "courseName",
          type: "input",
          message: "Enter course name:",
        },
      ]);
      const studentToEnroll = allStudents.find(
        (student) => student.id === enrollDetails.studentId
      );
      if (studentToEnroll) {
        studentToEnroll.enroll(enrollDetails.courseName);
        console.log(
          `Enrolled ${studentToEnroll.name} in course: ${enrollDetails.courseName}`
        );
      } else {
        console.log("Student not found");
      }
      break;

    case "View balance":
      const balanceDetails = await inquirer.prompt({
        name: "studentId",
        type: "input",
        message: "Enter student ID:",
      });
      const studentToViewBalance = allStudents.find(
        (student) => student.id === balanceDetails.studentId
      );
      if (studentToViewBalance) {
        studentToViewBalance.viewBalance();
      } else {
        console.log("Student not found");
      }
      break;

    case "Pay tuition fees":
      const payDetails = await inquirer.prompt([
        {
          name: "studentId",
          type: "input",
          message: "Enter student ID:",
        },
        {
          name: "amount",
          type: "input",
          message: "Enter amount to pay:",
        },
      ]);
      const studentToPay = allStudents.find(
        (student) => student.id === payDetails.studentId
      );
      if (studentToPay) {
        studentToPay.payTuition(Number(payDetails.amount));
      } else {
        console.log("Student not found");
      }
      break;

    case "Show status":
      const statusDetails = await inquirer.prompt({
        name: "studentId",
        type: "input",
        message: "Enter student ID:",
      });
      const studentToShowStatus = allStudents.find(
        (student) => student.id === statusDetails.studentId
      );
      if (studentToShowStatus) {
        console.table([
          {
            ID: studentToShowStatus.id,
            Name: studentToShowStatus.name,
            Courses: studentToShowStatus.courses.join(", "),
            Balance: studentToShowStatus.balance,
          },
        ]);
      } else {
        console.log("Student not found");
      }
      break;

    default:
      console.log("Invalid action");
      break;
  }

  std();
}

std();
