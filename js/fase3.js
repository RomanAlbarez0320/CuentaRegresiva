function initFase3() {
    console.log('⏳ Contador iniciado correctamente');

    // Fecha objetivo: 20 de marzo de 2026 a las 12:00 AM (medianoche)
    const targetDate = new Date('2026-03-20T00:00:00').getTime();

    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('min').innerText = '00';
            document.getElementById('sec').innerText = '00';
            console.log('🎉 ¡El contador terminó!');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('min').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('sec').innerText = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
}
// ===== REGALO INTERACTIVO (FASE 3) =====
document.addEventListener('DOMContentLoaded', function() {
    const fase3 = document.getElementById('phase3');
    if (!fase3) return;

    const giftBox = fase3.querySelector('.gift-box');
    if (giftBox) {
        giftBox.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    }
});
// ===== REGALO INTERACTIVO (FASE 3) =====
document.addEventListener('DOMContentLoaded', function() {
    const fase3 = document.getElementById('phase3');
    if (!fase3) return;

    const giftBox = fase3.querySelector('#giftBox');
    const giftMessage = fase3.querySelector('#giftMessage');

    if (giftBox && giftMessage) {
        giftBox.addEventListener('click', function() {
            giftMessage.classList.add('show');
            // Ocultar después de 3 segundos
            setTimeout(() => {
                giftMessage.classList.remove('show');
            }, 3000);
        });
    }
});