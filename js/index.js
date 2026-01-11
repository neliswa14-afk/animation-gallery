// ===== Smooth page transitions =====
document.querySelectorAll("a, button").forEach(link => {
    link.addEventListener("click", e => {
        if (link.dataset.noFade) return;
        let href = link.getAttribute("href") || link.dataset.href;
        if (!href) return;

        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// ===== Hamburger menu toggle =====
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navBar = document.getElementById("navBar");

    if (hamburger && navBar) {
        hamburger.addEventListener("click", () => {
            navBar.classList.toggle("active");
        });

        navBar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navBar.classList.remove("active");
            });
        });
    }
});

// ===== User login check =====
const userData = JSON.parse(localStorage.getItem("loggedUser"));
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeText = document.getElementById("welcomeText");

if (userData) {
    if (welcomeText) welcomeText.innerText = `Welcome, ${userData.name}!`;
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
}

// ===== Logout button =====
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedUser");
        alert("You have been logged out.");
        window.location.href = "index.html";
    });
}

// ===== Redirect restricted pages if not logged in =====
if (window.location.pathname.includes("gallery.html") && !userData) {
    alert("You must log in to access the gallery.");
    window.location.href = "login.html";
}

// ===== Remember last visited page =====
window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastPage", window.location.pathname);
});

// ===== Explore More button logic =====
function goToGallery() {
    if (userData) {
        window.location.href = "gallery.html";
    } else {
        alert("You must log in to access the gallery.");
        window.location.href = "welcome.html";
    }
}

// ===== Smooth fade-in on load =====
document.body.classList.add("fade-in");
window.addEventListener("load", () => {
    document.body.classList.add("show");
});
