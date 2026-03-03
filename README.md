# Procurement Intelligence Platform

An interactive prototype demonstrating how AI can transform procurement from manual, reactive work into intelligent, proactive decision-making.

**Live demo:** [procurement-prototype-eight.vercel.app](https://procurement-prototype-eight.vercel.app/)

---

## What This Is

A single-file React application that shows what a Procurement Intelligence platform looks like in practice. The prototype covers the full workflow: from searching across enterprise data sources, to surfacing savings opportunities, to drafting supplier negotiation emails.

Built as a standalone HTML file. No build step, no backend, no dependencies beyond CDN-hosted React and Babel.

---

## How to Navigate

The app has two main views, toggled at the top: **Search** and **Apps**.

### Search

Type a natural language query or click any suggestion pill. The search demonstrates how AI assembles answers from multiple enterprise systems (ERP, Quality Systems, Contract CLM, Market Feeds) in real time.

**Try these queries:**
- `Compare HVAC suppliers Southeast` — triggers the agent thinking animation, then shows a side-by-side supplier comparison
- `Find alternative HVAC suppliers and compare TCO to ThermoFlow` — surfaces alternative suppliers with total cost of ownership analysis
- `HVAC supplier quality scorecards` — returns supplier cards with quality, delivery, and cost scores
- `Warranty spend by supplier` — shows warranty spend table with defect rates
- `Upcoming contract expirations` — lists contracts approaching renewal
- `High-risk supplier exposure` — flags suppliers with financial or delivery risk

**Morning Briefing** appears below the search bar before any query is entered. It shows priority-coded notifications (commodity price drops, delivery misses, contract deadlines) that demonstrate the shift from pull-based search to push-based proactive intelligence.

### Apps

Four tabs inside the Apps view:

#### Opportunity Hopper
A pipeline of 9 savings opportunities across 4 categories:
- **Commodity Changes** — copper, steel, wire rod price movements
- **Contract Renewals** — upcoming expirations with negotiation context
- **Supply Chain Risks** — tariff exposure, supplier financial health
- **VAVE** — value analysis and spec consolidation

Filter by classification or status (Viewed, Investigating, Under Progress, Completed).

**Click any commodity opportunity** to see the full drill-down: commodity price movement, unit price impact, TCO breakdown, affected parts, and recommended actions. The **"Draft Email"** button is fully interactive and generates a supplier negotiation email pre-filled with cost data.

#### Cost Management
Three cost models (Cabin HVAC Module, Main Wiring Harness, Front Door Panel). Click any model to see:
- Zero-Based Cost breakdown with market benchmarks for each component
- Total Cost of Ownership analysis (unit price + quality + logistics + inventory + admin + tariff)
- Gap percentage vs benchmark

#### Triggers
Six pre-configured triggers (commodity price drops, contract expiry, financial health decline, tariffs, quality defects, engineering spec changes). Toggle triggers on/off and create custom triggers with the "+ New Trigger" form.

#### Impact Intelligence
Savings tracking from identification through verified financial impact:
- Pipeline funnel: $2.96M Identified → $1.82M In Progress → $920K Verified
- Quarterly trend across Q3 2025, Q4 2025, Q1 2026
- Savings breakdown by category (HVAC, Electronics, Steel, Fasteners)
- Verified savings table with individual line items
- Roll-up views: Individual Contributor, Director, C-Suite

---

## What's Interactive vs Display-Only

| Feature | Interactive |
|---------|-----------|
| Search queries | ✅ Type or click suggestion pills |
| Agent thinking animation | ✅ Triggered on complex queries |
| Supplier comparison | ✅ Appears after agent completes on comparison queries |
| Morning briefing actions | ✅ Navigate to relevant sections |
| Opportunity Hopper filters | ✅ Filter by classification and status |
| Commodity drill-down | ✅ Click any commodity opportunity |
| Draft Email button | ✅ Opens modal with copy-to-clipboard |
| Cost model drill-down | ✅ Click any cost model |
| Trigger toggles | ✅ Enable/disable triggers |
| New Trigger form | ✅ Create custom triggers |
| Impact dashboard views | ✅ Switch between IC/Director/C-Suite |
| Launch RFP button | Display only (Coming Soon) |
| Add to Backlog button | Display only (Coming Soon) |

---

## Tech Stack

- React 18.2.0 (CDN)
- ReactDOM 18.2.0 (CDN)
- Babel Standalone 7.23.9 (in-browser JSX compilation)
- DM Sans font (Google Fonts)
- No build step. No npm. No framework. Single HTML file.

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/BadriV1/procurement-prototype.git
cd procurement-prototype

# Open directly in browser
open index.html

# Or serve locally
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment

Connected to Vercel. Push to main and it auto-deploys in ~15 seconds.

```bash
git add .
git commit -m "description of changes"
git push
```
