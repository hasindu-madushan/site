# AGENTS.md

## Project overview
React + Vite personal portfolio site for Hasindu Madushan. Modern, minimal, light theme with particle animations and bento grid layout.

## Tech stack
- **Vite + React 18** — Build tool and framework
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll animations and transitions
- **tsParticles** — Hero section particle network
- **Lucide React** — Icon library
- **gh-pages** — GitHub Pages deployment

## File structure
```
site/
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite config (base: "/site/" for prod)
├── tailwind.config.js        # Tailwind with custom primary color
├── postcss.config.js         # PostCSS config
├── index.html                # Entry HTML
├── public/img/               # Static assets (images served at /img/)
│   └── projects/             # Project screenshots
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main layout (Navbar → Hero → About → Projects → Footer)
    ├── index.css             # Tailwind imports + custom utilities
    ├── data/projects.json    # Projects data (JSON, same structure as old data.js)
    └── components/
        ├── Navbar.jsx        # Sticky nav, mobile responsive
        ├── Hero.jsx          # Particles + profile photo + stats + tech marquee
        ├── About.jsx         # Bio + 6 skill cards
        ├── Projects.jsx      # Bento grid of project cards
        ├── ProjectCard.jsx   # Individual card with hover effects
        ├── ProjectModal.jsx  # Full-screen modal with image gallery
        └── Footer.jsx        # Contact + social links
```

## How to add a project
1. Add screenshot(s) to `public/img/projects/`
2. Add a new entry in `src/data/projects.json` with the next `projN` key
3. Each entry needs: `title`, `imgs` (array of paths starting with `/img/projects/`), `desc`, `links` (array of `{name, ref}`), `skills` (array of strings)
4. Run `npm run dev` — changes are live on HMR refresh

## How to preview
```
npm run dev
```
Opens at `http://localhost:5173`. No manual server needed.

## How to deploy
```
npm run deploy
```
Builds the project and pushes to the `gh-pages` branch.

## Conventions
- Project keys follow `proj1`, `proj2`, ... naming in `projects.json`
- Image paths start with `/img/projects/` (Vite serves `public/` at root)
- Tailwind primary color: teal (`#14b8a6`)
- Light theme, Inter font family
- `.gitignore` excludes `node_modules`, `dist`, and editor files
