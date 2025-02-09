document.addEventListener("DOMContentLoaded", function () {
    // Select the button and add an event listener
    const generateBtn = document.querySelector("button");
    generateBtn.addEventListener("click", generatePassword);
});

function generatePassword() {
    var randomChars = "qwqwertyuiassdfghjklzxcvbnmp[]\\';lkjhgfddsazxcvbnm,./!@#$%^&*()_+=";
    var password = "";
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * randomChars.length);
        password += randomChars[randomNumber];
    }
    document.getElementById("password").innerText = password;
}
