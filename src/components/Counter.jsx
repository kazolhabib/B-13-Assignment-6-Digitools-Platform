import React from 'react';

const Counter = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 lg:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-white/30 text-white text-center">

          <div className="w-full md:w-1/3 py-6 md:py-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">50K+</h2>
            <p className="text-base md:text-xl font-normal text-white/90">Active Users</p>
          </div>

          <div className="w-full md:w-1/3 py-6 md:py-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">200+</h2>
            <p className="text-base md:text-xl font-normal text-white/90">Premium Tools</p>
          </div>

          <div className="w-full md:w-1/3 py-6 md:py-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">4.9</h2>
            <p className="text-base md:text-xl font-normal text-white/90">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Counter;
