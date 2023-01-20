const $lightBulb = document.querySelector('.light-bulb')
const $body = document.querySelector('body')

$lightBulb.addEventListener('click', () => {
  $body.classList.toggle('dark')
})