
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-flex-green z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold font-inter">
          FLEX
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-white font-inter hover:text-gray-200 transition-colors">
            Home
          </a>
          <a href="#" className="text-white font-inter hover:text-gray-200 transition-colors">
            Paste a link
          </a>
          <a href="#" className="text-white font-inter hover:text-gray-200 transition-colors">
            Creators
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
