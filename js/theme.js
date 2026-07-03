const themeButton = document.getElementById("theme-toggle");

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// Aplicar tema salvo ao carregar a página
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    setTheme(true);
} else {
    setTheme(false);
}

// Alternar tema no clique
themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    setTheme(!isDark);
});