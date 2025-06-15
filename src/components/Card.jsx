import React from 'react';

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border bg-white shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
