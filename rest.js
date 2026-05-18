// script.js

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dark / Light Mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

// Simple Reveal Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "1s";
    }

  });

});

// Initial State
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
});