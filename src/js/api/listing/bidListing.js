import { POST } from '../requests.js'
/**
 * @description bids on a auction
 * @param {Number} amount
 * @param {String} id
 *
 */
export async function bidListing(amount, id) {
  try {
    const { json, response } = await POST({
      url: `/listings/${id}/bids`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: { amount },
    })

    if (!response.ok) {
      if (response.status === 429) {
        console.log('Too many requests')
        document.querySelector('.errorFront').innerHTML =
          'Too many requests to the server, please try again later'
        throw new Error('Too many requests')
      }
      document.querySelector('.errorFront').innerHTML = json.errors[0].message

      throw new Error(json.errors[0].message)
    }
    return
  } catch (error) {
    console.log(error)
    return error
  }
}
