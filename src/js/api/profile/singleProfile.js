import { GET } from "../requests.js";


export async function singleProfile(name) {
 
  try {
    const { json, response } = await GET({
      url: `/profiles/${name}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(json);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error();
    }
    if (name == localStorage.getItem("username")) {
        localStorage.setItem("credits", json.credits);
        
    }

  } catch (error) {
    console.log(error);
  }

}
