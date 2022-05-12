'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); //query selector select only the first one for multiple elements
const btnsOpenModal = document.querySelectorAll('.show-modal'); //use query selector all

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModalAndOverlay);
  //If you use openModalAndOverlay() function works immediately you must use openModalAndOverlay without parentheses
}

btnCloseModal.addEventListener('click', closeModalAndOverlay);

overlay.addEventListener('click', closeModalAndOverlay);

document.addEventListener('keydown', escPressedAction);

function openModalAndOverlay() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModalAndOverlay() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function escPressedAction(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalAndOverlay();
  }
}
