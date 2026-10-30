# Joshua Lee — Data Scientist Portfolio

A minimal, one‑page portfolio website hosted locally. Demonstrates projects, experience, skills, and contact information. Built with plain HTML, CSS, and JavaScript (no frameworks, no CDN).

## Purpose

Showcase Joshua Lee's education, internships, leadership experience, projects, and technical skills to potential employers. The site is fully responsive, accessible, and includes a dark‑mode toggle.

## Prerequisites

- [Python 3](https://www.python.org/downloads/) installed on your machine.

## Local development

1. **Clone the repository (or download the files)**  
   ```bash
   git clone https://github.com/JjoshLee23/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies (none required)** – the site uses only vanilla HTML/CSS/JS.

3. **Start the local HTTP server**  
   ```bash
   python -m http.server 8000
   ```

4. **Open the site in a browser**  
   ```
   http://localhost:8000
   ```

## Stopping the server

Press `Ctrl+C` in the terminal where the server is running.

## File structure

| File | Description |
|------|-------------|
| `index.html` | Page structure, navigation, sections, and embedded content. |
| `style.css` | Minimal pretty styling, dark‑mode toggle, responsive layout, focus‑visible outlines. |
| `script.js` | Tiny script: dark‑mode toggle (persisted in `localStorage`), smooth‑scroll on nav clicks, skip‑link focus management, and CSS‑only reveal‑on‑load animations. |
| `.gitignore` | Excludes `.env`, `node_modules/`, `.DS_Store` from version control. |
| `README.md` | This file – purpose, prerequisites, and local‑run instructions. |
| `AGENTS.md` | Project constraints for the agent (no frameworks, local‑only, accessible, etc.). |
| `REFLECTION.md` | Model/provider used, useful prompt, observed tool action, issue/improvement check, and interaction explanation. |

## Repository requirements

- The source files (`index.html`, `style.css`, `script.js`, `.gitignore`, `README.md`, `AGENTS.md`, `REFLECTION.md`) live at the repository root.
- No `node_modules/` or build output is committed.
- All assets (images, icons) are either embedded as data URIs or are public domain.
- No credentials, tokens, or private data are included.

## Accessibility

- Skip‑nav link for keyboard users.
- Focus‑visible outlines (`3px solid #ff6b6b`).
- ARIA labels on interactive elements.
- Dark‑mode respects `prefers-color-scheme` and user selection saved in `localStorage`.
- Layout adapts from single‑column (mobile) to two‑column (desktop).

## Acknowledgement

Built as part of DS 219 Assignment 5 — OpenCode. No frameworks, no CDN, local‑only.