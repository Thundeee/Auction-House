import { PUT } from '../requests.js'
/**
 * @description updates an auction
 * @param {String} id
 * @param {String} title
 * @param {String} description
 * @param {Array} media
 */
export async function updateListing(id, title, description, media) {
  try {
    const { json, response } = await PUT({
      url: `/listings/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: { title, description, media },
    })
    console.log(json)
    console.log(response.ok)

    if (!response.ok) {
      if (response.status === 429) {
        console.log('Too many requests')
        throw new Error('Too many requests')
      }
      throw new Error(json.errors[0].message)
    }
  } catch (error) {
    console.log(error)
  }
}
