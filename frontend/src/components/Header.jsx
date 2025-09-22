import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E50914' }}></div>
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