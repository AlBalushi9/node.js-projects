#! /usr/bin/env node
import inquirer from "inquirer";
const table = await inquirer.prompt([
    {
        message: "Enter your table number >>",
        type: "number",
        name: "myNumber",
    },
]);
let resul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
resul.forEach((cur) => {
    console.log(`${cur} x ${table.myNumber} = ${cur * table.myNumber}`);
});
