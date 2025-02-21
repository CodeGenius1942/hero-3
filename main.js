const hamburger = document.querySelector(".nav__icon--open");
const timesCircle = document.querySelector(".nav__icon--close");
const menu = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    menu.style.display = "block";
});

timesCircle.addEventListener("click", () => {
    menu.style.display = "none";
});
