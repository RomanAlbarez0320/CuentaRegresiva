// ===== MODAL PARA LA IMAGEN (FASE 1) =====
document.addEventListener('DOMContentLoaded', function() {
    const fase1 = document.getElementById('phase1');
    if (!fase1) return; // Solo si existe la fase 1

    const foto = fase1.querySelector('.foto');
    const overlay = fase1.querySelector('.modal-overlay');
    const modalImg = fase1.querySelector('.modal-content');
    const closeBtn = fase1.querySelector('.modal-close');

    if (!foto || !overlay || !modalImg || !closeBtn) return;

    // Al hacer clic en la foto, abrir modal
    foto.addEventListener('click', function() {
        // Usar la misma imagen
        modalImg.src = this.src;
        overlay.classList.add('active');
    });

    // Cerrar al hacer clic en la X
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
    });

    // Cerrar al hacer clic en el fondo (overlay)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    });
});