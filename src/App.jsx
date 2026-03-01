import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const CREATORS = [
  { id: "c1", name: "Chef Maria Gonzalez", photo: "👩‍🍳", story: "Former Eleven Madison Park sous chef. Specializes in globally-inspired bowls with clean, whole ingredients.", rating: 4.9, reviews: 847, badges: ["Organic", "High-Protein"], specialty: "Global Bowls", type: "chef" },
  { id: "c2", name: "NourishLab", photo: "🧪", story: "Science-backed meal prep for performance athletes and GLP-1 users. Every macro dialed in.", rating: 4.7, reviews: 1203, badges: ["GLP-1 Friendly", "Macro-Tracked"], specialty: "Performance Nutrition", type: "provider" },
  { id: "c3", name: "Green Table Co.", photo: "🌿", story: "100% plant-based kitchen. Seasonal menus sourced from local farms within 50 miles.", rating: 4.8, reviews: 562, badges: ["Plant-Based", "Organic"], specialty: "Plant-Forward", type: "provider" },
  { id: "c4", name: "Chef Kento Yamada", photo: "🍱", story: "Japanese-trained chef bringing bento-style packaged meals to American homes.", rating: 4.9, reviews: 391, badges: ["Low-Calorie", "Allergen-Free"], specialty: "Japanese Bento", type: "chef" },
];

const MEALS = [
  { id: "m1", creatorId: "c1", name: "Lemon Herb Chicken Bowl", type: "Dinner", price: 12.99, cal: 520, protein: 42, carbs: 48, fat: 14, rating: 4.9, reviews: 234, badges: ["High-Protein"], img: "🍗", shelfLife: 5, reheat: "Microwave 2.5 min" },
  { id: "m2", creatorId: "c1", name: "Mediterranean Quinoa Bowl", type: "Lunch", price: 11.49, cal: 460, protein: 28, carbs: 52, fat: 16, rating: 4.8, reviews: 189, badges: ["Plant-Based"], img: "🥗", shelfLife: 5, reheat: "Microwave 2 min" },
  { id: "m3", creatorId: "c1", name: "Shakshuka Breakfast Bowl", type: "Breakfast", price: 10.99, cal: 380, protein: 22, carbs: 34, fat: 18, rating: 4.7, reviews: 156, badges: ["Keto"], img: "🍳", shelfLife: 4, reheat: "Oven 8 min" },
  { id: "m4", creatorId: "c2", name: "High-Protein Turkey Meatballs", type: "Dinner", price: 13.49, cal: 490, protein: 52, carbs: 32, fat: 12, rating: 4.8, reviews: 312, badges: ["High-Protein", "GLP-1 Friendly"], img: "🧆", shelfLife: 6, reheat: "Microwave 3 min" },
  { id: "m5", creatorId: "c2", name: "Macro-Perfect Salmon Plate", type: "Lunch", price: 14.49, cal: 510, protein: 44, carbs: 38, fat: 18, rating: 4.9, reviews: 278, badges: ["High-Protein"], img: "🐟", shelfLife: 5, reheat: "Oven 10 min" },
  { id: "m6", creatorId: "c2", name: "Egg White & Turkey Bacon Cup", type: "Breakfast", price: 9.99, cal: 280, protein: 32, carbs: 12, fat: 10, rating: 4.6, reviews: 198, badges: ["Low-Calorie", "GLP-1 Friendly"], img: "🥚", shelfLife: 4, reheat: "Microwave 1.5 min" },
  { id: "m7", creatorId: "c3", name: "Thai Coconut Curry Bowl", type: "Dinner", price: 12.49, cal: 440, protein: 18, carbs: 54, fat: 20, rating: 4.8, reviews: 201, badges: ["Plant-Based"], img: "🍛", shelfLife: 5, reheat: "Microwave 2.5 min" },
  { id: "m8", creatorId: "c3", name: "Harvest Buddha Bowl", type: "Lunch", price: 11.99, cal: 410, protein: 16, carbs: 58, fat: 14, rating: 4.7, reviews: 167, badges: ["Plant-Based", "Organic"], img: "🥙", shelfLife: 5, reheat: "Microwave 2 min" },
  { id: "m9", creatorId: "c3", name: "Açaí Protein Smoothie Bowl", type: "Breakfast", price: 10.49, cal: 340, protein: 14, carbs: 48, fat: 12, rating: 4.9, reviews: 289, badges: ["Plant-Based"], img: "🫐", shelfLife: 3, reheat: "No reheat needed" },
  { id: "m10", creatorId: "c4", name: "Teriyaki Chicken Bento", type: "Dinner", price: 13.99, cal: 480, protein: 38, carbs: 52, fat: 12, rating: 4.9, reviews: 178, badges: ["Low-Calorie"], img: "🍱", shelfLife: 5, reheat: "Microwave 2.5 min" },
  { id: "m11", creatorId: "c4", name: "Miso Glazed Salmon Bento", type: "Lunch", price: 14.99, cal: 500, protein: 40, carbs: 46, fat: 16, rating: 4.9, reviews: 145, badges: ["High-Protein"], img: "🍣", shelfLife: 5, reheat: "Oven 8 min" },
  { id: "m12", creatorId: "c4", name: "Tamagoyaki Morning Set", type: "Breakfast", price: 10.99, cal: 320, protein: 20, carbs: 30, fat: 14, rating: 4.8, reviews: 112, badges: ["Allergen-Free"], img: "🥞", shelfLife: 4, reheat: "Microwave 1.5 min" },
  { id: "m13", creatorId: "c2", name: "Protein Energy Bites (6pk)", type: "Snack", price: 7.99, cal: 180, protein: 16, carbs: 18, fat: 6, rating: 4.5, reviews: 89, badges: ["High-Protein", "GLP-1 Friendly"], img: "🟤", shelfLife: 7, reheat: "No reheat needed" },
  { id: "m14", creatorId: "c3", name: "Matcha Chia Pudding", type: "Snack", price: 6.99, cal: 220, protein: 8, carbs: 28, fat: 10, rating: 4.7, reviews: 134, badges: ["Plant-Based"], img: "🍵", shelfLife: 5, reheat: "No reheat needed" },
  { id: "m15", creatorId: "c1", name: "Spiced Chickpea Crunch Cup", type: "Snack", price: 6.49, cal: 190, protein: 10, carbs: 22, fat: 8, rating: 4.6, reviews: 78, badges: ["Plant-Based"], img: "🫘", shelfLife: 7, reheat: "No reheat needed" },
  { id: "m16", creatorId: "c4", name: "Edamame Mochi Bites", type: "Snack", price: 7.49, cal: 160, protein: 8, carbs: 24, fat: 4, rating: 4.7, reviews: 93, badges: ["Low-Calorie"], img: "🍡", shelfLife: 5, reheat: "No reheat needed" },
];

const SAMPLERS = [
  { id: "s1", creatorId: "c1", name: "Chef Maria's Starter Pack", meals: ["m1", "m2", "m3", "m15"], price: 35.99, originalPrice: 41.96 },
  { id: "s2", creatorId: "c2", name: "NourishLab Performance Trial", meals: ["m4", "m5", "m6", "m13"], price: 38.99, originalPrice: 45.96 },
  { id: "s3", creatorId: "c4", name: "Kento's Bento Box Sampler", meals: ["m10", "m11", "m12", "m16"], price: 40.99, originalPrice: 47.46 },
];

const REVIEWS_DATA = [
  { user: "Alex M.", rating: 5, text: "The lemon herb chicken is incredible. Better than most restaurants.", date: "2 days ago", meal: "m1" },
  { user: "Sarah K.", rating: 5, text: "Finally found my weeknight dinner solution. Ordering every week now.", date: "5 days ago", meal: "m1" },
  { user: "James R.", rating: 4, text: "Great macros, tastes way better than other meal prep I've tried.", date: "1 week ago", meal: "m4" },
  { user: "Priya T.", rating: 5, text: "The bento presentation is beautiful. My kids loved it.", date: "3 days ago", meal: "m10" },
  { user: "Mike D.", rating: 5, text: "As a GLP-1 user, these portion sizes are exactly what I need.", date: "4 days ago", meal: "m6" },
];

const SAMPLE_PLAN = {
  active: true, type: "weekly", frequency: "2x", nextDelivery: "Tue, Mar 3", nextWindow: "10 AM – 12 PM",
  secondDelivery: "Thu, Mar 5", secondWindow: "2 PM – 4 PM",
  meals: [
    { mealId: "m3", day: "Tue", type: "Breakfast" }, { mealId: "m5", day: "Tue", type: "Lunch" },
    { mealId: "m1", day: "Tue", type: "Dinner" }, { mealId: "m9", day: "Thu", type: "Breakfast" },
    { mealId: "m11", day: "Thu", type: "Lunch" }, { mealId: "m7", day: "Thu", type: "Dinner" },
    { mealId: "m13", day: "Thu", type: "Snack" },
  ],
  totalWeekly: 89.43, createdDate: "Feb 15, 2026", weeksActive: 2,
};

const DIET_FILTERS = ["High-Protein", "Keto", "Plant-Based", "GLP-1 Friendly", "Low-Calorie", "Allergen-Free"];
const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"];

const S = {
  black: "#000", white: "#FFF", gray50: "#F6F6F6", gray100: "#EEE", gray200: "#E2E2E2",
  gray300: "#CCC", gray400: "#ABABAB", gray500: "#767676", gray600: "#545454", gray700: "#333",
  green: "#06C167", greenLight: "#E6F9EF", greenDark: "#048848", blue: "#276EF1", uberOne: "#005E3A",
  red: "#E11900", star: "#FFC043",
};

const typeEmojis = { Breakfast: "☀️", Lunch: "🥪", Dinner: "🍽️", Snack: "🍿" };

// ─── Micro Components ────────────────────────────────────────────────────────

const Star = ({ rating, size = 12 }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill={S.star}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    <span style={{ fontSize: size, fontWeight: 500 }}>{rating}</span>
  </span>
);

const Tag = ({ text, v = "default" }) => {
  const c = { default: [S.gray100, S.gray700], green: [S.greenLight, S.greenDark], blue: ["#EBF0FF", "#1A3FC7"], orange: ["#FFF3ED", "#C43E00"] }[v] || [S.gray100, S.gray700];
  return <span style={{ display: "inline-block", padding: "3px 8px", borderRadius: 100, fontSize: 11, fontWeight: 500, background: c[0], color: c[1], whiteSpace: "nowrap" }}>{text}</span>;
};

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedTab, setSelectedTab] = useState("All");
  const [viewMode, setViewMode] = useState("meals");
  const [activeDiet, setActiveDiet] = useState(null);
  const [activeSort, setActiveSort] = useState("Recommended");
  const [expandedMealType, setExpandedMealType] = useState(null);
  const [mealTypeQty, setMealTypeQty] = useState({ Breakfast: 0, Lunch: 0, Dinner: 0, Snack: 0 });
  const [cart, setCart] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [creatorTab, setCreatorTab] = useState("menu");
  const [deliveryFreq, setDeliveryFreq] = useState("1x");
  const [planType, setPlanType] = useState(null);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [toast, setToast] = useState(null);

  const flash = (m) => { setToast(m); setTimeout(() => setToast(null), 2000); };
  const addToCart = (meal) => { setCart(p => { const e = p.find(c => c.id === meal.id); if (e) return p.map(c => c.id === meal.id ? { ...c, qty: c.qty + 1 } : c); return [...p, { ...meal, qty: 1 }]; }); flash(`${meal.name} added`); };
  const removeFromCart = (id) => setCart(p => p.map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c).filter(c => c.qty > 0));
  const cartTotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const deliveryFee = cartCount >= 4 ? 0 : 3.99;
  const cartCountByType = (t) => cart.filter(c => c.type === t).reduce((s, c) => s + c.qty, 0);

  const goPackaged = () => { setScreen("packaged"); setSelectedTab("Packaged Meals"); };

  // ─── Status Bar ─────────────────────────────────────────────────────────

  const StatusBar = () => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 28px 0", background: S.white, position: "relative", zIndex: 10 }}>
      <span style={{ fontSize: 15, fontWeight: 600 }}>10:14</span>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 4, width: 120, height: 30, background: S.black, borderRadius: 20 }} />
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="5" width="3" height="7" rx=".5" fill={S.black} /><rect x="4.5" y="3" width="3" height="9" rx=".5" fill={S.black} /><rect x="9" y="1" width="3" height="11" rx=".5" fill={S.gray300} /><rect x="13.5" y="0" width="3" height="12" rx=".5" fill={S.gray300} /></svg>
        <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 2.5C10.5 2.5 12.7 3.6 14.2 5.3" stroke={S.black} strokeWidth="1.5" fill="none" /><path d="M8 5.5C9.5 5.5 10.8 6.2 11.7 7.2" stroke={S.black} strokeWidth="1.5" fill="none" /><circle cx="8" cy="10" r="1.5" fill={S.black} /></svg>
        <svg width="24" height="12" viewBox="0 0 24 12"><rect x="0" y="1" width="20" height="10" rx="2" stroke={S.black} strokeWidth="1.2" fill="none" /><rect x="21" y="3.5" width="2" height="5" rx="1" fill={S.black} /><rect x="1.5" y="2.5" width="5" height="7" rx="1" fill={S.black} /></svg>
      </div>
    </div>
  );

  // ─── Bottom Nav ─────────────────────────────────────────────────────────

  const BottomNav = () => (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around", alignItems: "center", padding: "8px 0 28px", background: S.white, borderTop: `1px solid ${S.gray200}`, zIndex: 100 }}>
      {[{ i: "🏠", l: "Home", a: screen === "home" }, { i: "📋", l: "My Plan", a: screen === "myplan", dot: true }, { i: "🔍", l: "Search" }, { i: "🛒", l: "Cart", a: screen === "cart", badge: cartCount || null }, { i: "👤", l: "Account" }].map(n => (
        <button key={n.l} onClick={() => { if (n.l === "Home") { setScreen("home"); setSelectedTab("All"); } if (n.l === "My Plan") setScreen("myplan"); if (n.l === "Cart" && cartCount > 0) setScreen("cart"); }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", position: "relative", padding: 0, minWidth: 50 }}>
          <span style={{ fontSize: 20 }}>{n.i}</span>
          <span style={{ fontSize: 10, color: n.a ? S.black : S.gray500, fontWeight: n.a ? 600 : 400 }}>{n.l}</span>
          {n.badge && <span style={{ position: "absolute", top: -4, right: 2, background: S.green, color: S.white, fontSize: 9, fontWeight: 700, width: 17, height: 17, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>{n.badge}</span>}
          {n.dot && !n.badge && <span style={{ position: "absolute", top: -1, right: 10, width: 7, height: 7, borderRadius: 4, background: S.green }} />}
        </button>
      ))}
    </div>
  );

  const CartFloat = () => {
    if (cartCount === 0 || screen === "cart" || screen === "checkout") return null;
    return <button onClick={() => setScreen("cart")} style={{ position: "absolute", bottom: 88, left: 16, right: 16, zIndex: 99, background: S.black, color: S.white, border: "none", borderRadius: 12, padding: "13px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontSize: 14, fontWeight: 600, boxShadow: "0 4px 20px rgba(0,0,0,.3)" }}>
      <span style={{ background: S.green, color: S.white, borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700 }}>{cartCount}</span><span>View Cart</span><span>${cartTotal.toFixed(2)}</span>
    </button>;
  };

  const ToastEl = () => toast ? <div style={{ position: "absolute", bottom: 96, left: "50%", transform: "translateX(-50%)", zIndex: 200, background: S.gray700, color: S.white, padding: "10px 24px", borderRadius: 10, fontSize: 13, fontWeight: 500, boxShadow: "0 4px 16px rgba(0,0,0,.25)", animation: "toastIn .25s ease", whiteSpace: "nowrap" }}>✓ {toast}</div> : null;

  // ═══════════════════════════════════════════════════════════════════════════
  // HOME SCREEN — matches original first JSX
  // ═══════════════════════════════════════════════════════════════════════════

  function HomeScreen() {
    const tabs = [
      { e: "🍽️", l: "All" }, { e: "🚗", l: "Rides" }, { e: "🍊", l: "Grocery" },
      { e: "🥦", l: "Packaged Meals", isNew: true }, { e: "🏪", l: "Convenience" },
    ];
    const cats = [{ e: "🍽️", l: "Dine Out" }, { e: "▶️", l: "Explore" }, { e: "🫓", l: "Indian" }, { e: "🍜", l: "Thai" }, { e: "🍕", l: "Pizza" }, { e: "💚", l: "Healthy" }];
    const feat = MEALS.filter(m => m.rating >= 4.8).slice(0, 4);

    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 140 }}>
        {/* Address */}
        <div style={{ padding: "10px 16px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ fontSize: 16, fontWeight: 600 }}>4142 24th St</span><span style={{ fontSize: 12, color: S.gray500 }}>▼</span></div>
          <div style={{ position: "relative" }}><span style={{ fontSize: 22 }}>🔔</span><span style={{ position: "absolute", top: -4, right: -4, background: S.green, color: S.white, fontSize: 9, fontWeight: 700, width: 16, height: 16, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>2</span></div>
        </div>

        {/* Top Tabs */}
        <div style={{ display: "flex", gap: 8, padding: "4px 16px 12px", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t.l} onClick={() => { setSelectedTab(t.l); if (t.l === "Packaged Meals") goPackaged(); }}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 100, border: `1.5px solid ${selectedTab === t.l ? S.black : S.gray200}`, background: selectedTab === t.l ? S.black : S.white, color: selectedTab === t.l ? S.white : S.black, cursor: "pointer", whiteSpace: "nowrap", fontSize: 13, fontWeight: 500, position: "relative", flexShrink: 0 }}>
              <span>{t.e}</span> {t.l}
              {t.isNew && <span style={{ position: "absolute", top: -6, right: -4, background: S.green, color: S.white, fontSize: 8, fontWeight: 700, padding: "1px 5px", borderRadius: 6 }}>NEW</span>}
            </button>
          ))}
        </div>

        {/* Category Row */}
        <div style={{ display: "flex", gap: 20, padding: "4px 16px 8px", overflowX: "auto" }}>
          {cats.map(c => <div key={c.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}><span style={{ fontSize: 32 }}>{c.e}</span><span style={{ fontSize: 12, color: S.gray700 }}>{c.l}</span></div>)}
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", gap: 8, padding: "8px 16px", overflowX: "auto" }}>
          {["Uber One", "Pickup", "Offers", "Under 30 min"].map(f => (
            <span key={f} style={{ padding: "7px 14px", borderRadius: 100, border: `1.5px solid ${S.gray200}`, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
              {f === "Uber One" && <svg width={14} height={14} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill={S.uberOne} /><path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>} {f}
            </span>
          ))}
        </div>

        {/* Packaged Meals Banner */}
        <div onClick={goPackaged} style={{ margin: "12px 16px", borderRadius: 16, cursor: "pointer", background: "linear-gradient(135deg,#E6F9EF,#D4F5E4,#C2F0D8)", border: `1px solid ${S.green}22`, position: "relative", overflow: "hidden" }}>
          <div style={{ padding: "18px 18px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}><Tag text="NEW" v="green" /><span style={{ fontSize: 11, color: S.greenDark, fontWeight: 600, letterSpacing: .5 }}>PACKAGED MEALS</span></div>
            <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>Chef-prepared meals,<br />delivered fresh weekly</div>
            <div style={{ fontSize: 13, color: S.gray600, marginBottom: 10, lineHeight: 1.4 }}>From $10/meal · No subscription required · 5–7 day shelf life</div>
            <div style={{ display: "flex", gap: 6 }}><Tag text="High-Protein" v="green" /><Tag text="Plant-Based" v="green" /><Tag text="GLP-1 Friendly" v="green" /></div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 18px 12px" }}><span style={{ background: S.black, color: S.white, padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 600 }}>Browse Meals →</span></div>
          <div style={{ position: "absolute", top: 14, right: 14, fontSize: 56, opacity: .15 }}>🥗</div>
        </div>

        {/* Active Plan */}
        {SAMPLE_PLAN.active && (
          <div onClick={() => setScreen("myplan")} style={{ margin: "0 16px 12px", padding: "14px 16px", borderRadius: 12, background: S.gray50, border: `1px solid ${S.gray200}`, cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: S.green, display: "inline-block" }} /><span style={{ fontSize: 14, fontWeight: 600 }}>Your Meal Plan</span></div>
              <span style={{ fontSize: 12, color: S.green, fontWeight: 600 }}>Manage ›</span>
            </div>
            <div style={{ fontSize: 12, color: S.gray600 }}>Next delivery: {SAMPLE_PLAN.nextDelivery} · {SAMPLE_PLAN.meals.length} meals · {SAMPLE_PLAN.frequency}/week</div>
          </div>
        )}

        {/* Featured on Uber Eats */}
        <div style={{ padding: "8px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><span style={{ fontSize: 18, fontWeight: 700 }}>Featured on Uber Eats</span><span style={{ fontSize: 20, color: S.gray400 }}>→</span></div>
          <div style={{ display: "flex", gap: 12, overflowX: "auto" }}>
            {[{ n: "Nene's Taqueria", f: "$0 Delivery Fee", t: "31 min", b: "Best Overall", tag: "Buy 1, get 1", img: "🌮" }, { n: "Chocolate House", f: "$0 Delivery Fee", t: "39 min", r: "4.7", rv: "2,000+", tag: "Buy 1, get 1", img: "🍫" }].map(r => (
              <div key={r.n} style={{ minWidth: 220, flexShrink: 0 }}>
                <div style={{ height: 140, borderRadius: 12, background: S.gray100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, position: "relative" }}>{r.img}<span style={{ position: "absolute", top: 8, left: 8, background: S.red, color: S.white, padding: "3px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>🏷️ {r.tag}</span></div>
                <div style={{ padding: "8px 0" }}><div style={{ fontSize: 15, fontWeight: 600 }}>{r.n}</div><div style={{ fontSize: 13, color: S.gray500 }}><span style={{ color: S.green }}>⊙</span> {r.f} · {r.t}</div>{r.b && <span style={{ fontSize: 12, color: S.gray600 }}>🏆 {r.b}</span>}{r.r && <span style={{ fontSize: 13 }}> ⭐ {r.r} ({r.rv})</span>}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Rated Packaged Meals */}
        <div style={{ padding: "8px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><span style={{ fontSize: 18, fontWeight: 700 }}>Top Rated Packaged Meals 🔥</span><span onClick={goPackaged} style={{ fontSize: 13, color: S.green, fontWeight: 600, cursor: "pointer" }}>See all</span></div>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4 }}>
            {feat.map(m => { const cr = CREATORS.find(c => c.id === m.creatorId); return (
              <div key={m.id} onClick={() => { setSelectedMeal(m); setScreen("meal"); }} style={{ minWidth: 160, flexShrink: 0, cursor: "pointer" }}>
                <div style={{ height: 120, borderRadius: 12, background: S.gray50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative" }}>{m.img}<span style={{ position: "absolute", top: 8, left: 8, background: S.green, color: S.white, padding: "2px 7px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>NEW</span></div>
                <div style={{ padding: "6px 0" }}><div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{m.name}</div><div style={{ fontSize: 12, color: S.gray500, marginTop: 2 }}>{cr.name}</div><div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}><Star rating={m.rating} size={11} /><span style={{ fontSize: 11, color: S.gray500 }}>({m.reviews})</span></div><div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>${m.price}</div></div>
              </div>); })}
          </div>
        </div>

        {/* Places you might like */}
        <div style={{ padding: "16px 16px 8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><span style={{ fontSize: 18, fontWeight: 700 }}>Places you might like</span><span style={{ fontSize: 20, color: S.gray400 }}>→</span></div>
          <div style={{ display: "flex", gap: 12, overflowX: "auto" }}>
            {[{ n: "Saffron Kitchen", tag: "$4.50 off", t: "28 min", img: "🍲" }, { n: "Basilico", tag: "Buy 1, get 1", t: "35 min", img: "🍝" }].map(r => (
              <div key={r.n} style={{ minWidth: 220, flexShrink: 0 }}>
                <div style={{ height: 140, borderRadius: 12, background: S.gray100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, position: "relative" }}>{r.img}<span style={{ position: "absolute", top: 8, left: 8, background: S.red, color: S.white, padding: "3px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{r.tag}</span></div>
                <div style={{ padding: "8px 0" }}><div style={{ fontSize: 15, fontWeight: 600 }}>{r.n}</div><div style={{ fontSize: 13, color: S.gray500 }}>{r.t}</div></div>
              </div>
            ))}
          </div>
        </div>

        {showPromo && <div style={{ position: "absolute", bottom: cartCount > 0 ? 138 : 84, left: 0, right: 0, margin: "0 10px", padding: "12px 16px", background: S.white, borderRadius: 12, boxShadow: "0 -2px 20px rgba(0,0,0,.1)", display: "flex", alignItems: "center", gap: 12, zIndex: 50 }}><span style={{ fontSize: 32 }}>🍊</span><div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600 }}>40% off (up to $25)</div><div style={{ fontSize: 12, color: S.green, fontWeight: 500 }}>Expires in 3 days</div></div><button onClick={e => { e.stopPropagation(); setShowPromo(false); }} style={{ background: "none", border: "none", fontSize: 18, color: S.gray400, cursor: "pointer" }}>✕</button></div>}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PACKAGED MEALS SCREEN
  // Layout: Meal type chips + accordion → Diet filters → Meals|Chefs|Providers → Samplers → Content
  // ═══════════════════════════════════════════════════════════════════════════

  function PackagedMealsScreen() {
    const getFilteredMeals = () => {
      let m = [...MEALS];
      if (activeDiet) m = m.filter(ml => ml.badges.includes(activeDiet));
      if (activeSort === "Top Rated") m.sort((a, b) => b.rating - a.rating);
      if (activeSort === "Price: Low→High") m.sort((a, b) => a.price - b.price);
      return m;
    };
    const filtered = getFilteredMeals();

    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 140 }}>
        {/* Header */}
        <div style={{ padding: "8px 16px 4px", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => { setScreen("home"); setSelectedTab("All"); }} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", padding: 0 }}>←</button>
          <div><div style={{ fontSize: 20, fontWeight: 700 }}>Packaged Meals</div><div style={{ fontSize: 12, color: S.gray500 }}>Chef-prepared · Fresh · No subscription</div></div>
        </div>

        {/* ── 1. Meal Type Chips + Accordion ── */}
        <div style={{ padding: "8px 16px 4px" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: S.gray600, marginBottom: 6 }}>Select meal type & quantity</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 6, overflowX: "auto" }}>
            {MEAL_TYPES.map(type => {
              const isActive = expandedMealType === type;
              const qty = mealTypeQty[type];
              const filled = cartCountByType(type);
              const done = qty > 0 && filled >= qty;
              return (
                <button key={type} onClick={() => setExpandedMealType(isActive ? null : type)}
                  style={{
                    display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", borderRadius: 12,
                    border: `1.5px solid ${isActive ? S.black : done ? S.green : S.gray200}`,
                    background: done ? S.greenLight : isActive ? S.gray50 : S.white,
                    cursor: "pointer", flexShrink: 0, fontSize: 13, fontWeight: 600,
                    color: done ? S.greenDark : S.black,
                  }}>
                  <span style={{ fontSize: 16 }}>{typeEmojis[type]}</span>
                  {type}
                  {qty > 0 && <span style={{ background: done ? S.green : S.black, color: S.white, fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 8, marginLeft: 2 }}>{filled}/{qty}</span>}
                </button>
              );
            })}
          </div>

          {/* Accordion dropdown for selected meal type */}
          {expandedMealType && (
            <div style={{ padding: "10px 14px", marginBottom: 8, borderRadius: 12, border: `1.5px solid ${S.black}`, background: S.gray50 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{typeEmojis[expandedMealType]} {expandedMealType}</div>
                  <div style={{ fontSize: 12, color: S.gray500, marginTop: 2 }}>How many {expandedMealType.toLowerCase()} meals do you want?</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }} onClick={e => e.stopPropagation()}>
                  <button onClick={() => setMealTypeQty(p => ({ ...p, [expandedMealType]: Math.max(0, p[expandedMealType] - 1) }))}
                    style={{ width: 32, height: 32, borderRadius: 16, border: `1.5px solid ${mealTypeQty[expandedMealType] > 0 ? S.gray300 : S.gray200}`, background: S.white, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: mealTypeQty[expandedMealType] > 0 ? S.black : S.gray300 }}>−</button>
                  <span style={{ fontSize: 20, fontWeight: 700, minWidth: 20, textAlign: "center" }}>{mealTypeQty[expandedMealType]}</span>
                  <button onClick={() => setMealTypeQty(p => ({ ...p, [expandedMealType]: Math.min(6, p[expandedMealType] + 1) }))}
                    style={{ width: 32, height: 32, borderRadius: 16, border: "none", background: S.black, color: S.white, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                </div>
              </div>
              {mealTypeQty[expandedMealType] > 0 && (
                <div style={{ fontSize: 12, color: S.green, fontWeight: 500, marginTop: 6 }}>
                  ✓ {cartCountByType(expandedMealType)} of {mealTypeQty[expandedMealType]} selected — browse {expandedMealType.toLowerCase()} meals below
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── 2. Diet Filter Chips ── */}
        <div style={{ display: "flex", gap: 6, padding: "0 16px 8px", overflowX: "auto" }}>
          {DIET_FILTERS.map(f => (
            <button key={f} onClick={() => setActiveDiet(activeDiet === f ? null : f)}
              style={{ padding: "5px 10px", borderRadius: 100, fontSize: 11, fontWeight: 500, border: `1.5px solid ${activeDiet === f ? S.black : S.gray200}`, background: activeDiet === f ? S.black : S.white, color: activeDiet === f ? S.white : S.black, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>{f}</button>
          ))}
        </div>

        {/* ── 3. Meals | Chefs | Meal Providers toggle ── */}
        <div style={{ margin: "0 16px 10px", display: "flex", borderRadius: 10, overflow: "hidden", border: `1px solid ${S.gray200}` }}>
          {[{ k: "meals", l: "Meals" }, { k: "chefs", l: "Chefs" }, { k: "providers", l: "Meal Providers" }].map(v => (
            <button key={v.k} onClick={() => setViewMode(v.k)}
              style={{ flex: 1, padding: "8px 0", fontSize: 12, fontWeight: 600, background: viewMode === v.k ? S.black : S.white, color: viewMode === v.k ? S.white : S.gray600, border: "none", cursor: "pointer" }}>{v.l}</button>
          ))}
        </div>

        {/* ── 4. Samplers ── */}
        <div style={{ padding: "0 16px 12px" }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>🎁 Or try a Sampler — No Commitment</div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
            {SAMPLERS.map(s => {
              const cr = CREATORS.find(c => c.id === s.creatorId);
              return (
                <div key={s.id} onClick={() => { s.meals.forEach(mid => { const m = MEALS.find(mm => mm.id === mid); if (m) addToCart(m); }); }}
                  style={{ minWidth: 190, flexShrink: 0, padding: 12, borderRadius: 12, border: `1.5px solid ${S.green}44`, background: S.greenLight, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: S.gray600, marginBottom: 6 }}>4 meals by {cr.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: S.greenDark }}>${s.price}</span>
                    <span style={{ fontSize: 12, color: S.gray400, textDecoration: "line-through" }}>${s.originalPrice}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 5. Content: Meals / Chefs / Providers ── */}
        {viewMode === "meals" && (
          <div style={{ padding: "0 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>
                {expandedMealType && mealTypeQty[expandedMealType] > 0 ? `${expandedMealType} Meals` : "All Meals"}
              </span>
              <select value={activeSort} onChange={e => setActiveSort(e.target.value)} style={{ fontSize: 11, fontWeight: 500, border: `1px solid ${S.gray200}`, borderRadius: 8, padding: "4px 8px", color: S.gray700, background: S.white }}>
                {["Recommended", "Top Rated", "Price: Low→High", "Newest"].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {(expandedMealType && mealTypeQty[expandedMealType] > 0 ? filtered.filter(m => m.type === expandedMealType) : filtered).map(m => {
                const cr = CREATORS.find(c => c.id === m.creatorId);
                const inCart = cart.find(c => c.id === m.id);
                const typeFull = mealTypeQty[m.type] > 0 && cartCountByType(m.type) >= mealTypeQty[m.type] && !inCart;
                return (
                  <div key={m.id} style={{ opacity: typeFull ? .45 : 1 }}>
                    <div onClick={() => { setSelectedMeal(m); setScreen("meal"); }}
                      style={{ height: 100, borderRadius: 12, background: S.gray50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, position: "relative", cursor: "pointer" }}>
                      {m.img}
                      {m.badges.includes("GLP-1 Friendly") && <span style={{ position: "absolute", top: 6, left: 6, background: "#6B4EFF", color: S.white, padding: "2px 6px", borderRadius: 4, fontSize: 9, fontWeight: 700 }}>GLP-1</span>}
                    </div>
                    <div style={{ padding: "5px 0" }}>
                      <div onClick={() => { setSelectedMeal(m); setScreen("meal"); }} style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.3, cursor: "pointer" }}>{m.name}</div>
                      <div style={{ fontSize: 11, color: S.gray500 }}>{cr.name}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}><Star rating={m.rating} size={10} /><span style={{ fontSize: 10, color: S.gray500 }}>· {m.cal}cal · {m.protein}g P</span></div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>${m.price}</span>
                        {inCart ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }} onClick={e => e.stopPropagation()}>
                            <button onClick={() => removeFromCart(m.id)} style={{ width: 24, height: 24, borderRadius: 12, border: `1.5px solid ${S.gray300}`, background: S.white, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                            <span style={{ fontSize: 13, fontWeight: 600 }}>{inCart.qty}</span>
                            <button onClick={() => addToCart(m)} style={{ width: 24, height: 24, borderRadius: 12, border: "none", background: S.black, color: S.white, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                          </div>
                        ) : (
                          <button onClick={e => { e.stopPropagation(); if (!typeFull) addToCart(m); }}
                            style={{ width: 26, height: 26, borderRadius: 13, border: "none", background: typeFull ? S.gray300 : S.black, color: S.white, fontSize: 15, cursor: typeFull ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(viewMode === "chefs" || viewMode === "providers") && (
          <div style={{ padding: "0 16px" }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{viewMode === "chefs" ? "Chefs" : "Meal Providers"}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CREATORS.filter(c => viewMode === "chefs" ? c.type === "chef" : c.type === "provider").map(c => (
                <div key={c.id} onClick={() => { setSelectedCreator(c); setCreatorTab("menu"); setScreen("creator"); }}
                  style={{ padding: 14, borderRadius: 14, border: `1px solid ${S.gray200}`, cursor: "pointer", display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 26, background: S.gray100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{c.photo}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</span><Tag text={c.type === "chef" ? "Chef" : "Provider"} v={c.type === "chef" ? "blue" : "green"} /></div>
                    <div style={{ fontSize: 12, color: S.gray500, marginTop: 2 }}>{c.specialty}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}><Star rating={c.rating} size={10} /><span style={{ fontSize: 10, color: S.gray500 }}>({c.reviews})</span></div>
                    <div style={{ display: "flex", gap: 4, marginTop: 5, flexWrap: "wrap" }}>{c.badges.map(b => <Tag key={b} text={b} />)}</div>
                  </div>
                  <span style={{ color: S.gray400, fontSize: 18 }}>›</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CREATOR, MEAL DETAIL, CART, CHECKOUT, MY PLAN
  // ═══════════════════════════════════════════════════════════════════════════

  function CreatorScreen() {
    if (!selectedCreator) return null;
    const meals = MEALS.filter(m => m.creatorId === selectedCreator.id);
    const sampler = SAMPLERS.find(s => s.creatorId === selectedCreator.id);
    const revs = REVIEWS_DATA.filter(r => meals.some(m => m.id === r.meal));
    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 140 }}>
        <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: 12 }}><button onClick={() => setScreen("packaged")} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>←</button><span style={{ fontSize: 16, fontWeight: 700 }}>{selectedCreator.type === "chef" ? "Chef" : "Meal Provider"}</span></div>
        <div style={{ padding: "0 16px 16px", textAlign: "center" }}>
          <div style={{ width: 68, height: 68, borderRadius: 34, background: S.gray100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, margin: "0 auto 10px" }}>{selectedCreator.photo}</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><span style={{ fontSize: 18, fontWeight: 700 }}>{selectedCreator.name}</span><Tag text={selectedCreator.type === "chef" ? "Chef" : "Provider"} v={selectedCreator.type === "chef" ? "blue" : "green"} /></div>
          <div style={{ fontSize: 13, color: S.gray500, marginTop: 4, lineHeight: 1.4, padding: "0 16px" }}>{selectedCreator.story}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 8 }}><Star rating={selectedCreator.rating} size={13} /><span style={{ fontSize: 12, color: S.gray500 }}>({selectedCreator.reviews})</span></div>
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 8 }}>{selectedCreator.badges.map(b => <Tag key={b} text={b} v="green" />)}</div>
        </div>
        <div style={{ display: "flex", borderBottom: `1px solid ${S.gray200}` }}>
          {["menu", "sampler", "reviews"].map(t => <button key={t} onClick={() => setCreatorTab(t)} style={{ flex: 1, padding: "10px 0", fontSize: 13, fontWeight: creatorTab === t ? 700 : 400, color: creatorTab === t ? S.black : S.gray500, background: "none", border: "none", borderBottom: creatorTab === t ? `2px solid ${S.black}` : "none", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>)}
        </div>
        <div style={{ padding: "12px 16px" }}>
          {creatorTab === "menu" && meals.map(m => { const ic = cart.find(c => c.id === m.id); return (
            <div key={m.id} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${S.gray100}`, cursor: "pointer" }} onClick={() => { setSelectedMeal(m); setScreen("meal"); }}>
              <div style={{ width: 72, height: 72, borderRadius: 10, background: S.gray50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>{m.img}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</div><div style={{ fontSize: 12, color: S.gray500, marginTop: 2 }}>{m.cal} cal · {m.protein}g P · {m.type}</div><div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}><Star rating={m.rating} size={10} /><span style={{ fontSize: 10, color: S.gray500 }}>({m.reviews})</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}><span style={{ fontSize: 14, fontWeight: 600 }}>${m.price}</span>
                  {ic ? <div onClick={e => e.stopPropagation()} style={{ display: "flex", alignItems: "center", gap: 6 }}><button onClick={() => removeFromCart(m.id)} style={{ width: 24, height: 24, borderRadius: 12, border: `1.5px solid ${S.gray300}`, background: S.white, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button><span style={{ fontSize: 13, fontWeight: 600 }}>{ic.qty}</span><button onClick={() => addToCart(m)} style={{ width: 24, height: 24, borderRadius: 12, border: "none", background: S.black, color: S.white, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button></div> : <button onClick={e => { e.stopPropagation(); addToCart(m); }} style={{ width: 30, height: 30, borderRadius: 15, border: "none", background: S.black, color: S.white, fontSize: 17, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>}
                </div></div>
            </div>); })}
          {creatorTab === "sampler" && sampler && (
            <div style={{ padding: 16, borderRadius: 14, border: `1.5px solid ${S.green}55`, background: S.greenLight }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{sampler.name}</div><div style={{ fontSize: 13, color: S.gray600, marginBottom: 10 }}>4 meals at a discount</div>
              {sampler.meals.map(mid => { const m = MEALS.find(mm => mm.id === mid); return <div key={mid} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0" }}><span style={{ fontSize: 20 }}>{m.img}</span><span style={{ fontSize: 13, flex: 1 }}>{m.name}</span><span style={{ fontSize: 11, color: S.gray500 }}>{m.cal} cal</span></div>; })}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}><span style={{ fontSize: 18, fontWeight: 700, color: S.greenDark }}>${sampler.price}</span><span style={{ fontSize: 14, color: S.gray400, textDecoration: "line-through" }}>${sampler.originalPrice}</span></div>
              <button onClick={() => sampler.meals.forEach(mid => { const m = MEALS.find(mm => mm.id === mid); if (m) addToCart(m); })} style={{ width: "100%", marginTop: 12, padding: "12px 0", borderRadius: 10, background: S.black, color: S.white, border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Add Sampler to Cart</button>
            </div>
          )}
          {creatorTab === "sampler" && !sampler && <div style={{ textAlign: "center", padding: 30, color: S.gray500, fontSize: 14 }}>No sampler available yet.</div>}
          {creatorTab === "reviews" && (revs.length === 0 ? <div style={{ textAlign: "center", padding: 30, color: S.gray500, fontSize: 14 }}>No reviews yet.</div> : revs.map((r, i) => <div key={i} style={{ padding: "12px 0", borderBottom: `1px solid ${S.gray100}` }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontWeight: 600, fontSize: 13 }}>{r.user}</span><Star rating={r.rating} size={10} /><span style={{ fontSize: 11, color: S.gray400, marginLeft: "auto" }}>{r.date}</span></div><div style={{ fontSize: 13, color: S.gray600, marginTop: 4, lineHeight: 1.4 }}>{r.text}</div></div>))}
        </div>
      </div>
    );
  }

  function MealDetailScreen() {
    if (!selectedMeal) return null;
    const cr = CREATORS.find(c => c.id === selectedMeal.creatorId);
    const revs = REVIEWS_DATA.filter(r => r.meal === selectedMeal.id);
    const ic = cart.find(c => c.id === selectedMeal.id);
    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 100 }}>
        <div style={{ padding: "8px 16px" }}><button onClick={() => setScreen(selectedCreator ? "creator" : "packaged")} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>←</button></div>
        <div style={{ height: 180, background: S.gray50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>{selectedMeal.img}</div>
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>{selectedMeal.name}</div>
          <div onClick={() => { setSelectedCreator(cr); setCreatorTab("menu"); setScreen("creator"); }} style={{ fontSize: 13, color: S.green, fontWeight: 500, marginTop: 4, cursor: "pointer" }}>by {cr.name} ›</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}><Star rating={selectedMeal.rating} size={13} /><span style={{ fontSize: 13, color: S.gray500 }}>({selectedMeal.reviews} reviews)</span></div>
          <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>{selectedMeal.badges.map(b => <Tag key={b} text={b} v="green" />)}<Tag text={selectedMeal.type} /></div>
          <div style={{ marginTop: 16, padding: 14, borderRadius: 12, background: S.gray50 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>Nutrition per serving</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, textAlign: "center" }}>
              {[{ l: "Calories", v: selectedMeal.cal, u: "" }, { l: "Protein", v: selectedMeal.protein, u: "g" }, { l: "Carbs", v: selectedMeal.carbs, u: "g" }, { l: "Fat", v: selectedMeal.fat, u: "g" }].map(n => <div key={n.l}><div style={{ fontSize: 18, fontWeight: 700 }}>{n.v}{n.u}</div><div style={{ fontSize: 11, color: S.gray500 }}>{n.l}</div></div>)}
            </div>
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {[{ l: "Reheat", v: selectedMeal.reheat }, { l: "Shelf life", v: `${selectedMeal.shelfLife} days` }, { l: "Storage", v: "Refrigerate upon delivery" }].map(d => <div key={d.l} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span style={{ color: S.gray500 }}>{d.l}</span><span style={{ fontWeight: 500 }}>{d.v}</span></div>)}
          </div>
          {revs.length > 0 && <div style={{ marginTop: 16 }}><div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Reviews</div>{revs.map((r, i) => <div key={i} style={{ padding: "10px 0", borderBottom: `1px solid ${S.gray100}` }}><div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ fontSize: 13, fontWeight: 600 }}>{r.user}</span><Star rating={r.rating} size={10} /><span style={{ fontSize: 11, color: S.gray400, marginLeft: "auto" }}>{r.date}</span></div><div style={{ fontSize: 13, color: S.gray600, marginTop: 4, lineHeight: 1.4 }}>{r.text}</div></div>)}</div>}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px 32px", background: S.white, borderTop: `1px solid ${S.gray200}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><div style={{ fontSize: 20, fontWeight: 700 }}>${selectedMeal.price}</div><div style={{ fontSize: 11, color: S.gray500 }}>per meal</div></div>
          {ic ? <div style={{ display: "flex", alignItems: "center", gap: 10 }}><button onClick={() => removeFromCart(selectedMeal.id)} style={{ width: 30, height: 30, borderRadius: 15, border: `1.5px solid ${S.gray300}`, background: S.white, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button><span style={{ fontSize: 16, fontWeight: 700 }}>{ic.qty}</span><button onClick={() => addToCart(selectedMeal)} style={{ width: 30, height: 30, borderRadius: 15, border: "none", background: S.black, color: S.white, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button></div> : <button onClick={() => addToCart(selectedMeal)} style={{ padding: "12px 32px", borderRadius: 10, background: S.black, color: S.white, border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Add to Cart</button>}
        </div>
      </div>
    );
  }

  function CartScreen() {
    const min = cartCount >= 4;
    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 160 }}>
        <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: 12 }}><button onClick={() => setScreen("packaged")} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>←</button><span style={{ fontSize: 18, fontWeight: 700 }}>Your Cart</span><span style={{ fontSize: 13, color: S.gray500, marginLeft: "auto" }}>{cartCount} meals</span><button onClick={() => { setCart([]); flash("Cart cleared"); }} style={{ fontSize: 12, color: S.red, fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}>Clear</button></div>
        {!min && <div style={{ margin: "8px 16px", padding: "10px 14px", borderRadius: 10, background: "#FFF3ED", border: "1px solid #FFD0B8" }}><span style={{ fontSize: 13, color: "#C43E00", fontWeight: 500 }}>Add {4 - cartCount} more meal{4 - cartCount > 1 ? "s" : ""} to meet the 4-meal minimum</span></div>}
        <div style={{ padding: "8px 16px" }}>
          {cart.map(item => { const cr = CREATORS.find(c => c.id === item.creatorId); return (
            <div key={item.id} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: `1px solid ${S.gray100}`, alignItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 10, background: S.gray50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{item.img}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600 }}>{item.name}</div><div style={{ fontSize: 11, color: S.gray500 }}>{cr.name} · {item.cal} cal</div></div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}><button onClick={() => removeFromCart(item.id)} style={{ width: 24, height: 24, borderRadius: 12, border: `1.5px solid ${S.gray300}`, background: S.white, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button><span style={{ fontSize: 13, fontWeight: 600 }}>{item.qty}</span><button onClick={() => addToCart(item)} style={{ width: 24, height: 24, borderRadius: 12, border: "none", background: S.black, color: S.white, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button></div>
              <span style={{ fontSize: 13, fontWeight: 600, minWidth: 48, textAlign: "right" }}>${(item.price * item.qty).toFixed(2)}</span>
            </div>); })}
        </div>
        <div style={{ padding: 16 }}><div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Delivery Frequency</div><div style={{ display: "flex", gap: 8 }}>{["1x", "2x"].map(f => <button key={f} onClick={() => setDeliveryFreq(f)} style={{ flex: 1, padding: 12, borderRadius: 10, border: deliveryFreq === f ? `2px solid ${S.black}` : `1.5px solid ${S.gray200}`, background: deliveryFreq === f ? S.gray50 : S.white, cursor: "pointer", textAlign: "center" }}><div style={{ fontSize: 14, fontWeight: 600 }}>{f}/week</div><div style={{ fontSize: 11, color: S.gray500, marginTop: 2 }}>{f === "1x" ? "All in one delivery" : "Split for freshness"}</div></button>)}</div></div>
        <div style={{ padding: "0 16px 16px" }}><div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Make it a plan? <span style={{ fontSize: 12, fontWeight: 400, color: S.gray500 }}>(Optional)</span></div><div style={{ display: "flex", gap: 8 }}>{[{ k: null, l: "One-time" }, { k: "weekly", l: "Weekly" }, { k: "monthly", l: "Monthly" }].map(p => <button key={p.k || "x"} onClick={() => setPlanType(p.k)} style={{ flex: 1, padding: 10, borderRadius: 10, border: planType === p.k ? `2px solid ${S.green}` : `1.5px solid ${S.gray200}`, background: planType === p.k ? S.greenLight : S.white, cursor: "pointer", fontSize: 13, fontWeight: 500 }}>{p.l}</button>)}</div>{planType && <div style={{ fontSize: 12, color: S.green, marginTop: 6 }}>✓ Skip, swap, pause, or cancel anytime — no penalty</div>}</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px 32px", background: S.white, borderTop: `1px solid ${S.gray200}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: S.gray600, marginBottom: 4 }}><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}><span style={{ color: S.gray600 }}>Delivery</span><span style={{ color: deliveryFee === 0 ? S.green : S.gray600, fontWeight: deliveryFee === 0 ? 600 : 400 }}>{deliveryFee === 0 ? "FREE with Uber One" : `$${deliveryFee.toFixed(2)}`}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700, marginBottom: 10 }}><span>Total</span><span>${(cartTotal + deliveryFee).toFixed(2)}</span></div>
          <button onClick={() => { if (min) setScreen("checkout"); }} style={{ width: "100%", padding: "14px 0", borderRadius: 10, background: min ? S.black : S.gray300, color: S.white, border: "none", fontSize: 15, fontWeight: 600, cursor: min ? "pointer" : "not-allowed" }}>{min ? "Continue to Checkout" : `Add ${4 - cartCount} more`}</button>
        </div>
      </div>
    );
  }

  function CheckoutScreen() {
    if (checkoutDone) return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
        <div style={{ fontSize: 60, marginBottom: 16 }}>🎉</div><div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Order Confirmed!</div>
        <div style={{ fontSize: 14, color: S.gray600, marginBottom: 8 }}>Your {cartCount} meals are being prepared.</div>
        <div style={{ fontSize: 13, color: S.gray500, marginBottom: 4 }}>Delivery: Tuesday, 10 AM – 12 PM</div>
        {planType && <div style={{ fontSize: 13, color: S.green, fontWeight: 500 }}>✓ {planType === "weekly" ? "Weekly" : "Monthly"} plan created</div>}
        <button onClick={() => { setCart([]); setPlanType(null); setCheckoutDone(false); setScreen("home"); setSelectedTab("All"); setMealTypeQty({ Breakfast: 0, Lunch: 0, Dinner: 0, Snack: 0 }); setExpandedMealType(null); }} style={{ marginTop: 24, padding: "12px 32px", borderRadius: 10, background: S.black, color: S.white, border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Back to Home</button>
      </div>
    );
    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 120 }}>
        <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: 12 }}><button onClick={() => setScreen("cart")} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>←</button><span style={{ fontSize: 18, fontWeight: 700 }}>Checkout</span></div>
        <div style={{ padding: "12px 16px", borderBottom: `1px solid ${S.gray100}` }}><div style={{ fontSize: 13, color: S.gray500, marginBottom: 4 }}>Deliver to</div><div style={{ fontSize: 15, fontWeight: 600 }}>4142 24th St</div></div>
        <div style={{ padding: "12px 16px", borderBottom: `1px solid ${S.gray100}` }}><div style={{ fontSize: 13, color: S.gray500, marginBottom: 4 }}>Delivery window</div><div style={{ display: "flex", gap: 8 }}>{["Tue 10–12 PM", "Wed 2–4 PM", "Thu 10–12 PM"].map((w, i) => <span key={w} style={{ padding: "8px 12px", borderRadius: 8, fontSize: 12, fontWeight: 500, border: i === 0 ? `2px solid ${S.black}` : `1px solid ${S.gray200}`, background: i === 0 ? S.gray50 : S.white }}>{w}</span>)}</div></div>
        <div style={{ padding: "12px 16px" }}><div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Order Summary</div>{cart.map(item => <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13 }}><span>{item.qty}x {item.name}</span><span style={{ fontWeight: 500 }}>${(item.price * item.qty).toFixed(2)}</span></div>)}<div style={{ borderTop: `1px solid ${S.gray200}`, marginTop: 10, paddingTop: 10 }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}><span>Delivery</span><span style={{ color: S.green, fontWeight: 600 }}>FREE</span></div>{planType && <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: S.green }}><span>Plan</span><span>{planType === "weekly" ? "Weekly" : "Monthly"}</span></div>}</div></div>
        <div style={{ padding: "12px 16px", borderTop: `1px solid ${S.gray100}` }}><div style={{ fontSize: 13, color: S.gray500, marginBottom: 4 }}>Payment</div><div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 20 }}>💳</span><span style={{ fontSize: 14, fontWeight: 500 }}>•••• 4242</span><span style={{ fontSize: 12, color: S.blue, marginLeft: "auto", cursor: "pointer" }}>Change</span></div></div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px 32px", background: S.white, borderTop: `1px solid ${S.gray200}` }}><button onClick={() => setCheckoutDone(true)} style={{ width: "100%", padding: "14px 0", borderRadius: 10, background: S.black, color: S.white, border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Place Order · ${(cartTotal + deliveryFee).toFixed(2)}</button></div>
      </div>
    );
  }

  function MyPlanScreen() {
    const p = SAMPLE_PLAN;
    const renderDel = (label, meals, date, win) => (
      <div style={{ padding: "0 16px", marginBottom: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>📦 {label}<span style={{ fontSize: 12, fontWeight: 400, color: S.gray500 }}>· {date}, {win}</span></div>
        <div style={{ borderRadius: 12, border: `1px solid ${S.gray200}`, overflow: "hidden" }}>
          {meals.map((pm, i) => { const meal = MEALS.find(m => m.id === pm.mealId); const cr = CREATORS.find(c => c.id === meal.creatorId); return (
            <div key={pm.mealId} style={{ display: "flex", gap: 12, padding: "10px 14px", alignItems: "center", borderBottom: i < meals.length - 1 ? `1px solid ${S.gray100}` : "none" }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: S.gray50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{meal.img}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600 }}>{meal.name}</div><div style={{ fontSize: 11, color: S.gray500 }}>{cr.name} · {meal.cal} cal</div></div>
              <Tag text={pm.type} /><span style={{ fontSize: 13, fontWeight: 600 }}>${meal.price}</span>
            </div>); })}
        </div>
      </div>
    );
    return (
      <div style={{ height: "100%", overflowY: "auto", paddingBottom: 100 }}>
        <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: 12 }}><button onClick={() => setScreen("home")} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>←</button><span style={{ fontSize: 18, fontWeight: 700 }}>My Meal Plan</span></div>
        <div style={{ margin: "4px 16px 12px", padding: "14px 16px", borderRadius: 14, background: S.greenLight, border: `1px solid ${S.green}33` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}><div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 4, background: S.green, display: "inline-block" }} /><span style={{ fontSize: 15, fontWeight: 700, color: S.greenDark }}>Active — Weekly Plan</span></div><Tag text={`${p.weeksActive} weeks`} v="green" /></div>
          <div style={{ fontSize: 12, color: S.gray600 }}>Created {p.createdDate} · {p.frequency}/week · {p.meals.length} meals</div><div style={{ fontSize: 14, fontWeight: 600, marginTop: 6 }}>${p.totalWeekly.toFixed(2)}/week</div>
        </div>
        {renderDel("Delivery 1", p.meals.filter(m => m.day === "Tue"), p.nextDelivery, p.nextWindow)}
        {renderDel("Delivery 2", p.meals.filter(m => m.day === "Thu"), p.secondDelivery, p.secondWindow)}
        <div style={{ margin: "0 16px 16px", padding: "14px 16px", borderRadius: 12, background: S.gray50 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Weekly Summary</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, textAlign: "center" }}>
            {[{ l: "Meals", v: p.meals.length }, { l: "Avg Cal", v: Math.round(p.meals.reduce((s, pm) => s + (MEALS.find(m => m.id === pm.mealId)?.cal || 0), 0) / p.meals.length) }, { l: "Avg Protein", v: Math.round(p.meals.reduce((s, pm) => s + (MEALS.find(m => m.id === pm.mealId)?.protein || 0), 0) / p.meals.length) + "g" }].map(n => <div key={n.l}><div style={{ fontSize: 18, fontWeight: 700 }}>{n.v}</div><div style={{ fontSize: 11, color: S.gray500 }}>{n.l}</div></div>)}
          </div>
        </div>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          {[{ l: "Edit Meals", d: "Swap before 48-hr cutoff", i: "✏️" }, { l: "Skip Next Week", d: "One tap, no penalty", i: "⏭️" }, { l: "Change Frequency", d: "Currently 2x/week", i: "📅" }, { l: "Pause Plan", d: "1–4 weeks", i: "⏸️" }, { l: "Cancel Plan", d: "No penalty", i: "✕" }].map(a => (
            <div key={a.l} onClick={() => flash(a.l === "Skip Next Week" ? "Next week skipped!" : `${a.l} — coming soon`)}
              style={{ padding: "12px 14px", borderRadius: 10, border: `1px solid ${S.gray200}`, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
              <span style={{ fontSize: 18 }}>{a.i}</span><div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600 }}>{a.l}</div><div style={{ fontSize: 11, color: S.gray500 }}>{a.d}</div></div><span style={{ color: S.gray400, fontSize: 16 }}>›</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════

  const R = { home: HomeScreen, packaged: PackagedMealsScreen, creator: CreatorScreen, meal: MealDetailScreen, cart: CartScreen, checkout: CheckoutScreen, myplan: MyPlanScreen };
  const Screen = R[screen] || HomeScreen;

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#0a0a0a,#1a1a2e,#16213e)", padding: "40px 20px", fontFamily: "'SF Pro Display',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{display:none}@keyframes fadeIn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>
      <div>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "#666", textTransform: "uppercase", marginBottom: 4 }}>Uber Eats</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>Packaged Meals — Interactive Prototype</div>
          <div style={{ fontSize: 13, color: "#888", marginTop: 6 }}>Tap "🥦 Packaged Meals" or the green banner to explore</div>
        </div>
        <div style={{ width: 393, height: 852, borderRadius: 44, overflow: "hidden", background: S.white, position: "relative", boxShadow: "0 25px 80px rgba(0,0,0,.25),0 0 0 10px #1a1a1a,0 0 0 12px #333" }}>
          <StatusBar />
          <div style={{ height: "calc(100% - 44px)", position: "relative", overflow: "hidden" }}>
            <Screen />
            <CartFloat />
            <ToastEl />
            {screen !== "checkout" && <BottomNav />}
          </div>
        </div>
      </div>
    </div>
  );
}
