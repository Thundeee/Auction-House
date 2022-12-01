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


//calls.register("test5199" , "test5199@noroff.no", " test5199")


async function allTest() {
   await calls.login("test5199@noroff.no", "test5199")
  // calls.allListings()
  // calls.singleListing("50a24ac5-f2a5-42b8-b959-0f9ffee35097")
 //calls.createListing("testAAA",  "test58212",  "",  "2022-11-30T19:00:00.000Z")
//  calls.deleteListing("5f8f068e-fe54-46a3-8d78-c1d96ecafdfc")
//calls.updateListing("9dd5c8e3-fd52-4114-ad25-fb99d90f4215", "TESTAAAA", "111", "")
//calls.bidListing()
}

allTest()