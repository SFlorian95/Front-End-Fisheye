const factoryPhotographer = require('../factories/photographer')
const factoryMedia = require('../factories/media')
const api = require('../components/api')
const contactForm = require('../components/contactForm')
const lightbox = require('../components/lightbox')
const dom = require('../utils/dom')
let articles
let photographer

const likesClick = (event, mediaCardDOM) => {
  const { likesNumber, likesContainer } = mediaCardDOM
  event.stopPropagation()
  if (!likesContainer.hasAttribute('disabled')) {
    likesNumber.textContent = parseInt(likesNumber.textContent) + 1
    likesContainer.setAttribute('disabled', 'disabled')
    // update total likes photographer
    displayTotalLikes()
  }
}

/**
 * Update total likes photographer element
 */
const displayTotalLikes = () => {
  let totalLikes = 0
  const likes = document.querySelectorAll('.likes')
  // eslint-disable-next-line no-return-assign
  likes.forEach(like => totalLikes += parseInt(like.textContent))
  const domTotalLikes = document.querySelector('.total-likes')
  domTotalLikes.textContent = totalLikes
}

const byASCTitle = (a, b) => ((a.title > b.title) ? 1 : -1)
const byDESCLikes = (a, b) => ((a.likes < b.likes) ? 1 : -1)
const byDESCDate = (a, b) => ((new Date(a.date) < new Date(b.date)) ? 1 : -1)

// https://developer.mozilla.org/fr/docs/Web/API/HTMLOptionElement/Option
const options = [
  { text: 'Date', value: byDESCDate, defaultSelected: true, selected: true },
  { text: 'Popularité', value: byDESCLikes, defaultSelected: false, selected: false },
  { text: 'Titre', value: byASCTitle, defaultSelected: false, selected: false }
]

// Mettre le code JavaScript lié à la page photographer.html
module.exports = id => {
  const sortBtn = document.getElementById('sortBy')

  const displayData = async photographer => {
    const photographerModel = factoryPhotographer.create(photographer)
    const userCardDOM = photographerModel.getPhotographerProfile()
    return userCardDOM
  }

  /**
   * Display medias elements
   *
   * @param {Array} medias Array object of medias from data
   * @param {Function} sortFunction sort Method
   */
  const displayMedias = (medias, sortFunction = byDESCDate) => {
    articles = []
    let totalLikes = 0
    medias.sort(sortFunction)
    medias.forEach(media => {
      const mediaModel = factoryMedia.createCard(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaCardDOM.a.addEventListener('click', () => lightbox.displayLightbox(true, mediaModel))
      mediaCardDOM.likesContainer.addEventListener('click', event => likesClick(event, mediaCardDOM))
      articles.push(mediaModel.getArticleDOM().article)
      document.getElementById('medias').appendChild(mediaCardDOM.a)
      totalLikes += media.likes
    })
    console.log('totalLikes', totalLikes)
    console.log(photographer.price)

    const createLikes = factoryMedia.createLikesDOM(photographer.price)
    createLikes.spanPrice.prepend(createLikes.likesContainer)
    document.getElementById('medias').appendChild(createLikes.spanPrice)
    createLikes.likesNumber.textContent = totalLikes
  }

  /**
   * Sort medias array
   *
   * @param {Array} medias
   */
  const sortMedias = medias => {
    dom.empty(document.getElementById('medias'))
    // eslint-disable-next-line no-eval
    displayMedias(medias, eval(sortBtn.value))
  }

  // Add options to select 'sortBy' id
  // eslint-disable-next-line no-return-assign, no-undef
  options.forEach((item, key) => sortBtn[key] = new Option(item.text, item.value, item.defaultSelected, item.selected))

  const init = async () => {
    photographer = await api.getPhotographerById(parseInt(id))
    const medias = await api.getMediasByPhotographerId(parseInt(id))

    console.log(await api.getMediasByPhotographerId(243))
    console.log(await api.getMediaById(623534343))
    // console.log(medias)
    displayData(photographer)
    displayMedias(medias)

    document.querySelector('.contact_button').addEventListener('click', () => contactForm.displayModal(photographer.name))
    document.querySelector('.close').addEventListener('click', contactForm.closeModal)
    document.getElementById('form-contact').addEventListener('submit', e => contactForm.formSubmit(e))
    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.displayLightbox(false))

    document.getElementById('previous-img').addEventListener('click', () => lightbox.previousImg(articles))
    document.getElementById('next-img').addEventListener('click', () => lightbox.nextImg(articles))

    // https://devstephen.medium.com/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a#:~:text=KeyCode%20was%20deprecated%20because%20in,to%20use%20key%20or%20code%20.
    document.addEventListener('keydown', e => lightbox.keyDown(e, articles))

    sortBtn.addEventListener('change', () => sortMedias(medias))
  }
  init()
}
