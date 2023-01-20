const $body = document.querySelector('body')
const $openModalBtn = document.querySelector('button.open-modal')
const $closeModalBtn = document.querySelector('button.close-modal')

// open popup
$openModalBtn.addEventListener('click', () => {
  $body.classList.add('modal-opacity-100', 'modal-visible');
})

// close popup
$closeModalBtn.addEventListener('click', () => {
  $body.classList.remove('modal-opacity-100');
  setTimeout(() => {
    $body.classList.remove('modal-visible');
  }, 300)
})