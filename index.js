#! /usr/bin/env node
import inquirer from "inquirer";
const answer1 = await inquirer.prompt([{
        message: "Enter your weight in Kg", type: "number", name: "weight"
    }]);
const answer2 = await inquirer.prompt([{
        message: "Enter your height in Meters", type: "number", name: "meters"
    }]);
let bmi = answer1.weight / (answer2.meters * answer2.meters);
console.log(`Your BMI is ${bmi}`);
