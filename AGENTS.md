# Spendwise-AI – Developer Agent Instructions (Codex/Cursor Optimized for Modern UI)

## 🧠 Objective

You are an AI development assistant helping build the **frontend-only MVP** of Spendwise-AI, a financial insights dashboard. Your focus is to generate clean, modern, and highly usable React components styled with **Tailwind CSS**, enhanced with **shadcn/ui**, and visualized using **Recharts**.

All backend functionality is mocked. All chart data and summaries are placeholder values from `constants.js`.

---

## 🧱 Use These Libraries and Design Patterns

| Purpose | Library/Pattern |
|--------|------------------|
| UI Framework | React (Vite preferred) |
| Styling | Tailwind CSS |
| Components | [shadcn/ui](https://ui.shadcn.com) |
| Icons | [Heroicons](https://heroicons.com) |
| Charts | Recharts |
| Animations | Framer Motion |
| Routing | React Router DOM |
| Data | Mocked in `constants.js` |

---

## 🔥 UI/UX Rules

- Use **shadcn/ui components** (like `Card`, `Tabs`, `Switch`, `Button`, `DropdownMenu`) to structure clean UIs
- Use **Tailwind spacing**, `rounded-2xl`, `shadow-md`, and `bg-muted/10` for soft, modern surfaces
- Make pages **mobile-first responsive**
- Use **grid or flex layouts** with gaps and section padding (`p-6`, `gap-4`, `grid-cols-2`, etc.)
- Add **skeleton loaders** for file upload and dashboard transitions
- Animate components with **Framer Motion**, especially for toggles or card transitions

---

## 🔧 Components to Build (Use shadcn/ui + Tailwind)

| Component | Notes |
|----------|-------|
| `FileUploader.jsx` | Use drag-and-drop zone with border-dashed, icon from Heroicons, and file preview list |
| `InsightCard.jsx` | Use `Card` from shadcn with emoji/icon, bold stat, and short insight sentence |
| `ChartPanel.jsx` | Use `ResponsiveContainer` from Recharts, support donut/bar views |
| `ToggleView.jsx` | Use `Switch` or `Tabs` from shadcn to toggle view modes |
| `FilterDropdown.jsx` | Use `DropdownMenu` from shadcn for category filters |

---

## 🧠 Prompt Examples for You (Codex/Cursor)

You can use these sample prompts to instruct Codex:

- "Create a drag-and-drop file uploader using Tailwind and Heroicons, styled with a dashed border and file preview"
- "Use `Card` from shadcn/ui to show a financial insight like '⚠️ Marketing overspend: ₹12,000'"
- "Add a donut chart from Recharts with static category data and legend on right"
- "Create a Tabs-based switcher to toggle Aggregated vs Individual views"
- "Use DropdownMenu from shadcn/ui to filter by category (Marketing, Tech, Travel)"

---

## 🗂️ Project Folder Guidelines

src/
│
├── components/
│ ├── FileUploader.jsx
│ ├── ChartPanel.jsx
│ ├── InsightCard.jsx
│ ├── ToggleView.jsx
│ └── FilterDropdown.jsx
│
├── pages/
│ ├── Landing.jsx
│ └── Dashboard.jsx
│
├── constants.js → holds MOCK_EXPENSE_DATA, MOCK_INSIGHTS
├── App.jsx
└── index.js


---

## ⚠️ Out of Scope

- No real backend parsing
- No OpenAI API integration
- No login/auth
- No Redux or global state for now

---

## 🔮 Future Additions

Once backend/API is added, you will:

- Send uploaded files to an endpoint
- Receive structured spend data
- Display LLM-generated summaries dynamically

But for now, focus on building **beautiful, mock-powered UI flows**.

---

## ✅ Visual Guidance for Output

| Visual | Example |
|--------|---------|
| Upload | Drag-drop box with folder icon, hover glow |
| Charts | Donut chart for spend by category, bar for monthly trends |
| Insight Cards | “⚠️ Travel spend dropped 20%” inside shadcn `Card` |
| Switch/Toggle | Tabs or switch from shadcn, labeled clearly |
| Filters | Dropdown with categories + checkboxes |

---

By following these conventions, Codex/Cursor will output **modern, production-like UI** components suitable for your app’s branding and usability.

Repo reference: [Spendwise-AI](https://github.com/syed0711/Spendwise-AI)
