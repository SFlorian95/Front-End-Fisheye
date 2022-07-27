const factoryPhotographer = require('../factories/photographer')
const api = require('../components/api')

const displayData = async photographers => {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = factoryPhotographer.create(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

const init = async () => {
  const data = await api.getPhotographers()
  displayData(data)
  console.log(data)
}

init()
