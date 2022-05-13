'use strict';

//Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); //only works for id
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0CurrentElement = document.querySelector('#current--0');
const player1CurrentElement = document.querySelector('#current--1');
let currentScore = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `images/dice-${randomDiceNumber}.png`;

  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;
    player0CurrentElement.textContent = currentScore;
  } else {
  }
});
