(() => {
  const allowed = ['dark', 'beige'];
  const query = new URLSearchParams(location.search).get('theme');
  let saved;
  try { saved = localStorage.getItem('elena-theme'); } catch {}
  const theme = allowed.includes(query) ? query : allowed.includes(saved) ? saved : 'dark';
  document.documentElement.dataset.theme = theme;
})();
