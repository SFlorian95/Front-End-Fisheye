module.exports = {
  create (data) {
    const { name, portrait, id, city, country, tagline, price } = data

    const picture = `/src/assets/photographers/${portrait}`
    const url = `photographer.html?id=${id}`

    const getUserCardDOM = () => {
      const article = document.createElement('article')

      const a = document.createElement('a')
      a.setAttribute('href', url)

      const div = document.createElement('div')
      div.classList.add('localisation')

      const cityText = document.createElement('span')
      cityText.textContent = city + ', '

      const countryText = document.createElement('span')
      countryText.textContent = country

      const taglineText = document.createElement('span')
      taglineText.textContent = tagline
      taglineText.classList.add('tagline')

      const priceNumber = document.createElement('span')
      priceNumber.textContent = price + '€/jour'
      priceNumber.classList.add('price')

      const img = document.createElement('img')
      img.setAttribute('src', picture)

      const h2 = document.createElement('h2')
      h2.textContent = name

      article.appendChild(a)
      article.appendChild(div)
      article.appendChild(taglineText)
      article.appendChild(priceNumber)
      div.appendChild(cityText)
      div.appendChild(countryText)
      a.appendChild(img)
      a.appendChild(h2)
      return (article)
    }

    return { name, picture, getUserCardDOM }
  }
}
