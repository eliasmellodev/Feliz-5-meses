// script.js
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

function showNextImage() {
    const carousel = document.querySelector(".carousel-images");
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000);
