export async function singleListing(id){


    try {
        const response = await fetch(`${apiUrl}/listings/${id}?_seller=true&_bids=true`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
        )
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