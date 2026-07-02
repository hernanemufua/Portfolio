const text = "Front-End Developer";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);

    }

}

typeWriter();
const themeButton = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeButton.textContent="☀️";

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeButton.textContent="☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeButton.textContent="🌙";

        localStorage.setItem("theme","light");

    }

});
const topButton = document.getElementById("topButton");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){

        menuToggle.textContent = "✕";

    }else{

        menuToggle.textContent = "☰";

    }

});