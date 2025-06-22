
import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const CreatorProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-4xl mx-auto px-6 py-12 pt-24">
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
        <div className="w-48 h-60 rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/d6e8b173-74cf-4dce-ab81-b78554eeb0df.png"
            alt="Steph Sier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 font-inter">
          Steph Sier
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-inter max-w-2xl">
          Steph is a senior clinician and therapist at Q Psychology, and a mental health accredited social worker. 
          She has an extensive background working in inpatient and outpatient mental health programs and helps 
          guide and support the clinical team at Q Psychology.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            <Instagram className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            <Twitter className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
