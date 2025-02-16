const themeToggle = document.getElementById("theme-toggle");
let darkMode = true;

themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.style.background = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "white" : "black";
    themeToggle.textContent = darkMode ? "🌙" : "☀️";
});
