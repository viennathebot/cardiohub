# Cardiology Education Hub - Project Specification

*Dr. B's comprehensive cardiology education platform*

## Vision
An all-inclusive cardiology hub targeting medical students, residents, fellows, and attendings with elegant, visual-first educational content.

## Target Audience
- Medical students (cardiology rotations)
- Internal medicine residents
- Cardiology fellows (general, interventional, structural, EP)
- Practicing cardiologists seeking references
- International trainees

## Site Structure

```
Homepage (Landing)
│
├── General Cardiology
│   ├── Learning Hub
│   ├── Fellows Corner
│   └── Educational Resources
│
├── Interventional Cardiology ⭐ (Primary Focus)
│   ├── Learning Hub
│   │   ├── Coronary Angiography (Start to Finish)
│   │   ├── PCI Fundamentals
│   │   ├── CTO Techniques
│   │   └── Equipment Guide (catheters, wires, sheets)
│   ├── Fellows Corner
│   └── Educational Resources
│
├── Structural Heart ⭐ (Primary Focus)
│   ├── Learning Hub
│   │   ├── TAVR
│   │   ├── MitraClip / TEER
│   │   ├── Watchman / LAAO
│   │   ├── PFO/ASD Closure
│   │   └── Paravalvular Leak Closure
│   ├── Fellows Corner
│   └── Educational Resources
│
├── Heart Failure
│   ├── Learning Hub
│   ├── Fellows Corner
│   └── Educational Resources
│
├── Electrophysiology
│   ├── Learning Hub
│   ├── Fellows Corner
│   └── Educational Resources
│
├── Peripheral / Vascular
│   ├── Learning Hub
│   ├── Fellows Corner
│   └── Educational Resources
│
├── Case Discussions (Forum)
│   ├── Submit a Case
│   ├── Browse Cases
│   └── Featured Cases
│
├── Media Gallery
│   ├── Procedure Videos
│   ├── Angiogram Images
│   └── Educational Diagrams
│
└── Blog
    ├── Latest Posts
    ├── Trial Updates
    └── Clinical Pearls
```

## Content Features

### Progressive Disclosure
- **Simple view:** Quick summary for students
- **Detailed view:** Expandable sections with deep dives
- **Expert view:** Edge cases, complications, troubleshooting

### Visual-First Design
- Every concept has an image or video
- Annotated angiograms
- Step-by-step procedure galleries
- Equipment photos with labels

### Example: Coronary Angiography Module
1. Room setup & draping
2. Sheet colors and why they matter
3. Catheter selection guide (with photos)
4. Access techniques (radial vs femoral)
5. Engaging the coronaries
6. Standard views & angles
7. Interpreting the angiogram
8. Documentation & reporting

## Technical Architecture Options

### Option A: Next.js + Vercel + External Media (Recommended)
**Pros:** Fast, modern, excellent SEO, free tier generous
**Cons:** Video storage needs external solution
**Cost:** $0-20/month

- Site: Next.js on Vercel
- Videos: YouTube (unlisted) or Bunny Stream
- Images: Cloudinary or Vercel Blob
- CMS: Sanity.io (free tier) or MDX files

### Option B: Astro + Cloudflare Pages
**Pros:** Blazing fast, unlimited bandwidth, edge caching
**Cons:** Less dynamic features
**Cost:** $0-5/month

### Option C: Ghost (Managed)
**Pros:** Built-in blog, memberships, newsletters
**Cons:** Monthly cost, less customizable
**Cost:** $9-25/month

### Option D: Docusaurus + GitHub Pages
**Pros:** Built for docs/education, free hosting
**Cons:** Developer-focused aesthetic
**Cost:** $0

## Media Strategy

### Videos
- **Primary:** YouTube unlisted embeds (free, unlimited)
- **Backup:** Bunny Stream ($1/month per 1000 views)
- Format: Short (2-5 min) focused clips, not long lectures

### Images
- **Hosting:** Cloudinary (free 25GB) or Vercel Blob
- **Format:** WebP for compression, PNG for diagrams
- **Optimization:** Lazy loading, responsive sizes

### Storage Estimates
- 100 procedure videos (5 min avg @ 1080p): ~50GB
- 1000 images (2MB avg): ~2GB
- Text content: <100MB
- **Total:** ~55GB (easily handled by external services)

## Development Timeline

### Phase 1: Foundation (Week 1-2)
- [ ] Choose tech stack
- [ ] Set up hosting
- [ ] Design system & components
- [ ] Homepage + navigation

### Phase 2: Core Sections (Week 3-4)
- [ ] Interventional Cardiology section
- [ ] Structural Heart section
- [ ] Basic content templates

### Phase 3: Content (Week 5-8)
- [ ] Coronary angiography complete module
- [ ] Equipment guides with photos
- [ ] First 10 educational videos

### Phase 4: Community (Week 9-10)
- [ ] Case discussion forum
- [ ] User submissions
- [ ] Blog setup

### Phase 5: Polish (Week 11-12)
- [ ] Mobile optimization
- [ ] Search functionality
- [ ] Analytics & feedback

## Domain Ideas
- cardiohub.education
- interventionalcardiology.guide
- structuralheart.education
- cardiofellows.com
- thecardiologyhub.com

## Inspiration Sites
- UpToDate (content depth)
- Radiopaedia (visual-first medical education)
- Osmosis (progressive learning)
- The Cath Lab Digest
- PCR Online
