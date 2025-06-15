import React from "react";
import { motion } from "framer-motion";

function InsightCard({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-4 border rounded-xl bg-white shadow-md hover:shadow-lg border-purple-200"
    >
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </motion.div>
  );
}

export default InsightCard;
