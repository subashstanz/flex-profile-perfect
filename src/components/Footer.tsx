
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-flex-green to-yellow-400 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div className="text-3xl font-bold mb-4 font-inter">FLEX</div>
          <div className="text-sm font-inter leading-relaxed">
            <p>Ctra. Madrid - Cartagena</p>
            <p>Km 390 — 30100 Espinardo</p>
            <p>Murcia (Spain)</p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 text-right">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl font-bold font-inter">headout</span>
          </div>
          <div className="text-sm font-inter">
            <p>Follow us on</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
