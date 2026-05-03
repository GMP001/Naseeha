import React from 'react';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import QuickDonateBar from './components/QuickDonateBar';

const App: React.FC = () => {
  return (
    <>
      <Marquee />
      <Navbar />
      <Hero />
      <Footer />
      <QuickDonateBar />
    </>
  );
};

export default App;
