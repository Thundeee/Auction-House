import * as calls from "../../api/apiCalls.js";


const loginForm = document.querySelector(".loginForm");
const registerForm = document.querySelector(".registerForm");


let loginHandler = loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  await calls.login(email, password);




  if (localStorage.getItem("accessToken")) {
    window.location.reload(); 
  }
});

let registerHandler = registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = registerForm.elements.username.value;
    const email = registerForm.elements.email.value;
    const password = registerForm.elements.password.value;
    const avatar = registerForm.elements.avatar.value;
    await calls.register(name, email, password, avatar);
});

export { loginHandler, registerHandler };