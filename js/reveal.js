const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        // Quando o elemento entra na tela
        if (elementTop < windowHeight - 120) {
            element.classList.add("active");
        }
    });
}

// Executa ao scroll
window.addEventListener("scroll", revealOnScroll);

// Executa ao carregar a página (para elementos já visíveis)
revealOnScroll();