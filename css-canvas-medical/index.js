const popUp = document.querySelector('.mobile-popup-wrapper');
const hamburgerBtn = document.querySelector('.nav-hamburger-btn');
const xIcon = document.querySelector('.mobile-x');
const xBtn = document.querySelector('.fa-times');

function togglePopUp() {
  popUp.classList.toggle('active');
}

[popUp, hamburgerBtn, xIcon, xBtn].forEach(elem => {
  elem.addEventListener('click', togglePopUp);
});
