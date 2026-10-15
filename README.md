# Hana Berhe — Portfolio

Personal portfolio of Hana Berhe, junior full-stack developer in Winnipeg, Canada.

Built with **React 19 + Vite**, **Tailwind CSS v4** and **Lucide** icons. Frontend only: no backend,
database or API keys.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build in dist/
npm run preview    # serve the build locally to check it
```

## Before you publish: checklist

- [ ] Add your résumé as `public/resume/Hana-Berhe-Resume.pdf` (the Résumé buttons download it).
- [ ] Update `repoUrl` (and `liveUrl` once deployed) for ChatGPT Clone and StreamFlex in `src/data/projects.js`.
- [ ] Optional: swap `src/assets/hana-berhe.webp` for a front-facing headshot (4:5 ratio, same file name).

## Project structure

```
public/
  favicon.png, apple-touch-icon.png
  resume/Hana-Berhe-Resume.pdf      ← add this
src/
  assets/          photo, logo, project screenshots
  data/            all content lives here
    profile.js       name, email, links, résumé path
    skills.js        skill groups
    projects.js      project cards
    experience.js    education & experience
  components/
    Navbar.jsx       sticky nav + accessible mobile menu
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx     featured project first, others in a grid
    ProjectCard.jsx  one card component for every project
    Experience.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx   shared two-tone heading ("About Me")
    BrandIcons.jsx       GitHub / LinkedIn icons
  App.jsx          page order
  main.jsx         React entry point
  index.css        design tokens + 3D card and button styles
```

## Key decisions (and why)

**Content is data, components are layout.** Every word that changes often (projects, skills,
experience, links) lives in `src/data/`. Components only decide how things look. Adding a fourth
project is one new object in `projects.js`; no JSX changes.

**One `ProjectCard` for all projects.** The `featured: true` flag switches it to the wide
side-by-side layout. Optional fields are handled in one place: no `liveUrl` hides the Live demo
button, and no `image` shows an honest "Screenshot coming soon" panel instead of a fake one.

**Design tokens in one place.** Tailwind v4 reads the `@theme` block in `index.css` and creates
classes from it, so `--color-violet` becomes `text-violet`, `bg-violet`, and so on. Changing a
brand colour is a one-line edit.

**3D styles are small CSS classes, not a library.** `card-3d` (raised edge), `card-tilt` (hover
tilt, project cards only), `card-lift` (clickable cards) and `btn-3d` (purple buttons) live in
`index.css`. They switch off automatically for visitors who reduce motion in their OS settings.

**Accessibility built in.**
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and one `h1`.
- Every section is labelled by its heading.
- A "Skip to content" link for keyboard users.
- The mobile menu uses `aria-expanded` and closes with Escape.
- Icon-only links have `aria-label`, and links that open a new tab say so to screen readers.
- Every text colour passes WCAG AA contrast. White on the brand violet `#716FFF` doesn't, so buttons
  use the slightly deeper `#5F5CF0`.

**Performance.**
- Images are WebP, imported through Vite so file names are hashed and cached long-term.
- The hero photo loads with high priority; project screenshots lazy-load.
- Images have width and height set, so the layout doesn't jump while they load.
- The only dependencies are React, React DOM and Lucide.

**No contact form.** A form needs a backend or a third-party service. Email, LinkedIn and GitHub
links do the same job with nothing to maintain.

## Adding a screenshot

1. Take it at about 1440px browser width and crop out the browser bar and bookmarks.
2. Save it in `src/assets/` (WebP or PNG; a 16:10 crop fits the card best).
3. In `src/data/projects.js`, import it and set `image`:

```js
import chatgptShot from "../assets/chatgpt-clone.webp";
// …
image: chatgptShot,
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo, e.g. `hana-portfolio`.
2. On vercel.com: **Add New → Project**, import the repo. Vercel detects Vite automatically
   (build `npm run build`, output `dist`). Click **Deploy**.
3. To use **hanadev.dev**: in the Vercel project go to **Settings → Domains**, add `hanadev.dev`
   and `www.hanadev.dev`, then set the DNS records Vercel shows you at your domain registrar.
   HTTPS is set up automatically.

Every push to `main` redeploys the site.
