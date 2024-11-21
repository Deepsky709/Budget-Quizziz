let username = document.getElementById("user");
let fullname = document.getElementById("fname");
let password = document.getElementById("pass");

function login(){

}

function daftar(){
    localStorage.setItem("username", username.value);
    localStorage.setItem("full name", fullname.value);
    localStorage.setItem("password", password.value);
}