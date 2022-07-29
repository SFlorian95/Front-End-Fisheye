const displayModal = name => {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  const modalTitle = document.getElementById('modal-title')
  modalTitle.textContent = `Contactez-moi ${name}`
}

const closeModal = () => {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

const formSubmit = event => {
  // avoid refresh page for each submit
  event.preventDefault()
  console.log(`
    firstname:${document.getElementById('firstname').value}
    lastname:${document.getElementById('lastname').value}
    email:${document.getElementById('email').value}
    message:${document.getElementById('yourMessage').value}`)
}

module.exports = {
  displayModal,
  closeModal,
  formSubmit
}
