export async function register(name, email, password, avatar){


    try {
        const response = await fetch(`${apiUrl}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, avatar }),
        })
        console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(response.ok);
        if (!response.ok) {
          throw new Error();
        }
          } catch (error) {
        console.log(error);
      }

}