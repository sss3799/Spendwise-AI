import React, { useState, useEffect } from "react";
import ToggleView from "../components/ToggleView";
import ChartPanel from "../components/ChartPanel";
import InsightCard from "../components/InsightCard";
import PageContainer from "../components/PageContainer";


function Dashboard() {
  const { isProcessed } = useProcess();
  const [loading, setLoading] = useState(true);
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
    <PageContainer className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <main className="flex-grow py-12">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-40 bg-gray-200 rounded" />
            <div className="h-32 bg-gray-200 rounded" />
          </div>
        ) : (
          <>
            <section className="mb-6">
              <ToggleView />
            </section>
            <section className="grid md:grid-cols-2 gap-6 py-12">
              <ChartPanel type="donut" />
              <ChartPanel type="bar" />
            </section>
            <section className="grid md:grid-cols-3 gap-6 py-12">
              <InsightCard text="You overspent in Tech by 32%" />
              <InsightCard text="Marketing spend decreased 10%" />
              <InsightCard text="Travel costs stable" />
            </section>
          </>
        )}
      </main>
    </PageContainer>
  );
}

export default Dashboard;
