import { POST } from "../requests.js";

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
      throw new Error();
    }

    document.querySelector(".positiveResponseRegister").innerHTML = "Profile successfully created, you will be redirected to login page in 3 seconds";

    setTimeout(function(){
    document.querySelector("#goToLogin").click();
    }, 3000);

    

  } catch (error) {
    console.log(error);
  }
}
