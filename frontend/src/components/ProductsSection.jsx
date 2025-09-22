import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const ProductsSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-300">
            Two powerful options designed to meet your family's specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Parents Blueprint */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-red-500/30 transition-all duration-300">
            <div className="text-center mb-8">
              <img
                src="https://conf-footb-m7dxay.manus.space/assets/parents-blueprint-cover-modern-C3xiYd81.png"
                alt="Parents Blueprint"
                className="w-48 h-auto mx-auto mb-6 rounded-lg shadow-xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                THE PARENTS BLUEPRINT
              </h3>
              <p className="text-gray-300 mb-4">
                Perfect for parents who want video guidance to support their child effectively
              </p>
              <div className="text-4xl font-bold text-white mb-2">£47</div>
              <p className="text-sm text-gray-400">One-time payment • Instant download</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Complete parent video guide (12+ video lessons)",
                "How to communicate without pressure",
                "Pre-match and post-match strategies",
                "Understanding your child's mental game",
                "Building confidence at home",
                "Handling setbacks and disappointments",
                "Creating the right environment for growth",
                "Downloadable worksheets and resources"
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300">
              Get The Parents Blueprint
            </Button>

            <p className="text-sm text-gray-400 text-center mt-4">
              Perfect for: Parents who want immediate guidance
            </p>
          </div>

          {/* Full Method */}
          <div className="relative bg-gray-900/50 border-2 border-red-500 rounded-xl p-8">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-8">
              <img
                src="https://conf-footb-m7dxay.manus.space/assets/full-method-visual-C3UM_UfK.png"
                alt="The Full Method"
                className="w-48 h-auto mx-auto mb-6 rounded-lg shadow-xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                THE FULL METHOD
              </h3>
              <p className="text-gray-300 mb-4">
                Complete transformation system for parents and players
              </p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl text-gray-400 line-through">£289</span>
                <span className="text-4xl font-bold text-white">£97</span>
              </div>
              <p className="text-red-500 font-semibold mb-2">Save £192 - Limited Time Offer!</p>
              <p className="text-sm text-gray-400">One-time payment • Full year access</p>
            </div>

            <div className="mb-6">
              <p className="text-white font-semibold mb-4">
                Includes Parents Blueprint (£47 value) PLUS:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "70+ video lessons for young players",
                  "Interactive quizzes and assessments",
                  "Daily mindset exercises (10-15 minutes)",
                  "Monthly progress tracking worksheets",
                  "Exclusive bonus workshops with specialists",
                  "48-hour response time for questions",
                  "Mobile and desktop friendly platform",
                  "One year access with all updates"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300">
              Get The Full Method
            </Button>

            <p className="text-sm text-gray-400 text-center mt-4">
              Perfect for: Complete family transformation
            </p>

            <div className="text-center mt-6 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">Total Value: £336+</span> | You Pay: £97
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 mb-4">
            <strong>Not sure which option is right for you?</strong>
          </p>
          <p className="text-gray-400">
            The Parents Blueprint will give you the support you need to work on your child's mindset. 
            The Full Method has all the player's modules too, to educate the players with practical home works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;