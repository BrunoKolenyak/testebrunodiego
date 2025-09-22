import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A UNIQUE APPROACH FROM SOMEONE WHO{" "}
            <span className="text-red-500">UNDERSTANDS BOTH SIDES</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Diego's Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://conf-footb-m7dxay.manus.space/assets/diego-profile-CbHjlvzy.png"
              alt="Diego Pagliuso"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              DIEGO PAGLIUSO
            </h3>
            <p className="text-xl text-red-500 font-semibold mb-8">
              Mindset Specialist
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-lg text-gray-300">Elite Academy Coach</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-lg text-gray-300">Ex-Player</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-lg text-gray-300">Football Parent</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-lg text-gray-300">Mindset Specialist</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I've combined my coaching expertise with practical mindset techniques that work specifically for young footballers aged 8-16.
            </p>
          </div>
        </div>

        {/* Decorative Brain Element */}
        <div className="text-center mt-16">
          <img
            src="https://conf-footb-m7dxay.manus.space/assets/neon-brain-element-Cip_7pJs.png"
            alt="Neon Brain"
            className="mx-auto w-24 h-24 opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;