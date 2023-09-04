"use strict";

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Guess🥳';
document.querySelector('.number').textContent = 9;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value);
*/

const myNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(myNumber);
document.querySelector(".number").textContent = myNumber;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";
  } else if (guess === myNumber) {
    document.querySelector(".message").textContent = "🥳 Correct guess";
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess >= myNumber && guess - myNumber > 10) {
    document.querySelector(".message").textContent = "📈 Too High";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess >= myNumber) {
    document.querySelector(".message").textContent = "📈 High";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess <= myNumber && myNumber - guess > 10) {
    document.querySelector(".message").textContent = "📉 Too Low";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess <= myNumber) {
    document.querySelector(".message").textContent = "📉 Low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
