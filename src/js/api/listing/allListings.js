import { GET } from "../requests.js";

export async function allListings() {
  try {
    const { json, response } = await GET({
      url: "/listings?_seller=true&_bids=true&sort=endsAt&sortOrder=asc&_active=true",
      headers: {
      },
    });

    if (!response.ok) {
      throw new Error();
    }


    return json;

  } catch (error) {
    console.log(error);
  }
}
