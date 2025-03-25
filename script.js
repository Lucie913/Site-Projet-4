// Fonction pour afficher/cacher le menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Fonction pour faire défiler le carrousel avec boucle infinie
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.plant-item');
const itemWidth = items[0].offsetWidth; // Largeur d'une plante

function moveCarousel(step) {
    const totalItems = items.length;
    currentIndex = (currentIndex + step + totalItems) % totalItems; // Assure un retour au début/fin fluide

    const offset = -currentIndex * itemWidth; // Calcule le décalage
    carousel.style.transform = `translateX(${offset}px)`;
    carousel.style.transition = "transform 0.5s ease-in-out"; // Ajoute une animation fluide
}

// Ajustement de la largeur après chargement des images
window.addEventListener("load", () => {
    items.forEach(item => item.style.width = `${itemWidth}px`);
});





