const dom = require('../utils/dom')
const imgLikes = '/src/assets/images/like.png'
const imgLikesAttributes = [
  { src: imgLikes },
  { alt: 'likes' }
]

module.exports = {
  createCard (data) {
    const { id, title, likes, image, video } = data
    const media = `/src/assets/medias/${image || video}`
    const aAttributes = [
      { href: '#' },
      { 'aria-label': `ouvre la vue lightbox de l'image ${title}` }
    ]
    const imgAttributes = [
      { src: media },
      { alt: `${title}, closeup view` },
      { 'aria-label': `${title}, closeup view` }
    ]
    const videoAttributes = [
      { width: '350' },
      { height: '300' },
      { type: 'video/mp4' }
    ]
    const spanTitleAttributes = [
      { class: 'title' },
      { 'aria-label': title }
    ]
    const spanLikesAttributes = [
      { class: 'likes' },
      { 'aria-label': 'nombre de likes' }
    ]
    const imgLikesAttributes = [
      { src: imgLikes },
      { alt: 'likes' }
    ]

    const getArticleDOM = () => {
      const article = dom.createElement('article', null, [{ id }])
      image ? dom.createElement('img', article, imgAttributes) : dom.createElement('video', article, [...videoAttributes, ...imgAttributes])
      const p = dom.createElement('p', article)
      dom.createElement('span', p, spanTitleAttributes, title)
      return { article, p }
    }

    const getLikesDOM = () => {
      const likesContainer = dom.createElement('div', null)
      const likesNumber = dom.createElement('span', likesContainer, spanLikesAttributes, likes)
      const img = dom.createElement('img', likesContainer, imgLikesAttributes)
      return { likesContainer, likesNumber, img }
    }

    const getMediaCardDOM = () => {
      const a = dom.createElement('a', null, aAttributes)
      const { article, p } = getArticleDOM()
      const { likesContainer, likesNumber } = getLikesDOM()
      p.appendChild(likesContainer)
      a.appendChild(article)
      return { a, likesContainer, likesNumber }
    }

    return { title, media, getMediaCardDOM, getArticleDOM, getLikesDOM }
  },

  createLikesDOM (price) {
    const spanPriceAttributes = [
      { class: 'price' },
      { 'aria-label': price }
    ]
    const spanLikesAttributes = [
      { class: 'total-likes' },
      { 'aria-label': 'nombre de total de likes' }
    ]

    const spanPrice = dom.createElement('span', null, spanPriceAttributes, `${price}€ / jour`)
    const likesContainer = dom.createElement('div', null)
    const likesNumber = dom.createElement('span', likesContainer, spanLikesAttributes)
    dom.createElement('img', likesContainer, imgLikesAttributes)
    return { spanPrice, likesContainer, likesNumber }
  }
}
