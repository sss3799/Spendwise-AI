import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MOCK_CHART_DATA } from "../constants";

const data = MOCK_CHART_DATA.map((d) => ({
  name: d.month,
  value: d.Marketing + d.Travel + d.Tech,
}));

function TrendChart() {
  return (
    <div className="h-48 p-4 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#c7d2fe" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendChart;
