// ===============================
// 0) MENU MOBILE (HAMBÚRGUER)
// ===============================
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

function abrirMenu() {
    nav.classList.add("open");
    overlay.classList.add("show");
    toggleBtn.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
    nav.classList.remove("open");
    overlay.classList.remove("show");
    toggleBtn.setAttribute("aria-expanded", "false");
}

if (toggleBtn && nav && overlay) {
    toggleBtn.addEventListener("click", () => {
        const aberto = nav.classList.contains("open");
        if (aberto) fecharMenu();
        else abrirMenu();
    });

    overlay.addEventListener("click", fecharMenu);

    // Fecha ao clicar em qualquer link do menu
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenu);
    });
}

// Fecha com ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharMenu();
});

// ===============================
// 1) EFEITO DIGITANDO
// ===============================
const textoCargo = "Desenvolvedor Back-End & QA";
const elementoCargo = document.querySelector(".cargo");

let index = 0;

function digitar() {
    if (!elementoCargo) return;

    if (index < textoCargo.length) {
        elementoCargo.innerHTML += textoCargo.charAt(index);
        index++;
        setTimeout(digitar, 85);
    }
}

window.addEventListener("load", () => {
    if (elementoCargo) {
        elementoCargo.innerHTML = "";
        index = 0;
        digitar();
    }
    reveal();
});

// ===============================
// 2) HEADER MUDA AO ROLAR
// ===============================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (!header) return;

    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

// ===============================
// 3) REVEAL AO SCROLL
// ===============================
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 140;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
