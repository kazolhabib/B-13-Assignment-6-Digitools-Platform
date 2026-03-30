import React from 'react';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#111522] text-white pt-15 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-14 lg:mb-20 text-center sm:text-left">
          
          <div className="lg:col-span-2 sm:mr-8">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">DigiTools</h2>
            <p className="text-[#8B95A5] text-sm leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-normal mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Templates</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-normal mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-normal mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-normal mb-6 text-white">Social Links</h3>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8 object-contain" />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B95A5] text-sm">&copy; 2026 Digitools. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-[#8B95A5] hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
