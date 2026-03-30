import React, { useState } from 'react';
import { toast } from 'react-toastify';
import toolsData from '../data/tools.json';

const DigitalTools = ({ cartItems = [], onAddToCart, onRemoveFromCart, onClearCart }) => {
  const [activeTab, setActiveTab] = useState('Products');

  const getTagClasses = (tagType) => {
    switch (tagType) {
      case 'warning':
        return 'bg-[#FFF3E0] text-[#E65100]'; 
      case 'primary':
        return 'bg-[#F3E8FF] text-[#7E22CE]';
      case 'success':
        return 'bg-[#DCFCE7] text-[#16A34A]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="w-full py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent tracking-tight mb-4 sm:mb-5 sm:pb-1.5">
            Premium Digital Tools
          </h2>
          <p className="text-[#627382] text-base leading-relaxed mb-8">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
          
          {/* Toggle Buttons */}
          <div className="inline-flex bg-white rounded-full p-1 border border-gray-100 shadow-sm mx-auto">
            <button
              onClick={() => setActiveTab('Products')}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'Products'
                  ? 'bg-gradient-to-r from-[#813efb] to-[#a344ff] text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-900 bg-transparent'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('Cart')}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'Cart'
                  ? 'bg-gradient-to-r from-[#813efb] to-[#a344ff] text-white shadow-md'
                  : 'text-[#25065D] hover:text-gray-900 bg-transparent'
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'Products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {toolsData.map((tool) => (
              <div 
                key={tool.id} 
                className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#F8FAFC] flex items-center justify-center text-2xl border border-gray-100">
                    <span role="img" aria-label={tool.name}>{tool.icon}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${getTagClasses(tool.tagType)}`}>
                    {tool.tag}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#1a1f36] tracking-tight mb-3">{tool.name}</h3>
                <p className="text-[#627382] text-[15px] leading-relaxed mb-6 flex-grow">{tool.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-[#1a1f36] tracking-tight">${tool.price}</span>
                  <span className="text-[15px] font-medium text-gray-400 ml-1">{tool.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#10B981] mr-3 shrink-0 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#4B5563] text-[15px] font-medium leading-tight pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onAddToCart && onAddToCart(tool.id)}
                  disabled={cartItems.includes(tool.id)}
                  className={`w-full font-semibold py-3.5 rounded-full transition-all mt-auto shadow-sm tracking-wide flex justify-center items-center gap-2 cursor-pointer ${
                    cartItems.includes(tool.id)
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-linear-to-r from-blue-700 to-purple-500 hover:opacity-90 text-white'
                  }`}
                >
                  {cartItems.includes(tool.id) ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full mx-auto bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 md:p-10">
            <h3 className="text-[22px] font-bold text-[#1a1f36] mb-8">Your Cart</h3>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mb-4">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <p className="text-gray-400 text-lg font-medium">Your cart is empty.</p>
              </div>
            ) : (
              <div>
                <div className="space-y-4">
                  {cartItems.map(itemId => {
                    const item = toolsData.find(t => t.id === itemId);
                    if (!item) return null;
                    return (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-2xl">
                        <div className="flex items-center gap-5">
                          <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                            <span role="img" aria-label={item.name}>{item.icon}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#1a1f36] text-[16px] mb-1">{item.name}</h4>
                            <p className="text-[#627382] text-[14px] font-medium">${item.price}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)} 
                          className="text-[#F43F5E] text-[15px] font-medium hover:text-red-700 transition cursor-pointer px-4"
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-between items-center mt-10 mb-8 pt-7">
                  <span className="text-[#627382] text-[15px] font-medium">Total:</span>
                  <span className="text-2xl font-bold text-[#1a1f36]">${cartItems.reduce((total, id) => {
                    const item = toolsData.find(t => t.id === id);
                    return total + (item ? item.price : 0);
                  }, 0)}</span>
                </div>

                <button 
                  onClick={() => {
                    toast.success('Order placed successfully! Redirecting...');
                    if (onClearCart) onClearCart();
                  }}
                  className="w-full bg-linear-to-r from-blue-700 to-purple-500 hover:opacity-90 text-white font-semibold py-3.5 rounded-full transition-all shadow-sm tracking-wide text-[16px] cursor-pointer"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DigitalTools;
