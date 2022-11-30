
import apiUrl from "../constants.js"

export async function deleteListing(id){


    try {
        const response = await fetch(`${apiUrl}/listings/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
            }
    )
        console.log(response);
        
        if (response.ok) {
            console.log(`post ${id} deleted!`)
            return;
        }
        throw new Error();
          } catch (error) {
        console.log(error);
      }

}