// ===== User login check =====
const user = JSON.parse(localStorage.getItem("loggedUser"));

// If user is already logged in, redirect them directly to gallery
if (user) {
    window.location.href = "gallery.html";
}

// ===== Button Event Listeners =====
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "login.html";
    });
}

if (registerBtn) {
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "register.html";
    });
}

// ===== Smooth Fade-in for page =====
document.body.classList.add("fade-in");
window.addEventListener("load", () => {
    document.body.classList.add("show");
});
