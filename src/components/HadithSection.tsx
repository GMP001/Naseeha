// src/components/HadithSection.tsx
import React from 'react';
import bgPattern from '../assets/vecteezy-2.jpg'; 

const HadithSection: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      padding: '120px 60px',
      color: 'white',
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
        {/* Opening Quote */}
        <div style={{ fontSize: '80px', opacity: 0.3, marginBottom: '-30px' }}>
        “
        </div>

        <p style={{
          fontSize: '28px',
          lineHeight: '1.6',
          fontStyle: 'italic',
          marginBottom: '40px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          রাসূলুল্লাহ ﷺ বলেছেন: <br />
          “সে ব্যক্তি মুমিন নয়, যার পেট ভরে যায় অথচ তার পাশের প্রতিবেশী ক্ষুধার্ত থাকে।”
        </p>

        {/* Reference */}
        <p style={{
          fontSize: '18px',
          opacity: 0.9,
          fontWeight: 500
        }}>
          — ইবনে আব্বাস (রা.) থেকে বর্ণিত, আল-সুনান আল-কুবরা ১৯০৪৯
        </p>

        {/* Closing Quote */}
        <div style={{ 
          fontSize: '80px', 
          opacity: 0.3, 
          marginTop: '-20px',
          textAlign: 'right',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          ”
        </div>
      </div>
    </section>
  );
};

export default HadithSection;
