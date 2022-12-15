import { GET } from "../requests.js";
/**
 * @description gets a profile from api
 * @param {String} name 
 */
export async function singleProfile(name) {
  try {
    const { json, response } = await GET({
      url: `/profiles/${name}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      if (response.status === 429) {
        console.log("Too many requests")
        throw new Error("Too many requests");
      }
      throw new Error(json.errors[0].message);
    }
    if (name == localStorage.getItem("username")) {
      localStorage.setItem("credits", json.credits);
    }
  } catch (error) {
    console.log(error);
  }
}
