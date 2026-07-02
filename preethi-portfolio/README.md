# Preethi S — Portfolio

A single-page portfolio site for Preethi S (AI &amp; Data Science Engineer / UI-UX Designer),
built with plain HTML, CSS, and JavaScript — no build step required.

## 🎨 Design Concept

The site's signature motif is **"verification"** — borrowed directly from Preethi's own
project work (Zero Trust security, ML confidence scores). It shows up as:
- A live "Open to work" status pill in the navbar
- Project cards tagged with real model metrics (e.g. "92% test accuracy") as verification badges
- Skills shown as "trust meters" rather than generic progress bars
- A subtle graph-paper grid in the hero, nodding to both data grids and design-tool canvases

Palette: cool off-white / deep ink with a muted signal-green accent (not neon), and a
restrained rust tone used only for a single "flagged" badge — so the color language itself
echoes the idea of normal vs. flagged status from her anomaly detection projects.

Typography: **Fraunces** (display, used sparingly for headlines) + **Inter** (body) +
**IBM Plex Mono** (labels, tags, badges — the "data" voice of the page).

## 🗂️ File Structure

```
preethi-portfolio/
├── index.html          # All page content/sections
├── css/
│   └── styles.css      # Design tokens, layout, animations, dark mode
├── js/
│   └── script.js       # Theme toggle, nav, scroll reveal, skill bars, form
├── assets/
│   ├── Preethi_S_Resume.pdf   # Downloadable résumé (linked from Hero CTA)
│   └── favicon.svg
├── netlify.toml
├── vercel.json
├── robots.txt
└── README.md
```

## ✅ Features Included

- Sticky, blurred navbar with scroll-based active-link highlighting
- Dark / light mode toggle (persisted via `localStorage`, respects system preference on first visit)
- Fully responsive layout (mobile hamburger menu, stacked grids on small screens)
- Scroll-reveal animations + animated skill bars + animated hero stat counters
- Scroll-to-top button
- Semantic HTML, skip-to-content link, visible focus states, `prefers-reduced-motion` respected
- Basic on-page SEO (meta description, keywords, Open Graph tags, `robots.txt`)
- Project cards linking directly to each GitHub repo / Behance case study
- Résumé download button (serves the PDF from `/assets`)
- Contact form (front-end only by default — see "Wiring the contact form" below)

## ⚙️ Local Setup

No build tools needed. From the project folder, just run a static server:

```bash
# Python
python3 -m http.server 8080

# Or Node
npx serve .
```

Then open `http://localhost:8080` in your browser.

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push this folder to a GitHub repo (e.g. `preethi-portfolio`)
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root folder
4. Your site will be live at `https://<username>.github.io/preethi-portfolio/`

### Option 2: Netlify
1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. Connect your GitHub repo (or drag-and-drop the folder for a manual deploy)
3. Netlify will read `netlify.toml` automatically — no build command needed

### Option 3: Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and import the repo
2. Framework preset: **Other** (static site) — no build command needed
3. Deploy — `vercel.json` is already configured

## ✉️ Wiring the Contact Form

The form currently only shows a confirmation message locally (no emails are sent).
To make it functional without a backend, pick one:

- **Formspree** (easiest): create a form at [formspree.io](https://formspree.io), then change
  the `<form id="contactForm">` tag in `index.html` to:
  ```html
  <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
  and remove the `e.preventDefault()` line in `script.js`'s submit handler (or adapt it to
  send via `fetch` if you want to keep the custom success message).

- **EmailJS**: lets you send from the browser directly to your inbox using their SDK —
  good if you want to keep the custom success message without a page reload.

## 📌 Notes & Honest Gaps

- **Experience section**: Since this is a fresher portfolio, the "Experience" section
  reflects the B.Tech + project timeline rather than a fabricated job history. Replace
  this once you have an internship or job to add.
- **Skill percentages**: The numbers on the skill bars are estimates meant to look
  proportionate to your actual project usage — adjust them to reflect your own honest
  self-assessment.
- **Project metrics**: Accuracy/ROC-AUC badges reflect the actual test results from the
  companion project builds (Churn, Zero Trust, Fake Account Detection). If you retrain
  those models and get different numbers, update the badges in `index.html` to match.

## 🔧 Enhancement Ideas

- Add a live GitHub contributions graph (e.g. via the GitHub API) in the About section
- Add real screenshots/GIFs of each project's dashboard to the project cards
- Add a blog or "Notes" section if you start writing about your ML/UX process
- Swap the contact form for a scheduling link (e.g. Calendly) if you want to skip forms entirely
- Add subtle page-load animation sequence on the hero for a stronger first impression
