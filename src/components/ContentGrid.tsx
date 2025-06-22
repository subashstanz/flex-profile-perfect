
import React, { useState } from 'react';
import ReelCard from './ReelCard';
import DrawerOverlay from './DrawerOverlay';

const ContentGrid = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const reels = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1549813069-f95e44d7f498?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?"
    },
    {
      id: 2, 
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop", 
      title: "Have you ever been to this place?"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?"
    }
  ];

  const handleReelClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 font-inter">
        Content from Steph Sier
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reels.map((reel) => (
          <ReelCard
            key={reel.id}
            imageUrl={reel.imageUrl}
            title={reel.title}
            onClick={handleReelClick}
          />
        ))}
      </div>

      <DrawerOverlay 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default ContentGrid;
