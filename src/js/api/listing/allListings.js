import { GET } from "../requests.js";

export async function allListings() {
  try {
    const { json, response } = await GET({
      url: "/listings?_seller=true&_bids=true&sort=endsAt&sortOrder=asc&_active=true",
      headers: {
      },
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.log("Too many requests")
        document.querySelector(".errorFront").innerHTML = ("Too many requests to the server, please try again later")
        throw new Error();
        
      }
      throw new Error(json.errors[0].message);
    }
  

    return json;

  } catch (error) {
    console.log(error);
  }
}
