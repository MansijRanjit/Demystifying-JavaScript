// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
///////////////////////PROBLEM 1/////////////////////////////
//we work for a company building a smart home thermometer. Our most recent task is this :"Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temperature) {
  let max = temperature[0],
    min = temperature[0];
  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "number") continue;
    if (temperature[i] > max) max = temperature[i];
    if (temperature[i] < min) min = temperature[i];
  }
  return max - min;
};
console.log(`Temperature Amplitude= ${calcTempAmplitude(temperature)}`);
*/

/*
////////////////////////PROBLEM 2 ////////////////////////////
//Function should receive 2 array of temperatures

//1)Understanding the problem
// -With 2 arrays, should we implement functionality twice? NO! Just merge the 2 arrays

//2)Breaking up into sub-problems
// -Merge 2 arrays

const temperature1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature2 = [3, 4, 5, 6, 7, 88, 77, 55];

const calcTempAmplitudes = function (temperature1, temperature2) {
  //Method 1 to merge two arrays
  //const mergedTemp = temperature1;
  // for (let i = 0; i < temperature2.length; i++) {
  //   mergedTemp.push(temperature2[i]);
  // }
  // console.log(mergedTemp);

  //OR

  //Method 2 to merge two arrays
  //const mergedTemp = temperature1;
  // let j = 0;
  // const len = mergedTemp.length + temperature2.length;
  // for (let i = mergedTemp.length; i < len; i++) {
  //   mergedTemp[i] = temperature2[j];
  //   j++;
  // }
  // console.log(mergedTemp);

  //OR

  //Method 3
  const mergedTemp2 = temperature1.concat(temperature2);
  console.log(mergedTemp2);

  let max = mergedTemp2[0],
    min = mergedTemp2[0];
  for (let i = 0; i < mergedTemp2.length; i++) {
    if (typeof mergedTemp2[i] !== "number") continue;
    if (mergedTemp2[i] > max) max = mergedTemp2[i];
    if (mergedTemp2[i] < min) min = mergedTemp2[i];
  }
  return max - min;
};

console.log(
  `Temperature Amplitude= ${calcTempAmplitudes(temperature1, temperature2)}`
);
*/

/*
//Find Bug
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    // C)FIX
    //value: prompt("Degrees celcius:"),
    value: Number(prompt("Degrees celcius:")),
  };

  // B)FIND BUG
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A)IDENTIFY BUG
console.log(measureKelvin());
*/

////////////////Using Debugger in browser to find bug/////////////////
const calcTempAmplitudes = function (temperature1, temperature2) {
  const mergedTemp2 = temperature1.concat(temperature2);
  console.log(mergedTemp2);

  let max = 0,
    min = 0;
  for (let i = 0; i < mergedTemp2.length; i++) {
    if (typeof mergedTemp2[i] !== "number") continue;

    debugger; //Pause webpage at this point in debugger
    if (mergedTemp2[i] > max) max = mergedTemp2[i]; //if max is less than 0 this gives error
    if (mergedTemp2[i] < min) min = mergedTemp2[i]; //if min is greater than 0 this gives error
  }
  return max - min;
};

console.log(
  `Temperature Amplitude= ${calcTempAmplitudes([1, 2, 3], [4, 5, 6])}`
);
