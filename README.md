# Uber Eats — Packaged Meals Interactive Prototype

An interactive mobile prototype demonstrating how packaged meal delivery could integrate into the existing Uber Eats experience. Built as a single-file React component rendered inside a realistic iPhone frame.

**[Live Demo →](#)** *(update with your Vercel URL after deploy)*

---

## What This Prototype Demonstrates

This prototype was built for the **Uber Eats PM Jam Session** on integrating packaged meal services into Uber Eats. It covers the full end-to-end user journey:

### Home Screen (Uber Eats Today + Packaged Meals)
- Faithful recreation of the current Uber Eats mobile layout
- **"Packaged Meals"** tab added next to Grocery in the top navigation (with NEW badge)
- Green promotional banner for packaged meals integrated into the home feed
- "Top Rated Packaged Meals" carousel alongside existing restaurant content
- Active meal plan card with quick access to plan management

### Packaged Meals Browse
- **Meal type selection** — Breakfast, Lunch, Dinner, Snack filter chips with accordion dropdown to set quantity per type
- **Dietary filters** — High-Protein, Keto, Plant-Based, GLP-1 Friendly, Low-Calorie, Allergen-Free
- **Three view modes** — Meals | Chefs | Meal Providers toggle
- **Sampler bundles** — Low-commitment trial packs (4 meals at a discount, no subscription)
- **Meal grid** — Cards with ratings, reviews, calories, protein, price, and add-to-cart

### Meal Detail
- Full nutrition breakdown (Calories, Protein, Carbs, Fat)
- Reheating instructions, shelf life, storage info
- Per-meal user ratings and reviews (a feature no competitor currently offers)
- Link to creator/chef profile

### Creator & Chef Profiles
- Bio, specialty badges, star rating
- Menu tab with all their meals
- Sampler tab with discounted bundles
- Reviews tab with customer feedback

### Cart & Checkout
- 4-meal minimum enforcement
- Delivery frequency selection (1x or 2x per week)
- Optional plan creation (One-time / Weekly / Monthly) — positioned as convenience, not subscription
- Clear cart option
- Delivery window selection (2-hour windows)
- Full order confirmation flow

### My Meal Plan
- Sample active weekly plan with 7 meals across 2 deliveries
- Weekly nutrition summary (meals, avg calories, avg protein)
- Plan management actions — Edit Meals, Skip Week, Change Frequency, Pause, Cancel

---

## Key Product Decisions Reflected in the Prototype

| Decision | Rationale |
|----------|-----------|
| **No subscription required** | Addresses subscription fatigue — the #1 reason for churn in competitors like Factor and HelloFresh |
| **Marketplace model (multi-creator cart)** | Users can mix meals from different chefs/providers in one order — no competitor allows this |
| **Ratings & reviews on every meal** | The single trust feature no packaged meal platform currently offers |
| **4-meal minimum** | Balances unit economics (batch delivery efficiency) with low commitment entry |
| **2x/week delivery option** | Solves freshness concerns — receiving 7 meals Monday means Friday meals are 5-6 days old |
| **Sampler bundles** | Low-risk trial path that builds confidence before plan conversion |
| **Chefs vs. Meal Providers distinction** | Reflects the two supply-side segments: independent chefs and established meal prep companies |

---

## Tech Stack

- **React** (single-file component, no external dependencies beyond React itself)
- **Vite** for build tooling
- Inline styles matching Uber's design system (colors, typography, spacing)
- iPhone 14 Pro frame (393×852) for realistic mobile presentation

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/Delivery-takehome.git
cd Delivery-takehome

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

---

## Project Structure

```
Delivery-takehome/
├── src/
│   ├── App.jsx          # Main prototype component (all screens)
│   └── main.jsx         # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Add New Project → Import this repo
3. Vercel auto-detects Vite — click **Deploy**
4. Share the generated URL with your team

Every push to `main` triggers an automatic redeploy.

---

## Supporting Documents

The following preparation documents informed this prototype:

- **Packaged Meals Case Prep** — Market landscape, competitive analysis, customer segments, opportunity sizing
- **Jam Session Brief** — Original problem statement and evaluation criteria
- **Solution Document** — Detailed stakeholder value, solution design, launch strategy, metrics framework, FAQs

---

## Screens Overview

| Screen | Description |
|--------|-------------|
| **Home** | Uber Eats home with Packaged Meals integration |
| **Packaged Meals** | Browse with meal type accordion, diet filters, view toggle |
| **Meal Detail** | Nutrition, reviews, reheating info |
| **Creator Profile** | Chef/Provider bio, menu, samplers, reviews |
| **Cart** | Quantity controls, delivery frequency, plan options, clear cart |
| **Checkout** | Address, delivery window, payment, order confirmation |
| **My Plan** | Active plan view with deliveries, summary, management actions |

---

*Built for the Uber Eats Packaged Meals Jam Session*
