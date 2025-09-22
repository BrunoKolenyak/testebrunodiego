import React from "react";
import { Button } from "./ui/button";
import { Play, Star, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://conf-footb-m7dxay.manus.space/assets/player-image-new-DOpvjhRk.png"
          alt="Young confident footballer"
          className="absolute right-0 top-0 h-full w-auto object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            THE<br />
            CONFIDENT<br />
            <span style={{ color: '#E50914' }}>FOOTBALLER</span>
          </h1>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Help Your Child Go From Anxious to Confident on the Pitch — in Just 30 Days
          </h2>
          
          <p className="text-xl mb-8 text-gray-300 max-w-2xl">
            A proven step-by-step plan trusted by players and parents — from grassroots to academies — to help kids perform with confidence, even under pressure.
          </p>
          
          <Button 
            size="lg" 
            style={{ backgroundColor: '#E50914' }}
            className="hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Choose Your Path Below
          </Button>
          
          <div className="flex items-center space-x-8 mt-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>Trusted by real families</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>30-day transformation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;