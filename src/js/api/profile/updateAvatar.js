import { PUT } from "../requests.js";
/**
 * @description updates avatar for user
 * @param {url} avatar 
 */
export async function updateAvatar(avatar) {
  try {
    const { json, response } = await PUT({
      url: `/profiles/${localStorage.getItem("username")}/media`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: { avatar },
    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error(json.errors[0].message);
    }
    console.log("test");
  } catch (error) {
    console.log(error);
  }
}
