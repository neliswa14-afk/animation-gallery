// ===== Hamburger Menu Toggle =====
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

// ===== User Login Check =====
const user = JSON.parse(localStorage.getItem("loggedUser"));
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeText = document.getElementById("welcomeText");

// Update UI based on login
if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (welcomeText) welcomeText.innerText = `Welcome, ${user.name}!`;
} else {
    alert("You must log in to access the gallery.");
    window.location.href = "login.html"; // redirect if not logged in
}

// Logout function
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedUser");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
}

// ===== Gallery Filter Logic =====
function filterGallery(category) {
    const cards = document.querySelectorAll(".art-card");
    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

// ===== Modal for Artwork =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function openModal(imgElement) {
    if (!modal || !modalImg) return;

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
}

// Close modal when clicking outside the image
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// ===== Smooth Page Fade-In =====
document.body.classList.add("fade-in");
window.addEventListener("load", () => {
    document.body.classList.add("show");
});

// ===== Explore More / Buttons Redirect (Optional) =====
// If you add buttons that redirect elsewhere
document.querySelectorAll("button[data-href]").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const href = btn.dataset.href;
        if (href) window.location.href = href;
    });
});
