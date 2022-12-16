import { POST } from '../requests.js'
/**
 * @description logs a user in
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const { json, response } = await POST({
      url: '/auth/login',
      body: { email, password },
    })
    if (!response.ok) {
      if (response.status === 429) {
        console.log('Too many requests')
        document.querySelector('.errorResponseLogin').innerHTML =
          'Too many requests to the server, please try again later'
        throw new Error('Too many requests')
      }
      document.querySelector('.errorResponseLogin').innerHTML =
        json.errors[0].message
      throw new Error(json.errors[0].message)
    }
    localStorage.setItem('accessToken', json.accessToken)
    localStorage.setItem('username', json.name)
    localStorage.setItem('credits', json.credits)
    localStorage.setItem('avatar', json.avatar)

    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
