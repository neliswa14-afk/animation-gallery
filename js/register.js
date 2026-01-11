// ===== REGISTER JS ======
function register(event) {
    event.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;

    // Validate fields
    if (!name || !email || !password || !confirm) {
        alert("Please fill in all fields");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.find(u => u.email === email)) {
        alert("Email already registered");
        return;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html"; // redirect to login page
}
