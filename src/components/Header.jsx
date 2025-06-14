import React from "react";
import { Link } from "react-router-dom";
import { ChartBarIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
          <ChartBarIcon className="h-6 w-6" />
          <span>FinSight</span>
        </Link>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
