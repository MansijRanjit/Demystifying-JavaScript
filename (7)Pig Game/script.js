"use strict";

//Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //getElementById is same as querySelecter but is faster than that and take id as parameter
const diceEl = document.querySelector(".dice");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
//console.log(diceEl);
diceEl.classList.add("hidden");

let currentScore = 0;
const score = [0, 0];
let activePlayer = 0;
let playing = true;

//Switching Player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.add("player--active");
  player0El.classList.toggle("player--active"); //toggle adds specified class if its not present and if it is present it removes it
  player1El.classList.toggle("player--active");
};

//Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //(1) Generating Random Dice Roll
    let randDiceNo = Math.trunc(Math.random() * 6) + 1;
    //console.log(randDiceNo);

    //(2) Displaying Dice
    diceEl.src = `dice-${randDiceNo}.png`;
    diceEl.classList.remove("hidden");

    //(3) Check for rolled 1
    if (randDiceNo !== 1) {
      currentScore += randDiceNo;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1) Add current score to the active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2) Check if player's score is >=100
    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      //3) Switch to next player
      switchPlayer();
    }
  }
});
