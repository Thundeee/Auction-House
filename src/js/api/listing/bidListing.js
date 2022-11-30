
import apiUrl from "../constants.js"

export async function bidListing(id, amount){


    try {
        const response = await fetch(`${apiUrl}/listings/${id}`, {
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