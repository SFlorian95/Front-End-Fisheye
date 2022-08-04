const dom = require('../components/dom')

module.exports = {
  createCard (data) {
    const { title, likes, image, video } = data
    const media = `/src/assets/medias/${image || video}`
    // const media = require(`../../assets/medias/${image || video}`)
    const imgLikes = '/src/assets/images/like.png'
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

    const getMediaCardDOM = () => {
      const a = dom.createElement('a', null, aAttributes)
      const article = dom.createElement('article', a)
      article.classList.add('imgGallery')
      image ? dom.createElement('img', article, imgAttributes) : dom.createElement('video', article, [...videoAttributes, ...imgAttributes])
      const p = dom.createElement('p', article)
      dom.createElement('span', p, spanTitleAttributes, title)
      const div = dom.createElement('div', p)
      dom.createElement('span', div, spanLikesAttributes, likes)
      dom.createElement('img', div, imgLikesAttributes)
      return a
    }
    return { title, media, getMediaCardDOM }
  }
}
