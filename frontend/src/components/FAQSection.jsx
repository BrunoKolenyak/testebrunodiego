import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What's the difference between the two products?",
      answer: "The Parents Blueprint is a comprehensive guide focused on helping parents support their child effectively. The Full Method includes everything in the Parents Blueprint PLUS 70+ video lessons, interactive content, and ongoing support for the young player."
    },
    {
      question: "Which product should I choose?",
      answer: "If you want immediate guidance on how to support your child better, start with The Parents Blueprint. If you want a complete transformation system for both you and your child, choose The Full Method."
    },
    {
      question: "Recommended age range?",
      answer: "Both products are designed for young footballers aged 8-16. The techniques adapt to the player's maturity level."
    },
    {
      question: "How quickly will we see results?",
      answer: "Most parents notice visible changes within 3-4 weeks with consistent application of the strategies."
    },
    {
      question: "Do I get lifetime access?",
      answer: "The Parents Blueprint is yours forever once downloaded. The Full Method includes one year access to all features including App and course."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Got Questions? <span style={{ color: '#E50914' }}>We Have Answers!</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about both products and how they can help your child succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300"
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
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#E50914' }} />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;