"use strict";

const openMenuBtn = document.querySelector(".menu__open");
const closeMenuBtn = document.querySelector(".menu__close");
const navBox = document.querySelector(".nav__box");

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

openMenuBtn.addEventListener("click", function (e) {
  console.log(e.target);
  navBox.classList.add("nav__open");
  // e.target.classList.add("close");
  openMenuBtn.classList.add("close");
  openMenuBtn.classList.remove("open");
  closeMenuBtn.classList.add("open");
  closeMenuBtn.classList.remove("close");
});

closeMenuBtn.addEventListener("click", function (e) {
  console.log(e.target);

  navBox.classList.remove("nav__open");
  e.target.classList.add("close");
  e.target.classList.remove("open");
  openMenuBtn.classList.add("open");
  openMenuBtn.classList.remove("close");
});

/*
const openMenuBtn = document.querySelector(".menu__open");
const closeMenuBtn = document.querySelector(".menu__close");
const menuNav = document.querySelector(".nav__links");

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
  menuNav.classList.add("nav-open");
  // menuNav.style.transform = "translateX(0%)";
  closeMenuBtn.classList.add("menu--active");

  openMenuBtn.classList.add("closed");
});

closeMenuBtn.addEventListener("click", function () {
  menuNav.classList.remove("visible");
  menuNav.classList.remove("nav-open");

  // menuNav.style.transform = "translateX(100%)";
  closeMenuBtn.classList.remove("menu--active");

  openMenuBtn.classList.remove("closed");
});
*/
