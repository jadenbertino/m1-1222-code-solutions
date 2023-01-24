const $contactForm = document.forms[0]
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