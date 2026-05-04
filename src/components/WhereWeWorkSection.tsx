import React from 'react';
import { Button } from 'antd';

const WhereWeWorkSection: React.FC = () => {
  return (
    <section style={{ 
      padding: '100px 60px', 
      backgroundColor: '#2f8277',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '80px' }}>
        
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 700,
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            আমরা কোথায় কাজ করি
          </h2>

          <p style={{ 
            fontSize: '22px', 
            lineHeight: '1.6',
            marginBottom: '32px',
            opacity: 0.95
          }}>
            নাসীহা ফাউন্ডেশন বাংলাদেশের বিভিন্ন প্রত্যন্ত অঞ্চলে দরিদ্র, অসহায় ও অবহেলিত মানুষের জন্য কাজ করে।
          </p>

          <p style={{ 
            fontSize: '19px', 
            lineHeight: '1.8',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            আমাদের লক্ষ্য হলো শিক্ষা, স্বাস্থ্য, পানি, আশ্রয় এবং ধর্মীয় শিক্ষার মাধ্যমে মানুষের জীবনমান উন্নয়ন করা এবং তাদের আত্মনির্ভরশীল করে তোলা।
          </p>

          {/* Country Tag */}
          <div style={{ marginBottom: '40px' }}>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '12px 32px',
              borderRadius: '50px',
              fontSize: '19px',
              fontWeight: 600,
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              বাংলাদেশ
            </span>
          </div>

          <Button 
            size="large"
            style={{ 
              height: '62px', 
              fontSize: '19px', 
              padding: '0 50px',
              borderRadius: '50px',
              backgroundColor: 'white',
              color: '#2f8277',
              fontWeight: 600,
              border: 'none'
            }}
          >
            আমাদের প্রকল্পসমূহ দেখুন →
          </Button>
        </div>

        {/* Right Side - Globe */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '420px',
            height: '420px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '12px solid rgba(255,255,255,0.25)',
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800" 
              alt="Bangladesh & Globe"
              style={{
                width: '85%',
                height: '85%',
                objectFit: 'cover',
                borderRadius: '50%',
                filter: 'brightness(1.1)'
              }}
            />
            
            {/* Bangladesh Highlight Overlay (Optional) */}
            <div style={{
              position: 'absolute',
              bottom: '80px',
              right: '100px',
              background: '#fff',
              color: '#2f8277',
              padding: '8px 18px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}>
              বাংলাদেশ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWorkSection;
