import React from "react";

import { Brain, AlertTriangle, Target, HelpCircle } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      title: "LACKS CONFIDENCE DURING MATCHES",
      description: "Your child plays brilliantly in training but freezes up during games, second-guessing every decision.",
      icon: Brain
    },
    {
      title: "FEAR OF MAKING MISTAKES",
      description: "They're so afraid of getting it wrong that they play it safe, never showing their true potential.",
      icon: AlertTriangle
    },
    {
      title: "NOT PERFORMING TO THEIR POTENTIAL",
      description: "You know they have the skill, but something is holding them back from playing their best football.",
      icon: Target
    },
    {
      title: "YOU FEEL HELPLESS TO SUPPORT",
      description: "You want to help but don't know what to say or do without making things worse.",
      icon: HelpCircle
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          IS YOUR CHILD <span style={{ color: '#E50914' }}>STRUGGLING WITH:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
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
                <div className="flex items-center mb-4">
                  <IconComponent 
                    className="w-8 h-8 mr-3" 
                    style={{ color: '#E50914' }}
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;