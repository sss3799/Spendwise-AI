# Spendwise-AI Frontend (React) — README

## 📖 Project Overview
Spendwise-AI is a React-based frontend MVP for a financial insights dashboard. It displays mocked AI-style summaries and interactive visualizations of uploaded financial data (PDF, Excel, CSV). The backend parsing and real AI integration are not implemented yet; all data flows are mocked. The deployed preview is available at:  
https://spendwise-ai-beta.vercel.app/

This README also serves to guide AI coding assistants (Codex, Cursor, etc.) that work on this codebase: they should treat the existing code as the base, apply incremental improvements, and explore new ideas from the web while preserving the core structure.

---

## 🎯 Purpose & Scope
- **Frontend-only MVP**: Focus on React components, Tailwind CSS styling, shadcn/ui components, Recharts charts, Framer Motion animations.
- **Mock data**: Use `constants.js` for placeholder expense data, chart data, and insight strings.
- **No backend logic**: File upload UI is mocked; no actual parsing or API calls occur.
- **User flows**: Landing with sample visuals, file upload area (mocked), dashboard with toggles (Aggregated vs Individual), filters, chart panels, and insight cards.

---

## 🤖 AI Assistant Guidelines
To ensure AI helpers understand their role:
1. **Modify, don’t recreate**: When asked to generate or update code, integrate changes into existing files/components rather than scaffolding an entirely new project. Respect the current file structure and styles.
2. **Refer to live UI**: The deployed URL (https://spendwise-ai-beta.vercel.app/) reflects the present layout and styling. AI should inspect it (visually) and produce code that aligns with or improves upon it.
3. **Leverage context files**: Use `context.md` and `agents.md` in repository root. They describe project goals, tech stack, component conventions, and design patterns. AI should read those to maintain consistency.
4. **Experiment and innovate**: AI may suggest modern UI patterns or libraries found in the wild (from web research), but integrate them into the existing architecture. Proposals should be incremental and documented (e.g., adding a new component for a UX improvement).
5. **Consistent styling**: All UI changes must follow Tailwind CSS utilities and shadcn/ui conventions (rounded corners, shadows, spacing). Use Heroicons and Framer Motion for icons and subtle animations.
6. **Component-first approach**: When adding features, break them into reusable React components under `src/components/`. Do not lump code into large files.
7. **Responsiveness and accessibility**: Any updates should keep mobile-first responsive design and basic a11y (semantic elements, aria-labels, contrast).
8. **Testing changes locally**: After generating code, test against local dev server to ensure no regressions in layout or functionality. Use the live deployment as visual reference.
9. **Document changes**: When AI adds or modifies code, include comments explaining intent, especially for more advanced patterns or unfamiliar libraries.
10. **Version control etiquette**: Create branches or clear commit messages indicating the change purpose (e.g., `feat: improve file uploader drag-drop feedback`). Avoid rewriting existing history.

---

- **components/**: Reusable UI pieces. Follow PascalCase filenames. Use shadcn/ui components inside.
- **pages/**: High-level screens (Landing, Dashboard). Use React Router or conditional rendering.
- **constants.js**: Mock data for charts and insights.
- **context.md**: Global project context and guidelines.
- **agents.md**: Instructions for AI assistants on how to modify and extend.

---

## 🚀 Development & Local Testing
1. **Clone & Install**  
   ```bash
   git clone https://github.com/syed0711/Spendwise-AI.git
   cd Spendwise-AI
   npm install
