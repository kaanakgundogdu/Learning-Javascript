'use strict';

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); //only works for id
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0CurrentElement = document.querySelector('#current--0');
const player1CurrentElement = document.querySelector('#current--1');

let currentScore, currentPlayer, isGamePlaying, scores, playerArray;

const init = function () {
  currentScore = 0;
  currentPlayer = 0;
  isGamePlaying = true;

  scores = [0, 0];
  playerArray = [player0CurrentElement, player1CurrentElement];

  for (let i = 0; i < playerArray.length; i++) {
    const element = playerArray[i];
    element.textContent = currentScore;
  }

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  diceElement.classList.add('hidden');

  score0Element.textContent = 0;
  score1Element.textContent = 0;
};

init();

btnRoll.addEventListener('click', function () {
  if (!isGamePlaying) return;

  const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `images/dice-${randomDiceNumber}.png`;

  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;
    playerArray[currentPlayer].textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (!isGamePlaying) return;

  scores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    scores[currentPlayer];

  if (scores[currentPlayer] >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');

    diceElement.classList.add('hidden');
    isGamePlaying = false;
  } else {
    switchPlayer();
  }
});

btnNewGame.addEventListener('click', init);

function switchPlayer() {
  currentScore = 0;
  playerArray[currentPlayer].textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}
