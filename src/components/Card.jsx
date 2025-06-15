import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border bg-white shadow ${className}`}>{children}</div>
  );
}

export default Card;
