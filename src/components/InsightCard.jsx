import React from "react";

function InsightCard({ text }) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      {text}
    </div>
  );
}

export default InsightCard;
