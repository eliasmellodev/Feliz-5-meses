// script.js

// Controle simples do carrossel
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-container img");
const totalImages = images.length;

function showNextImage() {
    const carousel = document.querySelector(".carousel-container");
    currentIndex = (currentIndex + 1) % totalImages;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Alterna as imagens automaticamente a cada 3 segundos
setInterval(showNextImage, 3000);
