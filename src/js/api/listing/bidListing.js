import {POST} from "../requests.js"



export async function bidListing(id, amount){


    try {
        const response = await POST(`${apiUrl}/listings/${id}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ amount }),

            }
    )
        console.log(response);
        
        if (response.ok) {
            console.log(` ${amount} bidded on auciton ${id}!`)
        // LEGG INN PROFIL UPDATE HER singleListing(localStorage.getItem("username"))
            return;
        }
        throw new Error();
          } catch (error) {
        console.log(error);
      }

}

/*
export async function login(email, password){
     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

    try {
        const {json, response} = await POST({
          url:"/auth/login",
           body:{email, password}})
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


*/