import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ToggleView from "../components/ToggleView";
import ChartPanel from "../components/ChartPanel";
import InsightCard from "../components/InsightCard";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-40 bg-gray-200 rounded" />
            <div className="h-32 bg-gray-200 rounded" />
          </div>
        ) : (
          <>
            <ToggleView />
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <ChartPanel type="donut" />
              <ChartPanel type="bar" />
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <InsightCard text="You overspent in Tech by 32%" />
              <InsightCard text="Marketing spend decreased 10%" />
              <InsightCard text="Travel costs stable" />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
