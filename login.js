// login.js
document.getElementById("signin-btn").addEventListener("click", function() {
    const inputName = document.getElementById("input-name").value;
    const inputPassword = document.getElementById("input-password").value;
    if (inputName === "admin" && inputPassword === "admin123") {
        alert("Login successful!");
        window.location.assign("/home.html");
    } else {
        alert("Invalid username or password. Please try again.");
        return;
    }
});

