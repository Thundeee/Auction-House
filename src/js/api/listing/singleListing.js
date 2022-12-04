import { GET } from "../requests.js";

export async function singleListing(id) {
  try {
    const { json, response } = await GET({
      url: `/listings/${id}?_seller=true&_bids=true`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}
