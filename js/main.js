console.log("Portfolio carregado com sucesso 🚀");

// Aqui podes colocar inicializações globais se precisares
// (mantém o ficheiro limpo e centralizado)
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 40){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});