import { GET } from '../requests.js'
/**
 * @description gets 100 auctions from api, used for the front page. Sorts by ending soonest
 * @returns all auctions
 */
export async function allListings() {
  try {
    const { json, response } = await GET({
      url:
        '/listings?_seller=true&_bids=true&sort=endsAt&sortOrder=asc&_active=true',
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
    document.querySelector('#container').innerHTML = ''
  }
}
