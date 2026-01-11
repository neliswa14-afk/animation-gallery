// =======================================
// HARDCODED ADMIN ACCOUNT
// =======================================
const adminAccount = {
    username: "admin",
    email: "admin@antice.com",
    password: "admin123"
};

// =======================================
// LOGIN FUNCTION (ADMIN + USER)
// =======================================
function login(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("loginUsername");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const username = usernameInput ? usernameInput.value.trim() : "";
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Email and password are required");
        return;
    }

    // =======================================
    // ADMIN LOGIN CHECK
    // =======================================
    if (
        username === adminAccount.username &&
        email === adminAccount.email &&
        password === adminAccount.password
    ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "admin");

        alert("Welcome Admin!");
        window.location.href = "admin-dashboard.html";
        return;
    }

    // =======================================
    // USER LOGIN CHECK
    // =======================================
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid email or password");
        return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "user");
    localStorage.setItem("loggedUser", JSON.stringify(user));

    alert("Login successful!");
    window.location.href = "index.html"; // or gallery.html
}

// =======================================
// LOGOUT FUNCTION (GLOBAL)
// =======================================
function logout() {
    localStorage.clear();
    alert("Logged out successfully!");
    window.location.href = "index.html";
}
