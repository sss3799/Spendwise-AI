import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { MOCK_EXPENSE_DATA, MOCK_CHART_DATA } from "../constants";

const dataPie = MOCK_EXPENSE_DATA.map((d) => ({ name: d.category, value: d.amount }));
const dataBar = MOCK_CHART_DATA.map((d) => ({ name: d.month, value: d.Marketing + d.Travel + d.Tech }));

const COLORS = ["#60a5fa", "#10b981", "#facc15"];

function ChartPanel({ type, category = "All" }) {
  if (type === "donut") {
    const filteredPie =
      category && category !== "All"
        ? dataPie.filter((d) => d.name === category)
        : dataPie;
    return (
      <div className="h-64 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 backdrop-blur-md transition-colors">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie dataKey="value" data={filteredPie} innerRadius={40} outerRadius={80}>
              {filteredPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (

    <div className="h-64 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 backdrop-blur-md transition-colors">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataBar}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="url(#barGradient)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPanel;
