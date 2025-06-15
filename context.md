# Spendwise-AI – AI-Powered Financial Insight Web App (Frontend MVP)

## 🧠 Project Summary

**Spendwise-AI** is a solo-developed React-based web application that lets users upload financial statements (PDFs, Excels, CSVs) and get visual + AI-powered insights from their data.

The goal is to help small businesses, individuals, and financial advisors understand:
- Where they’re spending money
- Which categories are costing more
- What insights can help optimize financial decisions

This MVP focuses on the **frontend only**. All data and insights are mocked for now.

---

## 👤 Target Users

- Individual investors
- Small business owners
- Financial analysts
- Freelancers and consultants

---

## 🔧 Tech Stack (Frontend Only)

- **Framework**: React (with functional components + hooks)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Charts**: Recharts
- **File Upload**: Drag-and-drop UI (mocked — no backend parsing yet)

---

## 📦 Core UI Features (MVP)

| Feature | Description |
|--------|-------------|
| ✅ Landing Page | Welcome header, example charts, and a CTA to upload |
| ✅ File Upload UI | Drag/drop or select PDFs, CSVs, Excels (stored in state only) |
| ✅ Dashboard View | Post-upload mock insights, filters, and interactive charts |
| ✅ View Toggle | Switch between Aggregated vs Individual analysis views |
| ✅ Category Filters | Filter insights by spend category |
| ✅ AI Insight Cards | Text-like insights (e.g. “Marketing spend increased 20%”) |

---

## 🧪 Sample Data in `constants.js`

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
```
