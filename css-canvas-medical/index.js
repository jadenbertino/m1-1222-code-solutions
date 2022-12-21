const popUp = document.querySelector('.mobile-popup-wrapper');
const hamburgerBtn = document.querySelector('.nav-hamburger-btn');
const xBtn = document.querySelector('.nav-x-btn');

function togglePopUp() {
  popUp.classList.toggle('active');
}

[hamburgerBtn, xBtn].forEach(elem => {
  elem.addEventListener('click', togglePopUp);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    popUp.classList.remove('active');
  }
});
