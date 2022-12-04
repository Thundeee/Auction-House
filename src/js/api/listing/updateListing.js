import { PUT } from "../requests.js";

export async function updateListing(id, title, description, media) {
  try {
    const { json, response } = await PUT({
      url: `/listings/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: { title, description, media },
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
