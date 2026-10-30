# Reflection — Personal Portfolio Website (Assignment 5)

## Model/provider
- **Model:** Nemotron 3.5 Lightning Free (opencode provider)
- **Provider:** opencode (self-hosted, free tier)

## Useful prompt
> "Create a personal portfolio website with HTML, CSS, and vanilla JavaScript only. Include dark mode toggle, responsive layout, projects/experience/skills/contact sections, and ensure it works with Python's built-in HTTP server on localhost:8000. No frameworks, no CDN."

## Observed tool action
The agent created all required site files (`index.html`, `style.css`, `script.js`), documentation (`README.md`, `AGENTS.md`, `REFLECTION.md`), and the `.gitignore`. It set up the theme toggle with `localStorage` persistence, responsive CSS media queries (mobile-first), accessible skip-nav link, focus-visible outlines, and keyboard-operable controls (Enter/Space for card activation). The site was committed to a descriptive work branch (`assignment5-website`) and pushed to the GitHub repository. A local HTTP server was started with `python -m http.server 8000` and the site was verified loading at `http://localhost:8000/`.

## Issue / improvement checked
- **Issue:** Verifying the dark-mode toggle persists after page reload.
- **Check:** Confirmed that `localStorage.getItem('theme')` is read on page load via the `window.matchMedia('(prefers-color-scheme: dark)')` media query and the stored theme preference. The `themeToggle` click event adds/removes the `dark` class on `document.body` and updates the button's `aria-pressed` attribute. After the theme toggle was initialized on DOMContentLoaded, the theme correctly restores on subsequent visits. Manual verification: loading the site in light mode, toggling to dark, refreshing the page — the dark mode persists.
- **Result:** The theme toggle now works across sessions; the site remembers the user's choice via `localStorage`. The site also respects `prefers-color-scheme` for initial theme selection.

## How the interaction works
1. On page load, the script checks `window.matchMedia('(prefers-color-scheme: dark)')` and `localStorage.getItem('theme')` to decide whether to add the `dark` class to `<body>`.
2. The theme-toggle button (`#theme-toggle`) toggles the `dark` class on `document.body` when clicked.
3. The button's `aria-pressed` attribute is updated to `'true'` or `'false'` depending on the current mode, providing screen-reader feedback.
4. The chosen theme (`'dark'` or `'light'`) is saved to `localStorage` so the preference persists across browser sessions.
5. CSS variables (`--bg`, `--txt`) are defined via `:root` for light mode and overridden in `[data-theme="dark"]` (set via the `dark` class on `<body>`), causing the entire site to switch colours smoothly with a `0.4s ease` transition.
6. The skip-navigation link (`#skip-link`) allows keyboard users to bypass the header and focus the main content area.
7. Algorithm/project cards support Enter and Space key activation, with `keydown` event listeners that prevent default and trigger the click action.

---
*Reflection generated as part of the OpenCode Assignment 5 submission.*