const regForm = document.querySelector(".register");
const logForm = document.querySelector(".login");

function showLoginForm() {
    regForm.classList.add("display-none");
    logForm.classList.remove("display-none");
}

function showRegisterForm() {
    logForm.classList.add("display-none");
    regForm.classList.remove("display-none");
}
