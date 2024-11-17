function showSignIn() {
    document.getElementById("sign-in-form").classList.remove("hidden");
    document.getElementById("sign-up-form").classList.add("hidden");
    document.querySelector(".tab-btn.active").classList.remove("active");
    document.querySelectorAll(".tab-btn")[0].classList.add("active");
}

function showSignUp() {
    document.getElementById("sign-in-form").classList.add("hidden");
    document.getElementById("sign-up-form").classList.remove("hidden");
    document.querySelector(".tab-btn.active").classList.remove("active");
    document.querySelectorAll(".tab-btn")[1].classList.add("active");
}
