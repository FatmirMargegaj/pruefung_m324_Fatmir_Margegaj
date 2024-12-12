// index.js
import chalk from "chalk";

console.log(chalk.blue('It works'));

let myUnusedVariable = 10; // Löst 'no-unused-vars' und 'prefer-const' aus
if (myUnusedVariable == 10) { // Löst 'eqeqeq' aus
    console.log('This is an example of bad code.');
}
