// script.js

// Configuración de ScrollReveal para las animaciones
ScrollReveal().reveal('.animate-fade', {
    distance: '20px',
    duration: 800,
    easing: 'ease-out',
    interval: 100
});

// Animación de zoom para elementos con clase animate-zoom
ScrollReveal().reveal('.animate-zoom', {
    scale: 0.85,
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: true
});

// Animación de deslizamiento desde la izquierda para elementos con clase animate-slide
ScrollReveal().reveal('.animate-slide', {
    distance: '20px',
    origin: 'left',
    duration: 800,
    easing: 'ease-out',
    interval: 100
});

// Configuración de ScrollReveal para las categorías de productos
ScrollReveal().reveal('.product-category', {
    distance: '20px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-out',
    interval: 100
});

/// Configuración de ScrollReveal para las animaciones
ScrollReveal().reveal('.servicio-item', { 
    distance: '20px', 
    origin: 'bottom',
    duration: 800, 
    easing: 'ease-out',
    interval: 100,
    beforeReveal: function (el) {
        el.classList.add('animate-slide-visible'); // Agregar clase de animación al revelar
    }
});
ScrollReveal().reveal('#historia-mision-vision .history', { 
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('#historia-mision-vision .vision', { 
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('#historia-mision-vision .mision', { 
    delay: 600,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 800
});

// Animación para el mapa, desde arriba y desde la izquierda
ScrollReveal().reveal('#map-container', {
    distance: '50px',
    origin: 'top', // Desde arriba
    duration: 1000,
    easing: 'ease-out',
    interval: 200,
    reset: true
});

// Animación adicional para el mapa desde la izquierda
ScrollReveal().reveal('#map-container', {
    distance: '50px',
    origin: 'left', // Desde la izquierda
    duration: 1000,
    easing: 'ease-out',
    interval: 200,
    reset: true
});

document.addEventListener("DOMContentLoaded", function () {
    const ubicacionLocal = [-25.29879270286677, -57.621763142510666]; // Reemplaza con tu ubicación -25.29857945319017, -57.6217822288354

    // Crear el mapa con mejor zoom y controles
    const map = L.map("map", {
        center: ubicacionLocal,
        zoom: 16, // Aumenta el zoom para ver mejor
        zoomControl: true, // Activa controles de zoom
        scrollWheelZoom: false, // Evita zoom con scroll para mejor experiencia
    });

    // Agregar la capa de OpenStreetMap con mejor visualización
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18, // Aumenta el zoom máximo permitido
    }).addTo(map);

    // Agregar un marcador con un pop-up mejorado
    L.marker(ubicacionLocal).addTo(map)
        .bindPopup("<b>RC</b><br>📍 Estamos aquí")
        .openPopup();
});


