import * as calls from "../../api/apiCalls.js";


const loginForm = document.querySelector(".loginForm");
const registerForm = document.querySelector(".registerForm");


let loginHandler = loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.elements.loginEmail.value;
  const password = loginForm.elements.loginPassword.value;
  await calls.login(email, password);




 // if (localStorage.getItem("accessToken")) {
  //  window.location.reload(); 
//  }
});

let registerHandler = registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = registerForm.elements.registerUsername.value;
    const email = registerForm.elements.registerEmail.value;
    const password = registerForm.elements.registerPassword.value;
    const avatar = registerForm.elements.registerAvatar.value;
    await calls.register(name, email, password, avatar);
});

export { loginHandler, registerHandler };