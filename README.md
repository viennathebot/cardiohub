# Cardiology Education Hub

A comprehensive cardiology education platform for medical students, residents, fellows, and attendings.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Videos:** YouTube embeds
- **Images:** Local + Cloudinary

## Development

```bash
cd cardiology-hub
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── interventional/          # Interventional Cardiology
│   │   ├── page.tsx
│   │   ├── angiography/
│   │   ├── pci/
│   │   └── cto/
│   ├── structural/              # Structural Heart
│   ├── general/                 # General Cardiology
│   ├── heart-failure/
│   ├── electrophysiology/
│   ├── peripheral/
│   ├── cases/                   # Case Discussions
│   └── blog/
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── SectionCard.tsx
│   ├── ExpandableContent.tsx
│   └── VideoEmbed.tsx
└── content/
    └── interventional/
        └── angiography/
```

## Roadmap

### Week 1 (Current)
- [x] Project setup
- [ ] Homepage design
- [ ] Navigation
- [ ] Coronary Angiography module (prototype)

### Week 2
- [ ] Equipment guides
- [ ] Image galleries
- [ ] Mobile optimization

### Week 3-4
- [ ] Additional modules
- [ ] Case discussion forum
- [ ] Blog setup
