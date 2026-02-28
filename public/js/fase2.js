/**
 * FASE 2: GIRASOLES Y ESTRELLAS FUGACES
 * Código original de 1290 líneas - Organizado
 */

// Esperar a que cargue la página
window.addEventListener('load', () => {
    // Pequeño delay para asegurar que todo está listo
    setTimeout(() => {
        // Remover clase not-loaded para iniciar animaciones
        document.body.classList.remove("not-loaded");
        
        // Configurar generación continua de estrellas fugaces
        setupShootingStars();
    }, 1000);
});

/**
 * Configura la generación aleatoria de estrellas fugaces
 */
function setupShootingStars() {
    // Crear estrella fugaz aleatoria
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Posición aleatoria en la parte superior
        star.style.top = Math.random() * 60 + '%';
        star.style.left = '-10%'; // Comienza desde la izquierda
        star.style.animationDelay = '0s';
        star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
        
        // Añadir al contenedor
        document.querySelector('.shooting-stars').appendChild(star);
        
        // Auto-eliminar después de la animación
        setTimeout(() => {
            if (star.parentNode) {
                star.remove();
            }
        }, 4000);
    }
    
    // Crear estrellas periódicamente
    setInterval(() => {
        // 70% de probabilidad de crear una estrella
        if (Math.random() > 0.3) {
            createShootingStar();
        }
    }, Math.random() * 5000 + 3000); // Cada 3-8 segundos
}

/**
 * Función para crear una flor adicional (si se necesita)
 * @param {number} index - Índice de la flor
 * @param {string} position - Posición left en porcentaje
 */
function createFlower(index, position) {
    const container = document.querySelector('.flowers');
    const flower = document.createElement('div');
    flower.className = `flower flower--${index}`;
    flower.style.left = position;
    
    // Estructura básica de la flor
    flower.innerHTML = `
        <div class="flower__leafs flower__leafs--${index}">
            ${generatePetals(12)}
            <div class="flower__white-circle"></div>
            ${generateLights(8)}
        </div>
        <div class="flower__line">
            <div class="flower__line__leaf flower__line__leaf--1"></div>
            <div class="flower__line__leaf flower__line__leaf--2"></div>
            <div class="flower__line__leaf flower__line__leaf--3"></div>
            <div class="flower__line__leaf flower__line__leaf--4"></div>
        </div>
    `;
    
    container.appendChild(flower);
}

/**
 * Genera los pétalos de una flor
 * @param {number} count - Número de pétalos
 * @returns {string} - HTML de los pétalos
 */
function generatePetals(count) {
    let petals = '';
    for (let i = 0; i < count; i++) {
        const rotation = i * 30; // 360/12 = 30 grados por pétalo
        petals += `<div class="flower__leaf" style="transform: translate(-50%, -10%) rotate(${rotation}deg);"></div>`;
    }
    return petals;
}

/**
 * Genera las luces/semillas de una flor
 * @param {number} count - Número de luces
 * @returns {string} - HTML de las luces
 */
function generateLights(count) {
    let lights = '';
    for (let i = 1; i <= count; i++) {
        lights += `<div class="flower__light flower__light--${i}"></div>`;
    }
    return lights;
}

// Exportar funciones para uso en otros archivos si es necesario
window.Fase2 = {
    createShootingStar: setupShootingStars,
    createFlower: createFlower
};