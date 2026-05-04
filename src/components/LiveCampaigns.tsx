import React, { useState } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import qurbaniImg from '../assets/campaign-qurbani.png';
import pumpImg from '../assets/Naseeha-Foundation-Hand-Pump.png';
import madrasaImg from '../assets/Madrasatus-Naseeha.png';

// No imports needed - use direct paths from public folder
const campaigns = [
  {
    id: 1,
    title: "কুরবানি ২০২৬",
    //tag: "কুরবানি • যিলহজ্জ ১৪৪৭",
    image: qurbaniImg,
    description: "ঈদুল আজহায় পবিত্র কুরবানি সম্পন্ন করুন। প্রতিটি পশু বাংলাদেশে সোর্স করে দরিদ্র পরিবারের কাছে পৌঁছে দেওয়া হয়।",
    amount: "ছোট পশু ১২,০০০ টাকা | বড় পশু ৮০,০০০ টাকা",
  },
  {
    id: 2,
    title: "হ্যান্ড পাম্প প্রকল্প",  // ← Fixed
    //tag: "পানি • ২০২৬",
    image: pumpImg,
    description: "প্রতি ২৫,০০০ টাকায় একটি সম্পূর্ণ হ্যান্ড পাম্প তৈরি করা হয়, যা প্রায় ৪০ টি পরিবারকে বিশুদ্ধ পানি সরবরাহ করে।",  // ← Fixed
    amount: "একটি হ্যান্ড পাম্প = ২৫,০০০ টাকা",  // ← Fixed
  },
  {
    id: 3,
    title: "মাদরাসাতুস নাসীহা",
    //tag: "মাদরাসা প্রকল্প",
    image: madrasaImg,
    description: "মাদরাসা সম্প্রসারণ প্রকল্প। শিক্ষা সম্প্রদায় উন্নয়নের জন্য একটি সমৃদ্ধ কেন্দ্র গড়ে তোলা হচ্ছে।",
    amount: "মোট প্রকল্প মূল্য: ৩ কোটি টাকা",
  },
];

const LiveCampaigns: React.FC = () => {
  
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const next = () => setCurrentIndex((prev) => (prev + 1) % campaigns.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length);

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const campaign = campaigns[currentIndex];

  return (
    <section style={{ padding: '80px 60px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '30px', color: '#2f8277', fontWeight: 700, marginBottom: '12px' }}>
            চলমান ক্যাম্পেইন
          </h2>
          <p style={{ fontSize: '18px', color: '#475569' }}>
            আমাদের গুরুত্বপূর্ণ উদ্যোগগুলোতে সাহায্য করুন
          </p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2f8277';
              const icon = e.currentTarget.querySelector('span');
              if (icon) icon.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              const icon = e.currentTarget.querySelector('span');
              if (icon) icon.style.color = '#2f8277';
            }}
          >
            <LeftOutlined style={{ fontSize: '20px', color: '#2f8277', transition: 'color 0.3s ease' }} />
          </button>

          <div style={{ display: 'flex', minHeight: '520px' }}>
            <div style={{ flex: '1', position: 'relative' }}>
              {!imageErrors[currentIndex] ? (
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={() => handleImageError(campaign.id)}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#e2e8f0',
                  color: '#64748b',
                  fontSize: '16px'
                }}>
                  Image not found
                </div>
              )}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'white',
                padding: '6px 16px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                {/* {campaign.tag} */}
              </div>
            </div>

            <div style={{ flex: '1', padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '32px', color: '#2f8277', marginBottom: '16px' }}>
                {campaign.title}
              </h3>

              <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#334155', marginBottom: '24px' }}>
                {campaign.description}
              </p>

              <p style={{ fontSize: '17px', fontWeight: 600, color: '#2f8277', marginBottom: '40px' }}>
                {campaign.amount}
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Button
                  type="primary"
                  size="large"
                  style={{ borderRadius: '50px', padding: '0 32px', height: '52px', fontSize: '17px', backgroundColor: '#2f8277' }}
                >
                  অনুদান দিন →
                </Button>
                <Button
                  onClick={() => navigate(`/campaign/${campaign.id}`)}
                  size="large"
                  style={{ borderRadius: '50px', padding: '0 32px', height: '52px', fontSize: '17px', borderColor: '#2f8277', color: '#2f8277' }}
                >
                  বিস্তারিত দেখুন
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2f8277';
              const icon = e.currentTarget.querySelector('span');
              if (icon) icon.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              const icon = e.currentTarget.querySelector('span');
              if (icon) icon.style.color = '#2f8277';
            }}
          >
            <RightOutlined style={{ fontSize: '20px', color: '#2f8277', transition: 'color 0.3s ease' }} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            gap: '12px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '8px 16px',
            borderRadius: '30px',
            backdropFilter: 'blur(4px)',
          }}>
            {campaigns.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? '30px' : '10px',
                  height: '10px',
                  borderRadius: idx === currentIndex ? '20px' : '50%',
                  backgroundColor: idx === currentIndex ? '#4fd1c0' : 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCampaigns;
