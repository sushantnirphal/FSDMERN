const readLineSync = require("readline-sync");

const userName=readLineSync.question("May I know your name? ");
const userAge = readLineSync.question("May I know your age? ");
console.log(typeof userAge);

console.log(`Welcome ${userName} to gfg`);

const yearOfBirth = 2023 + Number(userAge);
console.log(`You were born in the year ${yearOfBirth}`);


