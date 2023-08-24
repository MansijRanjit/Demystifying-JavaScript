/*
//// (1) Values and Variables  ////

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
//// (2) Data Types    ////

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
////(3) Declaring variables ////

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

////(4) Basic operators ////

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
