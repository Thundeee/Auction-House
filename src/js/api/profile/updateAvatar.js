import { PUT } from "../requests.js";

// GIVES GOOD RESPONSE BACK BUT AVATAR NOT UPDATED NOT SURE WHY MIGHT BE API ISSUES WHEN TESTING SINCE CANT LOGIN TO NEWLY REGISTERED ACCOUNTS EITHER
export async function updateAvatar(avatar) {
  console.log(avatar);
  try {
    const { json, response } = await PUT({
      url: `/profiles/${localStorage.getItem("username")}/media`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: { avatar },
    });
    console.log(PUT)
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error();
    }
    console.log("test");
  } catch (error) {
    console.log(error);
  }
}
