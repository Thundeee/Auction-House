import { PUT } from '../requests.js'
/**
 * @description updates avatar for user
 * @param {URL} avatar
 */
export async function updateAvatar(avatar) {
  try {
    const { json, response } = await PUT({
      url: `/profiles/${localStorage.getItem('username')}/media`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: { avatar },
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
    console.log('test')
  } catch (error) {
    document.querySelector('.errorAvatar').innerHTML = error
    console.log(error)
  }
}
