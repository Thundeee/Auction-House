import { POST } from "../requests.js";

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
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}
