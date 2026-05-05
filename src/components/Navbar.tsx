// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import DonationModal from './DonationModal';

const Navbar: React.FC = () => {
const [isModalOpen, setIsModalOpen] = useState(false);  
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar completely when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
          backgroundColor: 'rgba(47, 130, 119, 0.85)',   // Fixed 50% opacity
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          
          // Important fixes for consistent transparency
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)', // subtle separator
          background: 'rgba(47, 130, 119, 0.50) !important',
        }}
      >
      {/* Logo + Name */}
      <div
        style={{
          minWidth: '80px',
          marginRight: '75px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <img
          src="/naseeha-foundation-logo-white.png"
          alt="Naseeha Foundation"
          style={{ width: '50px', height: '50px' }}
        />
        <div
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            letterSpacing: '0.5px',
          }}
        >
          নাসীহা ফাউন্ডেসান
        </div>
      </div>

      {/* Islamic Date */}
      <div
        style={{
          minWidth: '200px',
          marginRight: '40px',
          color: 'white',
          fontWeight: '600',
          fontSize: '13px',
          borderLeft: '1px solid rgba(255,255,255,0.7)',
          paddingLeft: '15px',
        }}
      >
        ১৫ই যিলকদ ১৪৪৭ হিজরি
      </div>

      {/* Menu Items */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          flex: 1,
          color: 'white',
          fontWeight: '500',
          fontSize: '13px',
        }}
      >
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          হোম
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          আবেদন ▼
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          জাকাত
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          অনুদান সংগ্রহ
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          অনুষ্ঠান
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          যুক্ত হোন
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          পরিচিতি
        </a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          চাকরী
        </a>

        <Button
          type="primary"
          style={{
            background: 'white',
            color: '#2b8478e7',
            borderRadius: '50px',
            fontWeight: '700',
            //padding: '12px',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
          onClick={() => setIsModalOpen(true)}
        >
          অনুদান দিন ❤️
        </Button>
      </div>
      <DonationModal 
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </nav>
  );
};

export default Navbar;
