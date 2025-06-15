import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

function InsightCard({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-4 hover:shadow-lg border-purple-200">
        <span className="text-lg font-medium text-gray-800">{text}</span>
      </Card>
    </motion.div>
  );
}

export default InsightCard;
