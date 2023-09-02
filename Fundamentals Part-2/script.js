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

/*
////////////////////////// (7) Objects ///////////////////////////////////

const intro = {
  firstName: "Mansij",
  lastName: "Ranjit",
  age: 2023 - 2001,
  job: "Developer",
  friends: ["Ram", "Shyam", "Hari"],
};
console.log(intro);

//Dot vs Bracket notation
console.log(intro.firstName);
console.log(intro["firstName"]); //generally bracket notation is used when we need to compute expression

const nameKey = "Name";
console.log(intro["first" + nameKey]);
console.log(intro["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Mansij? Choose between firstName, lastName, age, job and friends"
);
//console.log(intro.interestedIn); //cannot be performed in dot operation
//console.log(intro[interestedIn]);

if (intro[interestedIn]) {
  console.log(intro[interestedIn]);
} else {
  console.log(
    "Wrong Request! Choose between firstName, lastName, age, job and friends"
  );
}

//Add new data to object
intro.location = "Kalanki";
intro["instagram"] = "@mansijranjit";
console.log(intro);

//Challenge
//Print using object:"Mansij has 3 friends, and his best friend is Ram"
console.log(
  `${intro.firstName} has ${intro["friends"].length} friends, and his best friend is ${intro["friends"][0]}`
);
*/

/*
////////////////////////// (7) Object Methods ///////////////////////////////////

const intro = {
  firstName: "Mansij",
  lastName: "Ranjit",
  birthYear: 2001,
  job: "Developer",
  friends: ["Ram", "Shyam", "Hari"],
  hasDriverLiscence: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   //console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLiscence ? "a" : "no"} driver's liscence`;
  },
};

console.log(intro);
console.log(intro.calcAge());
console.log(intro.age);

//Challenge
//Print using Method: "Mansij is a 22-year old developer, and he has a/no driver's liscence"

// if (intro.hasDriverLiscence) {
//   console.log(
//     `${intro.firstName} is a ${intro.age}-year old ${intro.job}, and he has a driver's liscence`
//   );
// } else {
//   console.log(
//     `${intro.firstName} is a ${intro.age}-year old ${intro.job}, he has no driver's liscence`
//   );
// }

console.log(intro.getSummary());
*/

/*
//////////////////////// Challenge /////////////////////////////////

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);
if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
  );
} else if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
  );
} else {
  console.log("Equal BMI");
}
*/

/*
////////////////////////// (8) Iteration_ The for loop ///////////////////////////////////

//for loop keeps running while the condition is True
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

const mansij = ["Mansij", "Ranjit", 22, "Developer", ["Ram", "Shyam", "Hari"]];
const type = [];

for (let i = 0; i < mansij.length; i++) {
  //Reading from mansij array
  console.log(mansij[i]);

  //Filling type array
  type[i] = typeof mansij[i];
}
console.log(type);

const birthYears = [1990, 2000, 2012, 2020];
const age = [];

for (let i = 0; i < birthYears.length; i++) {
  age[i] = 2023 - birthYears[i];
}
console.log(age);
*/

/*
////////////////////////// (9) Continue and break ///////////////////////////////////

const mansij = ["Mansij", "Ranjit", 22, "Developer", ["Ram", "Shyam", "Hari"]];

//continue
console.log("----ONLY STRINGS----");
for (let i = 0; i < mansij.length; i++) {
  if (typeof mansij[i] !== "string") {
    continue; //the current iteration is exited and the next iteration starts immediately
  }
  console.log(mansij[i], typeof mansij[i]);
}

//break
console.log("------BREAK WITH NUMBER-------");
for (let i = 0; i < mansij.length; i++) {
  if (typeof mansij[i] == "number") {
    break; //completely terminate the whole loop not only just current iteration
  }
  console.log(mansij[i], typeof mansij[i]);
}
*/

/*
////////////////////////// (10) Looping Backwards and Loops in Loops ///////////////////////////////////

//looping backwards
const mansij = ["Mansij", "Ranjit", 22, "Developer", ["Ram", "Shyam", "Hari"]];

for (let i = mansij.length - 1; i >= 0; i--) {
  console.log(i, mansij[i]);
}

//loops in loops
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--Starting Exercise ${exercise} --`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} : Repetition ${rep}`);
  }
}
*/

/*
////////////////////////// (11) while Loop ///////////////////////////////////

let rep = 1;
while (rep <= 5) {
  console.log(`Repetition ${rep}`);
  rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
}
*/

//////////////////////// Challenge /////////////////////////////////

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(totals);

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const total = calcAverage([5, 6, 7, 8, 9]);
console.log(total);
