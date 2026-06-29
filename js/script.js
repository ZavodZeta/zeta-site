// =========================
// ZETA Website JavaScript
// =========================

// Плавное появление элементов

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card, .advantages div, .contact-box div")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Небольшой эффект движения логотипа

const heroCard = document.querySelector(".hero-card");

document.addEventListener("mousemove", e => {

    if (!heroCard) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// Возврат положения

document.addEventListener("mouseleave", () => {

    if (!heroCard) return;

    heroCard.style.transform = "rotateY(0deg) rotateX(0deg)";

});

// Год в футере

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()} Завод ZETA • Производство и ремонт мебели`;

}