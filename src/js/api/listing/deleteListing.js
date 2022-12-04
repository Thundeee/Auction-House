import { DELETE } from "../requests.js";
 
// BAD REQUEST

export async function deleteListing(id,) {
 
  try {
    const  response = await DELETE({
      url: `/listings/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.ok);

     if (response.ok) {
     console.log(`post ${id} deleted!`);
       return;
    }

  } catch (error) {
    console.log(error);
  }

}




// export async function deleteListing(id) {
//   try {
//     const response = await fetch(`${apiUrl}/listings/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     });
//     console.log(response);

//     if (response.ok) {
//       console.log(`post ${id} deleted!`);
//       return;
//     }
//     throw new Error();
//   } catch (error) {
//     console.log(error);
//   }
// }
