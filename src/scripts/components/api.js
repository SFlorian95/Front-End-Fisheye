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

/**
 * Get all medias
 * @returns Array of medias object
 */
const getMediasByPhotographerId = id => axios.get(url).then(res => res.data.media.filter(result => result.photographerId === id))

const getMediaById = id => axios.get(url).then(res => res.data.media).then(medias => medias.find(media => media.id === id))

module.exports = {
  getPhotographers,
  getPhotographerById,
  getMediasByPhotographerId,
  getMediaById
}
