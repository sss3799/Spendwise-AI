import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import { useNavigate } from "react-router-dom";
import ChartPanel from "../components/ChartPanel";
import TrendChart from "../components/TrendChart";
import PageContainer from "../components/PageContainer";

function Home() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const { setIsProcessed } = useProcess();

  const handleProcess = () => {
    if (processing) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setIsProcessed(true);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    // Wrap entire page for consistent horizontal padding
    <PageContainer className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Botanical Background */}
        <section className="min-h-screen relative bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white overflow-hidden">
          {/* White Lotus Style Botanical Pattern */}
          <div className="absolute inset-0 w-4/5 left-0 opacity-50 pointer-events-none">
            {/* Large Tropical Leaves */}
            <svg className="absolute top-10 left-20 w-64 h-80 text-teal-600" viewBox="0 0 200 300" fill="currentColor">
              <path d="M100,20 Q120,40 140,80 Q130,120 120,160 Q110,200 100,240 Q90,200 80,160 Q70,120 60,80 Q80,40 100,20 Z" opacity="0.7"/>
              <path d="M100,40 Q115,55 125,85 Q120,115 115,145 Q105,175 100,205 Q95,175 85,145 Q80,115 75,85 Q85,55 100,40 Z" opacity="0.4"/>
            </svg>
            
            {/* Monstera-style Leaf */}
            <svg className="absolute top-32 left-48 w-48 h-56 text-emerald-600" viewBox="0 0 150 200" fill="currentColor">
              <path d="M75,10 Q95,30 105,60 Q100,90 95,120 Q85,150 75,180 Q65,150 55,120 Q50,90 45,60 Q55,30 75,10 Z" opacity="0.6"/>
              <ellipse cx="65" cy="80" rx="8" ry="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
              <ellipse cx="85" cy="100" rx="6" ry="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
              <ellipse cx="70" cy="120" rx="10" ry="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
            </svg>
            
            {/* Large Flower */}
            <svg className="absolute top-1/3 left-10 w-56 h-56 text-teal-500" viewBox="0 0 200 200" fill="currentColor">
              <g opacity="0.6">
                <ellipse cx="100" cy="100" rx="80" ry="25" transform="rotate(0 100 100)"/>
                <ellipse cx="100" cy="100" rx="80" ry="25" transform="rotate(45 100 100)"/>
                <ellipse cx="100" cy="100" rx="80" ry="25" transform="rotate(90 100 100)"/>
                <ellipse cx="100" cy="100" rx="80" ry="25" transform="rotate(135 100 100)"/>
                <circle cx="100" cy="100" r="15" fill="rgb(251 191 36)" opacity="0.8"/>
              </g>
            </svg>
            
            {/* Branch with Small Monkey */}
            <svg className="absolute bottom-1/3 left-32 w-72 h-32 text-amber-800" viewBox="0 0 300 120" fill="currentColor">
              <path d="M20,60 Q80,50 150,55 Q220,60 280,65" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.7"/>
              <circle cx="180" cy="55" r="12" fill="rgb(92 64 51)" opacity="0.8"/>
              <circle cx="175" cy="50" r="8" fill="rgb(92 64 51)" opacity="0.8"/>
              <ellipse cx="182" cy="45" rx="6" ry="4" fill="rgb(92 64 51)" opacity="0.8"/>
              <path d="M185,60 Q190,70 195,75" stroke="rgb(92 64 51)" strokeWidth="3" fill="none" opacity="0.8"/>
              <path d="M175,65 Q170,75 165,80" stroke="rgb(92 64 51)" strokeWidth="3" fill="none" opacity="0.8"/>
            </svg>
            
            {/* Palm Fronds */}
            <svg className="absolute bottom-20 left-64 w-60 h-72 text-green-600" viewBox="0 0 200 250" fill="currentColor">
              <g opacity="0.5">
                <path d="M100,240 Q90,200 85,160 Q80,120 75,80 Q70,40 100,10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path d="M100,240 Q110,200 115,160 Q120,120 125,80 Q130,40 100,10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <ellipse cx="75" cy="120" rx="20" ry="8" transform="rotate(-30 75 120)" opacity="0.7"/>
                <ellipse cx="85" cy="100" rx="18" ry="6" transform="rotate(-20 85 100)" opacity="0.7"/>
                <ellipse cx="95" cy="80" rx="16" ry="5" transform="rotate(-10 95 80)" opacity="0.7"/>
                <ellipse cx="125" cy="120" rx="20" ry="8" transform="rotate(30 125 120)" opacity="0.7"/>
                <ellipse cx="115" cy="100" rx="18" ry="6" transform="rotate(20 115 100)" opacity="0.7"/>
                <ellipse cx="105" cy="80" rx="16" ry="5" transform="rotate(10 105 80)" opacity="0.7"/>
              </g>
            </svg>
            
            {/* Additional Small Flowers */}
            <svg className="absolute top-1/2 left-12 w-32 h-32 text-pink-400" viewBox="0 0 100 100" fill="currentColor">
              <g opacity="0.5">
                <circle cx="50" cy="50" r="8"/>
                <ellipse cx="50" cy="35" rx="6" ry="12"/>
                <ellipse cx="65" cy="50" rx="12" ry="6"/>
                <ellipse cx="50" cy="65" rx="6" ry="12"/>
                <ellipse cx="35" cy="50" rx="12" ry="6"/>
                <circle cx="50" cy="50" r="4" fill="rgb(251 191 36)"/>
              </g>
            </svg>
            
            {/* More Tropical Leaves */}
            <svg className="absolute bottom-48 left-8 w-40 h-52 text-emerald-700" viewBox="0 0 120 180" fill="currentColor">
              <path d="M60,10 Q75,25 80,50 Q85,75 80,100 Q75,125 70,150 Q65,170 60,170 Q55,170 50,150 Q45,125 40,100 Q35,75 40,50 Q45,25 60,10 Z" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Content Container placed inside centered PageContainer */}
          <PageContainer className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Welcome to <span className="text-yellow-300">SpendWiseAI</span>
              </h1>
              <p className="text-xl mb-12 leading-relaxed opacity-90">
                Gain quick insights from your financial data with our intelligent analysis platform.
              </p>

              {/* File Upload Section */}
              <div className="flex justify-center">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get Started</h3>
                  <FileUploader />
                  <div className="text-center mt-6">
                    <Link
                      to="/dashboard"
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block"
                    >
                      Process Files →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Expense Categorization</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">📊</span>
                    </div>
                    <span className="text-gray-700 font-medium">Trend Analysis</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">💡</span>
                    </div>
                    <span className="text-gray-700 font-medium">Smart Recommendations</span>
                  </div>
                </div>
              </div>
              {/* Quick Stats Preview */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">File Formats</div>
                </div>
                <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">AI</div>
                  <div className="text-sm text-gray-600">Powered Analysis</div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Examples Section */}
        <section className="py-12 bg-gradient-to-b from-white via-purple-50 to-pink-50" id="examples">
          <PageContainer>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              See What SpendWiseAI Can Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">

                <ChartPanel type="bar" />
                <h3 className="font-semibold text-gray-800 mt-4 mb-2 text-center">Visual Analytics</h3>
                <p className="text-gray-600 text-sm text-center">Dynamic charts to visualize your spending patterns</p>
              </div>


              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">

                <ChartPanel type="donut" />
                <h3 className="font-semibold text-gray-800 mt-4 mb-2 text-center">Smart Insights</h3>
                <p className="text-gray-600 text-sm text-center">AI highlights your highest spending categories</p>
              </div>


              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <TrendChart />
                <h3 className="font-semibold text-gray-800 mt-4 mb-2 text-center">Trend Analyzer</h3>
                <p className="text-gray-600 text-sm text-center">See how your expenses change over time</p>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
    </PageContainer>
  );
}

export default Home;
