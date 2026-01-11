// ===========================
// ADMIN DASHBOARD SCRIPT
// ===========================

// ===========================
// AUTHORIZATION CHECK
// ===========================
if (
    localStorage.getItem("isLoggedIn") !== "true" ||
    localStorage.getItem("role") !== "admin"
) {
    alert("Admin access only!");
    window.location.href = "login.html";
}

// ===========================
// LOGOUT FUNCTIONALITY
// ===========================
const logoutLink = document.getElementById("logoutLink");

if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.clear();
        alert("You have been logged out!");
        window.location.href = "index.html";
    });
}

// ===========================
// ADMIN DASHBOARD CONTENT
// ===========================
const adminContent = document.getElementById("adminContent");
const summaryContainer = document.getElementById("summary");

// ===========================
// LOAD MESSAGES
// ===========================
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    loadSummary(messages);

    if (messages.length === 0) {
        adminContent.innerHTML = "<p>No messages submitted yet.</p>";
        return;
    }

    let html = `
        <h2>Submitted Messages</h2>
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
    `;

    messages.forEach(msg => {
        html += `
            <tr>
                <td>${msg.id}</td>
                <td>${msg.name}</td>
                <td>${msg.email}</td>
                <td>${msg.phone}</td>
                <td>${msg.message}</td>
                <td>${msg.date}</td>
                <td>
                    <button onclick="deleteMessage(${msg.id})">Delete</button>
                </td>
            </tr>
        `;
    });

    html += `</table>`;
    adminContent.innerHTML = html;
}

// ===========================
// DELETE MESSAGE
// ===========================
function deleteMessage(id) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages = messages.filter(msg => msg.id !== id);
    localStorage.setItem("messages", JSON.stringify(messages));
    loadMessages();
}

// Make function globally accessible
window.deleteMessage = deleteMessage;

// ===========================
// SUMMARY CARDS
// ===========================
function loadSummary(messages) {
    const totalMessages = messages.length;
    const uniqueUsers = new Set(messages.map(msg => msg.email)).size;

    summaryContainer.innerHTML = `
        <div class="card">
            <h3>Total Messages</h3>
            <p>${totalMessages}</p>
        </div>
        <div class="card">
            <h3>Total Users</h3>
            <p>${uniqueUsers}</p>
        </div>
    `;
}

// ===========================
// INIT
// ===========================
loadMessages();
