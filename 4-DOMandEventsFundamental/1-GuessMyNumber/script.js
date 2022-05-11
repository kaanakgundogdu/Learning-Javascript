'use strict';

////----DOM fundamentals

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent =
//   "Kaan's Guess The Number Game!";
// document.querySelector('.number').textContent = 11;
// document.querySelector('.score').textContent = 2002;

// document.querySelector('.guess').value = 333;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setCheckButtonValue = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number 😢🤧';
    displayMessage('No number 😢🤧');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You Won!!! 🎉🥳';
    displayMessage('You Won!!! 🎉🥳');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? decreaseScore('Too high! 🤦‍♂️')
      : decreaseScore('Too low! 🤦‍♂️');
  }
};

function decreaseScore(conditionText) {
  if (score > 1) {
    score -= 1;
    // document.querySelector('.message').textContent = conditionText;
    displayMessage(conditionText);
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = 'You lose! 🤦‍♂️';
    displayMessage('You lose! 🤦‍♂️');
    document.querySelector('.score').textContent = 0;
  }
}

const setAgainButtonAction = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', setCheckButtonValue);

document
  .querySelector('.again')
  .addEventListener('click', setAgainButtonAction);
