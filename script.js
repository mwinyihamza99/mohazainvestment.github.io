// script.js

// JavaScript for Image Slider
let currentSlide = 0;
const slides = [
    'url("tools/girl.jpg")',
    'url("tools/image0..jpg")',
    'url("tools/image1.jpg")'
];
const totalSlides = slides.length;

function showSlide(n) {
    document.querySelector('#hero').style.backgroundImage = slides[n];
    currentSlide = (n + 1) % totalSlides;
}

function nextSlide() {
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change slide every 4 seconds
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".container");
    containers.forEach(function(container) {
        container.setAttribute("tabindex", "0"); // Ensure containers are keyboard accessible
    });
});
