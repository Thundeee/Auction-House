import { DELETE } from "../requests.js";

/**
 * @description deletes a auction, only the seller can delete the auction
 * @param {String} id 
 */
export async function deleteListing(id) {
  try {
    const response = await DELETE({
      url: `/listings/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.ok);

    if (!response.ok) {
      if (response.status === 429) {
        console.log("Too many requests")
        throw new Error("Too many requests");
      }
      throw new Error(json.errors[0].message);
    }
  } catch (error) {
    console.log(error);
  }
}
