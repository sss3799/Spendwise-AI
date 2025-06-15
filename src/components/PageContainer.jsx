import React from "react";

// Generic container that centers content with responsive padding
// Tailwind classes:
// - max-w-4xl limits width for readability
// - mx-auto centers the container horizontally
// - px-4 adds base padding, sm:px-6 and lg:px-8 adjust padding at breakpoints
// Additional className prop allows custom vertical spacing like py-12
function PageContainer({ children, className = "" }) {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

export default PageContainer;
