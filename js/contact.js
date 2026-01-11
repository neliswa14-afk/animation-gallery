// ===========================
// LOGOUT FUNCTIONALITY
// ===========================

// Select logout link
const logoutLink = document.getElementById("logoutLink");

// Logout function
logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    // Clear login status (for demo purposes)
    localStorage.setItem("isLoggedIn", "false");
    alert("You have been logged out!");
    // Optionally redirect to home page
    window.location.href = "index.html";
});



// ===========================
// CONTACT FORM VALIDATION
// ===========================

// Select form and inputs
const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Enter a valid email address");
        isValid = false;
    }

    // Phone validation (optional)
    const phonePattern = /^[0-9]{10,15}$/;
    if (phoneInput.value.trim() !== "" && !phonePattern.test(phoneInput.value)) {
        showError(phoneInput, "Phone number must be 10-15 digits");
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
        showError(messageInput, "Message must be at least 10 characters");
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Message sent successfully!");
        form.reset();
    }
});

// Show error message next to the input
function showError(input, message) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.textContent = message;
        input.style.borderColor = "red"; // highlight input border
    } else {
        // fallback: create an error element if missing
        error = document.createElement("small");
        error.classList.add("error");
        error.textContent = message;
        input.insertAdjacentElement("afterend", error);
        input.style.borderColor = "red"; // highlight input border
    }
}

// Clear all error messages
function clearErrors() {
    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });
    // Reset input borders
    [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
        input.style.borderColor = "";
    });
}
