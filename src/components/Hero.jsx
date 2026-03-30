import React from 'react';
import bannerImage from '../assets/banner.png';

const Hero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-21 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2.5 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col justify-center max-w-2xl z-10">
            {/* Badge */}
            <div className="inline-flex items-center self-start mb-6 px-4 py-1.5 rounded-full bg-[#E1E7FF]">
              <span className="relative flex h-2.5 w-2.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8b5cf6]"></span>
              </span>
              <span className="text-sm font-semibold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1a1f36] tracking-tight leading-[1.1] mb-6">
              Supercharge Your <br className="hidden md:block" />
              <span className="bg-linear-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent">Digital Workflow</span>
            </h1>

            <p className="text-lg text-[#627382] mb-9 max-w-xl leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#" className="bg-linear-to-r from-blue-700 to-purple-500 text-white px-4 py-3 rounded-full font-semibold text-base transition-colors shadow-lg shadow-purple-500/30 text-center w-full sm:w-auto transition-colors hover:opacity-90">
                Explore Products
              </a>

              <div className="p-[1px] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center rounded-full font-semibold w-full sm:w-auto text-center">
              <div className="w-full sm:w-auto flex items-center justify-center bg-white text-[#9514FA] rounded-full px-4 py-3 cursor-pointer transition-colors hover:opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2.5">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                  <span className='bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Watch Demo</span>
            </div>
            </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative w-full flex justify-center lg:justify-end">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-100/50 blur-3xl -z-10 rounded-full"></div>
            
            <div className="relative w-full max-w-lg lg:ml-auto z-10 rounded-lg overflow-hidden">
              <img 
                src={bannerImage} 
                alt="Digital Workflow Banner" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
