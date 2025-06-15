# Spendwise-AI – AI-Powered Financial Insight Web App (Frontend MVP)

## 🧠 Project Summary

**Spendwise-AI** is a solo-developed React web app deployed on Vercel:  
🔗 [https://spendwise-ai-beta.vercel.app](https://spendwise-ai-beta.vercel.app)

It enables users to upload financial documents (PDFs, Excels, CSVs) and visualize spending insights using AI-style summaries and charts. All backend logic is mocked for now.

---

## 👤 Target Users

- Small business owners
- Individual investors
- Financial consultants
- Freelancers managing expenses

---

## ✅ MVP Features (Frontend Only)

| Feature | Description |
|--------|-------------|
| ✅ Landing page | Hero section with intro, sample insights, CTA to upload |
| ✅ File upload section | Drag-and-drop + file list preview |
| ✅ Dashboard | Interactive insights, charts, filters |
| ✅ View toggle | Aggregated vs individual toggle |
| ✅ Category filters | Filter spend view by categories |
| ✅ Mock AI insight cards | Static insights displayed in styled cards |

---

## 🔧 Tech Stack

- React (via Vite)
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com) for polished components
- Recharts for data visualizations
- Framer Motion for simple UI transitions
- Heroicons for icons

---

## 🌐 Deployment

The live preview is hosted on Vercel:
🔗 https://spendwise-ai-beta.vercel.app/

Use this deployment link as a visual reference to align code generation and style suggestions. Codex/Cursor should inspect the live layout and UI states when responding.

---

## 📦 Data Mocked in `constants.js`

```js
export const MOCK_EXPENSE_DATA = [
  { category: 'Marketing', amount: 1500 },
  { category: 'Travel', amount: 700 },
  { category: 'Tech', amount: 2000 },
];

export const MOCK_CHART_DATA = [
  { month: 'Jan', Marketing: 800, Travel: 500, Tech: 1000 },
  { month: 'Feb', Marketing: 1000, Travel: 700, Tech: 1300 },
];

export const MOCK_INSIGHTS = [
  "📈 Tech spend was the highest this quarter.",
  "💡 Travel reduced by 22% in Feb.",
  "⚠️ Marketing spend increased by 25% over Jan.",
];

🛠️ Project Structure
css
Copy
Edit
src/
├── components/
│   ├── FileUploader.jsx
│   ├── ChartPanel.jsx
│   ├── InsightCard.jsx
│   ├── ToggleView.jsx
│   └── FilterDropdown.jsx
├── pages/
│   ├── Landing.jsx
│   └── Dashboard.jsx
├── constants.js
├── App.jsx
└── index.js

🧪 UI Behavior (Live Preview)
Visit spendwise-ai-beta.vercel.app to:

Observe layout spacing, padding, and interactivity

Match component colors and behavior

Preview chart positioning, toggles, and filters


🚧 Current Status
Fully static frontend deployed on Vercel

Backend, parsing, and AI features not implemented yet

All data flows mocked
