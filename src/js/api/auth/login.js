import { POST } from "../requests.js";

export async function login(email, password) {
  try {
    const { json, response } = await POST({
      url: "/auth/login",
      body: { email, password },
    });
    console.log(json)
    if (!response.ok) {
      document.querySelector(".errorResponseLogin").innerHTML = json.errors[0].message;
      throw new Error();
    }
    if (json["accessToken"]) {
      localStorage.setItem("accessToken", json.accessToken);
      localStorage.setItem("username", json.name);
      localStorage.setItem("credits", json.credits);
      localStorage.setItem("avatar", json.avatar);


      console.log("user has logged in");
    }
  } catch (error) {
    console.log(error);
  }
}
