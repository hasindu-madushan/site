# AGENTS.md

## Project overview
Static personal portfolio site for Hasindu Madushan. No build step, no framework, no package manager. Pure HTML/CSS/JS served as-is.

## File structure
- `index.html` — single page, loads `style.css`, `data.js`, then `index.js` (order matters)
- `data.js` — exports a global `projects` object; each entry has `title`, `imgs`, `desc`, `links`, `skills`
- `index.js` — renders project cards from `data.js`, handles modal open/close and "More/Less" toggle
- `style.css` — all styles, includes responsive breakpoints at 576px and 900px
- `img/` — all images; project screenshots live in `img/projects/`

## How to add a project
1. Add screenshot(s) to `img/projects/`
2. Add a new entry in `data.js` under the next `projN` key
3. No rebuild needed — changes are live on refresh

## How to preview
Open `index.html` directly in a browser or serve with any static server (e.g. `npx serve .` or VS Code Live Server). No dev server config exists.

## Conventions
- Project keys follow `proj1`, `proj2`, ... naming in `data.js`
- Image paths are relative from root (e.g. `img/projects/foo.PNG`)
- `.gitignore` is empty — be careful not to commit large or sensitive files
