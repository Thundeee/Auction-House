import { GET } from '../requests.js'
/**
 * @description gets a single specified auction from api
 * @param {String} id
 * @returns auction info
 */
export async function singleListing(id) {
  try {
    const { json, response } = await GET({
      url: `/listings/${id}?_seller=true&_bids=true`,
      headers: {},
    })

    if (!response.ok) {
      if (response.status === 429) {
        console.log('Too many requests')
        throw new Error('Too many requests please try again later')
      }
      throw new Error(json.errors[0].message)
    }

    return json
  } catch (error) {
    document.querySelector('.errorFront').innerHTML = error
    console.log(error)
    //removes loading animation
    document.querySelector('.singlePostContainer').innerHTML = ''
  }
}
