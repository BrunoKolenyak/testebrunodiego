import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E50914' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_football-carousel/artifacts/zgo4nwxj_final-all-red-logo.png"
                alt="The Confident Footballer Logo"
                className="w-6 h-6 object-contain"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.2) contrast(1.1)'
                }}
              />
            </div>
            <span className="text-white font-medium text-sm">
              The #1 Mindset Programme for Young Footballers
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;