import apiUrl from "../constants.js"

export async function createListing(title, description, media, endsAt){


    try {
        const response = await fetch(`${apiUrl}/listings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ title, description, media, endsAt}),
    }
    )
        console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(response.ok);
        if (response.ok !== true) {
          throw new Error();
        }
          } catch (error) {
        console.log(error);
      }

}