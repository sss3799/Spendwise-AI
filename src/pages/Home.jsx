import React from "react";
import Header from "../components/Header";
import FileUploader from "../components/FileUploader";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="text-center py-20 bg-gray-50">
          <h2 className="text-4xl font-bold mb-4">Welcome to SpendWiseAI</h2>
          <p className="text-gray-600 mb-8">Gain quick insights from your financial data.</p>
          <a href="#upload" className="px-6 py-3 bg-blue-600 text-white rounded-md">Upload Your Financial Files</a>
        </section>
        <section className="py-20" id="examples">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded shadow-sm">Placeholder Chart</div>
            <div className="p-4 border rounded shadow-sm">Your highest spend was in Marketing</div>
            <div className="p-4 border rounded shadow-sm">Another Insight</div>
          </div>
        </section>
        <section id="upload" className="py-20 bg-gray-100">
          <div className="max-w-2xl mx-auto px-4">
            <FileUploader />
            <div className="text-center mt-6">
              <Link to="/dashboard" className="px-6 py-3 bg-green-600 text-white rounded-md inline-block">Process Files</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
