const dom = require('../utils/dom')
const modal = document.getElementById('lightbox-modal')
const main = document.getElementById('main')
const body = document.getElementById('body')
const lightboxClose = document.getElementById('lightbox-close')
const lightbox = document.getElementById('lightbox')
const arrows = document.querySelectorAll('.arrows')

const displayLightbox = (bool, media) => {
  modal.style.display = bool ? 'flex' : 'none'
  main.setAttribute('aria-hidden', bool)
  modal.setAttribute('aria-hidden', !bool)
  body.style.overflow = bool ? 'hidden' : 'auto'
  lightboxClose.focus()
  arrows.forEach(arrow => arrow.setAttribute('aria-hidden', !bool))
  if (bool) {
    dom.empty(lightbox)
    console.log(lightbox)
    lightbox.appendChild(media.getArticleDOM().article)
    resizeVideo()
  }
}

const previousImg = articles => {
  const currentIndex = getCurrentArticleIndex(articles)

  dom.empty(lightbox)
  lightbox.appendChild(currentIndex === 0 ? articles[articles.length - 1] : articles[currentIndex - 1])
  resizeVideo()
}

const nextImg = articles => {
  const currentIndex = getCurrentArticleIndex(articles)

  dom.empty(lightbox)
  lightbox.appendChild(currentIndex === (articles.length - 1) ? articles[0] : articles[currentIndex + 1])
  resizeVideo()
}

const getCurrentArticleIndex = articles => {
  const article = lightbox.firstElementChild
  const result = articles.find(item => item.id === article.id)
  console.log('indexOf:', articles.indexOf(result))
  return articles.indexOf(result)
}

// tabindex lien = https://fr.javascript.info/focus-blur
const keyDown = (event, articles) => {
  const key = event.key || event.keyCode
  console.log('key:', key)

  // press Escape
  if (key === 'Escape' || key === 'Esc' || key === 27) {
    displayLightbox(false)
  }

  // press Arrow Key
  if (key === 'ArrowRight' || key === 39) {
    nextImg(articles)
  }
  if (key === 'ArrowLeft' || key === 37) {
    previousImg(articles)
  }
}

const resizeVideo = () => {
  const video = document.querySelector('div#lightbox > article > video')
  if (video) {
    video.setAttribute('width', '100%')
    video.setAttribute('height', 'auto')
    video.setAttribute('controls', 'controls')
  }
}

module.exports = {
  displayLightbox,
  previousImg,
  nextImg,
  keyDown
}
