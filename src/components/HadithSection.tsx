// src/components/HadithSection.tsx
import React from 'react';
import bgPattern from '../assets/vecteezy-2.jpg'; 

const HadithSection: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '120px 60px',
      color: '#07f5d6',
      textAlign: 'center',
      backgroundImage: `url(${bgPattern})`, // ← Put your image here
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 1,
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{
          fontSize: '40px',
          lineHeight: '1.6',
          fontStyle: 'italic',
          marginBottom: '40px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <span style={{ fontSize: '40px', opacity: 0.5, verticalAlign: 'middle' }}>“</span>
          রাসূলুল্লাহ ﷺ বলেছেন: সে ব্যক্তি মুমিন নয়, যার পেট ভরে যায় অথচ তার পাশের প্রতিবেশী ক্ষুধার্ত থাকে।
          <span style={{ fontSize: '40px', opacity: 0.5, verticalAlign: 'middle' }}>”</span>
        </p>

        {/* Reference */}
        <p style={{
          fontSize: '20px',
          opacity: 0.9,
          fontStyle: 'italic',
          fontWeight: 500
        }}>
          — ইবনে আব্বাস (রা.) থেকে বর্ণিত, আল-সুনান আল-কুবরা ১৯০৪৯
        </p>
      </div>
    </section>
  );
};

export default HadithSection;
