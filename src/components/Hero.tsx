import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const heroImages = [
  '/src/assets/Charity-kid.png'
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent(next);
        setNext((next + 1) % heroImages.length);
        setFade(false);
      }, 800); // smooth cross-fade time
    }, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section style={{ 
      height: '95vh', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Current Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroImages[current]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: fade ? 0 : 1,
        transition: 'opacity 0.8s ease-in-out'
      }} />
      
      {/* Next Image (for cross-fade) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroImages[next]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out'
      }} />

      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 60px', 
        color: 'white',
        marginTop: '-80px'        // ← This moves the whole content block up by 100px
      }}>
        <div style={{ maxWidth: '620px', marginLeft: '-25px' }}>
          {/* Main Title - Split into two lines with different colors */}
          <h1 style={{ 
            fontSize: '45px', 
            lineHeight: '1.1', 
            fontWeight: 700, 
            marginBottom: '20px' 
          }}>
            <span style={{ color: 'white' }}>
              এক ঊম্মাহর পাঁশে দাঁড়াতে,
            </span>
            <br />
            <span style={{ 
              color: '#4fd1c0',
              display: 'block',
              marginTop: '12px'
              }}>
              নাসীহা ফাউন্ডেসান
            </span>
          </h1>

          {/* Subtitle - Split into two lines */}
          <p style={{ 
            fontSize: '18px', 
            marginTop: '40px',
            marginBottom: '40px', 
            opacity: 0.95,
            lineHeight: '1.4'
          }}>
            নাসীহা ফাউন্ডেসান বাংলাদেশে নিবন্ধিত একটি দাতব্য প্রতিষ্ঠান,<br />
            যা সারাদেশে সহায়তা প্রদান করে। নিবন্ধন নং- এস-১৪০৪৫/২০২৩।
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Learn More Button - unchanged */}
            <Button 
              size="large"
              style={{
                height: '50px',
                minWidth: '220px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '50px',
                padding: '0 40px',
                fontSize: '18px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#2f8277e7';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              আরও জানুন 
            </Button>

            {/* Donate Button - unchanged */}
            <Button 
              type="primary" 
              size="large" 
              icon={<HeartOutlined />}
              style={{
                height: '50px',
                minWidth: '220px',
                background: '#2f8277e7',
                borderRadius: '50px',
                padding: '0 40px',
                fontSize: '18px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              অনুদান দিন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
