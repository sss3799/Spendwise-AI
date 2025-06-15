import React, { useState } from "react";
import { motion } from "framer-motion";

function ToggleView() {
  const [view, setView] = useState("aggregated");
  return (
    <div className="flex items-center space-x-4">
      <span className={view === "aggregated" ? "font-semibold" : ""}>Aggregated View</span>
      <button
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
        onClick={() => setView(view === "aggregated" ? "individual" : "aggregated")}
      >
        <motion.span
          className="inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-200"
          animate={{ x: view === "aggregated" ? 4 : 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </button>
      <span className={view === "individual" ? "font-semibold" : ""}>Individual View</span>
    </div>
  );
}

export default ToggleView;
