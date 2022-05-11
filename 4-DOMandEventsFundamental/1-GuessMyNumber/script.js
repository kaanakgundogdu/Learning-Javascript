'use strict';

////----DOM fundamentals

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent =
//   "Kaan's Guess The Number Game!";
// document.querySelector('.number').textContent = 11;
// document.querySelector('.score').textContent = 2002;

// document.querySelector('.guess').value = 333;
// console.log(document.querySelector('.guess').value);

const setCheckButtonValue = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
};

document.querySelector('.check').addEventListener('click', setCheckButtonValue);
