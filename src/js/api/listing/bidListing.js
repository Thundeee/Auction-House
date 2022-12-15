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
      document.querySelector(".errorFront").innerHTML = json.errors[0].message;
      
      throw new Error(json.errors[0].message);
    }
    console.log(` ${amount} bidded on auciton ${id}!`);

    return
  } catch (error) {
    console.log(error);
    return error;
  }
}
