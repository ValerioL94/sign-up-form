let check = function () {
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");
    let psw_check = document.getElementById("psw_check");
    if (password.value ===
        confirm_password.value) {
        confirm_password.setCustomValidity('');
        psw_check.textContent = "";
    } else {
        confirm_password.setCustomValidity("Passwords do not match");
        confirm_password.style.borderColor = "red";
        psw_check.style.color = "red";
        psw_check.textContent = "*Passwords do not match";
    }
};

let input = document.querySelectorAll(".input");
input.forEach(function (el) {
    el.addEventListener('keyup', input_check);
})

function input_check(event) {
    if (event.target.validity.valid) {
        event.target.style.borderColor = "rgb(0, 191, 255)";
    } else {
        event.target.style.borderColor = "red";
    }
};