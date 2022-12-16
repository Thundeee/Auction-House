import * as calls from '../../api/apiCalls.js'
import * as utils from '../utils.js'

let data
/**
 * @description This function is the main function that is called when the page is loaded. It calls the api and then calls the postMaker function to make the cards.
 *
 */
export async function initial() {
  //have to put in extra here for github pages
  if (
    window.location.pathname == '/index.html' ||
    window.location.pathname == '/' ||
    window.location.pathname == '/Auction-House/index.html' ||
    window.location.pathname == '/Auction-House/'
  ) {
    const json = await calls.allListings()
    if (json == undefined) {
      return
    }

    let container = document.querySelector('#container')

    await postMaker(json)
    //saves the data for later use
    data = json

    if (window.location.search) {
      searcher(window.location.search.substring(1))
    }
  }
}

// the function that actually makes the cards
async function postMaker(postData) {
  let container = document.querySelector('#container')
  container.innerHTML = ''

  for (let i = 0; i < postData.length; i++) {
    // Image handler
    if (!postData[i].media[0]) {
      postData[i].media[0] = './assets/img/logo.png'
    }

    // Bid handler
    let bid = await utils.bidHandler(postData[i].bids)

    //description handler
    if (!postData[i].description) {
      postData[i].description = 'No description provided.'
    } else if (postData[i].description.length > 70) {
      postData[i].description = postData[i].description.substring(0, 70) + '...'
    }

    // date handler
    let endDate = new Date(postData[i].endsAt)

    // HTML FOR CARDS

    container.innerHTML += `
                  <div class="card bg-secondary m-4 col-3" style="min-width: 160px !important; max-width: 500px;">
                      <div class="card-title m-1 text-break text-center"><h3>${
                        postData[i].title
                      }</h3>
                      </div>
                      <div class="card-subtitle text-muted m-1">By: ${
                        postData[i].seller.name
                      }</div>
                      <div class="d-flex flex-column flex-xl-row m-1">
                      <img src= "${
                        postData[i].media[0]
                      }" class="imgAll border border-dark m-auto m-xl-0 col-12" alt="${
      postData.title
    }"></img>
                      <p class="card-text m-2 text-break">${
                        postData[i].description
                      }</p>
                      </div>
                      <div class="card-footer">
                      <p class="card-text" id="countdown">${endDate}</p>
                      <p class="card-text">${bid[0]}</p>
                      <div>
                      <button type="submit" class="btn btn-success m-1 quickBid" data-bs-toggle="modal" data-bs-target="#bidModal" value="${
                        bid[1] + 1
                      }"id="${postData[i].id}">Bid +1</button>
                      <a href="./auction.html?${
                        postData[i].id
                      }" aria-label="link to auction"><button type="button" class="btn btn-primary m-1">More Info</button></a>
                      </div>
                  </div>
                  </div>
                  </div>
                  `
  }

  utils.countdownHandler()

  utils.quickBid()
}

//search stuff
let searchBar = document.querySelector('#searchForm')
searchBar.addEventListener('submit', async function (event) {
  event.preventDefault()
  let searchLetters = searchBar.elements[0].value
  searchLetters = searchLetters.toLowerCase()
  searcher(searchLetters)
})
/**
 * @description This function searches the data for the search query and then calls the postMaker function to make the cards.
 * @param {String} keyword - the search query
 *
 */
function searcher(keyword) {
  if (
    window.location.pathname == '/index.html' ||
    window.location.pathname == '/' ||
    window.location.pathname == '/Auction-House/index.html' ||
    window.location.pathname == '/Auction-House/'
  ) {
  } else {
    //redirects to index.html with search query if not on index.html
    window.location.href = `./index.html?${keyword}`
  }
  document.querySelector('.errorFront').innerHTML = ''

  //if no search query, show all posts
  if (!keyword) {
    postMaker(data)
    return
  }
  let postList = []
  let j = 0
  let title, description, seller
  for (let i = 0; i < data.length; i++) {
    title = data[i].title.toLowerCase()
    description = data[i].description.toLowerCase()
    seller = data[i].seller.name.toLowerCase()
    if (
      title.includes(keyword) ||
      description.includes(keyword) ||
      seller.includes(keyword)
    ) {
      postList[j] = data[i]
      j++
    }
  }
  if (postList.length == 0) {
    document.querySelector(
      '.errorFront',
    ).innerHTML = `No results found for "${keyword}"`
  }
  postMaker(postList)
}
