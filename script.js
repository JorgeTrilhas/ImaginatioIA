document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para as seções
    document.querySelectorAll(".nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Melhorando o formulário para telas menores
    const form = document.getElementById("formulario");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });

    // Garantindo que a navegação seja responsiva
    window.addEventListener("resize", function () {
        const nav = document.querySelector(".nav");
        if (window.innerWidth < 600) {
            nav.style.flexDirection = "column";
        } else {
            nav.style.flexDirection = "row";
        }
    });
});

window.addEventListener("resize", function () {
    const nav = document.querySelector(".nav");
    if (window.innerWidth < 600) {
        nav.classList.add("mobile-nav");
    } else {
        nav.classList.remove("mobile-nav");
    }
});

document.querySelectorAll(".nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth", block: "start" });
    });
});