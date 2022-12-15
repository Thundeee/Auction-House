import { POST } from "../requests.js";
/**
 * @description registers a new user
 * @param {String} name 
 * @param {String} email 
 * @param {String} password 
 * @param {URL} avatar 
 */
export async function register(name, email, password, avatar) {
  try {
    const { json, response } = await POST({
      url: "/auth/register",
      body: { name, email, password, avatar },
    });
    console.log(json);
    console.log(response.ok);
    if (!response.ok) {
      document.querySelector(".errorResponseRegister").innerHTML = json.errors[0].message;
      throw new Error(json.errors[0].message);
    }

    document.querySelector(".positiveResponseRegister").innerHTML = "Profile successfully created, you will be redirected to login page in 3 seconds";

    setTimeout(function(){
    document.querySelector("#goToLogin").click();
    }, 3000);

    

  } catch (error) {
    console.log(error);
  }
}
