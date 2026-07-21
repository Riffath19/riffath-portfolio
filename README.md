# A.M. Riffath Hussain — Portfolio

A modern, dark-themed, glassmorphism portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The static output is generated in `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Customize before publishing

1. **Resume** — add your PDF at `public/resume.pdf` (the "Download Resume" button in `src/components/Hero.tsx` links to `/resume.pdf`).
2. **Contact details** — update the email, LinkedIn, and GitHub links in `src/components/Contact.tsx` and `src/components/Footer.tsx`.
3. **GitHub username** — set your real username in `src/components/GithubStats.tsx` (`GITHUB_USERNAME`) so the stats, top languages, and contribution graph resolve correctly.
4. **Project links** — replace the placeholder GitHub/demo URLs in `src/data/projects.ts` with your real repository and deployed links.
5. **Project screenshots** — the project cards currently use a generated icon treatment. Swap in real screenshots by adding an `<img>` inside the card media area in `src/components/Projects.tsx`.

## Structure

```
src/
  components/   UI sections (Hero, About, Skills, Projects, etc.)
  data/         Content: skills, projects, experience, certifications
  hooks/        useTheme (dark/light mode persistence)
  index.css     Design tokens (CSS variables) + global styles
```

## Design tokens

Colors are defined as CSS variables in `src/index.css` (`--bg`, `--ink`, `--border`, etc.) with a `.light` override for light mode, plus static `accent` (#2DD9C5) and `signal` (#F5A524) colors in `tailwind.config.js`. Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
