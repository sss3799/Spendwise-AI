import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function ExportButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      onClick={() => alert("Exporting report...")}
    >
      <ArrowDownTrayIcon className="w-5 h-5" />
      <span>Export Insights</span>
    </motion.button>
  );
}

export default ExportButton;
