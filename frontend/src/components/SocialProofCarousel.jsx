import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const SocialProofCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 0,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/6e05813-87b0-41de-c123-3ec5ebcd27_086bf52d-b0c5-45c6-8e30-1e712f28c4aa.png",
      title: "U12 - Freddie's Transformation",
      quote: "When Freddie plays free and confident like he has last few weeks, he really is ready for the next step!"
    },
    {
      id: 1,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/18da4-cd5e-6d0e-dcd5-22845e651db_3.png",
      title: "U10 - Breathing Techniques Working",
      quote: "He said to himself 'do Diego's breathing' and he was absolutely fine!"
    },
    {
      id: 2,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/503623d-a706-85b4-4231-cf234f08df5e_2.png",
      title: "U11 - Zach's Success",
      quote: "In the last 15 performances only 1 bad day in the office! We are seeing consistency that was not there before."
    },
    {
      id: 3,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/263db58-afdc-a02f-2030-a138b08ed5_4.png",
      title: "U7 - Emotional Control Under Pressure",
      quote: "He nearly allowed himself to get upset but then remembered what you said and got on with it!"
    },
    {
      id: 4,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/827bc4-0dc3-6286-d15f-07dd382e53_6.png",
      title: "U9 - Parent Recognition",
      quote: "You are a mindset genius! The transformation in confidence has been incredible to watch."
    },
    {
      id: 5,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/bda2f4-36df-d4f8-ecc6-a3a1dbb16a4d_10.png",
      title: "U7- Full Transformation",
      quote: "The development we have seen in him as a player+person in the last couple of months is crazy!"
    },
    {
      id: 6,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/5631e-cab5-813-f2e3-3417fe62a1b3_8.png",
      title: "U12 - Braver on the ball",
      quote: "He is also keeping the ball rather than automatically passing!"
    },
    {
      id: 7,
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2162102646/settings_images/08d2000-300-d2dc-3f37-e66ff2ca00_9.png",
      title: "U9 - Opening up more",
      quote: "It seems to be helping him change the way he is thinking and he is opening up his thoughts regarding football!"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-2xl font-bold text-white mb-4">
            <strong>Real Parents. Real Progress. Real Confidence.</strong>
          </h4>
          <p className="text-xl text-gray-300">
            See what happens when young footballers finally unlock their mindset 👇🏻
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 mx-4 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* WhatsApp Image */}
                      <div className="w-full lg:w-1/2">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.title}
                          className="w-full h-auto rounded-lg shadow-2xl"
                        />
                      </div>
                      
                      {/* Testimonial Content */}
                      <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h4 className="text-2xl font-bold text-red-500 mb-4">
                          {testimonial.title}
                        </h4>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white border-none shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white border-none shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-red-500 scale-110' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofCarousel;