//E:/naseeha-foundation/naseeha-foundation/src/App.tsx

import React from 'react';
import { Routes, Route } from "react-router-dom";

import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickDonateBar from './components/QuickDonateBar';
import WhatWeDo from './components/WhatWeDo';
import HadithSection from './components/HadithSection';
import LiveCampaigns from './components/LiveCampaigns';
import AppealsSection from './components/AppealsSection';
import Footer from './components/Footer';

import CampaignDetails from './components/pages/CampaignDetails';
import AdminPanel from './components/pages/AdminPanel';
import AdminLogin from './components/pages/AdminLogin';
import ImpactSection from './components/ImpactSection';
import MadrasaProjectSection from './components/MadrasaProjectSection';
import WhereWeWorkSection from './components/WhereWeWorkSection';
import NewsletterSection from './components/NewsletterSection';
import DonationModal from './components/DonationModal';
import ImpactDetailPage from './components/ImpactDetailPage'; // Generic name for CMS compatibility

const Home = () => (
  <>
    <Marquee />
    <Navbar />
    <Hero />
    <WhatWeDo />
    <HadithSection />
    <LiveCampaigns />
    <AppealsSection />
    <ImpactSection />
    <MadrasaProjectSection />
    <WhereWeWorkSection />
    <NewsletterSection />
    <QuickDonateBar />
    <Footer />
  </>
);

const ProtectedAdmin = () => {
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const [showLogin, setShowLogin] = React.useState(!isAuthenticated);

  if (showLogin) {
    return <AdminLogin onLoginSuccess={() => setShowLogin(false)} />;
  }

  return <AdminPanel />;
};

const App: React.FC = () => {
  const [donationModalOpen, setDonationModalOpen] = React.useState(false);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaign/:id" element={<CampaignDetails />} />
      <Route path="/admin" element={<ProtectedAdmin />} />
      {/* Dynamic route for all appeal details - this will work with CMS */}
      <Route path="/appeal/:appealId" element={<ImpactDetailPage />} />
    </Routes>
    
    <DonationModal 
        open={donationModalOpen} 
        onClose={() => setDonationModalOpen(false)} 
      />

      <QuickDonateBar onDonateClick={() => setDonationModalOpen(true)} />
    </>
  );
};

export default App;
