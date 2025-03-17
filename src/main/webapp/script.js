function login() {
    const username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html";
    } else {
        alert("Enter a valid username");
    }
}

window.onload = function() {
    const user = localStorage.getItem("username");
    if (user && document.getElementById("user")) {
        document.getElementById("user").innerText = user;
    }

    if (document.getElementById("portfolioChart")) {
        const ctx = document.getElementById("portfolioChart").getContext("2d");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Equity", "Debt", "Gold"],
                datasets: [{
                    data: [50, 30, 20],
                    backgroundColor: ["#007bff", "#28a745", "#ffc107"]
                }]
            }
        });
    }
};
