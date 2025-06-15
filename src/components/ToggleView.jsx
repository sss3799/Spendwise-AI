import React, { useState } from "react";

function ToggleView() {
  const [view, setView] = useState("aggregated");
  return (
    <div className="flex items-center space-x-4">
      <span className={view === "aggregated" ? "font-semibold" : ""}>Aggregated View</span>
      <button
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setView(view === "aggregated" ? "individual" : "aggregated")}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            view === "aggregated" ? "translate-x-1" : "translate-x-6"
          }`}
        />
      </button>
      <span className={view === "individual" ? "font-semibold" : ""}>Individual View</span>
    </div>
  );
}

export default ToggleView;
