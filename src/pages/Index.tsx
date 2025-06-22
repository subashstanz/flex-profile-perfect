
import React from 'react';
import Navigation from '../components/Navigation';
import CreatorProfile from '../components/CreatorProfile';
import ContentGrid from '../components/ContentGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-flex-beige font-inter">
      <Navigation />
      <CreatorProfile />
      <ContentGrid />
      <Footer />
    </div>
  );
};

export default Index;
