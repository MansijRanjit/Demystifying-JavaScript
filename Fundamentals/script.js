/*
///////////////////////////// (1) Values and Variables  /////////////////////////////

let js = "amazing";
if (js == "amazing") alert("JavaScript os Fun");
console.log(9 + 9);
console.log("Supermansij");

let firstName = "Mansij";
console.log(firstName);

let country = "Nepal";
let continent = "Asia";
let population = "30.03 million";
console.log(country);
console.log(continent);
console.log(population);
*/

/*
////////////////////////////// (2) Data Types    /////////////////////////////

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Mansij");

javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
year = 2023;
console.log(typeof year);

//Error in JavaScript
console.log(typeof null);
*/

/*
////////////////////////////(3) Declaring variables ////////////////////////

let age = 21;
age = 22;
console.log(age);

const birthYear = 2001;
//birthYear = 2000; // This cant be done in const

//var keyword should only be used in code written for older browsers
var job = "Programmer";
job = "Developer";
console.log(job);
*/

/*
////////////////////////////(4) Basic operators ///////////////////////////

//Math Operators
const now = 2023;
const ageMansij = now - 2001;
const ageManvi = now - 2012;
console.log(ageMansij, ageManvi);

console.log(ageMansij * 2, ageMansij / 2, 3 ** 3);

const firstName = "Mansij";
const lastName = "Ranjit";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 9 + 9;
x += 10; //x=x+10
x++; //x=x+1
x--; //x=x-1
console.log(x);

//Comparison Operators
console.log(ageMansij > ageManvi);
console.log(ageMansij >= 18);

console.log(now - 2002 > now - 2001);
*/

/*
///////////////////////////(4)Operators Precedence //////////////////////

const now = 2023;
const ageMansij = now - 2001;
const ageManvi = now - 2012;

console.log(now - 1999 > now - 1990); //precedence of '-' is greater than '>'

const averageAge = ageMansij + ageManvi / 2; // here '/' is done first cause the precedence of division is higher than the precedence of '+'
console.log(ageMansij, ageManvi, averageAge);

//thus we use parenthesis which has the highest precedence
const averageAge2 = (ageMansij + ageManvi) / 2;
console.log(ageMansij, ageManvi, averageAge2);
*/

/*
///////////////////////// Challenge //////////////////////////////

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

BMIofMark = markMass / markHeight ** 2;
BMIofJohn = johnMass / johnHeight ** 2;
console.log(BMIofMark, BMIofJohn);
markHigherBMI = BMIofMark > BMIofJohn;
console.log(markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

BMIofMark = markMass / (markHeight * markHeight);
BMIofJohn = johnMass / (johnHeight * johnHeight);
console.log(BMIofMark, BMIofJohn);
markHigherBMI = BMIofMark > BMIofJohn;
console.log(markHigherBMI);
*/

/*
///////////////////////// (5) Strings and Template Literals //////////////////////////////

const firstName = "Mansij";
const job = "Programmer";
const birthYear = 2001;
const now = 2023;
const Mansij =
  "I'm " + firstName + ", a " + (now - birthYear) + " old " + job + "!";
console.log(Mansij);

const MansijNew = `I'm ${firstName}, a ${now - birthYear} old ${job}!`;
console.log(MansijNew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines with template literals`);
*/

/*
///////////////////////// (6)Decisions Taking: if_else statements  //////////////////////////////

const age = 14;

if (age >= 18) {
  console.log("Driving Liscence can be applied");
} else {
  console.log(
    `Driving Liscence cannot be applied wait another ${18 - age} years`
  );
}
*/

/*
///////////////////////// Challenge //////////////////////////////

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

BMIofMark = markMass / markHeight ** 2;
BMIofJohn = johnMass / johnHeight ** 2;

if (BMIofMark > BMIofJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

BMIofMark = markMass / (markHeight * markHeight);
BMIofJohn = johnMass / (johnHeight * johnHeight);
if (BMIofMark > BMIofJohn) {
  console.log(
    `Mark's BMI (${BMIofMark}) is higher than John's (${BMIofJohn}) !`
  );
} else {
  console.log(
    `John's BMI (${BMIofJohn}) is higher than Mark's (${BMIofMark}) !`
  );
}
*/

/*
///////////////////////// (7)Type Conversion and Coercion  //////////////////////////////

//type conversion
const inputYear = "1999";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Mansij"));
console.log(typeof NaN);

console.log(String(29), 29);

//type coercion
console.log("I am " + 29 + " years old.");
console.log("9" + "10" + 3);
console.log("99" - "10" - 3);
console.log("10" / "2");
*/

/*
///////////////////////// (8) Truthy and Falsy values //////////////////////////////

//5 falsy values: 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;
if (money) {
  console.log("Too many money");
} else {
  console.log("No money");
}
*/

/*
///////////////////////// (9) Equality operators ==vs=== //////////////////////////////

const age = "18";
if (age === 18) console.log("You're an adult!(strict equality");

if (age == 18) console.log("You're an adult!(loose equality)");

const favourite = prompt("Enter your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 9) {
  console.log(" Wow 9 is an amazing number!");
} else if (Number(favourite) === 7) {
  //need to convert to number to compare using strict equality operator
  console.log("7 is also good number");
} else {
  console.log("This a'int a cool number");
}

if (favourite !== 9) console.log("Why not 9?");
*/

///////////////////////// (10) Boolean logic //////////////////////////////
