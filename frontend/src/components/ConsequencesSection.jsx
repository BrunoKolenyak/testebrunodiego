import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const ConsequencesSection = () => {
  const consequences = [
    "Your child may lose their love for the game",
    "Opportunities at higher levels slip away", 
    "Confidence issues spread to other areas of life",
    "Years of potential wasted"
  ];

  return (
    <section 
      className="relative py-20 bg-gray-900/30"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1606470639126-7fafb3dbf44c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx5b3V0aCUyMGZvb3RiYWxsfGVufDB8fHx8MTc1ODUzODMwNnww&ixlib=rb-4.1.0&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            What Happens If <span style={{ color: '#E50914' }}>Nothing Changes?</span>
          </h2>
          
          <h3 className="text-2xl text-gray-300 mb-12">
            Here's What Inaction Really Costs & the Longer You Wait, the Harder It Gets…
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {consequences.map((consequence, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <X style={{ color: '#E50914' }} className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300 font-medium text-left">
                  {consequence}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-black/50 rounded-xl p-8 border border-gray-700">
            <p className="text-xl text-white mb-6 leading-relaxed">
              It only takes the right process to unlock the potential that's already inside your child.
            </p>
            <p className="text-lg" style={{ color: '#E50914' }} className="font-semibold">
              The same framework that's already changing the game for kids across the UK & World.
            </p>
          </div>

          <div className="mt-12">
            <Button 
              size="lg" 
              style={{ backgroundColor: '#E50914' }}
              className="hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Choose Your Path To Confidence
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;