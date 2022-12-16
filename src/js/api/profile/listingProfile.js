import { GET } from '../requests.js'
/**
 * @description gets a users listings from api
 * @param {String} name
 */
export async function listingsProfile(name) {
  try {
    const { json, response } = await GET({
      url: `/profiles/${name}/listings?_seller=true&_bids=true`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
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
//
