console.log("JavaScript file loaded");

function goHome(){
    window.location.href = "index.html";
}

function goAbout(){
    window.location.href = "about.html";
    //document.getElementById("test").innerHTML = ""
}

function goLogin(){
    window.location.href = "logIn.html";
}

function goSignUp(){
    window.location.href= "signUp.html"
}

function displayText() {
    console.log("Checkbox Clicked");
    var passwordField = document.getElementById("myPassword");
    var checkbox = document.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

