import React, { useEffect, useState } from "react";
import ReelCard from "./ReelCard";
import DrawerOverlay from "./DrawerOverlay";
import { useLocation } from "react-router-dom";

const ContentGrid = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reelId = params.get("reels");
  const [reelData, setReelData] = useState(null);
  console.log("reelId", reelId);

  useEffect(() => {
    console.log(reelId);

    fetch(`http://localhost:4000/api/queries/${reelId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.reelUrl);
        setReelData(data?.reelUrl);
      });
  }, [reelId]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const reels = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?",
      link:
        reelData ||
        "https://instagram.fmaa12-3.fna.fbcdn.net/o1/v/t16/f2/m86/AQMkqwy0wuRrInY4D4dAxI4NCyE28-5yoOILEfRBA8dzy3QR0eXrrdHPlKXLOVabL5FISHIhOA1_nDT0UupOgCTmDXx5PF2UQXZSnaE.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMzYwLmJhc2VsaW5lIn0&_nc_cat=109&vs=508843298470112_868456423&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80NzRBMUM1NUFBODdBMzQzOEEzNDBCNzM4MTNENDI5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRWlnd0JySTA5eTF0ckFCQU1iWUZreUxlczF2YnFfRUFBQUYVAgLIARIAKAAYABsAFQAAJsiDsN%2BrpYtAFQIoAkMzLBdAUZVP3ztkWhgSZGFzaF9iYXNlbGluZV8zX3YxEQB1%2Fgdl5p0BAA%3D%3D&_nc_rid=8e5d062fd4&ccb=9-4&oh=00_AfPdNt-aJIUriMol5MJR1MJzZMYx44tvXQQhia8EP39cxg&oe=685C81C8&_nc_sid=10d13b",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?w=400&h=500&fit=crop",
      title: "Have you ever been to this place?",
    },
  ];

  const handleReelClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 font-arial">
        Content from Steph Sier
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 h-[562px] lg:grid-cols-4 gap-6">
        {reels.map((reel) => (
          <ReelCard
            key={reel.id}
            imageUrl={reel.imageUrl}
            title={reel.title}
            onClick={handleReelClick}
            link={reel.link}
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
