import { POST } from "../requests.js";

export async function bidListing(amount, id) {
  try {
    const { json, response } = await POST({
      url: `/listings/${id}/bids`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: { amount },
    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error();
    }
    console.log(` ${amount} bidded on auciton ${id}!`);

    return;
  } catch (error) {
    console.log(error);
  }
}
