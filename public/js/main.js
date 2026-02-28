/**
 * MAIN CONTROLLER
 * Maneja las transiciones entre fases
 */
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // 1. Remover clase not-loaded para activar animaciones
            document.body.classList.remove('not-loaded');
            
            // 2. Transición a Fase 2
            document.getElementById('phase1').classList.remove('active');
            document.getElementById('phase2').classList.add('active');
            
            // 3. Inicializar Fase 2 (girasoles)
            if (typeof initFase2 === 'function') {
                initFase2();
            }
            
            // 4. Programar transición a Fase 3 (20 segundos)
            setTimeout(() => {
                // Transición suave
                document.getElementById('phase2').style.opacity = '0';
                
                setTimeout(() => {
                    document.getElementById('phase2').classList.remove('active');
                    document.getElementById('phase2').style.opacity = '1';
                    document.getElementById('phase3').classList.add('active');
                    
                    // Inicializar Fase 3 (contador)
                    if (typeof initFase3 === 'function') {
                        initFase3();
                    }
                    
                    // Mini celebración con confeti rosa
                    if (typeof confetti !== 'undefined') {
                        confetti({
                            particleCount: 100,
                            spread: 70,
                            origin: { y: 0.6 },
                            colors: ['#ffb6c1', '#ff9eb5', '#d46b8d', '#ffffff']
                        });
                    }
                }, 500);
            }, 20000); // 20 segundos
        });
    }
});