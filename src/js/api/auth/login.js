import apiUrl from "../constants.js"

export async function login(email, password){


    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
        console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(response.ok);
        if (response.ok !== true) {
          throw new Error();
        }
    
        if (json["accessToken"] !== undefined) {
          localStorage.setItem("accessToken", json.accessToken);
          localStorage.setItem("username", json.username);
          localStorage.setItem("credits", json.credits);

          console.log("user hass logged in");
        }
          } catch (error) {
        console.log(error);
      }

}