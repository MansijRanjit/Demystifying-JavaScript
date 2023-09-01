/*
//////////////////////(1) Activating strict mode////////////////////////
"use strict";

let hasDriversLiscence = false;
const passTest = true;

if (passTest) hasDriversLiscence = true;
if (hasDriversLiscence) console.log("I can Drive! 🚗");

//const interface = "Audio";
//const private = "Mansij";
*/

/*
//////////////////////(2) Functions////////////////////////

function logger() {
  console.log("My name is Mansij");
}

// calling/ running/ invoking function
logger();
logger();

function fruitProcessor(mango, banana) {
  console.log(mango, banana);

  const juice = `Juice with ${mango} mangoes and ${banana} bananas`;
  return juice;
}
const mixture = fruitProcessor(9, 7);
console.log(mixture);

console.log(fruitProcessor(1, 3));

console.log(fruitProcessor("eight", "nine"));
*/

/*
//////////////////////(3) Function Declarations vs Expressions////////////////////////

//Function Declaration
function calcAge1(currentYear, birthYear) {
  return currentYear - birthYear;
}
const age1 = calcAge1(2023, 2001);
console.log(age1);

//Function Expression
const calcAge2 = function calcAge2(currentYear, birthYear) {
  return currentYear - birthYear;
};
const age2 = calcAge2(2023, 2012);
console.log(age2);
//OR
const calcAge2 = function (currentYear, birthYear) {
  return currentYear - birthYear;
};

*/

/*
//////////////////////(4) Arrow Functions////////////////////////

//single line functions
const calcAge1 = (birthYear) => 2023 - birthYear;
const age1 = calcAge1(2001);
console.log(age1);

//multiple line functions
const yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(2001));

//multiple parameter function
const yearsUntilRetirement2 = (birthYear, name) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${name} retires after ${retirement} years`;
};
console.log(yearsUntilRetirement2(2001, "Mansij"));
console.log(yearsUntilRetirement2(2012, "Manvi"));
*/

/*
//////////////////////(5) Functions calling other functions////////////////////////

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of oranges`;
  return juice;
};

console.log(fruitProcessor(7, 9));
*/

////////////////////// Challenge ////////////////////////

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinsAverage, koalasAverage);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
};
checkWinner(dolphinsAverage, koalasAverage);
