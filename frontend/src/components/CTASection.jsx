import React from "react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Your Child's Confidence Journey{" "}
            <span style={{ color: '#E50914' }}>Starts Today</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Don't let another match pass where your child struggles with confidence. 
            Choose your path and start the transformation now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Parents Blueprint - £47
            </Button>
            
            <Button 
              size="lg" 
              className="text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#E50914' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Get Full Method - £97
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;