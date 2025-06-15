import React from "react";
import { Link } from "react-router-dom";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import PageContainer from "./PageContainer";

function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-700 to-gray-800 text-white shadow">
      {/* PageContainer keeps nav aligned with main content */}
      <PageContainer className="flex justify-between items-center py-4">
        {/* Left Corner - Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 text-xl font-bold hover:text-yellow-300 transition-colors duration-200"
        >
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <BanknotesIcon className="h-5 w-5 text-white" />
          </div>
          <span>SpendWiseAI</span>
        </Link>

        {/* Right Corner - Navigation */}
        <nav className="flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-yellow-300 transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-200"></span>
          </Link>
          <Link
            to="/dashboard"
            className="font-medium hover:text-yellow-300 transition-colors duration-200 relative group"
          >
            Dashboard
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-200"></span>
        </Link>
      </nav>
      </PageContainer>
    </header>
  );
}

export default Header;