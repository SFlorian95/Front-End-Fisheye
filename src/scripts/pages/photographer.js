const api = require('../components/api')

// Mettre le code JavaScript lié à la page photographer.html
module.exports = id => {
  console.log(id)
  const init = async () => {
    const data = await api.getPhotographerById(parseInt(id))
    console.log(data)
  }
  init()
}
