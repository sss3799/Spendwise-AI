# Spendwise-AI – Developer Agent Instructions (Codex/Cursor)

## 🧠 Objective

Assist in building a frontend-only React web app (Spendwise-AI) that shows users insightful, AI-style analysis of their uploaded financial data using **mocked data** and **static charts**.

The backend does not exist yet. All file handling and insights are mocked on the frontend.

---

## 🛠️ Rules of Engagement

1. **Use React + Tailwind CSS**
2. **Only build frontend logic with dummy data**
3. **Don’t implement actual parsing, AI, or API calls**
4. Components must be modular, readable, and minimal
5. State should be handled with `useState` or `useEffect`, not Redux or Context for now
6. Avoid complex animations — focus on smooth and usable UI

---

## 🧱 Components to Help Build

| Component | Role |
|----------|------|
| `FileUploader.jsx` | Drag-drop UI for PDFs, Excels, CSVs |
| `InsightCard.jsx` | Small card showing AI-style summaries |
| `ChartPanel.jsx` | Renders Recharts (donut, bar, line) |
| `ToggleView.jsx` | Toggle between Aggregated / Individual |
| `FilterDropdown.jsx` | Category-based filter dropdown |

---

## 🎯 Codex Prompt Examples to Use

You can tell Codex/Cursor:

- "Build a donut chart using Recharts and MOCK_EXPENSE_DATA"
- "Make a toggle button that switches between 'Aggregated' and 'Individual' views"
- "Design a mobile-friendly file uploader using Tailwind and React"
- "Create insight cards using strings from MOCK_INSIGHTS"

---

## 🗂️ Navigation Flow

- `/` → Welcome section + example charts → Upload → Go to dashboard
- `/dashboard` → Toggle views → Show insights → Show charts

---

## ⚠️ Out of Scope

- No real file reading/parsing
- No OpenAI integration yet
- No backend services
- No authentication/login

---

## 📌 Tips for Agents

- Use Tailwind for all layouts
- Keep data in `constants.js`
- Use `recharts` for charts (donut, bar, line)
- Keep all components inside `/components`
- Pages go inside `/pages`

---

## 🔮 Future Work

Once the backend is added:
- You’ll help with file parsing (PDF to JSON)
- LLM integration via OpenAI for real insights
- Dynamic data-driven dashboards

Until then: help scaffold UI flow and interactivity.

Repo: https://github.com/syed0711/Spendwise-AI
