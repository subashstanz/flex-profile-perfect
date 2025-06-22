import React from "react";
import { ArrowLeft, Instagram } from "lucide-react";
import profileImage from "../assets/devin.jpg";

interface DrawerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerOverlay: React.FC<DrawerOverlayProps> = ({ isOpen, onClose }) => {
  const activities = [
    {
      tag: "EXCURSIONS & DAY TRIPS",
      title: "Boa Vista beachside sunset dinner with live music experience",
      description:
        "The west coast of Boa Vista usually provides stunning sunsets across the South Atlantic.",
      price: "$53.00",
      features: ["Free cancellation", "Instant Confirmation"],
    },
    {
      tag: "ACTIVITIES",
      title: "Boa Vista beachside sunset dinner with live music experience",
      description:
        "The west coast of Boa Vista usually provides stunning sunsets across the South Atlantic.",
      price: "$53.00",
      features: ["Free cancellation", "Instant Confirmation"],
    },
    {
      tag: "EXCURSIONS & DAY TRIPS",
      title: "Boa Vista beachside sunset dinner with live music experience",
      description:
        "The west coast of Boa Vista usually provides stunning sunsets across the South Atlantic.",
      price: "$53.00",
      features: ["Free cancellation", "Instant Confirmation"],
    },
    {
      tag: "EXCURSIONS & DAY TRIPS",
      title: "Boa Vista beachside sunset dinner with live music experience",
      description:
        "The west coast of Boa Vista usually provides stunning sunsets across the South Atlantic.",
      price: "$53.00",
      features: ["Free cancellation", "Instant Confirmation"],
    },
    {
      tag: "ACTIVITIES",
      title: "Boa Vista beachside sunset dinner with live music experience",
      description:
        "The west coast of Boa Vista usually provides stunning sunsets across the South Atlantic.",
      price: "$53.00",
      features: ["Free cancellation", "Instant Confirmation"],
    },
    {
      tag: "ACTIVITIES",
      title: "Boa Vista beachside sunset dinner with live music experience",
      description:
        "The west coast of Boa Vista usually provides stunning sunsets across the South Atlantic.",
      price: "$53.00",
      features: ["Free cancellation", "Instant Confirmation"],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="flex-1 bg-black/20" onClick={onClose} />

      {/* Drawer */}
      <div
        className={`w-full max-w-2xl bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ${
          isOpen ? "animate-slide-in-right" : "animate-slide-out-right"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center mb-4">
            <button
              onClick={onClose}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold font-inter">
              Content from Steph Sier
            </h2>
          </div>

          {/* Profile snippet */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Steph Sier"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm font-inter">
                  lukemcameron
                </span>
                <Instagram className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Instagram</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                More details in our travel blog in bio. Best Tokyo night photo
                spots: 1. Omolde...
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-6 font-inter">
            Here are the places we found in this video
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-3">
                  <span className="inline-block bg-orange-100 text-flex-orange text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wide font-inter">
                    {activity.tag}
                  </span>
                </div>

                <h4 className="font-semibold text-sm mb-2 font-inter line-clamp-2">
                  {activity.title}
                </h4>

                <p className="text-xs text-gray-600 mb-3 font-inter">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {activity.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-xs text-green-600 font-inter"
                    >
                      <span className="w-4 h-4 text-green-500 mr-1">✓</span>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-inter">
                      from:
                    </span>
                    <span className="text-flex-orange font-semibold ml-1 font-inter">
                      {activity.price}
                    </span>
                  </div>
                  <button className="bg-flex-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-semibold transition-colors font-inter">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerOverlay;
