import { POST } from "../requests.js";

export async function login(email, password) {
  try {
    const { json, response } = await POST({
      url: "/auth/login",
      body: { email, password },
    });
    console.log(json)
    if (!response.ok) {
      throw new Error();
    }
    if (json["accessToken"]) {
      localStorage.setItem("accessToken", json.accessToken);
      localStorage.setItem("username", json.name);
      localStorage.setItem("credits", json.credits);

      console.log("user hass logged in");
    }
  } catch (error) {
    console.log(error);
  }
}
