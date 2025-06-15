
---

## 🤖 `agents.md` (Updated with Vercel reference + modern stack)

```md
# Spendwise-AI – Developer Agent Instructions (Codex/Cursor + Vercel-aware)

## 🧠 Objective

You are an AI assistant helping build the frontend of **Spendwise-AI**, a solo-developed React dashboard app for financial insights.

🟢 Live version:  
🔗 https://spendwise-ai-beta.vercel.app

Use this link to visually align your code suggestions (especially layout, Tailwind utility choices, chart placement, and interactivity) to match what’s already built.

---

## ✅ Design Stack (Use This)

| Area | Library |
|------|---------|
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Icons | Heroicons |
| Charts | Recharts |
| Animations | Framer Motion |
| Routing | React Router DOM |

---

## 📦 Key Component Types

| Component | Role |
|----------|------|
| `FileUploader.jsx` | Drag-drop UI with icon, preview list, and process button |
| `InsightCard.jsx` | Shows one-line AI-style summary in a styled shadcn Card |
| `ChartPanel.jsx` | Donut chart and bar chart visualizations with dummy data |
| `ToggleView.jsx` | Tabs or Switch to toggle Aggregated/Individual view |
| `FilterDropdown.jsx` | Dropdown to filter insights by category |

---

## 🔍 Agent Behavior

1. Use shadcn/ui for layout components: `Card`, `Tabs`, `Switch`, `DropdownMenu`, etc.
2. Use Tailwind utilities for responsiveness, spacing, shadow, and muted backgrounds.
3. Use Heroicons SVGs inside interactive elements.
4. Charts should use `ResponsiveContainer` in Recharts with labeled legends.
5. Use Framer Motion for smooth UI transitions (e.g., toggling views or showing insights).

---

## 📘 Prompt Examples to Use

- "Design a shadcn `Card` with a large emoji, bold category title, and short insight"
- "Generate a donut chart using Recharts with 3 categories from MOCK_EXPENSE_DATA"
- "Make a responsive drag-drop file uploader styled with Tailwind (no backend)"
- "Create tabs from shadcn/ui to switch between Aggregated and Individual insights"

---

## 🔄 Navigation Flow

| Route | Behavior |
|-------|----------|
| `/` | Landing screen with welcome message, sample insights, and upload section |
| `/dashboard` | Filterable, toggleable view of charts + summaries using dummy data |

---

## ⚠️ Don’t Implement Yet

- File parsing
- Real AI/LLM summarization
- Upload endpoints
- User login/auth

---

## 🧠 Use Vercel Preview for Visual Sync

Before generating UI:
- Visit [https://spendwise-ai-beta.vercel.app](https://spendwise-ai-beta.vercel.app)
- Review component alignment, spacing, visual language
- Then suggest layout-aware JSX code with matching Tailwind classes

---

## 🔮 Future Extensions

Later, you’ll:
- Parse uploaded files with backend
- Send data to LLM (OpenAI) and display insights dynamically
- Introduce user auth, real-time charts, and reports

Until then, help build a world-class **frontend experience** powered by mock data.
