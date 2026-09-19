(() => {
  const touchLayout = window.matchMedia('(pointer: coarse)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lastPulse = -Infinity;

  document.addEventListener('click', (event) => {
    if (!event.isTrusted || event.pointerType !== 'touch' || !touchLayout.matches || reducedMotion.matches) return;
    if (typeof navigator.vibrate !== 'function') return;
    if (!(event.target instanceof Element)) return;
    if (!event.target.closest('a.card, a.button, a.tickets, a.text-link, .socials a, .header-socials a')) return;
    const now = performance.now();
    if (now - lastPulse < 400) return;
    lastPulse = now;
    try {
      navigator.vibrate(8);
    } catch {
      // La navigation reste disponible si le navigateur refuse la vibration.
    }
  }, { passive: true });
})();
