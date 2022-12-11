import * as calls from '../../api/apiCalls.js'


if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
    const json = await calls.allListings()
    console.log(json)

let container = document.querySelector("#container")

postMaker(json)
    
}

  


  function postMaker(postData) {
    container.innerHTML = "";
  
    for (let i = 0; i < postData.length; i++) {


// Image handler  
      if (!postData[i].media[0]) {
        postData[i].media[0] = "./assets/img/logo.png";
      }



// Bid handler
        let bid = 0;
        if (postData[i].bids.length > 0) {
            bid = "Current bid: "+ postData[i].bids[postData[i].bids.length - 1].amount;
        } else {
            bid = "No bids yet...";
        }


//description handler
        if (!postData[i].description) {
            postData[i].description = "No description provided.";
        } else if (postData[i].description.length > 70) {
            postData[i].description = postData[i].description.substring(0, 70) + "...";
        }
        

  // date handler
      let endDate = new Date(postData[i].endsAt);

// countdown until endDate
      
      container.innerHTML += `
                  <div class="card bg-secondary m-4 col-3" style="min-width: 160px !important; max-width: 500px;">
                      <div class="card-title m-1 text-break text-center"><h3>${
                        postData[i].title
                      }</h3>
                      </div>
                      <div class="card-subtitle text-muted m-1">By: ${
                        postData[i].seller.name
                      }</div>
                      <div class="d-flex flex-column flex-lg-row m-1">
                      <img src= "${
                        postData[i].media
                      }" class="imgAll border border-dark m-auto m-lg-0 col-12"></img>
                      <p class="card-text m-2 text-break">${postData[i].description}</p>
                      </div>
                      <div class="card-footer">
                      <p class="card-text" id="countdown">${endDate}</p>
                      <p class="card-text">${bid}</p>
                      <div>
                      <button type="button" class="btn btn-success">Bid +1</button>
                      <a href="./auction.html?${postData[i].id}"><button type="button" class="btn btn-primary">More Info</button></a>
                      </div>
                  </div>
                  </div>
                  </div>
                  `;  }


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