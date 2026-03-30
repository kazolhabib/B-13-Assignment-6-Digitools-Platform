import React from 'react';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const Services = () => {
  return (
    <section className="w-full py-16 md:py-28 bg-[#F9FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1f36] tracking-tight mb-5">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#627382] text-base leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          <div className="h-72 md:h-96 relative bg-white rounded-2xl p-5 lg:p-6 border border-[#F1F1F1] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-center">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-linear-to-r from-blue-700 to-purple-500 text-white flex items-center justify-center text-[14px] font-bold shadow-sm">
              01
            </div>
            
            <div className="w-25 h-25 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-8">
              <img src={userImg} alt="Create Account" className="w-full h-[50px] object-contain" />
            </div>
            
            <h3 className="text-2xl font-semibold text-[#1a1f36] mb-3 text-center tracking-tight">
              Create Account
            </h3>
            <p className="text-[#627382] text-base leading-relaxed text-center px-2">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          <div className="h-72 md:h-96 relative bg-white rounded-2xl p-5 lg:p-6 border border-[#F1F1F1] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-center">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-linear-to-r from-blue-700 to-purple-500 text-white flex items-center justify-center text-[14px] font-bold shadow-sm">
              02
            </div>
            
            <div className="w-25 h-25 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-8">
              <img src={packageImg} alt="Choose Products" className="w-full h-[50px] object-contain" />
            </div>
            
            <h3 className="text-2xl font-semibold text-[#1a1f36] mb-3 text-center tracking-tight">
              Choose Products
            </h3>
            <p className="text-[#627382] text-base leading-relaxed text-center px-2">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="h-72 md:h-96 relative bg-white rounded-2xl p-5 lg:p-6 border border-[#F1F1F1] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-center">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-linear-to-r from-blue-700 to-purple-500 text-white flex items-center justify-center text-[14px] font-bold shadow-sm">
              03
            </div>
            
            <div className="w-25 h-25 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-8">
              <img src={rocketImg} alt="Start Creating" className="w-full h-[50px] object-contain" />
            </div>
            
            <h3 className="text-2xl font-semibold text-[#1a1f36] mb-3 text-center tracking-tight">
              Start Creating
            </h3>
            <p className="text-[#627382] text-base leading-relaxed text-center px-2">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
