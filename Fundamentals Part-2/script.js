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
