(() => {
  const choices = document.querySelectorAll('[data-theme-choice]');
  const syncTheme = () => choices.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.themeChoice === document.documentElement.dataset.theme));
  });
  syncTheme();
  choices.forEach(button => button.addEventListener('click', () => {
    const theme = button.dataset.themeChoice;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('elena-theme', theme); } catch {}
    const url = new URL(location.href);
    url.searchParams.set('theme', theme);
    history.replaceState(null, '', url);
    syncTheme();
  }));
  const touchLayout = window.matchMedia('(pointer: coarse)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lastPulse = -Infinity;

  document.addEventListener('click', (event) => {
    if (!event.isTrusted || event.pointerType !== 'touch' || !touchLayout.matches || reducedMotion.matches) return;
    if (typeof navigator.vibrate !== 'function') return;
    if (!(event.target instanceof Element)) return;
    if (!event.target.closest('a.card, a.button, a.tickets, a.text-link, .socials a, .header-socials a, [data-theme-choice]')) return;
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
