import React from "react";
import { Twitter } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import profileImage from "../assets/devin.jpg";

const CreatorProfile = () => {
  return (
    <div className="flex top-[85px] flex-col lg:flex-row items-center lg:items-start max-w-4xl mx-auto px-6 py-12 pt-[160px]">
      <div className="flex-shrink-0 mb-8 lg:mb-0 mt-[-10px] lg:mr-12">
        <div className="w-60 h-[300px] rounded-t-full overflow-hidden shadow-lg">
          <img
            src={profileImage}
            alt="Steph Sier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 text-center lg:text-left font-normal  font-arial">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 font-normal  font-arial">
          Steph Sier
        </h1>
        <p className="text-[#2E4C47] text-[19.17px] leading-[29.12px] font-normal mb-8 font-arial max-w-2xl">
          Steph is a senior clinician and therapist at Q Psychology, and a
          mental health accredited social worker. She has an extensive
          background working in inpatient and outpatient mental health programs
          and helps guide and support the clinical team at Q Psychology.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="p-3 rounded-full hover:bg-gray-300 transition-colors">
            <InstagramIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-3 rounded-full  hover:bg-gray-300 transition-colors">
            <Twitter className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
