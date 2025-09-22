import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_football-carousel/artifacts/fcmzcljo_Copy%20of%20Copy%20of%20Copy%20of%20Red%20Black%20Modern%20Gradient%20Time%20Management%20Tips%20Instagram%20Carousel%20.png"
              alt="The Confident Footballer Logo"
              className="w-8 h-8 object-contain"
            />
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