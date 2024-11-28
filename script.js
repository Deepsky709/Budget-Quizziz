let usern = document.getElementById("uname");

function login(){

}

function daftar(){
    
    window.location.href = 'daftar.html';
}

function Return(){
    window.location.href = 'index.html';
}

function daftarAcc(){
    let username = document.getElementById("user");
    let fullname = document.getElementById("fname");
    let password = document.getElementById("pass");
    localStorage.setItem("user", username.value);
    localStorage.setItem("fname", fullname.value);
    localStorage.setItem("pass", password.value);
    usern.textContent = localStorage.getItem("user");
    window.location.href = 'account.html';
}