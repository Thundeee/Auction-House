import { POST } from '../requests.js'
/**
 * @description creates a new auctions
 * @param {String} title
 * @param {String} description
 * @param {Array} media
 * @param {Date} endsAt
 */
export async function createListing(title, description, media, endsAt) {
  try {
    const { json, response } = await POST({
      url: '/listings',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: { title, description, media, endsAt },
    })
    console.log(json)
    console.log(response.ok)

    if (!response.ok) {
      if (response.status === 429) {
        console.log('Too many requests')
        document.querySelector('.errorResponseCreate').innerHTML =
          'Too many requests to the server, please try again later'
        throw new Error('Too many requests')
      }
      document.querySelector('.errorResponseCreate').innerHTML =
        json.errors[0].message
      throw new Error(json.errors[0].message)
    }
    document.querySelector('.positiveResponseCreate').innerHTML =
      'Auction created successfully!'
  } catch (error) {
    console.log(error)
  }
}
