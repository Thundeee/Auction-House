
export function domManip() {
  


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
  btn.innerHTML = `<img class="rounded-circle img-fluid pfp" src="${localStorage.getItem('avatar',)}" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" alt="profile picture" style="cursor: pointer;"/>`
} else if (localStorage.getItem('avatar') && localStorage.getItem('avatar') === null || localStorage.getItem('avatar') === "") {
  btn.innerHTML = `<img class="rounded-circle img-fluid pfp" src="./assets/img/noImg.jpg" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" alt="profile picture" style="cursor: pointer;"/>`
} else {
  console.log('avatar does not exist')
}

}