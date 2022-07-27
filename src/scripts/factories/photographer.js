module.exports = {
  create (data) {
    const { name, portrait, id, city, country } = data

    const picture = `/src/assets/photographers/${portrait}`
    const url = `photographer.html?id=${id}`

    const getUserCardDOM = () => {
      const article = document.createElement('article')

      const a = document.createElement('a')
      a.setAttribute('href', url)

      const cityText = document.createElement('span')
      cityText.textContent = city

      const countryText = document.createElement('span')
      countryText.textContent = country

      const img = document.createElement('img')
      img.setAttribute('src', picture)

      const h2 = document.createElement('h2')
      h2.textContent = name

      article.appendChild(a)
      article.appendChild(cityText)
      article.appendChild(countryText)
      a.appendChild(img)
      a.appendChild(h2)
      return (article)
    }

    return { name, picture, getUserCardDOM }
  }
}
