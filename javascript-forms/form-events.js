function handleFocus(e) {
  console.log('focus event fired')
  console.log('e.target.name:', e.target.name)
}

function handleBlur(e) {
  console.log('blur event fired')
  console.log('e.target.name:', e.target.name)
}

function handleInput(e) {
  console.log('e.target.name:', e.target.name)
  console.log('e.target.value:', e.target.value)
}

const $contactFormName = document.querySelector('#user-name') // document.forms[0].elements.name
const $contactFormEmail = document.querySelector('#user-email') // document.forms[0].elements.email
const $contactFormMessage = document.forms[0].elements.message
const $formControls = [$contactFormName, $contactFormEmail, $contactFormMessage];

$formControls.forEach(dom => {
  dom.addEventListener('focus', handleFocus)
  dom.addEventListener('blur', handleBlur)
  dom.addEventListener('input', handleInput)
})