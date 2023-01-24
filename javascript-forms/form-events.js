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

const $contactForm = document.forms[0]
const $contactFormName = document.querySelector('#user-name') // document.forms[0].elements.name
const $contactFormEmail = document.querySelector('#user-email') // document.forms[0].elements.email
const $contactFormMessage = document.forms[0].elements.message
const $formControls = [$contactFormName, $contactFormEmail, $contactFormMessage];

$formControls.forEach(dom => {
  dom.addEventListener('focus', handleFocus)
  dom.addEventListener('blur', handleBlur)
  dom.addEventListener('input', handleInput)
})

function handleSubmit(e) {
  e.preventDefault()
  const formData = {}
  /* 
    I could hardcode the values from the form with something like 
    formData.email = $contactForm.elements.email.value
    but I feel like the loop below is easier,
    hopefully that's fine! I can change it if you want though
  */
  for (let control of $contactForm) {
    if (control.name) formData[control.name] = control.value 
  }
  console.log(formData)
  e.target.reset()
}

$contactForm.addEventListener('submit', handleSubmit)