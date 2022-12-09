import * as calls from '../../api/apiCalls.js'


if (window.location.pathname == "/index.html") {
    const json = await calls.allListings()
    console.log(json)

let container = document.querySelector("#container")

postMaker(json)
    
}

  


  function postMaker(postData) {
    container.innerHTML = "";
  
    for (let i = 0; i < postData.length; i++) {
      let buttons = `
      <button type="button" class="btn btn-success">Bid +100</button>
      <a href="./auction.html?${postData[i].id}"><button type="button" class="btn btn-primary">More Info</button></a>`;


// Image handler  
      if (!postData[i].media[0]) {
        postData[i].media[0] = "./assets/img/logo.png";
      }



// Bid handler
        let bid = 0;
        if (postData[i].bids.length > 0) {
            bid = "Current bid: "+ postData[i].bids[postData[i].bids.length - 1].amount;
        } else {
            bid = "No bids yet";
        }


//description handler
        if (postData[i].description == null) {
            postData[i].description = "No description provided.";
        } else if (postData[i].description.length > 100) {
            postData[i].description = postData[i].description.substring(0, 100) + "...";
        }
        

  // date handler
      let endDate = new Date(postData[i].endsAt);

// countdown until endDate
        

        

  
      container.innerHTML += `
                  <div class="card-body bg-secondary border col-3 m-4 w-25% ">
                      <div class="card-title"><h3 class= "textTitle">${
                        postData[i].title
                      }</h3>
                      <div class="card-subtitle text-muted">By: ${
                        postData[i].seller.name
                      }</div>
                      <p class="card-text">${postData[i].description}</p>
                      <img src= "${
                        postData[i].media
                      }" class=" imgAll border border-dark"></img><br>
                      <p class="card-text" id="countdown">${endDate}</p>
                      <p>${bid}</p>
                      ${buttons}
                  </div>
                  </div>`;
    
  }


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