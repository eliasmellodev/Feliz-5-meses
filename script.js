// script.js

// Carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

function showNextImage() {
    const carousel = document.querySelector(".carousel-images");
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 320; // 300px da largura + 20px de margem
    carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextImage, 3000);

// Animação dos balões
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    const size = Math.random() * 30 + 20;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.6}px`;
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.querySelector('.balloons-container').appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000); // Remover após 10 segundos
}

setInterval(createBalloon, 500);
