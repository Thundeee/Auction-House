import * as utils from '../utils.js'


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


// carousel stuff, removes the arrows if there is only one image or no images also gives default image if no images are present
export function carousel(media) {

    let carousel = document.querySelector(".carousel-inner")

    if (media.length <= 1) {
        document.querySelector(".carousel-control-prev").style.display = "none";
        document.querySelector(".carousel-control-next").style.display = "none";

        if (media.length == 0) {
            let carouselItem = document.createElement("div")
            carouselItem.classList.add("carousel-item", "active","border", "border-dark")
            carouselItem.innerHTML = `
            <img src="./assets/img/logo.png" class="d-block w-100" alt="picture related to auction">
            `
            carousel.appendChild(carouselItem)

            return;
            
            
        }
    }
        
    

    

for (let i = 0; i < media.length; i++) {


    let carouselItem = document.createElement("div")
    carouselItem.classList.add("carousel-item", "border", "border-dark")
    if (i == 0) {
        carouselItem.classList.add("active")
    }
    carouselItem.innerHTML = `
    <img src="${media[i]}" class="d-block w-100" alt="picture related to auction">
    `

    carousel.appendChild(carouselItem)

    }
}


export function quickBid() {
    let quickButtons = document.querySelectorAll(".quickBid") 
for (let i = 0; i < quickButtons.length; i++) {
  quickButtons[i].addEventListener("click", async function(event) {
    event.preventDefault();
    let bid = quickButtons[i].value;
    let id = quickButtons[i].id;
    document.querySelector(".quickBuy").innerHTML = "Are you sure u want to bid: <b>"+ bid + "</b> credit(s) on this item?";
  //  utils.bidOnItemHandler(id, bid)
  })
}
    
}