import { POST } from "../requests.js";
/**
 * @description creates a new auctions
 * @param {String} title 
 * @param {String} description 
 * @param {Array} media 
 * @param {Date} endsAt 
 */
export async function createListing(title, description, media, endsAt) {
  try {
    const { json, response } = await POST({
      url: "/listings",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: { title, description, media, endsAt },
    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      document.querySelector(".errorResponseCreate").innerHTML = json.errors[0].message;
      throw new Error(json.errors[0].message);
    }
    document.querySelector(".positiveResponseCreate").innerHTML = "Auction created successfully!";



  } catch (error) {
    console.log(error);
  }
}
