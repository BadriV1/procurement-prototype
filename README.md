# Glean Procurement Intelligence Platform

An interactive prototype demonstrating AI-powered procurement intelligence built on Glean's enterprise infrastructure. Built for an engineering audience to show what's possible when you layer an agentic AI engine over procurement data.

**Live prototype:** https://procurement-prototype-eight.vercel.app/

---

## What This Demonstrates

Procurement managers spend 70%+ of their time in reactive mode: manually pulling data from ERPs, chasing down contract expiry dates, trying to connect commodity price movements to actual cost impact. The only alternative today is hiring McKinsey for a point-in-time analysis.

This prototype shows a different model. An always-on intelligence layer that watches your supplier network, monitors commodity markets, tracks contract lifecycles, and surfaces actionable opportunities before you think to ask.

---

## How to Navigate

The prototype has two main areas: **Search** and the **Procurement App**.

---

### Search Page

The entry point. Shows what it feels like to ask natural language questions across fragmented procurement data.

**What's interactive:**
- Type any query and hit Enter or click Search
- Click any suggestion pill to pre-fill a query
- Hit the **✕** button inside the search bar to clear results and return to the home state (works like Google)
- Results show which data sources were consulted (Enterprise Graph, ERP, Quality System, etc.)

**Suggestion pills are organized in two rows:**

| Row | Suggestions |
|-----|-------------|
| Top (HVAC-focused, highlighted) | Compare HVAC suppliers Southeast · Find alternative HVAC suppliers and compare TCO to ThermoFlow · HVAC supplier quality scorecards |
| Bottom | Warranty spend by supplier · Upcoming contract expirations · High-risk supplier exposure |

**Try these queries:**
| Query | What you'll see |
|-------|----------------|
| `HVAC supplier quality scorecards` | Supplier cards with quality, delivery, and cost scores |
| `Warranty spend by supplier` | Warranty cost table with defect rates |
| `Upcoming contract expirations` | Contracts at risk with dollar exposure |
| `High-risk supplier exposure` | Supply chain risk opportunities |
| `Compare HVAC suppliers Southeast` | **Triggers agent thinking + side-by-side comparison** |
| `Find alternative HVAC suppliers and compare TCO to ThermoFlow` | **Full agent execution demo** |

**Morning Briefing (visible before you search):**
The "Today's Briefing" panel shows proactive push notifications — commodity price movements, delivery misses, contract alerts. Click any action button to navigate directly to the relevant section of the app. This demonstrates the shift from pull (search) to push (intelligence).

**Agent Thinking Visualization (triggered on complex queries):**
When you type a comparative or multi-hop query, the Agentic Engine shows its step-by-step reasoning: planning → searching Enterprise Graph → pulling supplier data → running cost models → generating insights. Each step completes before the results appear.

---

### Procurement App

Click "Procurement App" in the top nav. Four tabs.

---

#### Opportunity Hopper

The AI-generated savings pipeline. Every opportunity was surfaced by monitoring commodity prices, contract expiry windows, supplier financial health, and engineering change notices.

**What's interactive:**
- **Classification filter** (first row): All · Commodity Changes · Contract Renewals · Supply Chain Risks · VAVE
- **Status filter** (second row, below classification): All · New · Viewed · In Progress · Completed
- Click any opportunity to open the detail view
- **Change status from inside any opportunity** — "In Progress" and "Completed" buttons appear at the bottom of every detail view. Status updates immediately and reflects back in the list.

**Opportunity cards show:**
- Classification type on the first badge row
- Status badge on its own row below
- Title, description preview, and estimated impact

**Commodity Change detail view** (click any Commodity Changes opportunity):
- Price movement cards: current vs 3 months ago vs 6 months ago
- Unit price impact: current material cost vs market benchmark vs savings/unit
- Total Cost of Ownership breakdown
- Affected parts list with SKU details

**✅ "Draft Email" is fully interactive** — opens a pre-written supplier negotiation email with all cost data populated. Copy to clipboard with one click.

⬜ "Launch RFP" and "Add to Backlog" are grayed out (Coming soon)

---

#### Cost Management

Zero-based costing and Total Cost of Ownership analysis for key components.

**What's interactive:**
- Search or filter by SKU ID, part name, or supplier
- Click any cost model to open the detail view showing ZBB breakdown and TCO analysis

**Three cost models available:** Cabin HVAC Module, Main Wiring Harness, Front Door Panel

---

#### Triggers

Automated signals that surface intelligence without requiring someone to manually check.

**What's interactive:**
- Toggle any trigger on or off
- **"+ New Trigger" button** opens a form to create a custom trigger

**Six pre-configured triggers:** Commodity Price Drop, Contract Expiry Alert, Supplier Financial Health, Section 301 Tariff Impact, Quality Defect Threshold, Engineering Spec Change

---

#### Impact Intelligence ✨

Closes the loop from identified opportunity to verified financial impact.

**What's interactive:**
- Toggle between **My View**, **Director**, and **C-Suite** roll-up views — all dollar values scale accordingly
- Pipeline waterfall: Identified ($2.96M) → In Progress ($1.82M) → Verified Savings ($920K)
- Quarterly trend chart: Q3 2025 through Q1 2026
- Category breakdown: HVAC, Electronics, Steel, Fasteners
- Verified savings log with individual line items

---

## What's Not Interactive (Display Only)

| Feature | Status |
|---------|--------|
| Launch RFP from opportunity detail | Coming soon |
| Add to Backlog from opportunity detail | Coming soon |
| Email send (copy-to-clipboard only) | By design |
| Trigger → Hopper automation | Display only |
| Real supplier / spend data | All data is illustrative |
| ERP / CLM integration | Simulated |

---

## Technical Details

```
procurement-prototype/
├── index.html     # Entire app — single file, no build step
├── vercel.json    # {"buildCommand":"","outputDirectory":"."}
├── README.md
└── .gitignore
```

**Stack:** React 18.2.0 + Babel Standalone (in-browser JSX compilation). No npm, no framework, no build step. All data is hardcoded.

**Deploy:** Edit `index.html` → `git add . && git commit -m "msg" && git push` → Vercel auto-deploys in ~30 seconds.

---

## Why Glean Makes This Possible

Everything in this prototype relies on capabilities that Glean already ships:

- **Enterprise Graph** — cross-system entity relationships that connect a copper price drop to a specific SKU to a specific contract to a specific supplier
- **100+ connectors** — ERP, quality systems, contract CLMs, supplier databases, commodity feeds all flowing into one graph
- **Agentic Engine** — multi-step reasoning that turns "compare HVAC suppliers" into a structured TCO analysis
- **MCP framework** — the action layer that can draft emails, trigger RFPs, and write to Coupa or SAP Ariba

No existing procurement tool connects these layers. Most stop at reporting. This shows what happens when you add an intelligence and execution layer on top.
