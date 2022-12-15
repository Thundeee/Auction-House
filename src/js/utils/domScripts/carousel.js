/**
 * @description Creates the carousel for the listing, removes the arrows if there is only one image or no images also gives default image if no images are present
 * @param {Array} media - Array of images
 */
export function carousel(media) {
  let carousel = document.querySelector('.carousel-inner')

  if (media.length <= 1) {
    document.querySelector('.carousel-control-prev').style.display = 'none'
    document.querySelector('.carousel-control-next').style.display = 'none'

    if (media.length == 0) {
      let carouselItem = document.createElement('div')
      carouselItem.classList.add(
        'carousel-item',
        'active',
        'border',
        'border-dark',
      )
      carouselItem.innerHTML = `
            <img src="./assets/img/logo.png" class="d-block w-100" alt="picture related to auction">
            `
      carousel.appendChild(carouselItem)

      return
    }
  }

  for (let i = 0; i < media.length; i++) {
    let carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item', 'border', 'border-dark')
    if (i == 0) {
      carouselItem.classList.add('active')
    }
    carouselItem.innerHTML = `
    <img src="${media[i]}" class="d-block w-100" alt="picture related to auction">
    `

    carousel.appendChild(carouselItem)
  }
}
