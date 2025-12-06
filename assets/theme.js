(function() {
  const sticky = document.getElementById('sticky-cta');
  const hero = document.querySelector('.hero');
  if (sticky && hero) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        sticky.style.display = entry.isIntersecting ? 'none' : 'block';
      });
    }, { threshold: 0 });
    observer.observe(hero);
  }

  const countdownEl = document.getElementById('countdown-timer');
  const countdownWrapper = document.querySelector('[data-countdown-hours]');
  if (countdownEl && countdownWrapper) {
    const hours = parseInt(countdownWrapper.getAttribute('data-countdown-hours'), 10) || 48;
    const endTime = Date.now() + hours * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      const hrs = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, '0');
      const mins = String(Math.floor(diff / 1000 / 60) % 60).padStart(2, '0');
      const secs = String(Math.floor(diff / 1000) % 60).padStart(2, '0');
      countdownEl.textContent = `${hrs}:${mins}:${secs}`;
      if (diff > 0) {
        requestAnimationFrame(tick);
      }
    };
    tick();
  }
})();
