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
//////////////////////(2) Functions ///////////////////////////

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

/*
////////////////////// Challenge ///////////////////////////////

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
*/

/*
////////////////////////// (6) Arrays ///////////////////////////////////

const friends = ["Ram", "Shyam", "Hari"];
console.log(friends);

const years = new Array(1990, 2000, 2010, 2020);

console.log(friends[0]);
console.log(years[2]);

console.log(friends.length); //length of array
console.log(friends[friends.length - 1]); //last element of array
friends[2] = "Anbhimanyu";
friends[3] = "Arjun";
console.log(friends);

const firstName = "Mansij";
const mansij = [firstName, "Ranjit", 2023 - 2001, "Developer", friends];
console.log(mansij);

//Add elements in an array
const people = ["Hamid", "Akash", "Michale", "Kevin"];
const number = people.push("Arushi"); //adds element in the end of array and returns size of new array
console.log(people);
console.log(number);

people.unshift("Jayant"); //adds element in the beginning of array and returns size of new array
console.log(people);

//Remove elements in an array
people.pop(); //Removes last element and returns the element
console.log(people);
const popedElement = people.pop();
console.log(popedElement);

people.shift(); //Removes first element and returns the element
console.log(people);

console.log(people.indexOf("Akash"));
console.log(people.indexOf("Akriti"));

console.log(people.includes("Akash"));
console.log(people.includes("Akriti"));

if (people.includes("Hamid")) {
  console.log(`You know the people named Hamid`);
}
*/

/*
////////////////////// Challenge ///////////////////////////////

//Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

////////////////////////// (7) Objects ///////////////////////////////////

const intro = {
  firstName: "Mansij",
  lastName: "Ranjit",
  age: 2023 - 2001,
  job: "Developer",
  friends: ["Ram", "Shyam", "Hari"],
};
console.log(intro);
