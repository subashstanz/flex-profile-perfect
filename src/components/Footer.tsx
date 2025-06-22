import React from "react";
import HeadoutLogo from "./HeadoutLogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-yellow-500 to-yellow-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h3 className="text-4xl font-bold font-inter">FLEX</h3>
          <p className="mt-2 text-sm font-inter">
            Ctra. Madrid - Cartagena
            <br />
            Km 390 — 30100 Espinardo
            <br />
            Murcia (Spain)
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end space-x-2">
            <HeadoutLogo />
            <span className="text-2xl font-semibold font-inter">headout</span>
          </div>
          <p className="mt-2 text-sm font-inter">Follow us on</p>
          <a href="#" className="text-sm font-inter underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
