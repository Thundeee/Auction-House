// remove all the data from the local storage and reloads the page
export async function logOut() {
  localStorage.removeItem("username");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("credits");
  localStorage.removeItem("avatar");

  window.location.reload(); 
}
