let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("button");

let sizePassword = document.querySelector("#val");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let newpass = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newpass = pass;
}

function copyPassword() {
    alert("パスワードが正常にコピーされました！");
    navigator.clipboard.writeText(newpass);
}