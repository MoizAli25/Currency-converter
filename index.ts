#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.grey.bold.underline("\n \t WELCOME TO MOIZ CURRENCY CONVERTER!!\t \n"));
const currency: any = {
  USD: 1, //BASE CURRENCY
  PKR: 278.32,
  INR: 83.43,
  EUR: 0.94,
  AED: 3.67,
  EGP: 48.3,
};

let userInput = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "PKR", "INR", "EUR", "AED", "EGP"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "PKR", "INR", "EUR", "AED", "EGP"],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  },
]);

let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let amount = userInput.amount;
let baseAmount = amount / fromAmount; //converted into USD
let convertedAmount = baseAmount * toAmount; //from base amount into TO amount
// console.log(chalk.green.bold("YOUR CONVERTED AMOUNT IS : "));
// console.log(convertedAmount.toFixed(2));
console.log(chalk.green(`YOUR CONVERTED AMOUNT IS: ${chalk.yellow(convertedAmount.toFixed(2))}`))

