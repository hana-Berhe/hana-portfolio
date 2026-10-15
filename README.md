# Hana Berhe — Portfolio

My personal portfolio as a full-stack developer, built with React and Vite.

**Live site:** https://your-portfolio-link.vercel.app

## Featured projects

| Project | Description | Live |
| --- | --- | --- |
| **Evangadi Forum** | Q&A forum with authentication, questions and answers | — |
| **ChatGPT Clone** | AI chat app with saved conversations (React, Express, MySQL, Gemini API) | [Open](https://gptclone-ko8o.onrender.com) |
| **StreamFlex** | Movie streaming UI with login, My List, ratings and AI picks (React, Express, MySQL, TMDB) | [Open](https://streamflix-five-delta.vercel.app) |

## Tech stack

- React + Vite
- Tailwind CSS
- Lucide icons
- Deployed on Vercel

## Highlights

- Content is kept separate from layout: all text, links, skills and projects live in `src/data/`, so updates never touch the components.
- One reusable `ProjectCard` handles every project, including a wide "featured" layout.
- Lightweight 3D card and button effects in plain CSS, switched off for users who prefer reduced motion.
- Accessible: skip-to-content link, keyboard-friendly mobile menu, labelled icon buttons and readable color contrast.
- Fully responsive, from phones to wide screens.

## Project structure

```
src/
├── components/   # Layout and UI sections
├── data/         # Profile, skills, projects, experience
├── assets/       # Project screenshots
└── index.css     # Colors, fonts and effects
public/
└── resume/       # Résumé PDF
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Contact

- GitHub: [hana-Berhe](https://github.com/hana-Berhe)
- Email: your-email@example.com
- LinkedIn: your-linkedin-url
