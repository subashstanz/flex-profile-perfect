import React from "react";
import { ArrowLeft, Instagram } from "lucide-react";
import profileImage from "../assets/devin.jpg";

interface DrawerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerOverlay: React.FC<DrawerOverlayProps> = ({ isOpen, onClose }) => {
  const matches = [
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/83b0cd72896bb0299f46488c0423c701-158-dubai-burj-khalifa-02.jpg",
        bookingUrl: "https://headout.com/burj-khalifa-tickets-c-158/",
        displayName: "Burj Khalifa Tickets",
      },
      attraction: "Burj Khalifa",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/1d18b0b2068ca6b278c48a2bbb0f760b-2863-dubai-016-dubai--ekart-dubai-mall-02.jpg",
        bookingUrl: "https://headout.com/ekart-dubai-mall-tickets-c-2863/",
        displayName: "Ekart Dubai Mall Tickets",
      },
      attraction: "Dubai Mall",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/685bb2bd2bdad756ca6b61e7f89c7eb1-Museum%20of%20the%20Future%20Dubai%20card%20image.jpg",
        bookingUrl: "https://headout.com/museum-of-the-future-tickets-c-3700/",
        displayName: "Museum of the Future Tickets",
      },
      attraction: "Museum of the Future",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/08cfa1eeba143e6af99eddbfa1a9be56-1868-Dubai-TicketstoDubaiAquarium-UnderwaterZoo-16.jpg",
        bookingUrl:
          "https://headout.com/dubai-aquarium-tickets/dubai-aquarium-underwater-zoo-tickets-e-1868/",
        displayName:
          "Dubai Aquarium & Underwater Zoo with Penguin Cove Tickets",
      },
      attraction: "Dubai Aquarium & Underwater Zoo",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/fddbcb4e7bac00ff1e248f546f1791c8-miracle-garden-card.jpg",
        bookingUrl: "https://headout.com/dubai-miracle-garden-tickets-c-2862/",
        displayName: "Dubai Miracle Garden",
      },
      attraction: "Miracle Garden",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/a9d281f8c3945b13477e113b0bb9b040-2800-dubai-05-dubai--dubai-butterfly-garden-02.jpg",
        bookingUrl:
          "https://headout.com/dubai-butterfly-garden-tickets-c-2800/",
        displayName: "Dubai Butterfly Garden Tickets",
      },
      attraction: "Butterfly Garden",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/e8c24794e44dd52f8c7c8fc03dad71f3-The-View-at-The-Palm-card.jpg",
        bookingUrl: "https://headout.com/the-view-at-the-palm-tickets-c-3166/",
        displayName: "The View at The Palm Tickets",
      },
      attraction: "The View at Palm",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/0c6423801b9b92df9eb56b06d75e9fe7-31336-dubai-palm-jumeirah-monorail---day-pass-with-unlimited-rides-03.jpg",
        bookingUrl:
          "https://headout.com/atlantis-waterpark-tickets/the-palm-monorail-gateway-to-atlantis-e-13705/",
        displayName: "The Palm Monorail - Gateway to Atlantis",
      },
      attraction: "Palm Monorail Ride",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/8b2108d00e948fec5b9ad55427a027dc-1447-dubai-dubai-frame-02.jpg",
        bookingUrl: "https://headout.com/dubai-frame-tickets-c-1447/",
        displayName: "Dubai Frame Tickets",
      },
      attraction: "Dubai Frame",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/4b6390537cbe44c6326b18a0d457beac-evening%20deser%20safari%20card%20image.jpg",
        bookingUrl: "https://headout.com/dubai-evening-desert-safari-c-415/",
        displayName: "Evening Desert Safari",
      },
      attraction: "Desert Safari",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/04898b6a3672c13de32404aae042e51b-5399-abu-dhabi-sheikh-zayed-grand-mosque-02.jpg",
        bookingUrl: "https://headout.com/sheikh-zayed-grand-mosque-c-5399/",
        displayName: "Sheikh Zayed Grand Mosque",
      },
      attraction: "Sheikh Zayed Mosque",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/b1c6d14ce6c4c97222ce770d6590b47f-30280-dubai-from-dubai-baps-hindu-temple---sheikh-zayed-mosque-guided-tour-01.jpg",
        bookingUrl:
          "https://headout.com/abu-dhabi-city-tours/from-dubai-baps-hindu-temple-sheikh-zayed-mosque-guided-tour-e-30280/",
        displayName:
          "From Dubai: BAPS Hindu Temple & Sheikh Zayed Mosque Guided Tour",
      },
      attraction: "BAPS Hindu Temple",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/media/images/3a62fd28834ad3f142eef38e30a41e40-Louvre%20Pyramid%20card.png",
        bookingUrl: "https://headout.com/louvre-museum-tickets-c-252/",
        displayName: "Louvre Museum Tickets",
      },
      attraction: "Louvre Museum",
    },
    {
      headout: {
        imageUrl:
          "https://cdn-imgix.headout.com/tour/22145/TOUR-IMAGE/605a6fd4-152b-4e45-9b26-10c5586c1a43-11665-dubai-dhow-cruise-dinner-in-dubai-marina-with-live-entertainment-01.jpg",
        bookingUrl:
          "https://headout.com/sightseeing-cruises/dhow-cruise-dinner-in-dubai-marina-with-live-entertainment-e-11665/",
        displayName:
          "Dhow Cruise Dinner in Dubai Marina with Live Entertainment",
      },
      attraction: "Dhow Cruise Dinner",
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
            {matches.map((activity, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                <img
                  src={activity.headout.imageUrl}
                  alt={activity.headout.displayName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-base mb-1 font-inter line-clamp-2">
                  {activity.headout.displayName}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  {/* <div className="flex-1 min-w-0">
                    <span className="text-xs text-gray-500 font-inter">
                      from:
                    </span>
                    <a
                      href={activity.headout.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-flex-orange font-semibold ml-1 font-inter break-all text-sm"
                    >
                      {activity.headout.bookingUrl}
                    </a>
                  </div> */}
                  <a
                    href={activity.headout.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-flex-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-semibold transition-colors font-inter ml-2 whitespace-nowrap"
                  >
                    BOOK NOW
                  </a>
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
