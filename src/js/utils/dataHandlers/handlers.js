import * as utils from '../utils.js'
import * as calls from '../../api/apiCalls.js'
/**
 * @description This function sorts bids by amount to find the highest bid and returns it.
 * @param {Array} bidList
 * @returns - returns the text for the html and the amount
 */
export function bidHandler(bidList) {
  let bid

  const max = Math.max(...bidList.map((x) => x.amount), 0)
  if (bidList.length > 0) {
    bid = 'Leading bid: ' + max
    return [bid, max]
  } else {
    bid = 'No bids yet...'
    return [bid, max]
  }
}

/**
 * @description Function that handles countdowns until expire date. Also sets interval to update every second.
 *
 */
export function countdownHandler() {
  let countdownTargets = document.querySelectorAll('#countdown')

  let endDate = []
  for (let i = 0; i < countdownTargets.length; i++) {
    endDate[i] = new Date(countdownTargets[i].innerHTML)
  }
  let timeLeft, days, hours, minutes, seconds
  setInterval(function () {
    let now = new Date()

    for (let i = 0; i < countdownTargets.length; i++) {
      timeLeft = endDate[i] - now.getTime()
      endDate[i] - 1000
      days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
      countdownTargets[i].innerHTML =
        'Time left: ' +
        days +
        'd ' +
        hours +
        'h ' +
        minutes +
        'm ' +
        seconds +
        's '
      if (timeLeft < 0) {
        countdownTargets[i].innerHTML = 'Auction ended'
      }
    }
  }, 1000)
}

/**
 * @description Handles the quickbid option on the front page. makes a modal appear and then sends the bid to the bidOnItemHandler function.
 */
export function quickBid() {
  let quickButtons = document.querySelectorAll('.quickBid')
  let quickButtonsModal = document.querySelector('#bid')
  for (let i = 0; i < quickButtons.length; i++) {
    quickButtons[i].addEventListener('click', async function (event) {
      event.preventDefault()
      let bid = quickButtons[i].value
      let id = quickButtons[i].id
      document.querySelector('.quickBuy').innerHTML =
        'Are you sure u want to bid: <b>' + bid + '</b> credit(s) on this item?'
      quickButtonsModal.addEventListener('click', async function (event) {
        bidOnItemHandler(bid, id)
      })
    })
  }
}

/**
 * @description function to handle bids from quickbid and normal bidding. Also updates the wallet after a bid is placed.
 * @param {String} amount
 * @param {string} id
 */
export async function bidOnItemHandler(amount, id) {
  amount = parseInt(amount)
  if (!localStorage.getItem('accessToken')) {
    return
  }
  let check = await calls.bidListing(amount, id)
  if (check) {
    return
  }
  await calls.singleProfile(localStorage.getItem('username'))
  utils.domManip()
  if (document.querySelector('#bidSuccessModal')) {
    let bidModal = bootstrap.Modal.getOrCreateInstance('#bidSuccessModal')
    bidModal.show()
  }
  document.querySelector(
    '.bidSuccess',
  ).innerHTML = `Bid of ${amount} credit(s) placed!`
}
/**
 *
 * @description Function that handles the profile page. If the user is not logged in it redirects to the index page.
 *  If the user is logged in it checks if the user is on their own profile page or someone elses.
 *  If it is their own profile page it loads their own profile page. If it is someone elses profile page it loads that persons profile page.
 *  If the user is not found it displays an error message.
 */
export async function profileHandler() {
  if (/user.html/i.test(window.location.href)) {
    if (!localStorage.getItem('accessToken')) {
      window.location.href = 'index.html'
      return
    }
    if (
      localStorage.getItem('username') === window.location.search.substring(1)
    ) {
      utils.userpageDOM(localStorage.getItem('avatar'))
    } else {
      let user = await calls.singleProfile(window.location.search.substring(1))
      if (/error/i.test(user)) {
        document.querySelector('.textProfile').innerHTML = user
        document.querySelector('.textProfile').classList.add('text-danger')
        document.querySelector('.avatarPlaceholder').style.cursor = 'default'
        document
          .querySelector('.avatarPlaceholder')
          .removeAttribute('data-bs-toggle')
        document
          .querySelector('.avatarPlaceholder')
          .removeAttribute('data-bs-target')
        return
      }
      utils.userpageDOM(user.avatar, user.name)
    }
  }
}
