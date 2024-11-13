// JavaScript to control the hero slider
let index = 0;
const slides = document.querySelectorAll(".hero-slider img");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 5000); // Change image every 5 seconds
showSlide();
