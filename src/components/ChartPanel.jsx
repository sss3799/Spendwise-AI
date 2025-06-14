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
      <div className="h-64 p-4 border rounded">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie dataKey="value" data={dataPie} innerRadius={40} outerRadius={80}>
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-64 p-4 border rounded">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataBar}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPanel;
