const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

// Abrir / fechar menu mobile
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Alternar ícone
    if (navbar.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Fechar menu ao clicar num link (UX melhor)
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});