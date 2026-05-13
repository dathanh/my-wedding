# Wedding Website — Agent Instructions

## Project

React (Vite) wedding invitation site hosted on **GitHub Pages** at `https://dathanh.github.io/my-wedding/`.  
RSVP submissions go to **Google Sheets** via a Google Form `no-cors` POST.

## Key Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Production build | `pnpm build` |
| Preview build | `pnpm preview` |
| Deploy to GitHub Pages | `pnpm deploy` (runs `gh-pages -d dist`) |

> Always use **pnpm** — never npm or yarn. Run `pnpm install --ignore-workspace` when adding packages.

## Structure

```
src/
  config/wedding.js      ← ALL personal details live here (names, date, venue, form IDs)
  components/
    Hero.jsx / .css      ← Full-screen hero with names, date, CTA
    Countdown.jsx / .css ← Live countdown timer
    Gallery.jsx / .css   ← Photo grid (images go in public/gallery/)
    RSVPForm.jsx / .css  ← Google Sheets form submission
    Footer.jsx / .css    ← Venue + map link
  App.jsx                ← Composes all sections
  index.css              ← Global CSS variables, reset, typography
public/
  gallery/               ← Drop wedding photos here (jpg/webp)
  hero-bg.jpg            ← Hero section background image
.github/
  workflows/deploy.yml   ← Auto-deploy to gh-pages branch on push to main
  agents/wedding-dev.agent.md
```

## Conventions

- **Never hard-code** names, dates, or venue — always edit `src/config/wedding.js`
- CSS variables are defined in `src/index.css` under `:root` — use them (`var(--color-primary)`, etc.)
- Images use `import.meta.env.BASE_URL` prefix so paths work on GitHub Pages
- The Vite `base` is `/my-wedding/` — keep this consistent in `vite.config.js` and `index.html`

## Google Sheets RSVP Setup

See the comment block at the top of `src/components/RSVPForm.jsx` for the full setup guide.  
The form uses `mode: 'no-cors'` — the response is always opaque but data saves correctly.

## GitHub Pages Deployment

Two options:
1. **Manual**: `pnpm deploy` — pushes `dist/` to the `gh-pages` branch
2. **Automatic**: push to `main` → GitHub Actions workflow builds and deploys

Ensure the repo **Settings → Pages → Source** is set to the `gh-pages` branch.

## Adding Photos

1. Drop `.jpg` / `.webp` files into `public/gallery/`
2. Add the filenames to the `photos` array at the top of `src/components/Gallery.jsx`
