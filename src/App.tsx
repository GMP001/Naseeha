import React from 'react';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import QuickDonateBar from './components/QuickDonateBar';
import WhatWeDo from './components/WhatWeDo';
import HadithSection from './components/HadithSection';
import LiveCampaigns from './components/LiveCampaigns';
import AppealsSection from './components/AppealsSection';

const App: React.FC = () => {
  return (
    <>
      <Marquee />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HadithSection />
      <LiveCampaigns />
      <AppealsSection />
      <Footer />
      <QuickDonateBar />
    </>
  );
};

export default App;
