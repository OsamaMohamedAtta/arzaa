const menu = document.querySelector("#menu-icon"),
    navbar = document.querySelector(".navbar"),
    navLinks = document.querySelectorAll(".navbar a"),
    sections = document.querySelectorAll("section"),
    languageSelector = document.querySelectorAll(".language span"),

    toggleNavbar = () => {
        menu.classList.toggle("bx-x"), navbar.classList.toggle("open");
    };

menu.addEventListener("click", toggleNavbar),
    (window.onscroll = () => {
        window.scrollY > 0 ? (document.querySelector("header").style.boxShadow = "0 1px 2px -2px #000") : (document.querySelector("header").style.boxShadow = "none"),
            sections.forEach((e) => {
                const t = window.scrollY,
                    a = e.offsetTop - 220,
                    n = e.offsetHeight,
                    o = e.getAttribute("id");
                t >= a &&
                    t < a + n &&
                    navLinks.forEach((e) => {
                        e.classList.remove("active"), document.querySelector(`.navbar a[href^="#${o}"]`).classList.add("active");
                    });
            });
    }),
    navLinks.forEach((e) => {
        e.addEventListener("click", (e) => {
            toggleNavbar(), navLinks.forEach((e) => e.classList.remove("active")), e.target.classList.add("active");
        });
    }),
    document.addEventListener("DOMContentLoaded", () => {
        setLanguage(localStorage.getItem("lang"));
    }),
    languageSelector.forEach((e) => {
        e.addEventListener("click", (e) => {
            setLanguage(e.target.innerText), localStorage.setItem("lang", e.target.innerText);
        });
    });
const setLanguage = (e) => {
    const t = document.querySelectorAll("[data-translation]");
    (e = "عربي" == e ? "ar" : "en"),
        t.forEach((t) => {
            const a = t.getAttribute("data-translation");
            t.textContent = translations[e][a];
        }),
        (document.dir = "ar" == e ? "rtl" : "ltr"),
        (document.querySelector(".logo").style.direction = "ltr"),
        (document.querySelector(".arabic").style.display = "ar" == e ? "none" : "block"),
        (document.querySelector(".english").style.display = "ar" == e ? "block" : "none");
};
