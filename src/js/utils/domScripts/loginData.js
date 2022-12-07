localStorage.getItem("accessToken");
localStorage.getItem("username");
localStorage.getItem("credits");
localStorage.getItem("avatar");



document.getElementById("wallet").innerHTML = "Wallet: " + localStorage.getItem("credits");

let btn = document.querySelector("#loginButtonDiv");

if (localStorage.getItem("avatar") && localStorage.getItem("avatar") != "null") {
    console.log("avatar exists");
    btn.innerHTML = `<img class="img-fluid" src="${localStorage.getItem("avatar")} height="100" width="100" " data-bs-toggle="modal" href="#logoutModal" alt="profile picture" style="cursor: pointer;"/>`;
} else {
    console.log("no avatar");

}

// USE DEFAULT PIC IF avatar === NULL


// <!-- <img class="img-fluid col-2" src="./assets/img/noImg.jpg" data-bs-toggle="modal" href="#logoutModal" alt="profile picture" style="cursor: pointer;"/>-->
