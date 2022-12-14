import * as calls from '../../api/apiCalls.js'
import * as utils from '../utils.js'
if (window.location.href.match(/auction.html/)) {
    console.log("auction.html")

let id = window.location.href.split("?")[1];
console.log(id)

const json = await calls.singleListing(id);

if (json == undefined) {
    throw new Error();
  }


singlePostHandler(json);

    }




    function singlePostHandler(post) {
        console.log(post)
        let container = document.querySelector(".singlePostContainer")



        let bid = utils.bidHandler(post.bids)


        container.innerHTML = `
        <div class="text-white">
        <h1 class="text-white text-center mt-4">${post.title}</h1>
            <div class="card-subtitle text-muted m-1">By: ${
              post.seller.name
            }</div>
            <div class="d-flex flex-column flex-xl-row m-1">
            <div id="carouselSingle" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSingle" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselSingle" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> 
            <p class="card-text m-2 text-break">${post.description}</p>
            </div>
            <div class="card-footer">
            <p class="card-text" id="countdown">${post.endsAt}</p>
            <p class="card-text">${bid[0]}</p>
            <form class="bidForm">
            <div class="form-group">
              <label for="amount">Amount</label>
              <input
                type="number"
                min="1"
                class="form-control w-25"
                id="amount"
                placeholder="Enter amount to bid"
              />
            </div>
            <button type="submit" class="btn btn-success my-3">
              Bid!
            </button>
          </form>
            

            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#bidsCollapse" aria-expanded="false" aria-controls="bidsCollapse">
            Click to view bid history.
          </button>
        <div class="collapse" id="bidsCollapse">
          <ul class="bids bg-black" style="opacity: 0.7;">
          </ul>
        </div> 
        <div class="mb-5">
        </div>
        </div>
        </div>
        `;

        utils.carousel(post.media);


//bid on item listener
document.querySelector(".bidForm").addEventListener("submit", async (event) => {
event.preventDefault();
utils.bidOnItemHandler(event.target.elements.amount.value, post.id);
})

//bid history stuff
        let bids = document.querySelector(".bids")
        for (let i = 0; i < post.bids.length; i++) {
            let li = document.createElement("li")

            li.innerHTML = `
            <li class="list-group-item">${post.bids[i].amount} Credit(s) - ${post.bids[i].bidderName}</li>
            `
            bids.appendChild(li)
        }
        if (bids.getElementsByTagName("li").length == 0) {
            let li = document.createElement("li")
            li.innerHTML = "No bids yet."
            bids.appendChild(li)

            
        }
        utils.countdownHandler();
    }


