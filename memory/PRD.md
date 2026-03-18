# ArtOnFilm - Product Requirements Document

## Original Problem Statement
ArtOnFilm is a sophisticated digital presence for art investors and enthusiasts. The platform emphasizes a dramatic, artistic aesthetic with silver/gold accents, gallery-like imagery, and cinematic effects. A major requirement is UK SEIS (Seed Enterprise Investment Scheme) compliance, positioning the business strictly as a retail trading company.

## Core Requirements
- SEIS-compliant copy throughout (retail trading, commission, own, sell)
- Forbidden terms removed (investment implication, partnership, platform, royalty)
- Professional gallery-style navigation and presentation
- Collections for artists Natasha Kissell (Paintings) and Dr Chris Lee (Photography)

## What's Been Implemented

### March 18, 2026
- **Tanglin Trust School Singapore Collection Page**: Finalized with 37 images
  - Added 7 new images from final upload batch (artist talks, student presentations, workshops, heritage displays)
  - Enhanced "About the Exhibition" section with artist-in-residence programme details
  - Added new "ArtOnFilm in Singapore" section describing expansion into Asia-Pacific market
  - Updated artwork count in CollectionHome.jsx (25 → 37)
  - Images include exhibition views, workshop sessions, artist demonstrations, and gallery installations

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

- **New Invest Page (SEIS Compliant)**: Complete rebuild with all required sections
  - Section 1: Invest Introduction - company description as UK creative IP and advertising firm
  - Section 2: How ArtOnFilm Operates - revenue model (artwork sales, limited editions, exhibitions)
  - Section 3: What Investment Supports - 4 items (commissioning, exhibitions, media campaigns, international expansion)
  - Section 4: Investor FAQ - 5 expandable accordion questions
  - Section 5: Request Investor Information CTA with green button
  - Legal disclaimer footer
  - No forbidden language (art returns, price growth, art investment)

- **Artist CV Page Enhancement**: Professional credentials page with:
  - Hero section with "Professional Credentials" heading
  - Quick navigation buttons to jump to each artist
  - For each artist: name, discipline badge, alias (if applicable), bio, "View Collection" button
  - Education section: year, degree, institution
  - Collections section: where works are held
  - Selected Exhibitions: year, title, venue, location
  - CTA to shop and view all artists

- **Navigation Dropdown**: Added dropdown under "Artists" with:
  - "Our Artists" → /artists
  - "Artist CV" → /artist-cv
  - Chevron icon indicates dropdown
  - Works on both desktop and mobile

- **FAQ Page (Standalone)**: New page linked from About dropdown with:
  - Hero section with "FAQ" badge and description
  - Quick links to Collector FAQ and Investor FAQ pages
  - All 10 General FAQ questions as expandable accordions:
    1. What is ArtOnFilm?
    2. How does ArtOnFilm work?
    3. How can collectors acquire artwork?
    4. What types of artwork does ArtOnFilm present?
    5. Are artworks supplied with documentation?
    6. How are artworks delivered?
    7. What is the ArtOnFilm exhibition programme?
    8. Can collectors receive early access to new works?
    9. How does ArtOnFilm generate revenue?
    10. Is ArtOnFilm open to investment?
  - "Our Creative Programmes" section with Painting and Photography cards
  - Contact CTA section

- **About Dropdown**: Navigation now has About dropdown with:
  - "About ArtOnFilm" → /about
  - "FAQ" → /faq

- **Global Tone & Messaging Update (SEIS Compliance)**:
  - **About Page**: Updated hero to Companies House description: "Creative intellectual property and advertising company commissioning and selling contemporary artworks through exhibitions and media programmes."
  - Added key trading statement: "ArtOnFilm Ltd operates as a trading company commissioning, producing and selling contemporary artworks through exhibitions and its website."
  - Updated Business Type to "Creative Intellectual Property & Advertising"
  - **Footer**: Updated disclaimer to use compliant language, removed patron/sponsor links, reordered Quick Links (artwork sales first)
  - **mock.js**: Replaced "resale" with "sales", updated visionData and commissioningModelData
  - **Shop.jsx & ChrisLeeCollection.jsx**: Updated all "resale" and "trading stock" language to "commissions and releases artworks through its programme"
  - **Forbidden terms removed**: "acquisition and resale", "art marketplace", "reselling", "trading stock for resale"
  - **Always use**: "commissions and releases artworks through its programme"

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
    │       ├── TanglinTrustCollection.jsx (37 exhibition images)
    │       ├── ShopPage.jsx (/shop route)
    │       ├── Artists.jsx
    │       ├── ArtistCV.jsx
    │       ├── Invest.jsx
    │       ├── FAQ.jsx
    │       ├── SoldArchive.jsx
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
