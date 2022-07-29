const axios = require('axios')

const url = 'src/data/photographers.json'

/**
 * Get all photographers
 * @returns Array of photographer object
 */
const getPhotographers = () => axios.get(url).then(response => response.data.photographers)

/**
 * Get photographer in function of id in param
 *
 * @param {Number} id
 * @returns Object of photographer
 */
const getPhotographerById = id => getPhotographers().then(photographers => photographers.find(photographer => photographer.id === id))

module.exports = {
  getPhotographers,
  getPhotographerById
}
