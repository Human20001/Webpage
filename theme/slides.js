// ========== SLIDER JS ==========
 export function  run(){(function () {
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsWrap = document.getElementById('sliderDots');
    const slides = document.querySelectorAll('.slide');

    let current = 0;
    let autoTimer = null;
    const total = slides.length;

    // --- Build dots ---
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    function updateDots() {
        document.querySelectorAll('.dot').forEach((d, i) =>
            d.classList.toggle('active', i === current)
        );
    }

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        updateDots();
        restartAuto();

    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // --- Auto-play ---
    function startAuto() {
        autoTimer = setInterval(() => goTo(current + 1), 4000);
    }
    function restartAuto() {
        clearInterval(autoTimer);
        startAuto();
    }

    // --- Touch / swipe support ---
    let touchStartX = 0;
    track.addEventListener('touchstart', e => {
        touchStartX = e.touches.clientX;
    }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches.clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    // --- Keyboard support ---
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // --- Pause on hover ---
    track.addEventListener('mouseenter', () => clearInterval(autoTimer));
    track.addEventListener('mouseleave', startAuto);

    startAuto();
})();}
// ========== END SLIDER JS ==========