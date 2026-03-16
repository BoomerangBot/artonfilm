# ArtOnFilm - Product Requirements Document

## Original Problem Statement
ArtOnFilm is a sophisticated digital presence for art investors and enthusiasts. The platform emphasizes a dramatic, artistic aesthetic with silver/gold accents, gallery-like imagery, and cinematic effects. A major requirement is UK SEIS (Seed Enterprise Investment Scheme) compliance, positioning the business strictly as a retail trading company.

## Core Requirements
- SEIS-compliant copy throughout (retail trading, commission, own, sell)
- Forbidden terms removed (investment implication, partnership, platform, royalty)
- Professional gallery-style navigation and presentation
- Collections for artists Natasha Kissell (Paintings) and Dr Chris Lee (Photography)

## What's Been Implemented

### March 16, 2026
- **Collection Page Verification**: Verified collection page headers and curatorial lines are displaying correctly
  - Natasha Kissell: "PAINTING PROGRAMME - Collection 1: Modern Eden"
  - Chris Lee: "PHOTOGRAPHY PROGRAMME - Photography Collections"
  - Curatorial line appears under each artwork
  - "Enquire" buttons functional on all collection pages

- **Inactive Button Audit & Fix**: Removed/fixed 3 broken buttons
  - Home.jsx: "View Asset & Art Opportunities" -> "View Available Works" (links to /shop)
  - Home.jsx: "Download Impact Report" -> "Request Impact Report" (links to contact form)
  - Programme.jsx: "Download Programme PDF" -> "Request Programme Details" (links to contact form)

- **New Shop/Acquire Works Page**: Complete rebuild with all required sections
  - Hero with status summary (Available/Reserved/Sold counts)
  - "How It Works" section (Direct Ownership, Full Documentation, Private Viewings)
  - Pricing Guide with 8-tier ladder (Paintings Series I-III, Photography Editions)
  - Artwork Listings with filter tabs (All Works, Paintings, Photography)
    - Each artwork shows: title, medium, size, year, status badge, price, curatorial line
    - Status system: Available (green), Reserved (amber), Sold (red with overlay)
    - "Request Acquisition" button links to contact form
  - Collector FAQ (5 expandable accordion questions)
  - Acquisition & Delivery section with 4 checkmark items
  - Collection CTA links to artist pages

### Previously Completed
- SEIS compliance overhaul (site-wide term replacement)
- Navigation restructure: Home | Artists | Artist CV | Collections | Tour | Shop | Invest | About | Contact
- New pages created: Artists, ArtistCV, Invest, ShopPage, Tour
- Homepage content updates (cinematic layout preserved)
- Footer trust line added
- All "Purchase" buttons changed to "Enquire"
- Collection page layouts reordered (artwork grids first)
- 7 new Natasha Kissell artworks with descriptions

## Current Architecture
```
/app
├── backend (unused - FastAPI)
└── frontend (React)
    ├── src
    │   ├── App.js (routes)
    │   ├── components/
    │   │   ├── Navigation.jsx
    │   │   └── Footer.jsx
    │   ├── mock.js (single source of truth for all content)
    │   └── pages/
    │       ├── Home.jsx
    │       ├── Shop.jsx (Natasha Kissell collection)
    │       ├── ChrisLeeCollection.jsx
    │       ├── ShopPage.jsx (/shop route)
    │       ├── Artists.jsx
    │       ├── ArtistCV.jsx
    │       ├── Invest.jsx
    │       └── Programme.jsx (/tour route)
```

## Key Technical Notes
- All content managed in `/app/frontend/src/mock.js`
- Screenshot tool may require localStorage workaround: `localStorage.setItem('artOnFilmDisclaimerAccepted', 'true')`
- Navigation "Tour" links to `/programme`

## Prioritized Backlog

### P0 - Critical
- None remaining

### P1 - High Priority
- Replace AI-generated images with real photos (when provided by client)
- Populate Artist CV page with real content (when provided by client)
- Backend integration for forms (Contact, Join Collector List, Enquire buttons)

### P2 - Medium Priority
- Create Blog page
- Implement proper form submission (currently shows toast only)

### P3 - Future
- Full backend/database migration from mock.js
- Authentication for collector accounts
- E-commerce functionality

## Project Health
- **Status**: MVP Complete
- **Known Issues**: Forms are mocked (show toast, no email sent)
- **Testing**: Screenshot verification complete; no testing_agent run needed for current changes
