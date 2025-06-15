import React from "react";

function InsightCard({ text }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      {text}
    </div>
  );
}

export default InsightCard;
