import * as calls from '../../api/apiCalls.js'
/**
 * 
 * @description This function is used to manipulate the DOM and display the user's wallet and profile picture on the navbar
 */
export async function domManip() {
   if (localStorage.getItem('username')) {
await calls.singleProfile(localStorage.getItem('username'))
}

  if (localStorage.getItem('credits')) {
    document.getElementById('wallet').innerHTML =
      'Wallet: ' + localStorage.getItem('credits')
  }

  let btn = document.querySelector('#loginButtonDiv')

  if (
    localStorage.getItem('avatar') &&
    localStorage.getItem('avatar') != 'null'
  ) {
    console.log('avatar exists')
    btn.innerHTML = `<img class="rounded-circle img-fluid pfp" src="${localStorage.getItem(
      'avatar',
    )}" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" alt="profile picture" style="cursor: pointer;"/>`
  } else if (
    (localStorage.getItem('avatar') &&
      localStorage.getItem('avatar') === null) ||
    localStorage.getItem('avatar') === ''
  ) {
    btn.innerHTML = `<img class="rounded-circle img-fluid pfp" src="./assets/img/noImg.jpg" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" alt="profile picture" style="cursor: pointer;"/>`
  } else {
    console.log('avatar does not exist')
  }

  if (localStorage.getItem('accessToken') && document.querySelector('#bid')) {
    document.querySelector('#bid').classList.remove('disabled')
    document.querySelector('.notLoggedIn').innerHTML = ''
  }
}
