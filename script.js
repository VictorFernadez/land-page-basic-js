document.addEventListener("DOMContentLoaded", function () {
    // Imágenes del carrusel
    const images = [
        'images/platillo1.jpg',
        'images/platillo2.jpg',
        'images/platillo3.jpg'
    ];

    let currentIndex = 0; // Índice de la imagen actual
    const carouselImg = document.querySelector('.carousel img'); // Elemento de imagen del carrusel

    // Función para actualizar la imagen
    function updateImage() {
        carouselImg.src = images[currentIndex];
    }

    // Función para avanzar al siguiente platillo
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    // Función para retroceder al platillo anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    // Eventos de los botones
    document.getElementById('nextBtn').addEventListener('click', nextImage);
    document.getElementById('prevBtn').addEventListener('click', prevImage);

    // Inicializa la primera imagen
    updateImage();

    // Anuncio con conteo regresivo
    const offerContainer = document.createElement('div');
    offerContainer.classList.add('offer-container');
    offerContainer.innerHTML = `
        <div class="offer-message">
            <span>Platillos criollos a 30% de descuento solo por</span>
            <span id="countdown"></span>
        </div>
    `;
    document.body.appendChild(offerContainer);

    // Función para iniciar el conteo regresivo
    function startCountdown() {
        const countdownElement = document.getElementById('countdown');
        let timeLeft = 5; // 1 hora en segundos

        const timer = setInterval(function () {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            countdownElement.textContent = `${minutes}m ${seconds}s`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timer);
                alert("Oferta terminada");
                document.getElementById('offerBanner').style.display = "none";
            }
        }, 1000);
    }

    // Establece una duración de 24 horas en segundos (24 * 60 * 60)
    startCountdown();

    // Funcionalidad para cambiar el color del título
    const title = document.getElementById('title'); // Seleccionamos el título

    // Función para cambiar el color a amarillo
    function changeToYellow() {
        title.style.color = 'yellow';
    }

    // Función para restaurar el color original
    function restoreColor() {
        title.style.color = ''; // Restaura el color original
    }

    // Añadimos los eventos para cambiar el color al pasar y quitar el mouse
    title.addEventListener('mouseover', changeToYellow);
    title.addEventListener('mouseout', restoreColor);

    // Menú de Platillos
    const menuItems = [
        { name: "Sopa de Mariscos", image: "images/platillo1.jpg" },
        { name: "Arroz Chaufa", image: "images/platillo2.jpg" },
        { name: "Lomo Saltado", image: "images/platillo3.jpg" },
        { name: "Ceviche", image: "images/platillo1.jpg" }
    ];

    // Seleccionamos el contenedor del menú
    const menuContainer = document.getElementById('menuItems');

    // Llenamos dinámicamente el menú
    menuItems.forEach(function (item) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
});
