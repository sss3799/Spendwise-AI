import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ToggleView from "../components/ToggleView";
import ChartPanel from "../components/ChartPanel";
import InsightCard from "../components/InsightCard";
import ExportButton from "../components/ExportButton";
import FilterDropdown from "../components/FilterDropdown";
import { useProcess } from "../context/ProcessContext";

function Dashboard() {
  const { isProcessed } = useProcess();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (!isProcessed) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50 to-pink-50">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <p className="text-lg text-gray-700">Please upload files</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <Header />
      <main className="flex-grow p-6 md:p-10">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-40 bg-gray-200 rounded" />
            <div className="h-32 bg-gray-200 rounded" />
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-wrap">
              <ToggleView />
              <FilterDropdown onSelect={setFilter} />
              <ExportButton />
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <ChartPanel type="donut" category={filter} />
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
