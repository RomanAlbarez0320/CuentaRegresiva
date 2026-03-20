// ===== FASE 4: CAJA DE REGALO CON PDF (IMAGEN) =====
document.addEventListener('DOMContentLoaded', function() {
    const fase4 = document.getElementById('phase4');
    if (!fase4) return;

    const giftImage = fase4.querySelector('.gift-image');
    if (!giftImage) return;

    giftImage.addEventListener('click', function() {
        // 1. Animación de clic (pequeño efecto)
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);

        // 2. Descargar el PDF (¡YA CON EL NOMBRE CORRECTO!)
        const link = document.createElement('a');
        link.href = 'FELIZ CUMPLEAÑOS.pdf'; // ← ÚNICA LÍNEA MODIFICADA
        link.download = 'FELIZ CUMPLEAÑOS.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 3. Mensaje extra (opcional)
        setTimeout(() => {
            if (!document.querySelector('.gracias-mensaje')) {
                const mensaje = document.createElement('p');
                mensaje.className = 'gracias-mensaje';
                mensaje.innerHTML = '❤️ Con todo mi amor ❤️';
                mensaje.style.cssText = `
                    font-family: 'Dancing Script', cursive;
                    font-size: 2rem;
                    color: #b34e71;
                    margin-top: 2rem;
                    animation: aparecer 1s;
                    position: relative;
                    z-index: 20;
                `;
                fase4.querySelector('.sorpresa-container').appendChild(mensaje);
            }
        }, 500);
    });
});