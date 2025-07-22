import React, { useEffect, useState } from "react";
import MarketNewsCard from "../components/M-News-Card.jsx";
import { fetchMarketNews } from "../services/api.js";

function Homepage() {
  const [marketNews, setMarketNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarketNews = async () => {
      try {
        const news = await fetchMarketNews();
        setMarketNews(news);
      } catch (err) {
        console.log(err);
        setError("Failed to load the News");
      } finally {
        setLoading(false);
      }
    }
    loadMarketNews();
  }, [])

  if (loading) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <span className="loading loading-spinner loading-lg text-primary mb-4"></span>
            <h1 className="text-5xl font-bold text-base-content">Loading</h1>
            <p className="py-6 text-base-content/70">
              Fetching latest market news...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-center mb-4">
                  <div className="bg-error/20 rounded-full w-16 h-16 flex items-center justify-center">
                    <svg className="w-8 h-8 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="card-title justify-center text-error">Error</h2>
                <p className="text-base-content/70">{error}</p>
                <div className="card-actions justify-center">
                  <button 
                    onClick={() => window.location.reload()}
                    className="btn btn-primary"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header Section */}
      <div className="hero bg-base-100 py-16">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-base-content mb-4">
              Real-Time Market News
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl">
              Stay updated with the latest market developments and financial insights
            </p>
          </div>
        </div>
      </div>
      
      {/* News Grid Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketNews.length > 0 ? (
            marketNews.map((news, index) => (
              <MarketNewsCard key={index} marketnews={news} />
            ))
          ) : (
            <div className="col-span-full">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center py-16">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-title justify-center text-base-content">No News Available</h3>
                  <p className="text-base-content/70">No news articles available at the moment. Please check back later.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Homepage;