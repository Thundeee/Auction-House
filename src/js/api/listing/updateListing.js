import { PUT } from "../requests.js";

export async function updateListing(id, title, description, media) {
 
  try {
    const { json, response } = await PUT({
      url: `/listings/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: { title, description, media},

    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error();
    }

  } catch (error) {
    console.log(error);
  }

}




// export async function updateListing(id, title, description, media) {
//   try {
//     const response = await fetch(`${apiUrl}/listings/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//       body: JSON.stringify({ title, description, media }),
//     });
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//     console.log(response.ok);
//     if (!response.ok) {
//       throw new Error();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
