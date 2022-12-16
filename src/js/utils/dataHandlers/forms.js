import * as calls from '../../api/apiCalls.js'
import * as utils from '../utils.js'
// This file handles the login and register forms.It also handles logouts

const loginForm = document.querySelector('.loginForm')
const registerForm = document.querySelector('.registerForm')
const logOutButton = document.querySelector('#logout')
const errorRegister = document.querySelector('.errorResponseRegister')
const errorLogin = document.querySelector('.errorResponseLogin')
// handles the login form
let loginHandler = loginForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = loginForm.elements.loginEmail.value
  const password = loginForm.elements.loginPassword.value

  if (!/@(stud.noroff.no|noroff.no)/.test(email)) {
    errorLogin.innerHTML =
      'Invalid email address, please use your Noroff address.'
    return
  } else if (password.length < 8) {
    errorLogin.innerHTML = 'Password has to be 8 or more characters.'
    return
  }

  errorLogin.innerHTML = ''
  await calls.login(email, password)
})
// handles the register form
let registerHandler = registerForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = registerForm.elements.registerUsername.value
  const email = registerForm.elements.registerEmail.value
  const password = registerForm.elements.registerPassword.value
  const avatar = registerForm.elements.registerAvatar.value

  if (/[.!?\\-]/.test(name)) {
    errorRegister.innerHTML =
      'Name must not contain punctuation symbols apart from underscore.'
    return
  } else if (name.length > 20) {
    errorRegister.innerHTML = 'Name cannot be longer than 20 characters.'
    return
  } else if (!/@(stud.noroff.no|noroff.no)/.test(email)) {
    errorRegister.innerHTML =
      'Invalid email address, please use your Noroff address.'
    return
  } else if (password.length < 8) {
    errorRegister.innerHTML = 'Password has to be 8 or more characters.'
    return
  } else if (avatar) {
    if (!/.*\.(jpeg|jpg|gif|png)/i.test(avatar)) {
      errorRegister.innerHTML = 'Avatar must be a picture.'
      return
    }
  }

  errorRegister.innerHTML = ''
  await calls.register(name, email, password, avatar)
})
// handles the logout button
let logOutHandler = logOutButton.addEventListener('click', () => {
  calls.logOut()
})

/**
 * @description Handles the avatar change on the profile page.
 * @param {URL} avatar
 *
 */
async function avatarChange(avatar) {
  if (!/.*\.(jpeg|jpg|gif|png)/i.test(avatar)) {
    return
  }
  console.log('funka')
  await calls.updateAvatar(avatar)
  await calls.singleProfile(localStorage.getItem('username'))
  utils.domManip()
}
export { loginHandler, registerHandler, logOutHandler, avatarChange }
