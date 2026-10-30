# Personal Website — Joshua Lee — AGENTS.md

## Project constraints

- **Only HTML, CSS, and vanilla JavaScript** – no frameworks (React, Vue, Angular, etc.), no CSS libraries (Bootstrap, Tailwind), and no external JS libraries (jQuery, Chart.js, D3, etc.).
- **No CDN links** for styles or scripts.
- **Run locally only** – serve the project folder with Python’s built‑in HTTP server (`python -m http.server 8000`) or any simple static‑file server. Do **not** deploy to Cloudflare, GitHub Pages, or any other hosting.
- **Keep all work inside the repository** – all source files (`index.html`, `style.css`, `script.js`, `AGENTS.md`, `README.md`, `.gitignore`, `REFLECTION.md`) must remain at the repository root. No separate `node_modules`, build outputs, or external folders.
- **No package installation** – do not run `npm install`, `yarn`, or any package manager commands.
- **Git ignore** – the `.gitignore` file must contain entries for `.env`, `node_modules/`, and `.DS_Store` so these are never committed.
- **Accessibility** – interactive elements must be keyboard‑focusable (Tab order), operable via Enter/Space, and use ARIA labels/live regions where appropriate.
- **Responsive design** – the layout should gracefully transition from mobile‑width (single‑column) to tablet/desktop (multi‑column) using CSS media queries.
- **No server‑side code** – all calculations and graph drawing happen entirely in the browser (this project has no heavy calculations; the script only toggles classes and handles scroll).
- **No external data** – all content (name, projects, experience, skills, contact) is embedded directly in the HTML.

## How to run locally

1. Ensure you have **Python 3** installed (most macOS/Linux systems have it pre‑installed; Windows users can install from python.org).
2. Open a terminal (or command prompt) and navigate to the repository root folder that contains `index.html`.
3. Start the built‑in HTTP server:

   ```bash
   python -m http.server 8000
   ```

   *If you prefer a different port, change `8000` to any available port; the HTML page will adjust accordingly.*
4. Open a web browser and go to `http://localhost:8000`.
5. You can now view the personal portfolio, toggle dark mode, and navigate with keyboard controls.

> **Tip:** To stop the server, press `Ctrl+C` in the terminal where the server is running.

## Files overview

| File | Purpose |
|------|---------|
| `index.html` | Page structure, navigation, sections, semantic markup, ARIA labels. |
| `style.css` | Modern reset, responsive layout (mobile‑first), accessible focus styles, dark‑mode styling, algorithm‑card styling. |
| `script.js` | Small script: toggles dark mode, smooth‑scroll on navigation, skip‑link focus management, and CSS‑only reveal‑on‑load animations. |
| `.gitignore` | Excludes `.env`, `node_modules/`, and `.DS_Store` from version control. |
| `README.md` | Project description and local‑run instructions (this file). |
| `AGENTS.md` | This file – summarises project constraints and how to run the site locally. |
| `REFLECTION.md` | Model/provider used, one useful prompt, one observed tool action, one issue or improvement checked before and after a change, and a short explanation of how the interaction works. |

---

*Generated for the Personal Portfolio Assignment (DS 219, Assignment 5).*