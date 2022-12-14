import { DELETE } from "../requests.js";

// BAD REQUEST

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
      throw new Error(json.errors[0].message);
    }
  } catch (error) {
    console.log(error);
  }
}
