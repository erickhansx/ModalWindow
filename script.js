'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Function to close the modal by adding the hidden class.
const closeModal = () => {
  modal.classList.add('hidden'), overlay.classList.add('hidden');
};

// Function to add the event listener to the buttons and to display the modals by removing the hidden class.

const openModal = () => {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// For loop to add an eventlistener to the buttons.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//Here I add the function we created to the eventlistener of the button and the overlay to close the modal by executing the function.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (
      !modal.classList.contains('hidden') &&
      !overlay.classList.contains('hidden')
    ) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
