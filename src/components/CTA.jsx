import React from 'react';

const CTA = () => {
  return (
    <section className="w-full bg-linear-to-r from-blue-700 to-purple-500 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-white text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Join thousands of professionals who are already using Digitools to work smarter.<br className="hidden md:block" />
          Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#7C3AED] font-semibold rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg cursor-pointer">
            Explore Products
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            View Pricing
          </button>
        </div>
        
        <p className="text-white/80 text-sm font-medium">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
