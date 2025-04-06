export default function loadEventListeners() {
  const homeButton = document.querySelector(".home-btn");
  const menuButton = document.querySelector(".menu-btn");
  const aboutButton = document.querySelector(".about-btn");

  homeButton.addEventListener("click", () => {
    loadHome();
  });

  menuButton.addEventListener("click", () => {
    loadMenu();
  });

  aboutButton.addEventListener("click", () => {
    loadAbout();
  });
}

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
