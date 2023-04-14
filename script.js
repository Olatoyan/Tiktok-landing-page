"use strict";

const openMenuBtn = document.querySelector(".menu__open");
const closeMenuBtn = document.querySelector(".menu__close");
const menuNav = document.querySelector(".menu__links");

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// MENU NAVIGATION
openMenuBtn.addEventListener("click", function () {
  menuNav.classList.add("visible");
  menuNav.style.transform = "translateY(0%)";
  closeMenuBtn.classList.add("menu--active");

  openMenuBtn.classList.remove("menu--active");
});

closeMenuBtn.addEventListener("click", function () {
  menuNav.classList.remove("visible");
  menuNav.style.transform = "translateY(100%)";
  closeMenuBtn.classList.remove("menu--active");

  openMenuBtn.classList.add("menu--active");
});
