localStorage.getItem("accessToken");
localStorage.getItem("username");
localStorage.getItem("credits");
localStorage.getItem("avatar");



document.getElementById("wallet").innerHTML = "Wallet: " + localStorage.getItem("credits");