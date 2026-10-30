// Personal Website — Joshua Lee
// No external dependencies; pure vanilla JavaScript.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     1. Theme toggle (dark / light) with localStorage
     --------------------------------------------------------- */
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // check saved preference or system preference
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

  const applyTheme = (theme) => {
    html.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
  };

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = getStoredTheme() || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    setStoredTheme(newTheme);
  });

  /* ---------------------------------------------------------
     2. Smooth‑scroll when navigating via the top menu
     --------------------------------------------------------- */
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------------------------------------------------------
     3. Skip‑link focus management
     --------------------------------------------------------- */
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', e => {
      e.preventDefault();
      const main = document.querySelector('#main-content');
      if (main) main.focus();
    });
  }

  /* ---------------------------------------------------------
     4. Reveal‑on‑load animation (IntersectionObserver)
     --------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    },
    { threshold: .2 }
  );
  revealEls.forEach(el => revealObserver.observe(el));
});