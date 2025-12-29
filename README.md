# Thomas Claiborne III - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/             # Content data (easy to update)
│   ├── profile.ts    # Personal info, education, experience
│   ├── projects.ts   # Project details
│   └── skills.ts     # Skills and strengths
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles + Tailwind
```

## Updating Content

All portfolio content is centralized in the `src/data/` folder:

- **profile.ts** - Update your bio, education, experience, links
- **projects.ts** - Add/edit projects with tech stack, highlights, links
- **skills.ts** - Modify skill categories and proficiency levels

## Deployment

This site auto-deploys to GitHub Pages via GitHub Actions when you push to `main`.

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme. The current theme uses:
- Primary: Green (#22c55e)
- Dark: Slate grays

### Fonts
Fonts are loaded from Google Fonts in `index.html`:
- Display: Space Grotesk
- Body: Outfit
- Code: JetBrains Mono

## License

MIT
