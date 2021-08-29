/*==================== MENU SHOW Y HIDDEN ====================*/
let navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        precEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

let header = document.querySelector("#header");
window.onscroll = () => {
    window.scrollY > 50
        ? header.classList.add("header__sticky")
        : header.classList.remove("header__sticky");
};

let typed = new Typed(".type", {
    strings: ["Designer ", "Developer ", "SEO "],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
});

//Send email
const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            Accept: "application/json",
        },
    });
    if (response.ok) {
        this.reset();
        swal(
            "Message sent",
            "Thank you for contacting me, I will contact you as soon as possible.",
            "success"
        );
    }
}

//Scroll Reveal
ScrollReveal({ reset: true }).reveal(".home__container", { delay: 300 });
ScrollReveal({ reset: true }).reveal(".section__title", { delay: 300 });
ScrollReveal({ reset: true }).reveal(".section__subtitle", { delay: 500 });
ScrollReveal({ reset: true }).reveal(".about__container", { delay: 800 });
ScrollReveal({ reset: true }).reveal(".services__container", { delay: 800 });
ScrollReveal({ reset: true }).reveal(".portfolio__container", { delay: 800 });
ScrollReveal({ reset: true }).reveal(".project", { delay: 800 });
ScrollReveal({ reset: true }).reveal(".contact__container", { delay: 800 });
