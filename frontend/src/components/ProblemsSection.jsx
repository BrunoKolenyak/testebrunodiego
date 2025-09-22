import React from "react";

const ProblemsSection = () => {
  const problems = [
    {
      title: "OVERTHINK MISTAKES, HURTING THEIR PERFORMANCE",
      description: "Your child dwells on every mistake, affecting their next play"
    },
    {
      title: "HAVE TALENT BUT FREEZE IN MATCHES/TRIALS",
      description: "They show brilliance in training but can't perform when it matters"
    },
    {
      title: "AVOID PHYSICAL CHALLENGES DUE TO FEAR",
      description: "Fear of getting hurt holds them back from playing their natural game"
    },
    {
      title: "LACK CONFIDENCE IN CRUCIAL MOMENTS",
      description: "They hesitate when they should be decisive, missing opportunities"
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          IS YOUR CHILD <span className="text-red-500">STRUGGLING WITH:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-white font-bold text-lg mb-4 leading-tight">
                {problem.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;