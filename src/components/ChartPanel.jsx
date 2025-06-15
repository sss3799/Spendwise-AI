import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const dataPie = [
  { name: "Marketing", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Tech", value: 300 },
];

const dataBar = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
];

const COLORS = ["#60a5fa", "#10b981", "#facc15"];

function ChartPanel({ type }) {
  if (type === "donut") {
    return (

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie dataKey="value" data={dataPie} innerRadius={40} outerRadius={80}>
              {dataPie.map((entry, index) => (
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

    <div className="h-64 p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
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
