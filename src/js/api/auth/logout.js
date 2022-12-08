export async function logOut() {
  localStorage.removeItem("username");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("credits");
  localStorage.removeItem("avatar");

  window.location.reload(); 
}
