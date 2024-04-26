#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select any one operator that you want to perform",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);

//Process with respect to conditions.
if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operators");
}
