const factoryPhotographer = require('../factories/photographer')
const factoryMedia = require('../factories/media')
const api = require('../components/api')
const contactForm = require('../utils/contactForm')
const dom = require('../components/dom')

// Mettre le code JavaScript lié à la page photographer.html
module.exports = id => {
  const displayData = async photographer => {
    const photographerModel = factoryPhotographer.create(photographer)
    const userCardDOM = photographerModel.getPhotographerProfile()
    return userCardDOM
  }

  const displayMedias = medias => {
    medias.forEach(media => {
      const mediaModel = factoryMedia.createCard(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      document.getElementById('medias').appendChild(mediaCardDOM)
    })
  }

  const init = async () => {
    const photographer = await api.getPhotographerById(parseInt(id))
    const medias = await api.getMediasByPhotographerId(parseInt(id))

    console.log(await api.getMediasByPhotographerId(243))
    console.log(await api.getMediaById(623534343))
    // console.log(medias)
    displayData(photographer)
    displayMedias(medias)

    document.querySelector('.contact_button').addEventListener('click', () => contactForm.displayModal(photographer.name))
    document.querySelector('.close').addEventListener('click', contactForm.closeModal)
    document.getElementById('form-contact').addEventListener('submit', e => contactForm.formSubmit(e))

    document.querySelectorAll('.imgGallery').addEventListener('click', () => dom.displayLightbox())
  }
  init()
}
