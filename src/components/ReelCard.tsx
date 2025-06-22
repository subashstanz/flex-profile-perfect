import React from "react";

interface ReelCardProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ imageUrl, title, onClick }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 h-[450px] group cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Decode Reel button */}
      <button
        onClick={onClick}
        className="absolute top-4 right-4 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
      >
        Decode Reel
      </button>

      {/* Bottom text */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white font-medium text-sm font-inter">{title}</p>
      </div>
    </div>
  );
};

export default ReelCard;
