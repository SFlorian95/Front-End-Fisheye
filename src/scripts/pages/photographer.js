const factoryPhotographer = require('../factories/photographer')
const api = require('../components/api')
const contactForm = require('../utils/contactForm')

// Mettre le code JavaScript lié à la page photographer.html
module.exports = id => {
  const displayData = async photographer => {
    const photographerModel = factoryPhotographer.create(photographer)
    const userCardDOM = photographerModel.getPhotographerProfile()
    return userCardDOM
  }

  const init = async () => {
    const data = await api.getPhotographerById(parseInt(id))
    console.log(data)
    displayData(data)
  }
  init()
}

document.querySelector('.contact_button').addEventListener('click', contactForm.displayModal)
document.querySelector('.close').addEventListener('click', contactForm.closeModal)
