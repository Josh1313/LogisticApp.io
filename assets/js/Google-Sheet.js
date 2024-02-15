const scriptUrl = 'https://script.google.com/macros/s/AKfycbyaGNAQif8rawWQX9r4RMFyQfxHa77RcigTKOfneU9n5_W2mwGvvhCgM8iu9WUcyrzReg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUrl, { method: 'POST', body:new FormData(form)})
    .then(response => alert ('Thank you! your form is submitted sucessfully.'))
    .then(() => { window.location.reload();})
    .catch(error => console.error ('Error!', error.message))
})



