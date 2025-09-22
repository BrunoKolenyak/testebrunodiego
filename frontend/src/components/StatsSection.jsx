import React from "react";
import { Award, Clock, TrendingUp, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      title: "Proven Techniques",
      description: "Based on science & real coaching experience from Premier League academies",
      icon: Award
    },
    {
      title: "One Year Access",
      description: "Full access to the platform with all updates and new content",
      icon: Clock
    },
    {
      title: "Real Improvements",
      description: "Visible changes in confidence and consistency within weeks",
      icon: TrendingUp
    },
    {
      title: "Parent & Player Modules",
      description: "Comprehensive guidance for both parents and young footballers",
      icon: Users
    }
  ];

  const numbers = [
    { number: "Real Families", label: "Trusted by" },
    { number: "3-4 Weeks", label: "To See Results" },
    { number: "8-16", label: "Age Range Supported" }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Thousands of Families Trust This Method
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 transition-all duration-300"
              style={{ 
                borderColor: 'rgba(229, 9, 20, 0.3)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.3)';
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {stat.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {numbers.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold mb-2" style={{ color: '#E50914' }}>
                {item.number}
              </div>
              <div className="text-lg text-gray-300 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;