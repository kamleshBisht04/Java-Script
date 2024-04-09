'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal-close');
const btnOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

/*
// console.log(btnOpenModal);
// for (let i = 0; i < btnOpenModal.length; i++) {
//   console.log(btnOpenModal[i].textContent);
// }
*/

const modalopen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modalclose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', modalopen);
}

btnCloseModal.addEventListener('click', modalclose);
overlay.addEventListener('click', modalclose);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalclose();
  }
});
