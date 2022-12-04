import * as calls from "./api/apiCalls.js";

/*
calls.register(name, email, password, avatar)
calls.login(email, password)
calls.logOut()
calls.allListings()
calls.singleListing(id)
calls.createListing(title, desc, [media], date)
calls.deleteListing(id)
*/

//TEST AH f4a647cc-95eb-49f9-bda7-24a6d6949dbc
//calls.register("test5198" , "test5198@noroff.no", " test5198", "https://i.imgur.com/111PbS5.jpeg")


async function allTest() {
   await calls.login("test5199@noroff.no", "test5199")
  //calls.allListings()
 // calls.singleListing("3ffc6335-90b0-48e8-9cdf-05ce1fbfed10")
// calls.createListing("AteAgfdsgfdsA",  "tAest582asddsdassa12",  ["https://i.imgur.com/111PbS5.jpeg"],  "2022-12-30T19:00:00.000Z");
 //calls.deleteListing("73825c21-9f5c-4bdf-a6e7-6a4b49c7efd4")
//calls.updateListing("3ffc6335-90b0-48e8-9cdf-05ce1fbfed10", "TESTAAAA", "111", "")
//calls.bidListing("f4a647cc-95eb-49f9-bda7-24a6d6949dbc", 1)



//calls.singleProfile("test5199")
//calls.listingsProfile("test5199")
//calls.updateAvatar("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")


}


allTest()