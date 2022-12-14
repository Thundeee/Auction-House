import * as utils from '../utils.js'
import * as calls from '../../api/apiCalls.js'



export function bidHandler(bidList) {
    console.log(bidList)
    let bid;
    
const max = Math.max(...bidList.map(x => x.amount), 0);
console.log(max);
    
        if (bidList.length > 0) {
           bid = "Current bid: "+ max;
           return [bid, max];
        } else {
          bid = "No bids yet...";
          return [bid, max];
        }
}




export function countdownHandler() {
    let countdownTargets = document.querySelectorAll("#countdown");

    let endDate = [];
    for (let i = 0; i < countdownTargets.length; i++) {
  
       endDate[i] = new Date(countdownTargets[i].innerHTML)     
    }
  ;
  
  let timeLeft, days, hours, minutes, seconds;
    setInterval(function () {
      let now = new Date();
  
  
      for (let i = 0; i < countdownTargets.length; i++) {
  
           timeLeft = endDate[i] - now.getTime();
  endDate[i] -1000
           days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
           hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
           seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
           countdownTargets[i].innerHTML = "Time left: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          if (timeLeft < 0) {
              countdownTargets[i].innerHTML = "Auction ended";
          }     
      }
     
  }, 1000);

}



export function quickBid() {
    let quickButtons = document.querySelectorAll(".quickBid")
    let quickButtonsModal = document.querySelector("#bid")
for (let i = 0; i < quickButtons.length; i++) {
  quickButtons[i].addEventListener("click", async function(event) {
    event.preventDefault();
    let bid = quickButtons[i].value;
    let id = quickButtons[i].id;
    document.querySelector(".quickBuy").innerHTML = "Are you sure u want to bid: <b>"+ bid + "</b> credit(s) on this item?";
    quickButtonsModal.addEventListener("click", async function(event) {
      console.log(bid)
      console.log(id)
      bidOnItemHandler(bid, id)
    })
  })
}
    
}



export async function bidOnItemHandler(amount, id) {
  console.log(amount);
  console.log(id);
  amount = parseInt(amount)
let check = await calls.bidListing(amount, id)
console.log(check)
if (check) {
  console.log("stopping")
  return;
} 
console.log("hei")
await calls.singleProfile(localStorage.getItem("username"))
utils.domManip();
document.querySelector(".bidSuccess").innerHTML = `Bid of ${amount} credit(s) placed!`;

  
}