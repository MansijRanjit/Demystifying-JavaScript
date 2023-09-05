"use strict";

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Guess🥳';
document.querySelector('.number').textContent = 9;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value);
*/

let myNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(myNumber);
// document.querySelector(".number").textContent = myNumber;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When the is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";

    //When guess is correct
  } else if (guess === myNumber) {
    document.querySelector(".message").textContent = "🥳 Correct guess";
    document.querySelector(".number").textContent = myNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    //When the score is greater than 0
  } else if (score > 0) {
    if (guess >= myNumber && guess - myNumber > 10) {
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
  } else if (score < 1) {
    document.querySelector(".message").textContent = "😢 You Loose";
    document.querySelector("body").style.backgroundColor = "red";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  myNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15 rem";
});
