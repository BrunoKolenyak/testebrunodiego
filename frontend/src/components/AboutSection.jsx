import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Decorative background element */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-full opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1655141199464-cdb981639a5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb25maWRlbnQlMjBmb290YmFsbGVyfGVufDB8fHx8MTc1ODUzODMxMXww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A UNIQUE APPROACH FROM SOMEONE WHO{" "}
            <span style={{ color: '#E50914' }}>UNDERSTANDS BOTH SIDES</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Diego's Image - Centered */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://customer-assets.emergentagent.com/job_football-carousel/artifacts/yi0jmr06_Generated%20Image%20September%2015%2C%202025%20-%209_41AM.png"
              alt="Diego Pagliuso"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              DIEGO PAGLIUSO
            </h3>
            <p className="text-xl font-semibold mb-8" style={{ color: '#E50914' }}>
              Mindset Specialist
            </p>

            <div className="space-y-6 mb-8 text-left">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E50914' }}></div>
                  <span className="text-lg text-gray-300 font-semibold">Elite Academy Coach</span>
                </div>
                <p className="text-gray-400 text-sm ml-5">
                  With experience coaching at professional Premier League academies, I've helped develop players who have gone on to achieve at the highest levels.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E50914' }}></div>
                  <span className="text-lg text-gray-300 font-semibold">Football Parent</span>
                </div>
                <p className="text-gray-400 text-sm ml-5">
                  As a parent with a child in the academy system, I've sat where you sit now. I've made the same mistakes and felt the same worries you're experiencing.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E50914' }}></div>
                  <span className="text-lg text-gray-300 font-semibold">Mindset Specialist</span>
                </div>
                <p className="text-gray-400 text-sm ml-5">
                  I've combined my coaching expertise with practical mindset techniques that work specifically for young footballers aged 8-16.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;