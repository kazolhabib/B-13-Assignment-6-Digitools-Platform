import React from 'react';

const Pricing = () => {
  return (
    <section className="py-16 md:py-25 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1f36] tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Starter Plan */}
          <div className="bg-[#F9FAFC] rounded-2xl p-6 border border-[#F2F2F2] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#1a1f36] mb-2">Starter</h3>
            <p className="text-[#627382] mb-6">Perfect for getting started</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-[2.5rem] font-semibold text-[#1a1f36]">$0</span>
              <span className="text-[#627382] text-xl ml-1">/Month</span>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                'Access to 10 free tools',
                'Basic templates',
                'Community support',
                '1 project per month'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#22c55e] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-[#627382] text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-4 bg-linear-to-r from-blue-700 to-purple-500 text-white font-semibold rounded-full transition-colors duration-300 mt-auto hover:opacity-90 cursor-pointer">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-linear-to-r from-blue-700 to-purple-500 rounded-2xl p-6 relative flex flex-col h-full transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#fff1c6] text-[#b37700] text-sm font-medium px-5 py-1.5 rounded-full tracking-wide shadow-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 md:mt-4">Pro</h3>
            <p className="text-white/80 mb-6">Best for professionals</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-[2.5rem] font-semibold text-white">$29</span>
              <span className="text-white/80 text-xl ml-1">/Month</span>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                'Access to all premium tools',
                'Unlimited templates',
                'Priority support',
                'Unlimited projects',
                'Cloud sync',
                'Advanced analytics'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-white text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-4 bg-white font-bold rounded-full transition-colors duration-300 shadow-sm mt-auto cursor-pointer">
              <span className='bg-linear-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent'>Start Pro Trial</span>
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#F9FAFC] rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#1a1f36] mb-2">Enterprise</h3>
            <p className="text-[#627382] mb-6">For teams and businesses</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-[2.5rem] font-semibold text-[#1a1f36]">$99</span>
              <span className="text-[#627382] text-xl ml-1">/Month</span>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                'Everything in Pro',
                'Team collaboration',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'Custom branding'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#22c55e] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-[#627382] text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 px-4 bg-linear-to-r from-blue-700 to-purple-500 text-white font-semibold rounded-full transition-colors duration-300 mt-auto hover:opacity-90 cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
